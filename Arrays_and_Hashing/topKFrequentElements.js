/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

/**
 * Approach 1
 * Time: O()
 * Space: O()
 */

// const topKFrequent = function (nums, k) {
// 	let map = {};

// 	for (let n in nums) {
// 		if (map[nums[n]]) {
// 			map[nums[n]] += 1;
// 		} else {
// 			map[nums[n]] = 1;
// 		}
// 	}

// 	let result = [];
// 	let counter = 0;

// 	while (counter < k) {}

// 	return map;
// };

/**
 * Approach 2 - Bucket Sort
 * Time: O(n)
 * Space: O(n)
 */

const topKFrequent = function (nums, k) {
	let map = new Map();
	let res = [];
	let bucket = new Array(nums.length + 1);

	for (let n of nums) {
		map.set(n, map.has(n) ? 1 + map.get(n) : 1);
	}

	for (let [key, value] of map.entries()) {
		if (!Array.isArray(bucket[value])) {
			bucket[value] = [];
		}

		bucket[value].push(key);
	}

	for (let i = bucket.length - 1; i >= 0; i--) {
		if (Array.isArray(bucket[i])) {
			for (let n of bucket[i]) {
				res.push(n);

				if (res.length === k) {
					return res;
				}
			}
		}
	}
};

let nums = [1, 1, 1, 2, 2, 3],
	k = 2;
// Output: [1,2]

// let nums = [1], k = 1
// Output: [1]

console.log(topKFrequent(nums, k));
