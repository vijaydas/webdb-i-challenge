
### Write Basic Queries

Visit [SQL Try Editor at W3Schools.com](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top) using the **Google Chrome (or Chromium if you use Linux) browser** and write _SQL queries_ for the following requirements:

- find all customers that live in London. Returns 6 records.

SELECT * FROM Customers WHERE City = 'London';

- find all customers with postal code 1010. Returns 3 customers.

SELECT * FROM Customers WHERE PostalCode =  1010;

- find the phone number for the supplier with the id 11. Should be (010) 9984510.

SELECT Phone FROM Suppliers WHERE SupplierID = 11;

- list orders descending by the order date. The order with date 1997-02-12 should be at the top.

SELECT * FROM Orders ORDER BY OrderDate DESC;

- find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name. Returns 11 records.

SELECT * FROM Suppliers WHERE LENGTH(SupplierName) > 20;


- find all customers that include the word "market" in the name. Should return 4 records.

SELECT * FROM Customers WHERE CustomerName LIKE '%market%'

- add a customer record for _"The Shire"_, the contact name is _"Bilbo Baggins"_ the address is _"1 Hobbit-Hole"_ in _"Bag End"_, postal code _"111"_ and the country is _"Middle Earth"_.

INSERT into Customers(CustomerName, contactName, Address, City, PostalCode, Country)
values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');

- update _Bilbo Baggins_ record so that the postal code changes to _"11122"_.

UPDATE Customers set postalCode = '11122' where CustomerID = 92; 


** STRETCH
delete all customers that have no orders. Should delete 18 records.

list orders grouped by customer showing the number of orders per customer. Rattlesnake Canyon Grocery should have 7 orders.

list customers names and the number of orders per customer. Sort the list by number of orders in descending order. Ernst Handel should be at the top with 10 orders followed by QUICK-Stop, Rattlesnake Canyon Grocery and Wartian Herkku with 7 orders each.

list orders grouped by customer's city showing number of orders per city. Returns 58 Records with Aachen showing 2 orders and Albuquerque showing 7 orders.

**Clicking the `Restore Database` button in the page will repopulate the database with the original data and discard all changes you have made**.
