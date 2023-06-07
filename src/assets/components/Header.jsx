import "./header.css";
import '/images/icon-moon.svg'
import "/images/icon-sun.svg"

const Header = (props) => {
  
  return (
    <>
      <div className={`header-container ${props.theme}`}>
        <div className="header-container-inner">
          <div className="header-logo"><h1>TODO</h1></div>
          <div className="header-mode-button-container">
            <button
              onClick={() => {
                props.setTheme(props.theme === "light" ? "night" : "light");
                props.setBackground(
                  props.background === 'header-backgroud-themed-light'
                    ? 'header-backgroud-themed-dark'
                    : 'header-backgroud-themed-light'
                );
              }}
              className="header-mode-button">
              <img
                src={props.theme === 'light' ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
                className='header-mode-button-img'
                alt="Theme Icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={`header-background-themed ${props.background}`}></div>
    </>
  );
};

export default Header;
