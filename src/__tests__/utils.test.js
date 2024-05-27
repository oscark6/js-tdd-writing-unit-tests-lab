// Your tests here
import { isPalindrome } from "../utils";

test('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
  
  test('returns true for a palindrome with mixed case', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });
  
  test('throws an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('hello123')).toThrow('Input must only contain alphabetic characters');
  });
  
  test('throws an error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });