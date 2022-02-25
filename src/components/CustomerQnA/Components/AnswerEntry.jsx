import React, {useState} from 'react';
import moment from 'moment';
import styled from 'styled-components';


const AnswerContainer = styled.div`
  margin-bottom: 10px;

`
const AnswerBodyContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
`
const UserContainer = styled.div`
  padding-left: 20px;


`


const AnswerEntry = (props) => {
  console.log('AnswerEntry: ', props);
  let username = '';
  {props.answer.answerer_name === 'Seller' ? username = <strong>Seller</strong> : username = props.answer.answerer_name}

  return (
    <AnswerContainer>
      <AnswerBodyContainer>A: {props.answer.body}</AnswerBodyContainer>
      <UserContainer>
       by {username}, {'Date: '}  {moment(props.answer.date).format('LL')}
      </UserContainer>
    </AnswerContainer>
  )
}

export default AnswerEntry;