import LI from "../components/ElementLI.js";
import Utils from "../../services/Utils.js";

const All = {
  render: async () => {
    const tasks = Utils.getTask();
    return `
            <div>
                <h2> All Task</h2>
                <ul>
                   ${tasks
                     .map(task => {
                       return LI.render(task);
                     })
                     .join("\n ")}
                
                </ul>

            </div>
        `;
  },
  after_render: () => {}
};
export default All;
