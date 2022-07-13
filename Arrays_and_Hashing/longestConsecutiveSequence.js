/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
 */

/**
 * Approach 1
 * Time: O(n)
 * Space: O(n)
 */

// function longestConsecutive(nums) {
// 	if (nums == null || nums.length === 0) return 0;

// 	const set = new Set(nums);
// 	let max = 0;

// 	for (let num of set) {
// 		if (set.has(num - 1)) continue; // make sure starting from the beginning of sequence

// 		let currNum = num;
// 		let currMax = 1;

// 		while (set.has(currNum + 1)) {
// 			currNum++;
// 			currMax++;
// 		}
// 		max = Math.max(max, currMax);
// 	}

// 	return max;
// }

/**
 * Approach 2 - Hash Map
 * Time: O(n)
 * Space: O(n)
 * Does 1 pass over `nums` array
 */

// const longestConsecutive = function (nums) {
// 	if (!nums.length) {
// 		return 0;
// 	}

// 	const map = {};
// 	let max = 0;

// 	for (const n of nums) {
// 		if (n in map) {
// 			continue;
// 		}

// 		let prev = n - 1;
// 		let next = n + 1;
// 		let len = 1;

// 		if (prev in map) {
// 			if (next in map) {
// 				len += map[prev] + map[next];
// 				map[prev - map[prev] + 1] = len;
// 				map[next + map[next] - 1] = len;
// 			} else {
// 				len += map[prev];
// 				++map[prev - map[prev] + 1];
// 			}
// 		} else if (next in map) {
// 			len += map[next];
// 			++map[next + map[next] - 1];
// 		}

// 		map[n] = len;
// 		max = Math.max(max, len);
// 	}

// 	return max;
// };

/**
 * Approach 3 - Hash Set
 * Time: O(n)
 * Space: O(n)
 * Does 3 passes over `nums` array.
 */

const longestConsecutive = function (nums) {
	const set = new Set(nums);
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		let n = nums[i];

		if (set.has(n - 1)) {
			continue;
		}

		let currentMax = 1;
		while (set.has(n + currentMax)) {
			currentMax++;
		}

		if (currentMax > max) {
			max = currentMax;
		}
	}

	return max;
};

// let nums = [100, 4, 200, 1, 3, 2];
// Output: 4

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9

console.log(longestConsecutive(nums));
