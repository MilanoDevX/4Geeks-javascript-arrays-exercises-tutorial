let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(arr) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0,
  }
  
  let total0 = 0;
  let total1 = 0;
  let total2 = 0;
  let dim1 = arr.length;
  let dim2 = arr[0].length;

  for (let i=0; i<dim1; i++) {
    for (let j=0; j<dim2; j++) {
      if (arr[i][j] == 0) {
        total0 = total0 + 1;
      }
      if (arr[i][j] == 1) {
        total1 = total1 + 1;
      }
      if (arr[i][j] == 2) {
        total2 = total2 + 1;
      }
    }
  }
  state.totalSlots = dim1*dim2 - total0;
  state.availableSlots = total2;
  state.occupiedSlots = total1;

  return state;
}

console.log(getParkingLotState(parkingState));
