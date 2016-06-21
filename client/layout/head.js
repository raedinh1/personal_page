Meteor.startup(function() {
  if (Meteor.isClient) {
    return SEO.config({
      title: 'Parthiban Loganathan',
      meta: {
        'description': "Parthi's node on the world wide web."
      },
      og: {
        'title': 'Parthiban Loganathan'
      }
    });
  }
});
