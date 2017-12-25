const ALLPLATES1 = [
  new Plates(45, 2),
  new Plates(10, 4)
];

const ALLPLATES2 = [
  new Plates(45, 4),
  new Plates(20, 4),
  new Plates(10, 4)
];

const ALLPLATES3 = [
  new Plates(45, 4),
  new Plates(35, 2),
  new Plates(20, 4),
  new Plates(10, 4),
  new Plates(5, 2),
  new Plates(2.5, 4)
];

// 45, 45+10, 45+10+10, 10, 10+10


function Plates (theWeight, theCount) {
  let thePlates = {};

  thePlates.getWeight = function () { return weight; };
  thePlates.getCount = function () { return count; };
  thePlates.getPairCount = function () { return Math.floor(theCount / 2); };

  thePlates.getAvailablePlates = function () {
    let available = [];
    for (let i = 0; i < thePlates.getPairCount(); i++) {
      available.push(theWeight);
    }
    return available;
  };

  thePlates.toString = function () {
    return `${theCount} x ${theWeight}lbs`;
  };
  
  return thePlates;
}

function PlateSet (weights) {
  let thePlateSet = {};

  thePlateSet.getPlates = function () {
    return weights.sort(function (a, b) { return b - a; });
  };
  thePlateSet.getHalfWeight = function () {
    return weights.reduce((acc, val) => acc + val, 0);
  }
  thePlateSet.getWeight = function () {
    return thePlateSet.getHalfWeight() * 2;
  }

  thePlateSet.equals = function (otherPlateSet) {
    const ps1 = thePlateSet.getPlates();
    const ps2 = otherPlateSet.getPlates();

    // compare lengths - can save a lot of time 
    if (ps1.length != ps2.length)
      return false;

    for (var i = 0, l=ps1.length; i < l; i++) {
      if (ps1[i] != ps2[i]) { 
        return false;   
      }           
    }       
    return true;
  };

  thePlateSet.toString = function () {
    return "Plates: " + thePlateSet.getPlates().join(', ');
  };

  return thePlateSet;
}

function powerset (ary) {
  var ps = [[]];
  for (var i=0; i < ary.length; i++) {
      for (var j = 0, len = ps.length; j < len; j++) {
          ps.push(ps[j].concat(ary[i]));
      }
  }
  return ps;
}

function deduplicatePlateSetSet (pss) {
  let deduped = [];
  let found = false;

  for (let i = 0; i < pss.length; i++) {
    found = false;
    for (let j = 0; j < deduped.length; j++) {
      if (pss[i].equals(deduped[j])) {
        found = true;
        break;
      }
    }
    if (!found) {
      deduped.push(pss[i]);
    }
  }
  
  return deduped;
}

function totalCombinations (plates) {
  const reducer = (accumulator, currentValue) => accumulator.concat(currentValue.getAvailablePlates());

  const allAvailablePlates = plates.reduce(reducer, []);

  const allWeightsWithRepeats = powerset(allAvailablePlates);
  const allPlateSetsWithRepeats = allWeightsWithRepeats.map(x => new PlateSet(x));

  const allPlateSetsUnique = deduplicatePlateSetSet(allPlateSetsWithRepeats);

  return allPlateSetsUnique;
}

function allPossibleBars (plates) {
  //plates.map()
  const allPlateSets = totalCombinations(plates);
  const sortedPlateSets = allPlateSets.sort(function(a, b) { return a.getWeight() - b.getWeight(); })

  for(let i = 0; i < sortedPlateSets.length; i++) {
    console.log("Weight: " + sortedPlateSets[i].getWeight() + " using " + sortedPlateSets[i].getPlates().join(', '));
  }
}