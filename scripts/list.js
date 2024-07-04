// js/list.js
import { getNotes } from "./components/noteManager.js";

const noteContainer = document.querySelector("#note-container");


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

function truncateDescription(description, wordLimit) {
  const words = description.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : description;
}

// Call renderNotesList to render the notes when the script is loaded
renderNotesList();
