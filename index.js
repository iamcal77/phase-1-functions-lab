// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is at block 42
  }
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // Each block is assumed to be 264 feet long
  }
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    return distance * 264; // Each block is assumed to be 264 feet long
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  