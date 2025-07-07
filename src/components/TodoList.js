function TodoList({ $target }) {
  const $list = document.createElement("div");
  $list.innerHTML = `
    <ul>
        <li>할일1</li>
        <li>할일2</li>
        <li>할일3</li>
    </ul>
  `;
  $target.appendChild($list);
}

export default TodoList;
