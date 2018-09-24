window.onload = function() {
  var result = $('#result');

  $('.js-form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);

    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
      dataType: 'json',
    }).done((data) => {
      $('<li>')
        .html("名前:" + data.name + " パスワード:" + data.password)
        .appendTo(result);
    }).fail((data) => {
      console.log(data);
    });
  });
};
