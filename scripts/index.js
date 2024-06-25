const noteContainer = document.querySelector("#note-container");
const noteForm = document.querySelector("#note-form");
const titleInput = noteForm.querySelector(".note__title");
const dateInput = noteForm.querySelector(".note__date");
const descriptionInput = noteForm.querySelector(".note__description");
const createNote = document.querySelector("#create-note");
const addButton = document.querySelector("#add-button");

let notes = [];
let editMode = false;
let editNoteId = null;

function truncateDescription(description, wordLimit) {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
}

// Load note data from localStorage on page load
const storedNotes = localStorage.getItem("notes");
notes = storedNotes ? JSON.parse(storedNotes) : [];

// Function to render notes in the UI
function renderNotes() {
  noteContainer.innerHTML = "";
  const sortedNotes = [...notes].reverse(); // Create a reversed copy of the notes array
  sortedNotes.forEach(function (note) {
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
}

// Render existing notes on page load
renderNotes();

addButton.addEventListener("click", (e) => {
  createNote.classList.toggle("hidden");
  addButton.innerHTML = createNote.classList.contains("hidden")
    ? "Add"
    : "Close";
});

// Event listener for form submission to add or edit a note
noteForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  if (editMode) {
    // Edit existing note
    const noteIndex = notes.findIndex((note) => note.id === editNoteId);
    notes[noteIndex].title = titleInput.value;
    notes[noteIndex].date = dateInput.value;
    notes[noteIndex].description = descriptionInput.value;
    editMode = false;
    editNoteId = null;
  } else {
    // Add new note
    const newNote = {
      id: Date.now(), // Generate a unique ID for the new note
      title: titleInput.value,
      date: dateInput.value,
      description: descriptionInput.value,
    };
    notes.push(newNote);
  }

  localStorage.setItem("notes", JSON.stringify(notes)); // Store updated notes array in localStorage
  renderNotes(); // Update UI with the new or edited note
  noteForm.reset(); // Clear form inputs
});

// Event delegation for handling delete and edit button clicks
noteContainer.addEventListener("click", (e) => {
  const target = e.target;
  const action = target.classList.contains("note__delete")
    ? "delete"
    : target.classList.contains("note__edit")
    ? "edit"
    : null;
  const noteId = parseInt(target.dataset.id);

  if (action === "delete") {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmed) {
      notes = notes.filter((note) => note.id !== noteId);
      localStorage.setItem("notes", JSON.stringify(notes)); // Store updated notes array in localStorage
      renderNotes(); // Update UI after deletion
    }
  } else if (action === "edit") {
    const note = notes.find((note) => note.id === noteId);
    titleInput.value = note.title;
    dateInput.value = note.date;
    descriptionInput.value = note.description;
    editMode = true;
    editNoteId = noteId;

    createNote.classList.remove("hidden");
    addButton.innerHTML = "Close";
  }
});

// Set the current date if the date input is empty
function setCurrentDateIfEmpty() {
  if (!dateInput.value) {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    dateInput.value = dateString;
  }
}
