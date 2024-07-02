// uiManager.js

import { getNotes , scrollToTop } from "./noteManager.js";

const noteContainer = document.querySelector("#note-container");

/**
 * Function to render notes in the UI.
 */
export function renderNotes() {
  const noteContainer = document.querySelector("#note-container");
  noteContainer.innerHTML = "";
  const notes = getNotes().reverse(); // Reverse to show latest notes first
  notes.forEach((note) => {
    const truncatedDescription = truncateDescription(note.description, 60);
    noteContainer.innerHTML += `
            <div class="note__wrapper">
                <div class="note__info">
                    <div class="container-notebtn">
                        <button class="note__delete" data-id="${note.id}">Delete</button>
                    </div>
                    <h2 class="note__title">${note.title}</h2>
                    <p class="note__date">${note.date}</p>
                    <p class="note__description">${truncatedDescription}</p>
                    <div class="container-notebtn">
                        <button class="note__edit" data-id="${note.id}">Edit</button>
                    </div>
                </div>
            </div>
        `;
  });
  // Add event listeners to the edit buttons
  document.querySelectorAll(".note__edit").forEach(function (button) {
    button.addEventListener("click", function () {
      scrollToTop(); // Call scrollToTop function when edit button is clicked
      // Additional logic for editing can be added here
    });
  });
}

/**
 * Function to truncate the description to a specified word limit.
 *
 * @param {string} description - The full description of the note.
 * @param {number} wordLimit - The maximum number of words allowed in the truncated description.
 * @returns {string} - The truncated description with an ellipsis if it exceeds the word limit.
 */
function truncateDescription(description, wordLimit) {
  const words = description.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : description;
}
