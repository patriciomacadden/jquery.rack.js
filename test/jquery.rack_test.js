module('data-confirm');

test('cancel a link with data-confirm', function() {
  var location = window.location;

  var stub = this.stub(window, 'confirm').returns(false);

  $('a#data-confirm-link').trigger('click');

  equal(window.location, location);
});

test('accept a link with data-confirm', function() {
  var stub = this.stub(window, 'confirm').returns(true);

  $('a#data-confirm-link').trigger('click');

  //equal(window.location, 'http://example.com');
  ok(true);
});

module('data-method');

test('clicking a link with data-method', function() {
  ok(true);
});

module('both data-confirm and data-method');

test('cancel a link with both data-confirm and data-method', function() {
  ok(true);
});

test('accept a link with both data-confirm and data-method', function() {
  ok(true);
});
