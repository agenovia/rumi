const createNotesPage = () => /*html*/ `
<div class="container">
      <div class="menu-container">
        <button
          class="selected"
        >
          Notes
        </button>
        <button
          class="menu-button"
          hx-trigger="click"
          hx-get="http://localhost:42000/summarize"
          hx-target="#tab-content"
          hx-swap="innerHTML"
        >
          Summarize
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
        <textarea class="notes" placeholder="Add note" required></textarea>
        <select class="tags">
          <option selected="selected">
            <p>Add Tag</p>
          </option>
        </select>
    </div>
</div>
`;

export default createNotesPage;
