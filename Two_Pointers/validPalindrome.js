/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * Approach 1
 * Time: O()
 * Space: O()
 */

const ALPHA_NUM = /^[a-zA-Z0-9]$/;

const isPalindrome = function (s) {
	let l = 0;
	let r = s.length - 1;

	while (l < r) {
		while (l < r && !ALPHA_NUM.test(s[l])) {
			l++;
		}
		while (l < r && !ALPHA_NUM.test(s[r])) {
			r--;
		}

		if (s[l].toLowerCase() !== s[r].toLowerCase()) {
			return false;
		}

		l++;
		r--;
	}

	return true;
};

let s = 'A man, a plan, a canal: Panama';
// Output: true

// let s = "race a car"
// Output: false

// let s = " "
// Output: true

console.log(isPalindrome(s));
