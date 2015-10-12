Meteor.subscribe('people');

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('main', {
		path: '/',
	    template: 'main'
	});

	this.route('results', {
		path: '/results/:location',
	    template: 'results',
	    data: function () {
	    	return {
	    		location: this.params.location,
	    		results: People.findHosts(this.params.location)
	    	}
	    }

	});

	this.route('add', {
		path: '/add',
	    template: 'main',
	    data: function () {
	    	return {
	    		add: true
	    	}
	    }
	});
	this.route('why', {
		path: '/why',
	    template: 'why',
	   	data: function () {
	    	return {
	    		smallHero: true
	    	}
	    }
	});
});