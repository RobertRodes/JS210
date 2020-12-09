 For some "further exploration," I thought it might be interesting to allow 
the user to vary the number of characters to rotate, and to have the option
of rotating in reverse. I came up with this modified solution.

Problem definition rules: 

1. Encrypt strings using a substitution cipher. Only characters in the Modern 
   English Alphabet are encrypted.

2. Caller provides the number of characters to rotate by, and whether to rotate
   forwards or backwards.

3. The substitution cipher replaces each qualifying plaintext character with 
   the character x characters from it in the alphabet, where x is the number of 
   characters specified by the caller; whether x characters forward or backward
   from the original plaintext character is also specified by the caller. If a 
   character is fewer than x characters from the end (or beginning, if reverse 
   is specified) the count wraps around to the beginning (a) (or end (z) if 
   reverse is specified) and continues from there. For example, with 5 
   rotations and no reverse, A encrypts to F and X encrypts to C. With 5 
   rotations and reverse specified, Z encrypts to U and B encrypts to W.

4. Encrypted characters retain the case of the plaintext.

5. Characters not in the Modern English Alphabet are left in plaintext.

Implementation:

1. Create a function rotAny(string, count, reverse = false), where string is a 
   plaintext string to be encrypted, count is the number characters to offset
   the encrypted text, and reverse is whether to rotate forwards or backwards.
   Default value for reverse is false, meaning rotate forwards.

2. The function returns a new string, encrypted in accordance with the above rules.

3. Create a helper function rotateString(string, count, reverse = false). The 
   arguments are as in 1 above. This function will be called by rotAny(), with
   the arguments passed in that were passed to rotAny(). 

Algorithms:

rotAny()

1. Input arguments are as in paragraph 1 in the Implementation section.

2. Create constants ALPHABET, containing the characters of the alphabet in 
   lower case.

3. Create a variable to hold the encrypted result.

4. Call rotateString(), passing the string, count and reverse arguments
   provided by the caller. Store the return value in a variable 
   (rotatedAlphabet).

5. Use a for loop to iterate the characters in strLower. For each character:

   a. Look up the character's index in ALPHABET; use the result as the 
      index for the encrypted character equivalent in the rotatedAlphabet
      string. Store rotatedAlphabet[x] in a variable (nextChar), where x
      is the result of the index lookup in ALPHABET.

   b. If the index is not found in ALPHABET (the lookup returns -1),
      rotatedAlphabet[-1] (which is undefined) will be assigned to nextChar.
      In this case (if nextChar === undefined), the current character is not
      in the Modern English Alphabet, so add the plaintext character from
      the current iteration (of strLower) directly to the result variable.

   c. Otherwise (i.e. the index is found in ALPHABET) nextChar will be
      assigned the current encrypted plaintext character in lower case. 
      Check next whether the plaintext character (in the input string) at 
      the current position is upper case. If it is, transform nextChar to 
      upper case as well.

   d. Add the encrypted character to the result variable.

6. Return the result variable.

rotateString()

1. Input arguments are as in paragraph 1 in the Implementation section (i.e. the
   same as rotAny() ).

2. Split the input string into an array, one element for each character, and
   store the result in a variable.

3. Use a for loop to iterate through the array, continuing for as many 
   iterations as are specified in the count argument. For each iteration:

   a. If reverse is specified (reverse === true), pop the last element from 
      the array and unshift it onto the beginning.

   b. If reverse is not specified, shift the first element from the array
      and push it onto the end.

4. Join the result back into a string and return the string.