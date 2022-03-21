import React, {useState} from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = (props) => {

  const [showAnswers, setShowAnswers] = useState(2);
  // console.log('answersList: ', props);

  // double check in order to ensure that this is how I want
  // expand list.
  const showMoreAnswers = () => {
    setShowAnswers(showAnswers + 2);
  }


  const answersArray = Object.values(props.answers);

  return (
    <div>
      {answersArray.length > showAnswers ? answersArray.slice(0, showAnswers).map((answer, key) => {
        return <AnswerEntry answer={answer} key={answer.id} />
}) : answersArray.map((answer) => {
  return <AnswerEntry answer={answer} key={answer.id} /> })}
      {/* {answersArray.map((answer) => {
        return <AnswerEntry answer={answer} key={answer.id} /> })} */}
    </div>
  )
}

export default AnswersList;