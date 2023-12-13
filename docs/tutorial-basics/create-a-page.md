---
sidebar_position: 6
---
# SQL UPDATE Statement

## The SQL UPDATE Statement

The `UPDATE` statement is used to modify the existing records in a table.

**UPDATE Syntax**

```
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## UPDATE Table

The following SQL statement updates the first customer (CustomerID = 1) with a new contact person and a new city.

```text title="Example"
---
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
---
```

## UPDATE Multiple Records

It is the `WHERE` clause that determines how many records will be updated.

The following SQL statement will update the ContactName to "Juan" for all records where country is "Mexico":

```text title="Example"
---
UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico';
---
```