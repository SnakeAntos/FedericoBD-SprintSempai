import "./index.css";
import Bottom from "../bottom/index.jsx";
import { useState } from "react";
const ItemsList = (props) => {
   
    const handleCompleted = (elements) => {
        let count = 0;
        for (let index = 0; index < elements.length; index++) {
          if (!elements[index].completed) {
            count++;
          }
        }
        return count;
      };
  
    return (
    <>
      <div className="itemsList-container">
        {props.listItem.map((item, index) => (
          <div key={index} className="itemList-container-inner">
            <button className="itemsList-button">
              <div className="itemsList-button-inside"></div>
            </button>
            <p className="itemsList-item">{item.texto}</p>
            {/* <p className="itemsList-item">{item}</p> */}
          </div>
        ))}
        <Bottom elements={handleCompleted(props.listItem)} />
      </div>
    </>
  );
};

export default ItemsList;
