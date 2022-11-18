import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn NodeJS" />
      <Todo text="Learn Mysql" />
    </div>
  );
}

export default App;
