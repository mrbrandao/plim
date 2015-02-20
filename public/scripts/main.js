$(document).ready(function() {
  $('.device input').change(function () {
    var did = $(this).attr('id').split("-")[2]

    $.ajax({
      type: 'POST',
      url: '/device/' + did + '/toggle'
    })
      .done(function (device) {
        if (device.on) {
          $(this).attr('checked', 'checked')
        } else {
          $(this).removeAttr('checked')
        }
      });
  })
})
