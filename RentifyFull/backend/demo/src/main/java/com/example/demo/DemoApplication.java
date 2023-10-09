package com.example.demo;


import io.github.cdimascio.dotenv.Dotenv;
import io.github.cdimascio.dotenv.DotenvBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		// Load environment variables from .env file
		Dotenv dotenv = new DotenvBuilder().ignoreIfMissing().load();

		// Set the environment variables
		System.setProperty("url", dotenv.get("url"));
		System.setProperty("user", dotenv.get("user"));
		System.setProperty("password", dotenv.get("password"));

		SpringApplication.run(DemoApplication.class, args);
	}

}
