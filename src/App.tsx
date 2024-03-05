import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CreateQuizPage from "./Pages/CreateQuizPage";
import QuizShow from "./DoQuiz/DoQuiz";
// import UserDoQuiz from "./UserDoQuiz/UserDoQuiz";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<QuizShow />} /> */}
        <Route path="/" element={<QuizShow />} />
        {/* <Route path="CreateQuiz" element={<CreateQuizPage />} />
        <Route path="/DoQuiz" element={<UserDoQuiz />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
