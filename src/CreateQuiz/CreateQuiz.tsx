// import React, { useState } from "react";

// type ItemQuiz = {
//   id: number;
//   question: string;
//   options: string[];
//   answer: string;
//   isCorrect: boolean;
// };

// const CreateQuiz: React.FC = () => {
//   const [itemQuiz, setItemQuiz] = useState<ItemQuiz[]>([]);
//   const [question, setQuestion] = useState<string>("");
//   const handQuestionTitle = (event) => {
//     event.prevenDefault();
//   };

//   const [inputQuestion, setInputQuestion] = useState("");
//   const [inputOption, setInputOption] = useState("");
//   const [inputOptionColor, setInputOptionColor] = useState<boolean>(false);

//   const [options, setOptions] = useState<string[]>([]);
//   const [items, setItems] = useState<ItemQuiz[]>([]);
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);

//   const handleSelectAnswer = (questionId: number, selectedOption: string) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === questionId
//           ? {
//               ...item,
//               answer: selectedOption,
//               isCorrect: selectedOption === item.answer,
//             }
//           : item
//       )
//     );
//   };

//   const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputQuestion(event.target.value);
//   };

//   const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputOption(event.target.value);
//   };

//   const handleAddOption = () => {
//     if (inputOption.trim() !== "") {
//       setOptions((prevOptions) => [...prevOptions, inputOption]);
//       setInputOption("");
//     }
//   };

//   const success = () => {
//     // Check if any item's answer is correct
//     if (items.some((item) => item.isCorrect)) {
//       console.log("success");
//     }
//   };

//   const handleAddItem = () => {
//     if (inputQuestion.trim() !== "" && options.length > 0) {
//       const newItem: ItemQuiz = {
//         id: items.length + 1,
//         question: inputQuestion,
//         options: [...options],
//         answer: "", // Initially set answer to empty string
//         isCorrect: false, // Initialize isCorrect to false
//       };
//       setItems((prevItems) => [...prevItems, newItem]);
//       setInputQuestion(""); // Clear the question input field
//       setOptions([]); // Clear the options array
//     }
//   };

//   const handleSaveQuiz = () => {
//     console.log("Quiz Items:", items);
//   };
//   return (
//     <div className="container">
//       <h3>React Js Add Element or Items to Array by Input fields</h3>
//       <div className={open ? "open" : null}>
//         <input
//           type="text"
//           value={inputQuestion}
//           onChange={handleQuestionChange}
//           placeholder="Enter question"
//         />
//         <input
//           type="text"
//           value={inputOption}
//           onChange={handleOptionChange}
//           placeholder="Enter option"
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//         <button onClick={handleAddItem}>Add Item</button>
//         <button onClick={handleSaveQuiz}>Save Quiz</button>
//       </div>

//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <div>Question: {item.question}</div>
//             <div>
//               Options:
//               {item.options.map((option) => (
//                 <label key={option}>
//                   <input
//                     type="radio"
//                     name={`question_${item.id}`}
//                     value={option}
//                     onChange={() => handleSelectAnswer(item.id, option)}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </li>
//         ))}
//       </ul>
//       {items.map((item) => (
//         <ul key={item.id}>
//           <li>
//             {item.options.map((option) => (
//               <button key={option} onClick={success}>
//                 {" "}
//                 {/* Use onClick instead of onChange */}
//                 {option}
//               </button>
//             ))}
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default CreateQuiz;
