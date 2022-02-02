package com.app.controllers;

import com.app.model.Employee;
import com.app.sqlconnection.MysqlConnect;
//import org.springframework.stereotype.Controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedList;
import java.util.List;
//@Controller
public class EmployeesController {
	public List<Employee> getEmployees_sql(String query) {
		LinkedList<Employee> list_of_employees = new LinkedList<>();
		try {
			MysqlConnect a = new MysqlConnect();
			Connection ab = a.connect();
			Statement st = ab.createStatement();
			ResultSet rs = st.executeQuery(query);

			while (rs.next()) {
				int id = rs.getInt("id");
				String firstName = rs.getString("firstName");
				String lastName = rs.getString("lastName");

				String email = rs.getString("Email");
				Employee employee = new Employee(id, firstName, lastName, email);
				list_of_employees.add(employee);
				// print the results
				System.out.format("%s, %s, %s, %s\n", id, firstName, lastName, email);
			}
		} catch (
				Exception e) {
			System.out.println(e);
		}
		return list_of_employees;

	}

	public List<Employee> getEmployees() {

		String query = "Select * from employees;";
		List<Employee> list_of_employees = getEmployees_sql(query);
		return list_of_employees;
	}

	public boolean addEmployee(Employee employee) {
		try {
			MysqlConnect a = new MysqlConnect();
			Connection ab = a.connect();

			String query = String.format("insert into employees values ('%s','%s','%s','%s')"
					, employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getEmail());
			Statement st = ab.createStatement();
			st.executeUpdate(query);
			return true;

		} catch (Exception e) {
			System.err.println("error: " + e.getMessage());
			return false;
		}

	}

	public List<Employee> get_employee_with_email(String email) {
		String query = String.format("Select * from employees where email ='%s'", email);
		List<Employee> list_of_employees = getEmployees_sql(query);
		return list_of_employees;
	}

	public boolean updateEmployee(Employee employee) {

		String query = String.format("UPDATE employees SET firstName = '%s', lastName='%s',Email = '%s' where id = %s"
				, employee.getFirstName(), employee.getLastName(), employee.getEmail(), employee.getId());
		try {
			MysqlConnect a = new MysqlConnect();
			Connection ab = a.connect();


			Statement st = ab.createStatement();
			st.executeUpdate(query);
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
	}

	public boolean deleteEmployee(String id) {
		try {
			MysqlConnect a = new MysqlConnect();
			Connection ab = a.connect();

			String query = String.format("DELETE FROM employees WHERE id ='%s'"
					, id);
			Statement st = ab.createStatement();
			st.executeUpdate(query);
			return true;

		} catch (Exception e) {
			System.err.println("error: " + e.getMessage());
			return false;
		}
	}
}
