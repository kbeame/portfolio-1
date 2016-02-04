var entries = [];

function Entry (opts) {
  this.sitename = opts.sitename;
  this.siteUrl = opts.siteUrl;
  this.description = opts.description;
}

Entry.prototype.toHtml = function() {

  // var $newEntry = $('article.template').clone();
  // var newSiteLink = '<a href="' + this.siteUrl + '">' + this.sitename + '</a>';
  // $newEntry.find('h1').html(newSiteLink);
  // $newEntry.find('.site-desc').html(this.description);
  // $newEntry.append('<hr>');
  // $newEntry.removeClass('template');

  var template = Handlebars.compile($('#entry-template').text());
  return template(this);



  // return $newEntry;
};

entryData.forEach(function(ele) {
  entries.push(new Entry(ele));
});

entries.forEach(function(a) {
  $('#entries').append(a.toHtml());
});
