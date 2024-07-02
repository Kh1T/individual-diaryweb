
import { renderNotes } from './components/uiManager.js';
import { addNote, deleteNote, editNote, loadNotes, getNotes } from './components/noteManager.js';

/**
 * @type {HTMLElement} noteContainer - The container element for the notes.
 * @type {HTMLFormElement} noteForm - The form element for creating/editing notes.
 * @type {HTMLInputElement} titleInput - The input element for the note title.
 * @type {HTMLInputElement} dateInput - The input element for the note date.
 * @type {HTMLInputElement} descriptionInput - The input element for the note description.
 * @type {HTMLElement} createNote - The container element for the note form.
 * @type {HTMLButtonElement} addButton - The button element to toggle the note form.
 */
const noteForm = document.querySelector("#note-form");
const titleInput = noteForm.querySelector(".note__title");
const dateInput = noteForm.querySelector(".note__date");
const descriptionInput = noteForm.querySelector(".note__description");
const createNote = document.querySelector("#create-note");
const addButton = document.querySelector("#add-button");
const noteContainer = document.querySelector("#note-container");

// Load note data from localStorage on page load
/**
 * Retrieve stored notes from localStorage.
 * If notes are found, parse the JSON string into an array.
 * If no notes are found, initialize an empty array.
 */
let editMode = false;
let editNoteId = null;

// Load notes and render on page load
loadNotes();
renderNotes();

// Event listener for form submission to add or edit a note
noteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (editMode) {
        // Edit existing note
        editNote(editNoteId, {
            id: editNoteId,
            title: titleInput.value,
            date: dateInput.value,
            description: descriptionInput.value
        });
        editMode = false;
        editNoteId = null;
    } else {
        // Add new note
        addNote({
            id: Date.now(),
            title: titleInput.value,
            date: dateInput.value,
            description: descriptionInput.value
        });
    }

    renderNotes();
    noteForm.reset();
});

// Event delegation for handling delete and edit button clicks
noteContainer.addEventListener("click", (e) => {
    const target = e.target;
    const noteId = parseInt(target.dataset.id);

    if (target.classList.contains("note__delete")) {
        if (window.confirm("Are you sure you want to delete this note?")) {
            deleteNote(noteId);
            renderNotes();
        }
    } else if (target.classList.contains("note__edit")) {
        const note = getNotes().find(note => note.id === noteId);
        titleInput.value = note.title;
        dateInput.value = note.date;
        descriptionInput.value = note.description;
        editMode = true;
        editNoteId = noteId;

        createNote.classList.remove("hidden");
        addButton.innerHTML = "Close";
    }
});


const body = document.querySelector("body");
const page = body.getAttribute("data-page");

function changeStyle() {

    const createNote = document.getElementById("create-note");
    const noteWrapper = document.querySelectorAll(".note__wrapper")

    console.log(noteWrapper)

    if (page !== "Home") {
        createNote.style.display = "none";
    } else {
        createNote.style.display = ""; // Ensure it's displayed on the Home page
    }

    
}

function updateBreadcrumb() {
  const breadcrumb = document.querySelector(".textnav-container p");

  let breadcrumbText = `<a href="../index.html">Home</a>`; // Default text with a link to Home

  // Update breadcrumb text based on the page type
  if (page && page !== "Home") {
    breadcrumbText += ` > ${page}`;
  }

  // Set the breadcrumb text
  breadcrumb.innerHTML = breadcrumbText;
}


changeStyle();
updateBreadcrumb();

 const infoButton = document.getElementById("info");
 const infoText = document.querySelector(".info__text");

 infoButton.addEventListener("click", function () {
   if (infoText.style.display === "none") {
     infoText.style.display = "block"; // Show infoText
   } else {
     infoText.style.display = "none"; // Hide infoText
   }
 });