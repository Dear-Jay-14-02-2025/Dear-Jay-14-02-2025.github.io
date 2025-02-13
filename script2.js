//Content for secret message
const secretMessage = [
    "I", 
    "", 
    `<svg width="56" height="50" viewBox="0 0 56 50" fill="rgb(254, 232, 186)" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.44681 27.7234L27.7234 5.44681L50 27.7234L27.7234 50L5.44681 27.7234Z"/>
    <path d="M31.5039 15.7519C31.5039 24.4515 24.4515 31.5039 15.7519 31.5039C7.05238 31.5039 0 24.4515 0 15.7519C0 7.05238 7.05238 0 15.7519 0C24.4515 0 31.5039 7.05238 31.5039 15.7519Z"/>
    <path d="M55.4468 15.7519C55.4468 24.4515 48.3944 31.5039 39.6949 31.5039C30.9953 31.5039 23.9429 24.4515 23.9429 15.7519C23.9429 7.05238 30.9953 0 39.6949 0C48.3944 0 55.4468 7.05238 55.4468 15.7519Z"/>
    </svg>`, 
    "Y", 
    "O", 
    "U", 
    "J", 
    "A", 
    "Y"];

//Script for modal windows simplified
// Get the modals
const modalWindows = document.querySelectorAll(".modal");

// Get the buttons that opens the modal
const modalBtns = document.querySelectorAll(".btn");

// Get the <span> element that closes the modal
const closeBtns = document.querySelectorAll(".close");

// When the user clicks the button, open the modal 
modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener("click", () => {
        modalWindows[index].style.display = "flex";
        modalBtn.innerHTML = secretMessage[index];
        modalBtn.classList.add('flipped');
    });
});

// When the user clicks on <span> (x), close the modal
closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
        modalWindows[index].style.display = "none";
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modalWindows.forEach((modalWindow) => {
        if(event.target == modalWindow) {
            modalWindow.style.display = "none";
        };
    });
};