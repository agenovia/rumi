const createRecapPage = () => {
  // additionaly logic goes here

  return /*html*/ `
  <div class="container">
        <div class="menu-container">
          <button
            class="menu-button"
            hx-trigger="click"
            hx-get="http://localhost:42000/record"
            hx-target="#tab-content"
            hx-swap="innerHTML"
          >
            Record
          </button>
          <button
            class="selected"
          >
            Recap
          </button>
          <button
            class="menu-button"
            hx-trigger="click"
            hx-get="http://localhost:42000/recall"
            hx-target="#tab-content"
            hx-swap="innerHTML"
          >
            Recall
          </button>
        </div>
      <div class="content">
          <div>Hello</div>
      </div>
  </div>
  `;
};

export default createRecapPage;