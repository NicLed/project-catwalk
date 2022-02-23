import React, {useState} from 'react';
import moment from 'moment';
// [questionAnswerer, setQuestionAnswerer] = useState(props.answer.answerer_name);


const AnswerEntry = (props) => {
  console.log('AnswerEntry: ', props);
  let username = '';
  {props.answer.answerer_name === 'Seller' ? username = <strong>Seller</strong> : username = props.answer.answerer_name}

  return (
    <div>
      <div>{props.answer.body}</div>
      <div>
       by {username}, {'Date: '}  {moment(props.answer.date).format('LL')}
      </div>
    </div>
  )
}

export default AnswerEntry;