var Weight = require('./weight');

function Plate (theWeight, theUnit) {
  thePlate = {};

  const weight = new Weight(theWeight, theUnit);
  if (!weight || !weight.value) return null;

  thePlate.getWeight = function () {
    return weight.value();
  };

  return thePlate;
}

module.exports = Plate;