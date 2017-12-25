const defaultUnit = "kg";

function Weight (theValue, theUnit) {
  theWeight = {};

  if (!theValue || theValue <= 0) {
    return null;
  }

  let unitValues = {};
  unitValues[theUnit || defaultUnit] = theValue;
  
  if (!unitValues["lb"]) {
    unitValues["lb"] = unitValues["kg"] * 2.2;
  }
  if (!unitValues["kg"]) {
    unitValues["kg"] = unitValues["lb"] * 0.45;
  }

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

function Plate (theWeight, theUnit) {
  thePlate = {};

  const weight = new Weight(theWeight, theUnit);
  if (!weight) return null;

  return thePlate;
}

function PlateSet (thePlate, theCount) {
  thePlateSet = {};

  return thePlateSet;
}

function Bar (theWeight) {
  theBar = {};

  if (!theWeight || theWeight <= 0) {
    return null;
  }

  const weight = theWeight;

  return theBar;
}

function Gym () {
  theGym = {};

  //theGym.bars = [Bar]
  //theGym.plates = [PlateSet]

  return theGym;
}