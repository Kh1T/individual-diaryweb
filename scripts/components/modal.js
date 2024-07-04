/**
 * Function to show modal with customizable buttons and actions
 * @param {number} noteId - The ID of the note associated with the modal action.
 */

export function showModal(noteId) {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";

  // Get buttons from modal
  const btnView = document.getElementById("btnView");
  const btnEdit = document.getElementById("btnEdit");

  // Remove existing event listeners to avoid multiple triggers
  btnView.removeEventListener("click", handleViewClick);
  btnEdit.removeEventListener("click", handleEditClick);

  // Define click handlers
  function handleViewClick() {
    // Redirect to View & Delete page with noteId as query parameter
    window.location.href = `../pages/view&delete.html?id=${noteId}`;
  }

  function handleEditClick() {
    // Redirect to Edit page with noteId as query parameter
    window.location.href = `../pages/edit.html?id=${noteId}`;
    closeModal(); // Close the modal after redirecting
  }

  // Add event listeners
  btnView.addEventListener("click", handleViewClick);
  btnEdit.addEventListener("click", handleEditClick);

  // Function to close modal
  function closeModal() {
    modal.style.display = "none";
    btnView.removeEventListener("click", handleViewClick);
    btnEdit.removeEventListener("click", handleEditClick);
  }

  // Close modal when clicking outside of modal content
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}
