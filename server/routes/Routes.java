package com.app.routes;

import java.sql.Connection;

import java.util.List;

import com.app.controllers.EmployeesController;
import com.app.model.Employee;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@EnableJpaRepositories
@RestController
public class Routes {
	Connection conn;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/AllEmployees")
	public ResponseEntity<List<Employee>> get_all_employee() {

		List<Employee> ans = new EmployeesController().getEmployees();
		return new ResponseEntity<>(ans, HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/get_employee_with_email/{email}")
//	@RequestMapping("/{email}")

	public ResponseEntity<List<Employee>> get_employee_with_email(@PathVariable("email") String email_var) {

		List<Employee> ans = new EmployeesController().get_employee_with_email(email_var);
		System.out.println("get_employee_with_email");
		return new ResponseEntity<>(ans, HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add_employee")
	public ResponseEntity<String> add_employee(@RequestBody Employee employee) {
		if (new EmployeesController().addEmployee(employee))
			return new ResponseEntity("The employee added", HttpStatus.OK);
		else {
			return new ResponseEntity("add employee fail", HttpStatus.BAD_REQUEST);
		}
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/update")
	public ResponseEntity<String> update_employee(@RequestBody Employee employee) {
		if (new EmployeesController().updateEmployee(employee))
			return new ResponseEntity("The employee update", HttpStatus.OK);
		else {
			System.err.println("error update fail");
			return new ResponseEntity("update employee fail", HttpStatus.BAD_REQUEST);
		}
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete_employee(@PathVariable("id") String id) {
		if (new EmployeesController().deleteEmployee(id))
			return new ResponseEntity("The employee delete", HttpStatus.OK);
		else {
			return new ResponseEntity("delete employee fail", HttpStatus.BAD_REQUEST);
		}
	}
}
