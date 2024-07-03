const page = document.body.getAttribute("data-page");


// Function to retrieve noteId from query parameter
function getNoteIdFromQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id')); // Ensure noteId is parsed as integer
}

// Event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const noteId = getNoteIdFromQueryParam();
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  renderNoteDetails(notes, noteId);
});

// Function to render note details based on noteId
function renderNoteDetails(notes, noteId) {
  // Find the note in notes array with the matching noteId
  const note = notes.find(n => n.id === noteId);

  if (note) {
    // Display note details
    const noteDetailsElement = document.getElementById("note-details");
    noteDetailsElement.innerHTML = `
      <h2>Title: ${note.title}</h2>
      <p>Date: ${note.date}</p>
      <p>Description: ${note.description}</p>
      <button onclick="deleteNote()">Delete Note</button>
    `;
  } else {
    console.error('Note not found');
  }
}

// Function to delete note by ID from localStorage and redirect to index.html
function deleteNote() {
  const noteId = getNoteIdFromQueryParam();
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
  // Find the index of the note with the specified id
  const index = notes.findIndex(note => note.id === noteId);
  
  if (index !== -1) {
    // Remove the note from the array at the found index
    notes.splice(index, 1);
    
    // Update localStorage with the modified notes array
    localStorage.setItem("notes", JSON.stringify(notes));
    
    // Redirect to index.html or any other appropriate page
    window.location.href = '../index.html';
  } else {
    console.error(`Note with ID ${noteId} not found.`);
  }
}
