const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample (sampleActivity) {
  const zero = 0;
  if (typeof(sampleActivity) === "string") {
	  let sampleActivityNumber = parseFloat(sampleActivity);
	  if (!isNaN(sampleActivityNumber) && sampleActivityNumber > zero && sampleActivityNumber < MODERN_ACTIVITY) {
		  const ln2 = 0.693;
		  let k = ln2 / HALF_LIFE_PERIOD;
		  let t = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivityNumber)) / k);
		  return t;
	  } else {
		  return false;
	  }
  } else {
	  return false;
  }
  
};
