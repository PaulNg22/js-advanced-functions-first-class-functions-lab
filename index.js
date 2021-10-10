// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers (){
  return  drivers.slice(0,2)
};

//

function returnLastTwoDrivers (){
  return drivers.slice(-2)
    };
        

const selectingDrivers = [
        returnFirstTwoDrivers,
      
        returnLastTwoDrivers
      
      ];

//

function createFareMultiplier(x){
return function(y){ 
  return x*y;}
}
const fareMultiplier = createFareMultiplier(2);
console.log(fareMultiplier(2));


const fareDoubler= function (x){
 return x*2
}
//

const fareTripler= function (x){
  return x*3
 }
//

const selectDifferentDrivers = function (arrayOfDrivers,driversToReturn) {
 return driversToReturn(arrayOfDrivers)
};
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
