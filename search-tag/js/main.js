let closeIcon = document.querySelector(".search-tag__icon");
let input = document.querySelector(".search-tag__input");
let btnRemoveAll = document.querySelector(".search-tag__btn--remove-all");
let content = document.querySelector(".search-tag__content");

let tags = [];

renderTag = () => {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    content.innerHTML += `<li>
    ${tag}
    <i class="fa-solid fa-xmark search-tag__icon" onclick=removeTag(${i})></i>
    </li>`;
  }
  content.appendChild(input);
  input.focus();
};

input.addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    tags.push(input.value.trim());
    input.value = "";
    renderTag();
  }
});

removeTag = (i) => {
  tags.splice(i, 1);
  renderTag();
};

btnRemoveAll.addEventListener("click", function () {
  tags = [];
  renderTag();
});

renderTag();
