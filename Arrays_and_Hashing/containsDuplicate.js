// Given an integer array (nums), return true if any value appears at least twice in the array, and return false if every element is distinct.

// let nums = [1, 2, 3, 1]; //true
// let nums = [1, 2, 3, 4]; //false
let nums = [0, 4, 5, 0, 3, 6]; //true

const containsDuplicate = function (nums) {
	const numSet = new Set();

	for (const i of nums) {
		if (numSet.has(i)) {
			return true;
		}
		numSet.add(i);
	}
	return false;
};

console.log(containsDuplicate(nums));
