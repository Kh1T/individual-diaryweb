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
}

// Delete a note
export function deleteNote(noteId) {
    notes = notes.filter(note => note.id !== noteId);
    saveNotes();
}

// Edit a note
export function editNote(noteId, updatedNote) {
    const noteIndex = notes.findIndex(note => note.id === noteId);
    if (noteIndex !== -1) {
        notes[noteIndex] = updatedNote;
        saveNotes();
    }
}

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Initialize notes from localStorage when the script is loaded
loadNotes();

