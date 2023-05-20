
import { useState } from "react";
import "./App.css";
import Header from './assets/components/Header.jsx';
import Create from './assets/components/create/index.jsx';
import ItemsList from './assets/components/list/index.jsx';


function App() {
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState('light');
  const [background, setBackground] = useState('header-backgroud-themed-light');

  const handleCreateTodo = (text) => {
    const newItem = { texto: text, completed: false };
    setList([...list, newItem]);
  };

  return (
    <>
      <Header background={background} setBackground={setBackground} theme={theme} setTheme={setTheme}/>
      <Create onCreateTodo={handleCreateTodo} />
      <ItemsList listItem={list} />
      
    </>
  );
}

export default App;

