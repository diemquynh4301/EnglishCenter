$('.btn-edit').click(function (e) {
  var id = $(this).data('id');
  var name = $(this).data('name');
  var phone = $(this).data('phone');
  var email = $(this).data('email');

  $("#inforModal input[name='id']").val(id);
  $("#inforModal input[name='name']").val(name);
  $("#inforModal input[name='phone']").val(phone);
  $("#inforModal input[name='email']").val(email);

  $('#inforModal').modal('show');
});
