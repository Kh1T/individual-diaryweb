// create.js

// Function to handle form submission
document
  .getElementById("note-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    // Create a new note object (for example, using Date.now() as ID)
    const newNote = {
      id: Date.now(), // Unique identifier for the note
      title: title,
      date: date,
      description: description,
    };

    // Add the new note to localStorage or your notes array
    addNote(newNote); // Assume addNote is a function in noteManager.js or script.js

    // Optional: Redirect to home page or list page after adding note
    window.location.href = "../index.html"; // Redirect to home page after adding

    // You can also reset the form here if needed
    // document.getElementById('note-form').reset();
  });

// Function to add a new note to notes (assuming noteManager.js or script.js)
function addNote(note) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}
