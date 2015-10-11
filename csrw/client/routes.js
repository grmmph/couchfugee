Meteor.subscribe('people');

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('results', {
		path: '/',
	    template: 'results'
	});
	this.route('add', {
		path: '/add',
	    template: 'results',
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