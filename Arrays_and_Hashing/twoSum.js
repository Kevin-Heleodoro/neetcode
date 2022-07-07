/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

/**
 * Approach 1:
 * Time: O(n^2)
 * Space: O(n)
 */

// const twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// };

/**
 * Approach 2
 * Time: O(n)
 * Space: O(n)
 */

const twoSum = function (nums, target) {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		let difference = target - nums[i];

		if (target - nums[i] in map) {
			return [map[difference], i];
		} else {
			map[nums[i]] = i;
		}
	}
};

let nums = [2, 7, 11, 15],
	target = 9; // [0,1]

console.log(twoSum(nums, target));
