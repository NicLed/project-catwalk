import React, {useState} from 'react';
import moment from 'moment';
// [questionAnswerer, setQuestionAnswerer] = useState('testUser')


const AnswerEntry = (props) => {
  console.log('AnswerEntry: ', props);
  return (
    <div>
      {/* <div>A: {props.answer.body}</div> */}
      {/* {props.answer.answerer_name === 'Seller' && setQuestionAnswerer('Seller')} */}
      <div>
       {'Date: '} {moment(props.answer.date).format('LL')}
      </div>
    </div>
  )
}

export default AnswerEntry;