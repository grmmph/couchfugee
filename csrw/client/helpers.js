Template.registerHelper('getFirstname', function (name) {
	if (!name) {
		return;
	}
	return name.slice(0, name.indexOf(' '));
})