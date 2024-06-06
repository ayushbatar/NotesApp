const creatBtn = document.querySelector(".add-btn");
const containerNotes = document.querySelector(".notes-container");
const inputBox = document.querySelector(".input-box");

function updateNotes() {
    localStorage.setItem("notes", containerNotes.innerHTML);
}

function showNotes() {
    containerNotes.innerHTML = localStorage.getItem("notes");
}

creatBtn.addEventListener("click", () => {
    containerNotes.innerHTML += `
    <div class="note">
          <p contenteditable="true" class="input-box"></p>
          <img src="images/delete.png" alt="" srcset="" />
        </div>
      </div>
    `;
})
showNotes();
containerNotes.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateNotes();
    } else if (e.target.tagName === "P") {
        const notes = document.querySelectorAll(".input-box");
        notes.forEach((note) => {
            note.onkeyup = () => {
                updateNotes();
            }
        })
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});