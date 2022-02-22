import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionsList from '../CustomerQnA/Components/QuestionsList.jsx';
import QuestionEntry from '../CustomerQnA/Components/QuestionEntry.jsx';
import AnswersList from '../CustomerQnA/Components/AnswersList.jsx'

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState({});
  // const [showNumber, setShowNumber] = useState(4);


  useEffect(() => {
    getAllQuestions();
  }, []);


  const getAllQuestions = () => {
    axios.get(`/qa/questions/`)
    .then((response) => {
      setQuestions(response.data.results);
      setAnswers(response.data.results);
    })
    .catch((err) => {
      console.error(err)
    })
  }
  console.log('lengthOfQ:', questions.length);


  // const getAllQuestions = async () => {
  //   try {
  //     let response = await axios.get('/qa/questions')
  //     console.log('response:', response)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

return (
<div>
{questions.length > 0  ?  <QuestionsList questions={questions} /> : null}
{/* {questions.length > 0 ? <AnswersList questions={questions} /> : null} */}
</div>
  )
};



export default Questions;