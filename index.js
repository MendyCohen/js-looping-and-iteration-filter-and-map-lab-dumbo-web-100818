// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
    newArr = []
  driver.map(function(drive){
    if (drive.revenue > revenue) {
      newArr.push(drive)
    }
  })
  return newArr
}

function driverNamesWithRevenueOver(driver, revenue) {
  let filteredDrivers = driver.filter(drive => drive.revenue > revenue);
  return filteredDrivers.map(drive => drive.name)
}

// function exactMatch(drivers, revenue) {
//   drivers.filter(drive => drive.revenue === revenue)
// }

// function exactMatch(drivers, object) {
//   let key = object[key]
//   drivers.filter(drive => drive.key === value)
// }

function exactMatch (drivers, revenue) {
  return drivers.filter(function (driver) {
    let matches = [];

    for (const key in revenue) {
      matches = driver[key] === revenue[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, revenue) {
  return exactMatch(drivers, revenue).map(function(driver){
    return driver.name;
  })
}
