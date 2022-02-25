import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  display: flex;
  justtify-content: space-between;

`





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
<>
<QuestionContainer>

  {/* <sytle>u{cursor: pointer;}</sytle> */}

    <h3>Q:  {props.eachQuestion.question_body}</h3>
    <div>
      Helpful?

        <a src=''>
            Yes
        </a>
    </div>
  <br></br>
</QuestionContainer>


A: <AnswersList answers={answers}/>
</>
  )
}

export default QuestionEntry;