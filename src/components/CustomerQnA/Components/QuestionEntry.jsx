import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';


const QuestionEntry = (props) => {

  const answers = props.eachQuestion.answers;
  return (
<div>
  <div>Q:  {props.eachQuestion.question_body}</div>
 A: <AnswersList answers={answers}/>
</div>
  )
}

export default QuestionEntry;