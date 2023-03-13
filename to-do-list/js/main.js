let todoInput = document.querySelector(".todo__input");
let todoBtn = document.querySelector(".todo__btn");
let todoForm = document.querySelector(".todo__form");
let todoList = document.querySelector(".todo__list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valueInput = todoInput.value.trim();
  if (valueInput) {
    todoContent({ text: valueInput, status: "" });
  }
  todoInput.value = "";
});

todoContent = (content) => {
  let item = document.createElement("li");

  //   add to do vào danh sách
  item.innerHTML = `<p>${content.text}</p>
  <span><i class="fa-solid fa-trash"></i></span>`;

  //   thay đổi trạng thái hoàn thành
  item.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  // trạng thái hoàn thành
  if (content.status === "done") {
    item.setAttribute("class", "done");
  }

  //  xoá to do khỏi danh sách
  let trash = item.querySelector("span");
  trash.addEventListener("click", function () {
    this.parentElement.remove();
  });

  todoList.appendChild(item);
};
