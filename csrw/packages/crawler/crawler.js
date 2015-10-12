if (Meteor.isServer) {
	Meteor.methods({
		lookupUsername: function (arg) {
			var cheerio = Npm.require('cheerio');
			var request = Npm.require('request');
			var username = '';
			var url = '';
			if (arg.lastIndexOf('www.couchsurfing') !== -1) {
				url = arg;
				username = arg.slice(arg.lastIndexOf('people/') + 7, arg.length)
			} else {
				username = arg;
				url = 'https://www.couchsurfing.com/people/' + arg;
			}
			var async = Async.runSync(function(done) {
				HTTP.call('GET', url, function (err, res) {
					if (err) {
						done(err);
						return;
					}

					var $ = cheerio.load(res.content);
					console.log(res)
					done(null,{
						username: username,
						name: $('.box-header-title.mod-profile a').text(),
						location: $('.box-header-subtitle.mod-profile').text(),
						link: url,
						status: $('h1 .mod-large').first().text(),
						image: $('.box-image-image').attr('src')
					});
				});
			});
			return async.result;
		}
	});
}
