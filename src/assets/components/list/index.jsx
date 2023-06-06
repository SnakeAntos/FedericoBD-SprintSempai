import "./index.css";
import { useState } from "react";
import Bottom from "../bottom/index.jsx";

const ItemsList = (props) => {
  const [filter, setFilter] = useState("all");

  const handleToggleCompleted = (index) => {
    const updatedList = [...props.listItem];
    updatedList[index].completed = !updatedList[index].completed;
    props.setList(updatedList);
  };

  const filterItems = () => {
    switch (filter) {
      case "active":
        return props.listItem.filter((item) => !item.completed);
      case "completed":
        return props.listItem.filter((item) => item.completed);
      default:
        return props.listItem;
    }
  };

  return (
    <>
      <div className="itemsList-container">
        {filterItems().map((item, index) => (
          <div key={index} className={`itemList-container-inner ${props.theme === "light" ? "light-theme-container" : "dark-theme"}`}
           >
            <button
              className={`itemsList-button ${props.theme === "light" ? "light-theme-button-itemList" : "dark-theme"}`}
              
              onClick={() => handleToggleCompleted(index)}
            >
              <div
                className={`itemsList-button-inside ${item.completed ? "itemsList-button-inside-completed" : ""}
                 ${props.theme === "light" ? "light-theme-button-inside-light" : "dark-theme-button-inside"}`}
              ></div>
            </button>
            <p className={`itemsList-item ${props.theme === "light" ? "itemsList-item-light" : "place-holder-themeyoquese"}`}>{item.texto}</p>
          </div>
        ))}
        <Bottom
          elements={filterItems().length}
          onClearCompleted={props.onClearCompleted}
          setFilter={setFilter}
          theme={props.theme} 
        />
      </div>
    </>
  );
};

export default ItemsList;



