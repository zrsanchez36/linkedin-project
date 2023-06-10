// Foldernames should be : Kebab-Case
//js variables should be : camelCase
// Commits should : Kebab case


let userName = 'Zsoreign Sanchez';
let profilePicture = "./assets/images/man.png"
let jobTitle = 'Software Engineer'

// DOM Steps
// Step 1: Target element
// Step 2: Store element in a temporary Variable
// Step 3: ADD/ Remove/ update the element

for (const element of usernameElement) {
    element.innerHTML = username;
}


let usernameElement= document.querySelectorAll(".data-username");
usernameElement.innerText = userName;

let profilePictureElement = document.querySelector(".data-profile-picture");
profilePictureElement.src = profilePicture;

let jobTitleElement = document.querySelector('data-jobtitle');
jobTitleElement.innerHTML = jobTitle


