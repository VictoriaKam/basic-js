module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let solution = {
	    turns: 0,
	    seconds: 0
    };
	let turnsCalc = Math.pow(2, disksNumber) - 1;
	let secondsCalc = turnsCalc / (turnsSpeed / 3600);
	solution.turns = turnsCalc;
	solution.seconds = secondsCalc;
	return solution;
}
