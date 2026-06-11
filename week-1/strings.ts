/*
1. Reverse words in a given string
Problem link: https://www.geeksforgeeks.org/reverse-words-in-a-given-string/
*/
const reverseWords = (sentence: string) => {
    const words = sentence.split(".");
    let reversedSentence: string[] = [];

    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        if (word !== "") reversedSentence.push(word);
    }

    return reversedSentence.join(".");
}

/*
2. Longest Common Prefix using Sorting
Problem link: https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/
*/

/*
3. Converting Roman Numerals to Integer
Problem link: https://www.geeksforgeeks.org/roman-number-to-integer/
*/
const romanToNumeral = (romanNum: string): number => {
    const ROMAN: Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let total = 0;
    let i = 0;

    while (i < romanNum.length) {
        if (ROMAN[romanNum[i]] < ROMAN[romanNum[i + 1]]) {
            total += ROMAN[romanNum[i + 1]] - ROMAN[romanNum[i]];
            i += 2;
        } else {
            total += ROMAN[romanNum[i]];
            i++;
        }
    }

    return total;
}

/*
4. Converting Decimal Number lying between 1 to 3999 to Roman Numerals
Problem link: https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/
*/

/*
5. Check if two given Strings are Isomorphic to each other
Problem link: https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/
*/

/*
6. Check if given String is Pangram or not
Problem link: https://www.geeksforgeeks.org/pangram-checking/
*/
const isPangram = (sentence: string): boolean => {
    const charFreq: Map<string, number> = new Map();
    for (let char of sentence) {
        const lowercaseChar = char.toLowerCase();
        if (lowercaseChar >= "a" && lowercaseChar <= "z") {
            charFreq.set(lowercaseChar, charFreq.has(lowercaseChar) ? charFreq.get(lowercaseChar)! + 1 : 1);
        } 
    }

    return charFreq.size === 26;
}

/*
7. Count Distinct Subsequences
Problem link: https://www.geeksforgeeks.org/count-distinct-subsequences/
*/

/*
8. Program to validate an IP address
Problem link: https://www.geeksforgeeks.org/program-to-validate-an-ip-address/
*/

/*
9. Find largest word in dictionary by deleting some characters of given string
Problem link: https://www.geeksforgeeks.org/find-largest-word-dictionary-deleting-characters-given-string/
*/

/*
10. Multiply Large Numbers represented as Strings
Problem link: https://www.geeksforgeeks.org/multiply-large-numbers-represented-as-strings/
*/