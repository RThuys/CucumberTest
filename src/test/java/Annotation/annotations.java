package Annotation;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class annotations {

	WebDriver driver;

	@Given("^User navigates to Facebook$")
	public void user_navigates_to_Facebook() {
		driver = new ChromeDriver();
		driver.navigate().to("http://www.Facebook.com");
	}

	@Then("^I am on Facebook login page$")
	public void i_am_on_Facebook_login_page() {

	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String name) {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("email")).sendKeys(name);
	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String paswd) {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("pass")).sendKeys(paswd);
		driver.findElement(By.id("u_0_s")).click();
	}

	@Then("^Login should fail$")
	public void login_should_fail() {
		Assert.assertEquals("https://www.facebook.com/login.php?login_attempt=1&lwv=110", driver.getCurrentUrl());

	}

	@Then("^Relogin option should be available$")
	public void relogin_option_should_be_available() {
		// Write code here that turns the phrase above into concrete actions
		Assert.assertTrue(driver.findElement(By.id("loginbutton")).isDisplayed());
		// System.out.println(driver.findElements(By.id("loginbutton")));
		// Assert.assertEquals("loginbutton", test);

	}

	@Then("^page should close$")
	public void page_should_close() {
		driver.close();
	}

}
