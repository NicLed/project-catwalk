import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  gap: 20px;
  margin-top: 50px;
`
const HelpfulStyle = styled.u`
  margin-left: 5px;
  cursor: pointer;
`




const QuestionEntry = (props) => {
  // [helpfulnessCount, setHelpfulnessCount] = useState(props.eachQuestion.question_helpfulness);
  // console.log('QuestionEntryProps: ', props.eachQuestion.question_helpfulness);
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

    <div>Q:  {props.eachQuestion.question_body}</div>

    <div>Helpful?

    <HelpfulStyle>Yes</HelpfulStyle>
    </div>



</QuestionContainer>


<AnswersList answers={answers}/>
</>
  )
}

export default QuestionEntry;