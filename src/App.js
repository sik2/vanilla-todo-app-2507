function App({ $target }) {
  const $div = document.createElement("div");
  $target.appendChild($div);

  new TodoForm();
  new TodoList();
}

export default App;
