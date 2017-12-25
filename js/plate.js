function Plate (theWeight, theUnit) {
  thePlate = {};

  const weight = new Weight(theWeight, theUnit);
  if (!weight) return null;

  return thePlate;
}