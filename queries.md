# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select CategoryName, p.ProductName
from categories as c
inner join products as p on c.CategoryID = p.CategoryID
group by c.CategoryId, p.ProductName

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select OrderID, OrderDate, s.ShipperName
from Orders as o
inner join Shippers as s on o.ShipperID = s.ShipperID
where o.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, o.Quantity
from Products as p
inner join OrderDetails as o on o.OrderID = 10251
limit 3

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select LastName as 'Employee Last Name', o.OrderID as 'Order ID', c.CustomerName as 'Customer Name'
from Employees as e, Customers as c
inner join Orders as o on o.EmployeeID = e.EmployeeID
group by o.OrderID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
