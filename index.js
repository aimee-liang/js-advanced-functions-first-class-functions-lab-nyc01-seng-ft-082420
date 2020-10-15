const returnFirstTwoDrivers = function(array){
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array){
  return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (integer) => {
  return function(fare){
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(array)
}
