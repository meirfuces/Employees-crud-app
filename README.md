# Employees-crud-app
CheckPoint Task


 ### Api
 
 Get:
 
 "http://localhost:8090/AllEmployees"
 
get all Employees from sql


"http://localhost:8090/get_employee_with_email/{email}"

get employee with email equal to the email param

Post:

"http://localhost:8090/add_employee"

add employee to sql 

Put:

"http://localhost:8090/update"

update exist emplyoee"

Delete

"http://localhost:8090/delete/{id}"

delete employee with id equal to id param


Task Description:

We would like to develop a web application that maintain a list of employees. 

The application allows the user to:

View the list of existing employees. The list should display the Employee ID, Employee First name, Employee Last Name, Employee Email
Add new employee
Update existing employee
 

Your Task

Your task is to develop a small web application that demonstrates the above requirements.

To perform the task, you need to:

Setup a database table that can store the data. It could be on MS-SQL or mySQL.
Create Employees table with the following fields: ID , First name, Last Name and Email.
Create API that support:
Get all employees.
Get employee by email.
Update employee.
Insert employee.
Create a web page that performs that displays relevant data, and uses API created in step #3(using React, HTML5 and CSS ).
In case you run out of time - Create POSTMAN collection that demonstrates API calls instead.
Timetable

The task should be ready before the second interview meeting.

 

Requirements

The server side should be written in JAVA.

I recommend using spring boot in your server side..

