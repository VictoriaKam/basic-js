function getClass(obj) {
	return {}.toString.call(obj).slice(8, -1);
}

module.exports = function getSeason(date) {
  if (typeof(date) === 'undefined') {
	  return "Unable to determine the time of year!";
  } else if (getClass(date) === "Date") {
	  let month = date.getMonth();
	  if (month === 11 || month === 0 || month === 1) {
		  return 'winter';
	  } else if (month === 2 || month === 3 || month === 4) {
		  return 'spring';
	  } else if (month === 5 || month === 6 || month === 7) {
		  return 'summer';
	  } else {
		  return 'autumn';
	  }
  } else {
	  throw new Error();
  }
  
};
