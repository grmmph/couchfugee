Session.setDefault('Add.containerOpen', false);

Template.hero.helpers({
	addContainerHide: function () {
		if (this.add) {
			return ''
		}
		return 'hide';
	},
	heroHeight: function () {
		if (this.smallHero) {
			return;
		}
		if (this.add) {
			return Session.get('UI.heroSize');
		}
		if (this.results) {
			return;
		}
		return Session.get('UI.heroSize');
	},
	hasResultsClass: function () {
		if (this.add) {
			return ''
		}
		if (this.results) {
			return 'has-results';
		} else {
			return '';
		}
	},
	hasSmallClass: function () {
		if (!this.small) {
			return ''
		}
		return 'is-small';
	},
	hasAddClass: function () {
		if (this.add) {
			return 'has-add'
		}
		return '';
	}
});

Template.hero.rendered = function () {
	Session.set('UI.heroSize', $(window).height() + 'px')
	$(window).resize(function () {
		Session.set('UI.heroSize', $(window).height() + 'px')
	});
	$('#search-input').focus();
}

Template.hero.events({
	'focus #search-input' : function () {
		Router.go('/');
	},
	'keyup #search-input' : _.debounce(function(evt) {
		var val = $(evt.target).val();
		if (!val) {
			Router.go('/');
			return;
		}
		Router.go('results', {location: val});
	}, 600)
});