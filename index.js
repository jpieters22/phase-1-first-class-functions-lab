const drivers = ["Sally", "Bob", "Antonia", "Nuru"]
const firstTwo = drivers.slice(0,2);
const lastTwo = drivers.slice(-2);

function returnFirstTwoDrivers() {
    return firstTwo
}

function returnLastTwoDrivers() {
    return lastTwo
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier() {
    return function() {
        return 5 * 5
    }
}

let fareDoubler = fare => fare * 2
let fareTripler = fare => fare * 3
 
function selectDifferentDrivers(selectDifferentDrivers, drivers) {
    if (selectDifferentDrivers = drivers, returnFirstTwoDrivers) {
        return firstTwo
    }
    else if (selectDifferentDrivers = drivers, returnLastTwoDrivers.slice(-2)) {
        return lastTwo
    }
}
