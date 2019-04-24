const Utils = {
  pageRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || "/";
    const separador = url.split("/");
    const request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = separador[1];
    request.verb = separador[2];
    request.id = separador[3];
    return request;
  },
  getTask: () => {
    const tasks = JSON.parse(localStorage.getItem("TaskList"));
    return tasks;
  }
};

export default Utils;
