import "./index.css";

const Bottom = (props) => {
  const handleClearCompleted = () => {
    props.onClearCompleted();
  };

  const liClassChecker = ()=>{
    return props.theme === "light"? "bottom-menu-list-light" : "bottom-menu-list-dark"
  }

  return (
    <>
      <div className="bottom-container">
        <div className={`bottom-container-inner 
        ${props.theme === 'light'? 'bottom-container-inner-light': "bottom-container-inner-dark"}`}
        >
          <div className="bottom-menu-container">
            <p className={`bottom-menu-itemsLeft ${liClassChecker()} `}
            >
              <span>{props.elements}</span> elements left
            </p>
          </div>
          <div className="bottom-menu-container">
            <ul className={`bottom-menu-list ${liClassChecker()} `}>
              <li className={`bottom-menu-list-item ${liClassChecker()} `}
               onClick={() => props.setFilter("all")}>All</li>
              <li  className={`bottom-menu-list-item ${liClassChecker()} `} onClick={() => props.setFilter("active")}>Active</li>
              <li  className={`bottom-menu-list-item ${liClassChecker()} `} onClick={() => props.setFilter("completed")}>Completed</li>
            </ul>
          </div>
          <div className={`bottom-menu-container ${liClassChecker()} `}>
            <button onClick={handleClearCompleted}  className={`bottom-menu-clear ${liClassChecker()} `}
            >Clear Completed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
