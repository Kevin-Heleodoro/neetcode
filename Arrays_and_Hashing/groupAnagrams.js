/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 * Approach 1:
 * Time: O(n^2) ** I believe because of the sort method **
 * Space: O(n)
 */

// const groupAnagrams = function (strs) {
// 	const anagramKeeper = {};

// 	for (let word in strs) {
// 		let current = strs[word];
// 		let sortedWord = current.split('').sort().join('');

// 		if (anagramKeeper[sortedWord]) {
// 			anagramKeeper[sortedWord].push(current);
// 		} else {
// 			anagramKeeper[sortedWord] = [current];
// 		}
// 	}

// 	let result = [];

// 	for (let key in anagramKeeper) {
// 		result.push(anagramKeeper[key]);
// 	}

// 	return result;
// };

/**
 * Approach 2:
 * Time: O(n * max(w))
 * Space: O(n * max(w))
 */

const CODES = {
	a: 0,
	b: 1,
	c: 2,
	d: 3,
	e: 4,
	f: 5,
	g: 6,
	h: 7,
	i: 8,
	j: 9,
	k: 10,
	l: 11,
	m: 12,
	n: 13,
	o: 14,
	p: 15,
	q: 16,
	r: 17,
	s: 18,
	t: 19,
	u: 20,
	v: 21,
	w: 22,
	x: 23,
	y: 24,
	z: 25,
};

function groupAnagrams(words) {
	const map = Object.create(null);

	for (const word of words) {
		const hash = hashWord(word);

		if (!(hash in map)) {
			map[hash] = [];
		}
		map[hash].push(word);
	}

	const groups = [];

	for (const key in map) {
		groups.push(map[key]);
	}

	return groups;
}

function hashWord(word) {
	const hash = new Array(26).fill(0);

	for (const char of word) {
		++hash[CODES[char]];
	}

	return hash.toString();
}

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// [["bat"],["nat","tan"],["ate","eat","tea"]]

// let strs = [''];
// Output: [[""]]

console.log(groupAnagrams(strs));
