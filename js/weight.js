const defaultUnit = "lb";

function Weight (theValue, theUnit) {
  theWeight = {};

  if (!theValue || theValue <= 0) {
    return false;
  }

  let unitValues = {};
  unitValues[theUnit || defaultUnit] = theValue;
  
  if (!unitValues["lb"]) {
    unitValues["lb"] = unitValues["kg"] * 2.2;
  }
  if (!unitValues["kg"]) {
    unitValues["kg"] = unitValues["lb"] * 0.45;
  }

  theWeight.defaultUnit = function () {
    return unit || defaultUnit;
  };
  theWeight.value = function (unit) {
    return unitValues[unit || defaultUnit];
  };
  theWeight.valueInKilos = function () { return unitValues["kg"]; };
  theWeight.valueInPounds = function () { return unitValues["lb"]; };

  theWeight.toString = function () {
    return `${unitValues[defaultUnit]}${defaultUnit}`;
  };

  return theWeight;
}

module.exports = Weight;