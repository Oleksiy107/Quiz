import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="HeaderBox">
        <div className="HeaderBox__wrapHeader">
          <h2>
            <a href="/" className="HeaderBox__link">
              Home
            </a>
          </h2>
          <h2>
            <a href="/CreateQuiz" className="HeaderBox__link">
              Create quiz
            </a>
          </h2>
        </div>
        <h2>
          <a href="/Login" className="HeaderBox__link">
            Login
          </a>
        </h2>
      </div>
    </>
  );
};
export default Header;
