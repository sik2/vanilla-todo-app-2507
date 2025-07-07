function TodoList({ $target, intialState, onDelete }) {
  const $list = document.createElement("div");
  $target.appendChild($list);

  $list.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onDelete(id);
    }
  });

  this.state = intialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.state = intialState;

    this.setState = (nextState) => {
      this.state = nextState;
      this.render();
    };

    this.render = () => {
      $list.innerHTML = `
        <ul>
            ${this.state
              .map(
                (item) => `
              <li>
                ${item.id} / <span>${item.text}</span><button data-id="${item.id}" class="del_btn">X</button>
              </li>
              `
              )
              .join("")}
        </ul>
    `;
    };

    this.render();
  };

  this.render();
}

export default TodoList;
