var entries = [];

function Entry (opts) {
  this.sitename = opts.sitename;
  this.siteUrl = opts.siteUrl;
  this.description = opts.description;
}

Entry.prototype.toHtml = function() {
  var template = Handlebars.compile($('#entry-template').text());
  return template(this);
};

entryData.forEach(function(ele) {
  entries.push(new Entry(ele));
});

entries.forEach(function(a) {
  $('#entries').append(a.toHtml());
});
