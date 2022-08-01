// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {

    return drivers.slice(2,4);
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];



const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, whichDrivers) {
    return whichDrivers(drivers);
}