const peopleOnTheBus = function(arrayBusStops) {
  let pepoleIn = 0;
  let pepoleOut = 0;
  for (let i = 0; i < arrayBusStops.length; i++) {
    pepoleIn += arrayBusStops[i][0];
    pepoleOut += arrayBusStops[i][1];
  }
  let stillInTheBus = pepoleIn - pepoleOut;
  if (stillInTheBus < 0) {
    stillInTheBus = 0;
  }
  return stillInTheBus;
}

// 5 bus station
console.log(peopleOnTheBus([[22,0], [9, 3],[2, 10],[3, 6],[5, 6]]));

// 4 bus station
console.log(peopleOnTheBus([[22,0], [9, 3],[2, 10],[3, 6]]));

