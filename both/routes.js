Router.configure({
  layoutTemplate: 'ApplicationLayout',
  notFoundTemplate: 'error404'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/projects', function () {
  this.render('Projects');
});
