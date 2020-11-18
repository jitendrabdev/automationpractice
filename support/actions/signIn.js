import login from "../../pages/Login";
import credentials from "../../data/credentials";

export default email => {
	const password1 = credentials.find(creds => creds.email === email).password;
	login.signIn(email, password1);

};