const Footer = {
  render: async () => {
    let view = `
            <div class="content has-text-centered">
                <p>
                    Este es mi footer.
                </p>
            </div>
        `;
    return view;
  },
  after_render: async () => {}
};

export default Footer;
