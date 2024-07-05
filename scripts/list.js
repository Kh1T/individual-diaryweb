// js/list.js
import { getNotes } from "./components/noteManager.js";


/**
 * @constant {HTMLElement} noteContainer - The container element where the notes will be rendered.
 */
const noteContainer = document.querySelector("#note-container");

/**
 * Renders the list of notes in the UI.
 * It retrieves the notes, reverses the order to show the latest notes first,
 * truncates their descriptions, and appends them to the note container.
 */
function renderNotesList() {
  noteContainer.innerHTML = "";
  const notes = getNotes().reverse(); // Show latest notes first
  notes.forEach((note) => {
    const truncatedDescription = truncateDescription(note.description, 60);
    noteContainer.innerHTML += `
        <div class="note__wrapper">
            <div class="note__info">
                <h2 class="note__title">${note.title}</h2>
                <p class="note__date">${note.date}</p>
                <p class="note__description">${truncatedDescription}</p>
            </div>
        </div>
    `;
  });
}

/**
 * Truncates a given description to a specified word limit.
 *
 * @param {string} description - The description to truncate.
 * @param {number} wordLimit - The maximum number of words to include in the truncated description.
 * @returns {string} The truncated description followed by an ellipsis if it exceeds the word limit.
 */
function truncateDescription(description, wordLimit) {
  const words = description.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : description;
}

// Call renderNotesList to render the notes when the script is loaded
renderNotesList();
