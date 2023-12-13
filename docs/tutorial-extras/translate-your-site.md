---
sidebar_position: 2
---

# SQL References

This SQL keywords reference contains the reserved words in SQL.

## SQL Keywords

| Keywords         | Meaning                                       |
| ---------------- | --------------------------------------------- | 
| ADD              | Adds a column in an existing table            | 
| ADD CONSTRAINT`  | Adds a constraint after table is created      |
| ALL              | True if all ofsubquery values meet condition  |

## MySQL Functions

MySQL has many built-in functions.

This reference contains string, numeric, date, and some advanced functions in MySQL.

### MySQL String Functions

- `ASCII`	- Returns the ASCII value for the specific character
- `CHAR_LENGTH`	- Returns the length of a string (in characters)
- `CHARACTER_LENGTH` - Returns the length of a string (in characters)
- `CONCAT` -	Adds two or more expressions together
- `CONCAT_WS`-	Adds two or more expressions together with a separator
- `FIELD` -	Returns the index position of a value in a list of values
- `FIND_IN_SET` -	Returns the position of a string within a list of strings
- `FORMAT` -	Formats a number to a format like "#,###,###.##", rounded to a specified number of decimal places

### MySQL Numeric Functions


| Keywords         | Meaning                                       |
| ---------------- | --------------------------------------------- | 
| ABS              | Returns the absolute value of a number        | 
| ACOS             | Returns the arc cosine of a number            |
| ASIN             | Returns the arc sine of a number              |
| ATAN             |Returns the arc tangent of one or two numbers |


### MySQL Date Functions

- `ADDDATE`	- Adds a time/date interval to a date and then returns the date
- `ADDTIME`	- Adds a time interval to a time/datetime and then returns the time/datetime
- `CURDATE`	- Returns the current date
- `CURRENT_DATE` - Returns the current date
- `CURRENT_TIME` - Returns the current time
- `CURRENT_TIMESTAMP`	- Returns the current date and time
- `CURTIME`	- Returns the current time
- `DATE` - Extracts the date part from a datetime expression
- `DATEDIFF` - Returns the number of days between two date values
- `DATE_ADD` - Adds a time/date interval to a date and then returns the date
- `DATE_FORMAT`	- Formats a date
- `DATE_SUB` - Subtracts a time/date interval from a date and then returns the date
- `DAY`	- Returns the day of the month for a given date
- `DAYNAME`	- Returns the weekday name for a given date
- `DAYOFMONTH` - Returns the day of the month for a given date

## SQL Server Functions

SQL Server has many built-in functions.

This reference contains string, numeric, date, conversion, and some advanced functions in SQL Server.

### SQL Server String Functions

- `ASCII` -	Returns the ASCII value for the specific character
- `CHAR` - Returns the character based on the ASCII code
- `CHARINDEX` - Returns the position of a substring in a string
- `CONCAT` - Adds two or more strings together
Concat with +	Adds two or more strings together
- `CONCAT_WS` - 	Adds two or more strings together with a separator
- `DATALENGTH` - Returns the number of bytes used to represent an expression
- `DIFFERENCE` - Compares two SOUNDEX values, and returns an integer value
- `FORMAT` - Formats a value with the specified format
- `LEFT` - Extracts a number of characters from a string (starting from left)

### SQL Server Date Functions

- `CURRENT_TIMESTAMP`	- Returns the current date and time
- `DATEADD`	- Adds a time/date interval to a date and then returns the date
- `DATEDIFF` - Returns the difference between two dates
- `DATEFROMPARTS`	Returns a date from the specified parts (year, month, and day values)
- `DATENAME` - Returns a specified part of a date (as string)
- `DATEPART` - Returns a specified part of a date (as integer)
- `DAY` - Returns the day of the month for a specified date
- `GETDATE`	- Returns the current database system date and time
- `GETUTCDATE` - Returns the current database system UTC date and time
- `ISDATE` - Checks an expression and returns 1 if it is a valid date, otherwise 0
