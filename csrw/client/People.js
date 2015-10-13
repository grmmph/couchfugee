/**
 * People Class
 */

People.lookupUsername = function (username, callback) {
	Session.set('People.lookupUsername.notFound', false);
	Session.set('People.lookupUsername.alreadyExist', false);

	if (People.findOne({username: username})) {
		Session.set('People.lookupUsername.alreadyExist', true);
		callback();
		return;
	}

	Meteor.call('lookupUsername', username, function(err, res) {
		if(err) {
			console.log(err);
			return;
		}

		if (!res || !res.name) {
			res = undefined;
			Session.set('People.lookupUsername.notFound', true);
		}
		callback();
		Session.set('People.lookupUsername.return', res);
	});
	return Session.get('People.lookupUsername.return');
}

People.isValidPerson = function (person) {
	if (!_.isObject(person)) {
		console.log('Not Object!');
		return;
	}

	if (!_.isString(person.name)) {
		console.log('Person must have a name!');
		return;
	}

	if (People.findOne({username: person.username})) {
		console.log('person exist already!');
		return;
	}

	return true;
}

People.addPerson = function (person, callback) {
	if (!People.isValidPerson(person)) {
		return;
	}

	People.insert(person, function (err, res) {
		callback();
	});
}

People.findHosts = function (query) {
	return People.find({location : {$regex : query, $options:"i"} }).fetch()
};