import LI from "../components/ElementLI.js";
import Utils from "../../services/Utils.js";

const Completed = {
  render: async () => {
    const tasks = Utils.getTask();
    return `
            <div>
                <h2> Completed Task</h2>
                <ul>
                   ${tasks
                     .map(task => {
                       if (task.status == "Completed") {
                         return LI.render(task);
                       }
                       return;
                     })
                     .join("\n ")}
                
                </ul>

            </div>
        `;
  },
  after_render: () => {}
};
export default Completed;
