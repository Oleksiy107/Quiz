import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { QuestionInterface } from "./TypeQuiz";

const UserDoQuiz: React.FC = () => {
  const [userArr, setUserArr] = useState<userDataArr[]>();
  const [countdownFinished, setCountdownFinished] = useState(false);

  const quiz: {
    topic: string;
    level: string;
    totalQuestions: number;
    perQuestionScore: number;
    questions: QuestionInterface[];
  } = {
    topic: "Javascript",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        type: "MCQs",
        correctAnswer: "stringify()",
      },
      {
        question:
          "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "var and let", "None of the above"],
        type: "MCQs",
        correctAnswer: "var and let",
      },
      {
        question:
          "Which of the following methods can be used to display data in some form using Javascript?",
        choices: [
          "document.write()",
          "console.log()",
          "window.alert",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        type: "MCQs",
        correctAnswer: "const",
      },
    ],
  };

  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [result, setResult] = useState<{
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
  }>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const currentQuiz = quiz.questions[activeQuestion];
  const questions = quiz.questions;
  const { question, choices, correctAnswer } = currentQuiz || {};

  const onClickNext = (): void => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer: string, index: number): void => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer === correctAnswer ? "true" : "false");
  };

  const addLeadingZero = (number: number): string =>
    number > 9 ? number.toString() : `0${number}`;

  return (
    <>
      {!countdownFinished && (
        <CountdownCircleTimer
          isPlaying
          duration={7}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => setCountdownFinished(true)}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      )}
      <div className="quiz-container">
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2> {question}</h2>
            <ul>
              {choices &&
                choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer.toString(), index)}
                    key={index}
                    className={
                      selectedAnswerIndex === index ? "selected-answer" : ""
                    }
                  >
                    <button>{answer}</button>
                  </li>
                ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>

            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDoQuiz;
