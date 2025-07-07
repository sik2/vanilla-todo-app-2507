import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const intialState = ["할일1", "할일2", "할일3"];

  const $page = document.createElement("div");
  $target.appendChild($page);

  const header = new Header({ $target: $page });
  header.setState("!!오늘 할일!!");

  new TodoForm({ $target: $page });

  const list = new TodoList({ $target: $page, intialState });
  list.setState([...intialState, "할일4"]);
}

export default App;
