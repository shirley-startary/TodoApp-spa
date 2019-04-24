import LI from "../components/ElementLI.js";
import Utils from "../../services/Utils.js";

const Active = {
  render: async () => {
    const tasks = Utils.getTask();
    return `
            <div>
                <h2> Active Task</h2>
                <ul>
                   ${tasks
                     .map(task => {
                       if (task.status == "Active") {
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
export default Active;
