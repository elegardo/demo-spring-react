package cl.elegardo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cl.elegardo.domain.User;

@RestController
@RequestMapping("/api/users")
public class GetUserController {

	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	public List<User> getUser() {
		List<User> listUsers = new ArrayList<User>();
		listUsers.add(new User("juan", "perez"));
		return listUsers;
	}
}
