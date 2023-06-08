document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".left-container .item");
  const rightContainer = document.querySelector(".right-container");
  const leftContainer = document.querySelector(".left-container");
  const successMessage = document.createElement("p");
  successMessage.classList.add("success-message");
  successMessage.innerText = "Item dropped successfully!";

  let draggedItem = null;

  items.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });
  rightContainer.addEventListener("dragover", dragOver);
  rightContainer.addEventListener("dragenter", dragEnter);
  rightContainer.addEventListener("dragleave", dragLeave);
  rightContainer.addEventListener("drop", drop);

  function dragStart() {
    draggedItem = this;

    this.classList.add("dragged");
    this.classList.remove("item");

    setTimeout(() => {
      this.style.display = "none";
    }, 0);
  }

  function dragEnd() {
    setTimeout(() => {
      draggedItem.style.display = "block";
      this.classList.remove("dragged");
      this.classList.add("item");
      draggedItem = null;
    }, 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();

    this.classList.add("drag");
  }

  function dragLeave() {
    this.classList.remove("drag");
  }

  function drop() {
    this.classList.remove("drag");
    this.appendChild(draggedItem);
    this.appendChild(successMessage);
  }
  const resetButton = document.getElementById("reset-btn");
  resetButton.addEventListener("click", reset);

  function reset() {
    rightContainer.innerHTML = "<p>Drop items here</p>";
    leftContainer.innerHTML = `
      <h3>Drag these Items</h3>
      <div class="item" draggable="true">Item 1</div>
      <div class="item" draggable="true">Item 2</div>
      <div class="item" draggable="true">Item 3</div>
    `;
    const items = document.querySelectorAll(".left-container .item");
    items.forEach((item) => {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
  }
});
