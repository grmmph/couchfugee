Meteor.subscribe('people');

Session.setDefault('Add.containerOpen', false);

Template.add.helpers({
	username: function () {
	  return Session.get('People.lookupUsername.return');
	},
	isPersonAdded: function () {
		if (!Session.get('People.addPerson.success')) {
			return;
		}
		return true;
	},
	personAlreadyExist: function () {
		return Session.get('People.lookupUsername.alreadyExist');
	},
	isLoading: function () {
		console.log(Session.get('Add.isLoading'))
		return Session.get('Add.isLoading');
	}
});

Template.add.rendered = function () {
	$('#add-profile-input').focus();
}

Template.add.events({
	'keyup #add-profile-input': _.debounce(function(evt) {
		Session.set('Add.isLoading', true);
		People.lookupUsername($(evt.target).val(), function () {
			Session.set('Add.isLoading', false);
		})
	},600),
	'click #add-confirm': function() {
		People.addPerson(Session.get('People.lookupUsername.return'), function () {
			Session.set('People.lookupUsername.return', null);
			Session.set('People.addPerson.success', true);
		});
	}
});