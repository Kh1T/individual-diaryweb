// Function to retrieve noteId from query parameter
function getNoteIdFromQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id")); // Ensure noteId is parsed as integer
}

// Event listener when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const noteId = getNoteIdFromQueryParam();
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Find the note in notes array with the matching noteId
  const note = notes.find((n) => n.id === noteId);

  if (note) {
    // Populate form fields with existing note details
    document.getElementById("title").value = note.title;
    document.getElementById("date").value = note.date;
    document.getElementById("description").value = note.description;
  } else {
    console.error("Note not found");
  }
});

// Function to update existing note details
function updateNote() {
  const noteId = getNoteIdFromQueryParam();
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Find the index of the note with the specified id
  const index = notes.findIndex((note) => note.id === noteId);

  if (index !== -1) {
    // Update note details
    notes[index] = {
      id: noteId,
      title: document.getElementById("title").value,
      date: document.getElementById("date").value,
      description: document.getElementById("description").value,
    };

    // Update localStorage with the modified notes array
    localStorage.setItem("notes", JSON.stringify(notes));

    // Redirect to index.html or any other appropriate page after updating
    window.location.href = "../index.html";
  } else {
    console.error(`Note with ID ${noteId} not found.`);
  }
}
