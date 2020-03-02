module.exports = function countCats(backyard) {
        let cats = 0;
	for (let i=0; i < backyard.length; i++) {
		for (let m=0; m < backyard[i].length; m++) {
			if (backyard[i][m] === '^^') {
				cats++;
			}
		};
	}
	return cats;
			
};
