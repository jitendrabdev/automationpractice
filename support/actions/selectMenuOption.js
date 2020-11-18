import home from "../../pages/Home";

export default option => {
	/**
 * Clicks a menu option
 *
 * @param {String} option  Name of the menu option to click
 */
	switch (option) {
		case "Women":
			home.womenMenuOption.click();
			break;
		case "Dresses":
			home.dressesMenuOption.click();
			break;
		case "T-Shirts":
			home.tshirtMenuOption.click();
			break;
		default:
			console.log('Invalid Option ${option}');
	}
};