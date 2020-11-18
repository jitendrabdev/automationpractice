Feature: Login
  As a user, I want to be able to login to my account to
  view account details

Scenario Outline: Attempting to login with valid credentials;
	Given the browser is at the "Login" page
	When the user tries to use valid credentials, "<email>" to login
	Then the title of the page should be "My account - My Store"

	@dev
	Examples:
		| email                             |
		| jitendra_automation_dev@gmail.com |

	@int
	Examples:
		| email                             |
		| jitendra_automation_int@gmail.com |