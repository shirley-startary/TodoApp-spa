const ElementLI = {
  render: task => {
    if (task.status == "Active") {
      return `<li>
                  <label>
                      <input type="checkbox"  id="${task.id}"/>
                      <span>${task.value}</span>
                      <span> - ${task.status}</span>
                  </label>
                </li>`;
    } else {
      return `<li>
                <label>
                    <input type="checkbox"  id="${task.id}" checked/>
                    <span>${task.value}</span>
                    <span> - ${task.status}</span>
                </label>
              </li>`;
    }
  }
};
export default ElementLI;
