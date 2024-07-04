function createSidebarComponent(containerAttribute) {
  // Find the container using the data attribute
  let container = document.querySelector(
    `[data-container="${containerAttribute}"]`
  );
  let defaultPage = container.getAttribute("data-page");

  // Define the HTML content for the sidebar
  let sidebarHTML = `
        <div class="group-container">
            <div class="group__sidebar">
                <a href="../index.html"><div class="sidebar__item">Home</div></a>
                <a href="../pages/list.html"><div class="sidebar__item">List</div></a>
                <a href="../pages/view&delete.html"><div class="sidebar__item">View & Delete</div></a>
                <a href="../pages/create.html"><div class="sidebar__item">Create</div></a>
                <a href="../pages/edit.html"><div class="sidebar__item">Edit</div></a>
            </div>
        </div>
    `;

  // Insert the HTML content into the container
  container.innerHTML = sidebarHTML;

  // Add event listeners to the sidebar items
  let sidebarItems = container.getElementsByClassName("sidebar__item");
  for (let i = 0; i < sidebarItems.length; i++) {
    // Set the default active item based on data-page attribute
    if (sidebarItems[i].textContent === defaultPage) {
      sidebarItems[i].style.backgroundColor = "var(--primary-color)";
      sidebarItems[i].style.color = "white";
    }

    sidebarItems[i].addEventListener("click", function () {
      // Remove the var(--primary-color) background from all sidebar items
      for (let j = 0; j < sidebarItems.length; j++) {
        sidebarItems[j].style.backgroundColor = "";
      }
      // Set the var(--primary-color) background for the clicked sidebar item
      this.style.backgroundColor = "var(--primary-color)";
    });
  }
}

// Call the function to create and append the sidebar component
createSidebarComponent("sidebar");
