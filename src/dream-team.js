function getClass(obj) {
	return {}.toString.call(obj).slice(8, -1);
}

module.exports = function createDreamTeam(array) {
  if (getClass(array) === "Array") {
	  let team = [];
	  for (let i = 0; i < array.length; i++) {
		  if (getClass(array[i]) === "String") {
			  team.push(array[i].trim()[0].toUpperCase());
		  }
	  }
	  return team.sort().join('');
  } else {
	  return false;
  }
};
