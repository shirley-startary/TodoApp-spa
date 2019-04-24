import All from "./views/pages/All.js";
import Active from "./views/pages/Active.js";
import Completed from "./views/pages/Completed.js";
import Error404 from "./views/pages/Error404.js";

import Footer from "./views/components/Footer.js";
import Navbar from "./views/components/Navbar.js";
import Form from "./views/components/Form.js";

import Utils from "./services/Utils.js";

const routes = {
  "/": All,
  "/active": Active,
  "/completed": Completed
};

const routerApp = async () => {
  const header = null || document.getElementById("header-container");
  const content = null || document.getElementById("page-container");
  const footer = null || document.getElementById("footer-container");
  const form = null || document.getElementById("form-container");

  header.innerHTML = await Navbar.render();
  footer.innerHTML = await Footer.render();
  form.innerHTML = await Form.render();

  const request = Utils.pageRequestURL();

  let parsedURL =
    (request.resource ? `/${request.resource}` : "/") +
    (request.verb ? "/" + request.verb : "") +
    (request.id ? "/:id" : "");

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();

  const botonColapse = document.querySelectorAll(".sidenav");
  M.Sidenav.init(botonColapse);

  const botonAgregar = document.getElementById("boton-agregar");
  botonAgregar.addEventListener("click", addTask);

  const arrayLi = Array.from(
    document.querySelectorAll("#page-container ul>li")
  );
  // console.log(li);
  arrayLi.forEach(item => {
    item.addEventListener("click", checked);
  });
};

const addTask = e => {
  e.preventDefault();
  const inputText = document.getElementById("input-text");

  const arrayTask = [...JSON.parse(localStorage.getItem("TaskList"))];
  const objTask = {
    id: `${new Date().getTime()}`,
    value: inputText.value,
    status: "Active"
  };

  arrayTask.push(objTask);
  console.log(arrayTask);

  localStorage.setItem("TaskList", JSON.stringify(arrayTask));
  routerApp();
};

const checked = e => {
  let arrayTask = Utils.getTask();

  if (e.target.tagName == "INPUT") {
    if (e.target.checked) {
      arrayTask = arrayTask.map(item => {
        if (item.id == e.target.id) {
          item.status = "Completed";
        }
        return item;
      });
    } else {
      arrayTask = arrayTask.map(item => {
        if (item.id == e.target.id) {
          return (item.status = "Active");
        }
      });
    }
  }
  localStorage.setItem("TaskList", JSON.stringify(arrayTask));
  routerApp();
};

window.addEventListener("hashchange", routerApp);

window.addEventListener("load", routerApp);
