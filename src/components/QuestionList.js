import React from "react";
import QuestionItem from "./QuestionItem"


  function QuestionList({questions,handleDeleteQuestion}){

let questionNo = 0

const questionList = questions.map((question)=> {
questionNo++
return <QuestionItem key={question.id} question = {question} questionNo = {questionNo} handleDeleteQuestion= {handleDeleteQuestion}/>})
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
