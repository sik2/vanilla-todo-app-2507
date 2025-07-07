import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const $page = document.createElement("div");
  $target.appendChild($page);

  const header = new Header({ $target: $page });
  header.setState("!!오늘 할일!!");

  new TodoForm({ $target: $page });
  new TodoList({ $target: $page });
}

export default App;
