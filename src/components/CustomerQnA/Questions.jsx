import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionsList from '../CustomerQnA/Components/QuestionsList.jsx';
import QuestionEntry from '../CustomerQnA/Components/QuestionEntry.jsx';
import AnswersList from '../CustomerQnA/Components/AnswersList.jsx'
import styled from 'styled-components';

const QuestionsContainer = styled.div`
  padding-bottom: 40px;

`

const Questions = ({products, product, productID}) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState({});



  useEffect(() => {
    getAllQuestions(productID);
  }, [productID]);


  const getAllQuestions = (product_ID) => {
    axios.get(`/qa/questions/${product_ID}`)
    .then((response) => {
      // console.log('AllData: ', response.data.results);
      setQuestions(response.data.results);
    })
    .catch((err) => {
      console.error(err)
    })
  }




return (

<QuestionsContainer>
  {questions.length > 0  ?  <QuestionsList questions={questions}  getAllQuestions={getAllQuestions} productID={productID} /> : null}
  <button>
    More Answered Questions
  </button>
</QuestionsContainer>
  )
};



export default Questions;