---
sidebar_position: 1
---

# SQL Database


## The SQL CREATE DATABASE Statement

The **`CREATE DATABASE statement`** is used to create a new SQL database.

**Syntax**


```bash
CREATE DATABASE databasename;
```


#### CREATE DATABASE Example

The following SQL statement creates a database called "testDB":

```text title="Example"
---
CREATE DATABASE testDB;
---
```

## The SQL DROP DATABASE Statement

The **`DROP DATABASE`** statement is used to drop an existing SQL database.

**Syntax**

```bash
DROP DATABASE databasename;
```

:::note

Be careful before dropping a database. Deleting a database will result in loss of complete information stored in the database!

:::

#### DROP DATABASE Example

The following SQL statement drops the existing database "testDB":

```text title="Example"
---
DROP DATABASE testDB;
---
```

:::tip

Make sure you have admin privilege before dropping any database. Once a database is dropped, you can check it in the list of databases with the following SQL command: 'SHOW DATABASES';

:::

## The SQL BACKUP DATABASE Statement

The **`BACKUP DATABASE`** statement is used in SQL Server to create a full back up of an existing SQL database.

**Syntax**

```bash
BACKUP DATABASE databasename
TO DISK = 'filepath';
```

#### The SQL BACKUP WITH DIFFERENTIAL Statement

A differential back up only backs up the parts of the database that have changed since the last full database backup.

**Syntax**

```bash
BACKUP DATABASE databasename
TO DISK = 'filepath'
WITH DIFFERENTIAL;
```

## BACKUP DATABASE Example

The following SQL statement creates a full back up of the existing database "testDB" to the D disk:

```text title="Example"
---
BACKUP DATABASE testDB
TO DISK = 'D:\backups\testDB.bak';
---
```
:::tip

Always back up the database to a different drive than the actual database. Then, if you get a disk crash, you will not lose your backup file along with the database.

:::
