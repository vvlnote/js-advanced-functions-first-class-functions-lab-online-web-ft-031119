// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  let newArr = [];
  newArr.push(drivers[0]);
  newArr.push(drivers[1]);
  return newArr;
}

function returnLastTwoDrivers(drivers) {
  let newArr = [];
  newArr.push(drivers[drivers.length - 2]);
  newArr.push(drivers[drivers.length - 1]);
  return newArr;
}

let selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {return fare * multiplier;};
}

function fareDoubler(fair) {
  const double = createFareMultiplier(2);
  return double(fair);
}

function fareTripler(fair) {
  const triple = createFareMultiplier(3);
  return triple(fair);
}

function selectDifferentDrivers(drivers, fn) {
   return  fn(drivers);
}
