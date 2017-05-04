$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Annotation/outline.feature");
formatter.feature({
  "line": 1,
  "name": "annotation",
  "description": "",
  "id": "annotation",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This us how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Then "
});
formatter.match({
  "location": "annotations.user_navigates_to_Facebook()"
});
formatter.result({
  "duration": 6046506235,
  "status": "passed"
});
formatter.match({
  "location": "annotations.i_am_on_Facebook_login_page()"
});
formatter.result({
  "duration": 22518,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "#Scenaria with AND"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "id": "annotation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I enter username as \"TOM\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"JERRY\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "page should close",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM",
      "offset": 21
    }
  ],
  "location": "annotations.i_enter_username_as(String)"
});
formatter.result({
  "duration": 114671712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY",
      "offset": 21
    }
  ],
  "location": "annotations.i_enter_password_as(String)"
});
formatter.result({
  "duration": 1490394872,
  "status": "passed"
});
formatter.match({
  "location": "annotations.login_should_fail()"
});
formatter.result({
  "duration": 26049955,
  "status": "passed"
});
formatter.match({
  "location": "annotations.page_should_close()"
});
formatter.result({
  "duration": 2088560523,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This us how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Then "
});
formatter.match({
  "location": "annotations.user_navigates_to_Facebook()"
});
formatter.result({
  "duration": 3916273844,
  "status": "passed"
});
formatter.match({
  "location": "annotations.i_am_on_Facebook_login_page()"
});
formatter.result({
  "duration": 13827,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#Scenario with BUT"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "annotation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I enter username as \"TOM\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password as \"JERRY\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Relogin option should be available",
  "keyword": "But "
});
formatter.step({
  "line": 21,
  "name": "page should close",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM",
      "offset": 21
    }
  ],
  "location": "annotations.i_enter_username_as(String)"
});
formatter.result({
  "duration": 91942643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY",
      "offset": 21
    }
  ],
  "location": "annotations.i_enter_password_as(String)"
});
formatter.result({
  "duration": 2986652850,
  "status": "passed"
});
formatter.match({
  "location": "annotations.login_should_fail()"
});
formatter.result({
  "duration": 11159695,
  "status": "passed"
});
formatter.match({
  "location": "annotations.relogin_option_should_be_available()"
});
formatter.result({
  "duration": 48868702,
  "status": "passed"
});
formatter.match({
  "location": "annotations.page_should_close()"
});
formatter.result({
  "duration": 198525473,
  "status": "passed"
});
});