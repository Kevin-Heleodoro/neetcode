/**
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 * Approach 1:
 * Time:O(n)
 * Space: O(1)
 */

// const isAnagram = function (s, t) {
// 	let letterObj1 = {};
// 	let letterObj2 = {};

// 	if (s.length !== t.length) {
// 		return false;
// 	}

// 	for (let i = 0; i < s.length; i++) {
// 		if (!letterObj1[s[i]]) {
// 			letterObj1[s[i]] = 1;
// 		} else {
// 			letterObj1[s[i]] += 1;
// 		}
// 	}

// 	for (i = 0; i < t.length; i++) {
// 		if (!letterObj2[t[i]]) {
// 			letterObj2[t[i]] = 1;
// 		} else {
// 			letterObj2[t[i]] += 1;
// 		}
// 	}

// 	for (let a in letterObj1) {
// 		if (letterObj2[a] !== letterObj1[a]) {
// 			return false;
// 		}
// 	}

// 	return true;
// };

/**
 * Approach 2
 * Time: O(s + t)
 * Space: O(s)
 */

// const isAnagram = function (s, t) {
// 	let map = {};

// 	if (s.length !== t.length) {
// 		return false;
// 	}

// 	for (let i = 0; i < s.length; i++) {
// 		if (map[s[i]]) {
// 			map[s[i]]++;
// 		} else {
// 			map[s[i]] = 1;
// 		}
// 	}

// 	for (let i = 0; i < t.length; i++) {
// 		if (map[t[i]]) {
// 			map[t[i]]--;
// 		} else {
// 			return false;
// 		}
// 	}

// 	return true;
// };

/**
 * Approach 3:
 * Time: O()
 * Space: O()
 */

const isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	s = s.split('').sort().join('');
	t = t.split('').sort().join('');

	return s === t;
};

// let s = 'anagram',
// 	t = 'nagaram'; //true

let s = 'rat',
	t = 'car'; // false

// let s = 'a',
// 	t = 'ab'; //false

// let s = 'ab',
// 	t = 'a'; // false

console.log(isAnagram(s, t));
