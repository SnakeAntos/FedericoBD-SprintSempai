import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header.jsx";
import Create from "./assets/components/create/index.jsx";
import ItemsList from "./assets/components/list/index.jsx";

function App() {
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState("light");
  const [background, setBackground] = useState("header-backgroud-themed-light");

  const handleCreateTodo = (text) => {
    const newItem = { texto: text, completed: false };
    setList([...list, newItem]);
  };

  const handleClearCompleted = () => {
    const updatedList = list.filter((item) => !item.completed);
    setList(updatedList);
  };

  return (
    <>
      <Header
        background={background}
        setBackground={setBackground}
        theme={theme}
        setTheme={setTheme}
      />
      <Create
        onCreateTodo={handleCreateTodo}
        theme={theme}
        setTheme={setTheme}
      />
      <ItemsList
        setList={setList}
        listItem={list}
        onClearCompleted={handleClearCompleted}
        theme={theme}
        setTheme={setTheme}
      />
    </>
  );
}

export default App;
