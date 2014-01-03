$(function($) {
  var rack = {
    methodSelectors: 'a[data-method]',
    confirmSelectors: 'a[data-confirm]',

    methodHandler: function() {
      var href = $(this).attr('href');
      var method = $(this).data('method');
      var target = $(this).attr('target') || 'self';
      var hasConfirm = $(this).data('confirm') != undefined;

      form = $('<form action="' + href + '" method="POST" target="' + target + '"></form>');
      form.append('<input type="hidden" name="_method" value="' + method + '"/>');

      if (hasConfirm) {
        if ($(this).data('answer')) {
          form.submit();
        }
      } else {
        form.submit();
      }

      return false;
    },

    confirmHandler: function() {
      var message = $(this).data('confirm');
      var answer = confirm(message);
      var hasMethod = $(this).data('method') != undefined;
      $(this).data('answer', answer);

      return answer && !hasMethod;
    }
  };

  $(document).on('ready', function() {
    $(rack.confirmSelectors).on('click', rack.confirmHandler);

    $(rack.methodSelectors).on('click', rack.methodHandler);
  });
}(jQuery));
