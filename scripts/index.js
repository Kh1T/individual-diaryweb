
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

const notes = getNotes().reverse(); 

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
    location.href = "../index.html"
});

// Event delegation for handling delete and edit button clicks
noteContainer.addEventListener("click", (e) => {
    const target = e.target;
    const noteId = parseInt(target.dataset.id);

    if (target.classList.contains("note__delete")) {
      if (window.confirm("Are you sure you want to delete this note?")) {
        deleteNote(noteId);
        renderNotes();
        location.reload();
      }
    } else if (target.classList.contains("note__edit")) {
      const note = getNotes().find((note) => note.id === noteId);
      titleInput.value = note.title;
      dateInput.value = note.date;
      descriptionInput.value = note.description;
      editMode = true;
      editNoteId = noteId;

      createNote.classList.remove("hidden");
    } else if (target.classList.contains("note__info")) {
      showModal(noteId);
    }
});


const body = document.querySelector("body");
const page = body.getAttribute("data-page");

function changeStyle() {

    const createNote = document.getElementById("create-note");
    const noteWrapper = document.querySelectorAll(".note__wrapper")

    if (page !== "Home") {
        createNote.style.display = "none";
    } else {
        createNote.style.display = ""; // Ensure it's displayed on the Home page
    }

    
}

function updateBreadcrumb() {
  const breadcrumb = document.querySelector(".textnav-container p");

  if (breadcrumb) {
    let breadcrumbText = `<a href="../index.html">Home</a>`; // Default text with a link to Home

    // Update breadcrumb text based on the page type
    const body = document.querySelector("body");
    const page = body.getAttribute("data-page");

    if (page && page !== "Home") {
      breadcrumbText += ` > ${page}`;
    }
    // Set the breadcrumb text
    breadcrumb.innerHTML = breadcrumbText;
  } 
}


changeStyle();
updateBreadcrumb();


/**
 * Function to show modal with customizable buttons and actions
 * @param {number} noteId - The ID of the note associated with the modal action.
 */
function showModal(noteId) {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  
  // Get buttons from modal
  const btnYes = document.getElementById("btnYes");
  const btnNo = document.getElementById("btnNo");

  // Remove existing event listeners to avoid multiple triggers
  btnYes.removeEventListener("click", handleYesClick);
  btnNo.removeEventListener("click", handleNoClick);

  // Define click handlers
  function handleYesClick() {
    // Redirect to View & Delete page with noteId as query parameter
    window.location.href = `../pages/view&delete.html?id=${noteId}`;
  }


  function handleNoClick() {
    // Redirect to Edit page with noteId as query parameter
    window.location.href = `../pages/edit.html?id=${noteId}`;
    closeModal(); // Close the modal after redirecting
  }

  // Add event listeners
  btnYes.addEventListener("click", handleYesClick);
  btnNo.addEventListener("click", handleNoClick);

  // Function to close modal
  function closeModal() {
    modal.style.display = "none";
    btnYes.removeEventListener("click", handleYesClick);
    btnNo.removeEventListener("click", handleNoClick);
  }

  // Close modal when clicking outside of modal content
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}

