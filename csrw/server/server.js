Meteor.publish('people', function () {
  return People.find();
});
