$('.btn-confirm').click(function (e) {
  var ID = $(this).data('id');

  $("#confirmModal input[name='ID']").val(ID);

  $('#confirmModal').modal('show');
});
