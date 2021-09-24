const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It works! Return IP: ', ip);
// });

// fetchCoordsByIP("207.47.234.92", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log("Identified location: ", data);

// });

// fetchISSFlyOverTimes({ latitude: 52.157, longitude: -106.5614 }, (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log("Found next ISS data: ", data);
// });
  
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);

  passTimes.forEach(event => {
    const time = new Date(0);
    time.setUTCSeconds(event.risetime);
    console.log(`Next pass at ${time} for ${event.duration} seconds!`);
  });
});