// Code your solution in this file!

function distanceFromHqInBlocks(value) {
    if(value >= 42){
        return value - 42
    }else {
        return 42 - value
    }
}

function distanceFromHqInFeet(value) {
    if(value >= 42){
        return (value - 42) * 264
    }else {
        return (42 - value) * 264
    }
}

function distanceTravelledInFeet(start, destination) {
    if(start >= destination) {
        return (start - destination) * 264
    }else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let feet = 0
    if(start >= destination){
        feet = (start - destination) * 264
    }else {
        feet = (destination - start) * 264
    }

    if(feet <= 400) {
        return 0
    }else if(feet <= 2000) {
        return (feet - 400) * 0.02
    }else if(feet <= 2500) {
        return 25
    }else {
        return 'cannot travel that far'
    }

}