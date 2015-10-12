Template.results.helpers({
	resultsEmpty: function () {
		if (!this.results) {
			return;
		}
		return !this.results.length;
	}
});
