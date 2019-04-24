const Form = {
  render: () => {
    return `
    <article class="container">
      <h5>Agrega una tarea a tu lista</h5>
      <form>
        <div class="row">
          <div class="input-field col s12 m9">
            <input id="input-text" type="text" required>
            <label for="input-text">Tarea</label>
          </div>
          <div class="col s2 m3">
            <button id="boton-agregar" class="btn waves-effect red" type="submit" name="action">Agregar
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </article> `;
  },
  after_render: () => {}
};
export default Form;
