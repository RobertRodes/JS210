Problem definition rules:

1. Encrypt strings using a substitution cipher. Only characters in the Modern English
   Alphabet are encrypted.

2. The substitution cipher replaces each qualifying plaintext character with 
   the character 13 characters forward from it in the alphabet. If a character
   is fewer than 13 characters from the end of the alphabet, the count wraps around
   to the beginning (a) and continues from there. For example: A encrypts to N, 
   O encrypts to B.

3. Encrypted characters retain the case of the plaintext.

4. Characters not in the Modern English Alphabet are left in plaintext.

Implementation:

1. Create a function rot13(string), where string is a plaintext string to be encrypted.

2. The function returns a new string, encrypted in accordance with the above rules.

Algorithm:

1. Input argument is a plaintext string to be encrypted.

2. Create constants ALPHABET, containing the characters of the alphabet in 
   lower case, and CIPHER_OFFSET, which is the number of characters to offset
   encrypted text, in this case 13.

3. Assign the input, transformed to lower case, to a variable (strLower).

4. Create a variable to hold the encrypted result to be returned, initialized 
   to an empty string.

5. Use a for loop to iterate the characters in strLower. For each character:

   a. Look up the character's index in ALPHABET; store the result in a 
      variable.

   b. If the index is not found (the index lookup returns -1, meaning the 
      character is not in the Modern English Alphabet): 
      1) Add the plaintext character directly to the result variable.
      2) Continue with the next character (skip steps c through e).

   c. Calculate the encrypted lower case character, using the formula
      CIPHER_OFFSET % ALPHABET.length, or 13 % 26. Assign the result to a
      variable (nextChar).

   d. If the plaintext character (in the input string) at the current position 
      is upper case, transform the encrypted character to upper case as well.

   e. Add the encrypted character to the result variable.

6. Return the result variable.
