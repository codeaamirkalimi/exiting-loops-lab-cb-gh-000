function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length; i++) {
    if (changeValue == stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
}
