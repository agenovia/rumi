const createNotesPage = () => /*html*/ `
    <div class="container">
      <div class="menu-container">
        <button hx-get="/notes" class="menu-button" role="tab" aria-selected="true" aria-controls="tab-content">Notes</button>
        <button hx-get="/summarize" class="menu-button" role="tab" aria-selected="false" aria-controls="tab-content">Summarize</button>
        <button hx-get="/recall" class="menu-button" role="tab" aria-selected="false" aria-controls="tab-content">Recall</button>
      </div>
      <div class="note-container">
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
