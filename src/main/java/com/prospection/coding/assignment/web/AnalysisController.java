package com.prospection.coding.assignment.web;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/analyse") // must start with "/api/" so that front-end app can talk to
public class AnalysisController {

    @PostMapping(consumes = MediaType.TEXT_PLAIN_VALUE)
    public Object analyse(@RequestBody(required = false) String text) {
        // TODO: Modify to complete API
        return null;
    }
}
