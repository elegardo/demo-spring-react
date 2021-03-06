package demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import demo.domain.User;

@RestController
@RequestMapping("/api/users")
public class GetUserController {

	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	public List<User> getUser() {
		List<User> listUsers = new ArrayList<User>();
		listUsers.add(new User("Name1", "Lastname1"));
                listUsers.add(new User("Name2", "Lastname2"));
                listUsers.add(new User("Name3", "Lastname3"));
                listUsers.add(new User("Name4", "Lastname4"));
                listUsers.add(new User("Name5", "Lastname5"));
		return listUsers;
	}
}
