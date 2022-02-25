import React, {useState, useEffect} from 'react';
import QuestionEntry from './QuestionEntry.jsx';


const QuestionsList = (props) => {

  const [showNumber, setShowNumber] = useState(4);
  // console.log('props.questions 💄💄💄💄💄💄💄💄💄:', showNumber);



  // const showMoreQuestions = () => {
  //   setShowNumber(props.questions.length);
  // }


  return (

    <div>
    <h3>Questions &amp; Answers</h3>
     {props.questions.length > showNumber ? props.questions.slice(0, showNumber).map((eachQuestion, key) => (
        <QuestionEntry eachQuestion={eachQuestion} key={eachQuestion.question_id} />
     )) : props.questions.map((eachQuestion) => {
       return <QuestionEntry eachQuestion={eachQuestion} key={eachQuestion.question_id} />
     })}
    </div>
  );
}


export default QuestionsList;