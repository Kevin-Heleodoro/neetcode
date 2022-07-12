/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * Approach 1:
 * Time: O(n)
 * Space: O(n)
 */

const productExceptSelf = function (nums) {
	let result = [];

	let product = 1;
	for (let i = 0; i < nums.length; i++) {
		result[i] = product;
		product *= nums[i];
	}
	console.log(result);

	product = 1;
	for (let j = nums.length - 1; j >= 0; j--) {
		result[j] *= product;
		product *= nums[j];
	}

	return result;
};

// let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

let nums = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]

console.log(productExceptSelf(nums));
