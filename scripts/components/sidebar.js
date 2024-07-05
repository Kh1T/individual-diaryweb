function createSidebarComponent(containerAttribute) {
  // Find the container using the data attribute
  let container = document.querySelector(
    `[data-container="${containerAttribute}"]`
  );
  let defaultPage = container.getAttribute("data-page");

  // Define the HTML content for the sidebar
  let sidebarHTML = `
        <div class="group-container sidebar-hidden">
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

        document.addEventListener("DOMContentLoaded", function () {
          const menuIcon = document.querySelector(".menu");
          const sidebar = document.querySelector(".group__sidebar");
          const mediaQuery = window.matchMedia("(max-width: 767px)");

          function toggleSidebar() {
            // sidebar.classList.toggle("sidebar-visible");
            if (mediaQuery.matches) {
              sidebar.classList.toggle("sidebar-visible");
              if (sidebar.classList.contains("sidebar-visible")) {
                localStorage.setItem("sidebarVisible", "true");
              } else {
                localStorage.setItem("sidebarVisible", "false");
              }
            }
          }

           function restoreSidebarState() {
             const sidebarVisible = localStorage.getItem("sidebarVisible");
             if (mediaQuery.matches) {
               // On small screens, hide the sidebar by default
               sidebar.classList.remove("sidebar-visible");
               if (sidebarVisible === "true") {
                 sidebar.classList.add("sidebar-visible");
               }
             } else {
               // On larger screens, ensure the sidebar is always visible
               sidebar.classList.remove("sidebar-visible");
             }
           }

           function closeSidebarOnItemClick(event) {
             if (
               mediaQuery.matches &&
               event.target !== menuIcon &&
               !sidebar.contains(event.target)
             ) {
               // Close sidebar if clicked outside menu icon or sidebar itself
               sidebar.classList.remove("sidebar-visible");
               localStorage.setItem("sidebarVisible", "false");
             }
           }

          menuIcon.addEventListener("click", toggleSidebar);
          restoreSidebarState();

          document.addEventListener("click", closeSidebarOnItemClick);

        });