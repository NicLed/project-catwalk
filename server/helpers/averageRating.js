const averageRating = (arr) => {
  let result = 0;
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].rating;
  }
  return parseFloat((result / arr.length).toFixed(1));
}

module.exports = averageRating;