import React, {useState} from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = (props) => {
  console.log('answersList: ', props);
  const answersArray = Object.values(props.answers);
  return (
    <div>
      {answersArray.map((answer) => {
        return <AnswerEntry answer={answer} key={answer.id} /> })}
    </div>
  )
}

export default AnswersList;