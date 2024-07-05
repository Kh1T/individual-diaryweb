# Note Diary Web Application

The Note Web Project is a web application built entirely with vanilla JavaScript, HTML, and CSS. It allows users to create, read, update, and delete notes. The project focuses on providing a simple yet effective interface for managing personal notes.Moreover improve the developer undestanding about the CRUD.

Key Features :
- Create Note: Users can add new notes with a title, date, and description.
- Read Note: Display a list of all notes with options to view details.
- Update Note: Modify the content of existing notes.
- Delete Note: Remove notes that are no longer needed.

> Diary-Web <a href="https://diary-web-khit.netlify.app/index.html">Click Here</a>.


## Description
The Note Diary Web Application is a simple and intuitive tool for creating, editing, and managing personal notes. Users can add, view, and delete notes seamlessly.

## Table of Contents
- [Technology Used](#technology-used)
- [Contributors](#contributors)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Acknowledgments](#acknowledgments)

## Technology Used
| **Technologies** | **Purpose** |
|------------------|------------------|
| HTML             | Structure and Create content for the pages |
| CSS              | Styling HTML elements and layout |
| JavaScript       | Use to make the website behaviour |

## Contributors
- Developer : Khom Khit
- Code Reviewer : Team Alphabeez members

## Usage

### Prerequisites
- A text editor or Integrated Development Environment (IDE) for viewing the project:
        - [Visual Studio Code](https://code.visualstudio.com/)
- A modern web browser (e.g., Chrome, Firefox)

### Steps
1. Clone the repository:
    ```bash
    git clone https://git.clp.kr/anbschool/2nd/alphabeez/khom-khit/diary-web-project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd note-diary-web
    ```

## Folder Structure

### Running the Project
To start the development server, run:
```bash
DIARY-WEB-PROJECT/
├── assets/
│   ├── images/
│   │   ├── GIT_FLOW_STRATEGY.png
│   │   └── logo/
│   │       ├── hamberger-logo.png
│   │       ├── info-logo.png
│   │       └── logo.png
├── pages/
│   ├── create.html
│   ├── edit.html
│   ├── list.html
│   └── view&delete.html
├── scripts/
│   ├── components/
│   │   ├── footer.js
│   │   ├── header.js
│   │   ├── modal.js
│   │   ├── noteManager.js
│   │   ├── sidebar.js
│   │   └── uiManager.js
│   ├── pages-js/
│   │   ├── create.js
│   │   ├── edit.js
│   │   └── view-and-del.js
│   ├── index.js
│   ├── list.js
│   └── script.js
├── styles/
│   ├── components-styles/
│   │   ├── button.css
│   │   ├── footer.css
│   │   ├── form.css
│   │   ├── header.css
│   │   ├── modal.css
│   │   ├── note.css
│   │   ├── side-bar.css
│   ├── pages-styles/
│   │   ├── create.css
│   │   ├── edit.css
│   │   ├── list.css
│   │   └── view-and-del.css
│   └── style.css
├── .reviewboardrc
├── index.html
└── README.md

```
## Pages Included

| Page Names |
|------------|
| <a href="https://diary-web-khit.netlify.app/index.html">Home</a>        |
| <a href="https://diary-web-khit.netlify.app/pages/list.html">List</a>       |
| <a href="https://diary-web-khit.netlify.app/pages/create.html">Create</a>         |
| <a href="https://diary-web-khit.netlify.app/pages/view&delete.html">View & Delete</a>         |
| <a href="https://diary-web-khit.netlify.app/pages/edit.html">Edit</a>       |

### Features

#### a. Create Notes
    1. Go to the "Create Note" page.
    2. Fill in the note title, date, and description in the form.
    3. Click the "Add Note" button to save the note.
#### b. View Notes
    1. Navigate to the list page to see a list of all notes.
    or Can sroll down in the home pages and down the note form to see the overview of all the notes.
#### c. Edit Notes
    1. In the popup modal that will show after click on the note , if user decide to click the "Edit" button will lead to edit page.
    2. Update the title, date, and description in the form.
    3. Click "Add" to update the note.
#### d. Delete Notes
    1. In the list of notes, click the "Delete" button in the note you want to remove.
    2. Confirm the deletion in the popup modal.
    or 
    1. Click on the note.
    2. When the modal popup click on the View&Delete.
    3. click on delete note.



## Git Strategy & Scenario

![GIT_FLOW_STRATEGY](assets/images/GIT_FLOW_STRATEGY.png)

## Implementation:
---
Feature Branch:


1. Create Branch: Use the command git flow feature start <feature_name>.
2. Track branch : git flow feature track <feature_name>.
3. Publish Branch: Use the command git flow feature publish <feature_name>.
4. Merge/Rebase: After completing the feature, merge or rebase it with the develop branch.
5. Finish Branch: Use the command git flow feature finish <feature_name>.


Release Branch:


1. Create Branch: Use the command git flow release start <version_number>.
2. Track branch : Use command git flow release track <version_number>.
3. Publish Branch: Use the command git flow release publish <version_number>.
4. Merge/Rebase: Merge or rebase the release branch with the main and develop branches.
5. Finish Branch: Use the command git flow release finish <version_number>.


Bug fix Branch:


1. Create Branch: Use the command git flow bugfix start <bug_name>.
2. Publish Branch: Use the command git flow bugfix publish <bug_name>.
3. Merge/Rebase: After fixing the bug, merge or rebase the branch with the develop branch.
4. Finish Branch: Use the command git flow bugfix finish <bug_name>.


Hotfix Branch:


1. Create Branch: Use the command git flow hotfix start <version_number>.
2. Track branch : Use the command git flow hotfix  track <version_number>
3. Publish Branch: Hotfix branches are typically urgent fixes and may not be published.
4. Merge/Rebase: Merge or rebase the hotfix branch with the main and develop branches.
5. Finish Branch: Use the command git flow hotfix finish <version_number>.

## Acknowledgments

Thanks to team Alphabeez members for helping to give feedbacks and review code for this Project.

