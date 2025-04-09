import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary"

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers}/>
  }

  return (
    <div id="quiz">
      <Question
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
      />
    </div>
  );
}
