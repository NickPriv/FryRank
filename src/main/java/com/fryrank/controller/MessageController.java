package com.fryrank.controller;

import com.fryrank.Constants;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @GetMapping("/welcome")
    public String getWelcomeMessage() {
        return Constants.WELCOME_MESSAGE;
    }
}
