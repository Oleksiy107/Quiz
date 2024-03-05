import React, { useState, useEffect } from "react";

const QuizComponent: React.FC = () => {
  const [inputName, setInputName] = useState<string>("");
  const [quizItems, setQuizItems] = useState<string[]>(["a"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [isVisible, setIsVisible] = useState < boolean(true);
  const [notCorrect, setNotCorrect] = useState(false);
  const [arrUser, setArrUser] = useState<(string | number)[]>([]);
  const [showHiddenBox, setShowHiddenBox] = useState<boolean>(true);
  const [inputNameReady, setInputNameReady] = useState<string[]>([]);

  const EnterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleJoinClick = () => {
    setInputVisible(true);
  };

  const EnterNameToQuiz = () => {
    setInputNameReady([...inputNameReady, inputName]);
    setInputVisible(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const addNewItem = async () => {
    if (inputName.trim() !== "") {
      setArrUser([...arrUser, inputName]);
      setInputName("");
      setShowHiddenBox(true);
      try {
        await fetch("/addUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: inputName }),
        });
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
  };
  return (
    <>
      {quizItems.length === 0 ? (
        <div className="ReadyQuizBox">
          <p className="ReadyQuizBox__title">No active quizzes yet</p>
          <button className="ReadyQuizBox__btn">
            <a href="/CreateQuiz">Create</a>
          </button>
        </div>
      ) : (
        <section onClick={() => handleJoinClick2(false)}>
          {quizItems.map((item, index) => (
            <div key={index}>
              <h2>Active quiz</h2>
              <li>{item}</li>
              <button onClick={handleJoinClick}>Join</button>
            </div>
          ))}
        </section>
      )}
      {inputVisible && (
        <section>
          <input
            type="text"
            value={inputName}
            onChange={EnterName}
            placeholder="Enter Name"
          />
          <button onClick={EnterNameToQuiz} disabled={!inputName.trim()}>
            Ready
          </button>
        </section>
      )}
      {/* <ol>
          {arrUser.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ol> */}
    </>
  );
};

export default QuizComponent;
