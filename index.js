// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

let selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {return fare * multiplier;};
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
/*
function fareDoubler(fair) {
  const double = createFareMultiplier(2);
  return double(fair);
}

function fareTripler(fair) {
  const triple = createFareMultiplier(3);
  return triple(fair);
}
*/
function selectDifferentDrivers(drivers, fn) {
   return  fn(drivers);
}
