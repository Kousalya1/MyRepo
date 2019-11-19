$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Home.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: kousalyakanikannan@gmail.com"
    }
  ],
  "line": 2,
  "name": "Conduit Application - Home Page",
  "description": "",
  "id": "conduit-application---home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33321501600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Sign in to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Your feed should get loaded if available",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Sign_in_to_the_application()"
});
formatter.result({
  "duration": 1131122800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.Your_feed_should_get_loaded_if_available()"
});
formatter.result({
  "duration": 2848127500,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Like Your feed",
  "description": "",
  "id": "conduit-application---home-page;like-your-feed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Click on the like button, should be able to like the feed",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on the like button again, should be able to dislike the feed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Click_on_the_like_button()"
});
formatter.result({
  "duration": 13024606500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.Click_on_the_like_button_to_dislike()"
});
formatter.result({
  "duration": 13051886700,
  "status": "passed"
});
formatter.after({
  "duration": 175566900,
  "status": "passed"
});
formatter.before({
  "duration": 28778667600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Sign in to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Your feed should get loaded if available",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Sign_in_to_the_application()"
});
formatter.result({
  "duration": 835378400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.Your_feed_should_get_loaded_if_available()"
});
formatter.result({
  "duration": 1780909900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Comment on Your feed",
  "description": "",
  "id": "conduit-application---home-page;comment-on-your-feed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Click on the read more link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Post a comment as \"Nice Article!\" and ensure it is posted",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Delete the comment and ensure it is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Click_on_the_read_more_link()"
});
formatter.result({
  "duration": 13230292900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Read more...\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-60T950Q4\u0027, ip: \u0027192.168.43.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\KOUSALYA\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55430}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8fa33f62e8eefa94a42a67afeb5c3cc9\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Read more...\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat PageObjects.HomePage.clickReadMoreLink(HomePage.java:163)\r\n\tat StepDefinition.StepDefinitions.Click_on_the_read_more_link(StepDefinitions.java:147)\r\n\tat ✽.When Click on the read more link(Home.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nice Article!",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.Write_a_comment_and_post(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.delete_the_comment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 80650300,
  "status": "passed"
});
formatter.before({
  "duration": 15998969900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I Sign in to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Your feed should get loaded if available",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Sign_in_to_the_application()"
});
formatter.result({
  "duration": 936712200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.Your_feed_should_get_loaded_if_available()"
});
formatter.result({
  "duration": 2012510900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check the Global feed",
  "description": "",
  "id": "conduit-application---home-page;check-the-global-feed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I click on the Global feed link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Global feed should get loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.I_click_on_the_Global_feed_link()"
});
formatter.result({
  "duration": 76484600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.Global_feed_should_get_loaded()"
});
formatter.result({
  "duration": 19457900,
  "status": "passed"
});
formatter.after({
  "duration": 98347600,
  "status": "passed"
});
