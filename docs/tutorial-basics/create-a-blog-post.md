---
sidebar_position: 2
---

# SQL SELECT Statement

## The SQL SELECT Statement

The **`SELECT`** statement is used to select data from a database.

```
Return data from the Customers table:
---
SELECT CustomerName, City FROM Customers;
---

Congratulations, you have made a Select statement!
```
## Syntax
```
SELECT column1, column2, ...
FROM table_name;
```
Here, column1, column2, ... are the field names of the table you want to select data from.

The table_name represents the name of the table you want to select data from.

## Select ALL columns
```
Return all the columns from the Customers table:
---
SELECT * FROM Customers;
---
