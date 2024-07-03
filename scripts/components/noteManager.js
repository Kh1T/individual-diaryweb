import { renderNotes } from "../components/uiManager.js";

// Function to scroll to the top of the page
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

let notes = [];

// Load note data from localStorage on page load
/**
 * Retrieve stored notes from localStorage.
 * If notes are found, parse the JSON string into an array.
 * If no notes are found, initialize an empty array.
 */
export function loadNotes() {
    const storedNotes = localStorage.getItem("notes");
    notes = storedNotes ? JSON.parse(storedNotes) : [];
}

// Get all notes
export function getNotes() {
    return notes;
}

// Add a new note
export function addNote(note) {
    notes.push(note);
    saveNotes();
    renderNotes();
}

// Delete a note
export function deleteNote(noteId) {
  // Find the index of the note to be deleted
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex > -1) {
    // Remove the note from the array
    notes.splice(noteIndex, 1);
    // Save the updated notes to localStorage
    saveNotes();
  }
}

// Edit a note
export function editNote(noteId, updatedNote) {
    const noteIndex = notes.findIndex(note => note.id === noteId);
    if (noteIndex !== -1) {
        notes[noteIndex] = updatedNote;
        saveNotes();
        renderNotes();
    }
}

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

loadNotes();

