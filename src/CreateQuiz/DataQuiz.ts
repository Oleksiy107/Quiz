type InfoQuiz = {
  id: number;
  question: string;
  options: string[];
  answer: string | null;
};

export const quizData: InfoQuiz[] = [
  {
    id: 0,
    question: ` What is the Capital Of India ?`,
    options: [`New Delhi`, `Mumbai`, `Kolkatta`],
    answer: ``,
  },
  {
    id: 1,
    question: `Who is the CEO of Tesla Motors?`,
    options: [`Bill Gates`, `Steve Jobs`, `Elon Musk`],
    answer: ``,
  },
  {
    id: 3,
    question: `Name World's Richest Man?`,
    options: [`Jeff Bezo`, `Bill Gates`, `Mark Zuckerberg`],
    answer: ``,
  },
];
