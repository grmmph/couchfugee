Template.results.helpers({
	results: function () {
		return Session.get('Search.results');
	},
	resultsEmpty: function () {
		if (!Session.get('Search.results')) {
			return;
		}
		return !Session.get('Search.results').length;
	}
});
