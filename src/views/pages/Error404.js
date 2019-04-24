const Error404 = {
  render: async () => {
    return `
            <div>
                <h2>No existe esta pagina "Error404"</h2>
            </div>
        `;
  },
  after_render: () => {}
};
export default Error404;
