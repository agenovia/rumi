const createNotesPage = () => /*html*/ `
      <div class="content">
        <textarea class="notes" placeholder="Add note" required></textarea>
        <select class="tags">
          <option selected="selected">
            <p>Add Tag</p>
          </option>
        </select>
    </div>
`;

export default createNotesPage;
