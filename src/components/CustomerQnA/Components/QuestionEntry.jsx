import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';


const QuestionEntry = (props) => {
  // [helpfulnessCount, setHelpfulnessCount] = useState(props.eachQuestion.question_helpfulness);
  console.log('QuestionEntryProps: ', props.eachQuestion.question_helpfulness);
  const answers = props.eachQuestion.answers;
  const questionID = props.eachQuestion.question_id;



  const isHelpfulHandler = () => {
    axios.put(`/qa/questions/${questionID}/helpful`)
    .then(() => {
      props.getAllQuestions(props.productID);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  return (
<div>
  {/* <sytle>u{cursor: pointer;}</sytle> */}
  <span>
    <div>Q:  {props.eachQuestion.question_body}</div>
    <span>
      Helpful?
      <div onClick={isHelpfulHandler}>
        <u>
            Yes
        </u>
      </div>
    </span>
  </span>
 A: <AnswersList answers={answers}/>
</div>
  )
}

export default QuestionEntry;