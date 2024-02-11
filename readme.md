## This project validates a mastercard using regex expressions

For a number to be a valid mastercard number, it must satisfy these conditions:

It should be 16 digits long.
It should start with either two digits numbers may range from 51 to 55 or four digits numbers may range from 2221 to 2720.
If it starts with 51 to 55, the next fourteen digits should be any number between 0-9.
Else, if it starts with 2221 to 2720, the next twelve digits should be any number between 0-9.
It should not contain any alphabet or special characters.

# This is how i created the regex
# for the first regex

^ represents the starting of the string.

5[1-5] represents the first two-digit number may range from 51 to 55.

[0-9]{14} represents the next fourteen digits should be any between 0-9.

 $ represents the ending of the string.


# For the second regex:

^ represents the starting of the string.

222[1-9] represents the first four-digit number may range from 2221 to 2229.
| represents the or.

22[3-9]\\d represents the first four-digit number that may range from 2230 to 2299.
| represents the or.

2[3-6]\\d{2} represents the first four-digit number may range from 2300 to 2699.
| represents the or.

27[0-1]\\d represents the first four-digit number may range from 2700 to 2719.
| represents the or.

2720 represents the first four-digit may start with 2720.


[0-9]{12} represents the next twelve digits should be any between 0-9.

 $ represents the ending of the string.