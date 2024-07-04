

        // Function to retrieve noteId from query parameter
        function getNoteIdFromQueryParam() {
            const urlParams = new URLSearchParams(window.location.search);
            return parseInt(urlParams.get('id')); // Ensure noteId is parsed as integer
        }

        // Event listener when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            const noteId = getNoteIdFromQueryParam();
            const notes = JSON.parse(localStorage.getItem("notes")) || [];

            renderEditNoteForm(notes, noteId);
        });

        // Function to render edit note form based on noteId
        function renderEditNoteForm(notes, noteId) {
            

            // Find the note in notes array with the matching noteId
            const note = notes.find(n => n.id === noteId);

            

            if (note) {
              // Display note details in form
              const formContainer = document.getElementById("edit-container");
              formContainer.innerHTML = `
                    
                    <form id="edit-form">
                        <input type="text" id="edit-title" value="${note.title}" required>
                        <input type="date" id="edit-date" value="${note.date}" required>
                        <textarea id="edit-description" required>${note.description}</textarea>
                        <div>
                          <input type="submit" value="Save Changes">
                          <button type="button" id = "cancel-btn">Cancel</button>
                        </div>
                    </form>
                `;

              // Event listener for form submission to save changes
              document
.getElementById("edit-form")
                .addEventListener("submit", function (event) {
                  event.preventDefault();
                  saveNoteChanges(noteId);
                });

              // Event listener for Cancel button to go back to index.html
              document
                .getElementById("cancel-btn")
                .addEventListener("click", function () {
                  window.location.href = "../index.html";
                });
            }
        }

        // Function to save note changes
        function saveNoteChanges(noteId) {
            const title = document.getElementById("edit-title").value;
            const date = document.getElementById("edit-date").value;
            const description = document.getElementById("edit-description").value;

            let notes = JSON.parse(localStorage.getItem("notes")) || [];
            const noteIndex = notes.findIndex(n => n.id === noteId);

            if (noteIndex !== -1) {
                notes[noteIndex].title = title;
                notes[noteIndex].date = date;
                notes[noteIndex].description = description;

                localStorage.setItem("notes", JSON.stringify(notes));
                
                window.location.href = '../index.html';
            } 
        }

