import React, { useState } from "react";
import "./index.css";

const Create = ({ onCreateTodo, theme, setTheme, colorTheme }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && text.trim() !== "") {
      onCreateTodo(text);
      setText("");
    }
  };

  return (
    <div className={`create-container`}>
      <div className={`create-inner-container ${theme}-theme`}>
        <button className={`create-button`}>
          <div className={`create-button-inside ${theme === "light" ? "light-theme-button" : "dark-theme"}`}
          ></div>
        </button>
        <input
          className={`create-input ${theme === "light" ? "light-theme" : "dark-theme"}`}
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Create;
