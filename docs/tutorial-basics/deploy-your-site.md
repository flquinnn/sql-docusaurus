---
sidebar_position: 4
---

# SQL ORDER BY Keyword


## The SQL ORDER BY

The **`ORDER BY`** keyword is used to sort the result-set in ascending or descending order.

```text title="Example"
---
SELECT * FROM Products
ORDER BY Price;
---
```

## Syntax

```bash
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

## DESC

The **`ORDER BY`** keyword sorts the records in ascending order by default. To sort the records in descending order, use the `DESC` keyword.

```bash
SELECT * FROM Products
ORDER BY Price DESC;
```

## Order Alphabetically

For string values the **`ORDER BY`**  keyword will order alphabetically:

```text title="Example"
---
SELECT * FROM Products
ORDER BY ProductName;
---
```
 
## ORDER BY Several Columns

The following SQL statement selects all customers from the "Customers" table, sorted by the "Country" and the "CustomerName" column. This means that it orders by Country, but if some rows have the same Country, it orders them by CustomerName:

```text title="Example"
---
SELECT * FROM Customers
ORDER BY Country, CustomerName;
---
```