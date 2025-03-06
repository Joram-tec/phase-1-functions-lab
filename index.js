// Code your solution in this file!
function distanceFromHqInBlocks(street){
    //return number of blocks
    const headQuaters = 42;
    return Math.abs(street - headQuaters);

}
function distanceFromHqInFeet(street) {
    //returns distance from hq in feet
    const feetBlock = 264;
    return distanceFromHqInBlocks(street) * feetBlock;

}
function distanceTravelledInFeet(start, destination) {
    //return number of feet travelled
    const feetBlock = 264;
    return Math.abs(destination - start) * feetBlock;
}
function calculatesFarePrice(start, destination) {
    //returns the fare
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;

    }else if (distance > 400 && distance <= 2000){
        return(distance - 400) * 0.02;

    }else if (distance > 2000 && distance <= 2500) {
        return (25);
    }else {
        return 'cannot travel that far'
    }

}

