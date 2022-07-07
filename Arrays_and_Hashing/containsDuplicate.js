// Given an integer array (nums), return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * Approach 1
 * Time: O(n^2)
 * Space: O(1)
 */

// const containsDuplicate = function (nums) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; i < nums.length; j++) {
// 			if (nums[i] === nums[j]) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// };

/**
 * Approach 2
 * Time: O(n log n)
 * Space: O(1)
 */

// const containsDuplicate = function (nums) {
// 	nums.sort();

// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] === nums[i + 1]) {
// 			return true;
// 		}
// 	}

// 	return false;
// };

/**
 * Approach 3
 * Time: O(n)
 * Space: O(n)
 */

// const containsDuplicate = function (nums) {
// 	const numSet = new Set();

// 	for (const i of nums) {
// 		if (numSet.has(i)) {
// 			return true;
// 		}
// 		numSet.add(i);
// 	}
// 	return false;
// };

// let nums = [1, 2, 3, 1]; //true
// let nums = [1, 2, 3, 4]; //false
let nums = [0, 4, 5, 0, 3, 6]; //true

console.log(containsDuplicate(nums));
