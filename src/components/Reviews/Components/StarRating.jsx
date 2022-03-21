import React, { Component, useState, useEffect, useMemo } from 'react';
import StarIcon from './StarIcon.jsx';

const StarRating = (props) => {

  const fill = React.useMemo(() => {
    if (props.hoverRating >= props.starValue) {
      return '#ffa651';
    } else if (!props.hoverRating && props.starRating >= props.starValue) {
      return '#ffa651';
    }
    return 'none';
  }, [props.hoverRating, props.starRating, props.starValue])

  return (
    <div
      onMouseEnter={() => props.onMouseEnter(props.starValue)}
      onMouseLeave={() => props.onMouseLeave()}
      onClick={() => props.onSaveRating(props.starValue)}>
      <StarIcon fill={fill} />
    </div>
  )
}

export default StarRating;