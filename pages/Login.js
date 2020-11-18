class Login {
	get url() {
		return "?controller=authentication";
	}
	get emailInput() {
		return $("#email");
	}
	get passwordInput() {
		return $("#passwd");
	}
	get signInButton() {
		return $("#SubmitLogin");
	}
	get signOutButton() {
		return $("#header > div.nav > div > div > nav > div:nth-child(2) > a");
	}
	/**
	 * 
	 * @param {string} email - Email
	 * @param {string} password - paswword
	 * */

	signIn(email, password) {
		this.emailInput.waitForDisplayed(5000);
		this.emailInput.setValue(email);
		this.passwordInput.setValue(password);
		this.signInButton.click();
		//this.signOutButton.click();

	}
}
module.exports = new Login();