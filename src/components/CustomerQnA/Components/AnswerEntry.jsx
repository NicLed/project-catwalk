import React from 'react';
import moment from 'moment';

const AnswerEntry = (props) => {

  return (
    <div>
      <div>{props.answer.body}</div>
      <div>
       {'Date: '} {moment(props.answer.date).format('LL')}
      </div>
    </div>
  )
}

export default AnswerEntry;