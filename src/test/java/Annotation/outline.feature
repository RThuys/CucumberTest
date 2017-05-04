Feature: annotation
#This us how background can be used to eliminate duplicate steps

Background:
	Given User navigates to Facebook
	Then I am on Facebook login page
	
#Scenaria with AND
Scenario:
	When I enter username as "TOM"
	And I enter password as "JERRY"
	Then Login should fail
	Then page should close
	
#Scenario with BUT
Scenario:
	When I enter username as "TOM"
	And I enter password as "JERRY"
	Then Login should fail
	But Relogin option should be available
	Then page should close