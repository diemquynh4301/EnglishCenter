$('#form-add-user').submit(function (e) {
  e.preventDefault();

  // Write code to check if student id is existed!
  // Camel case
  var username = $("input[name='username']").val();
  var form = $(this);

  // AJAX
  $.post('/login/checkId', { username: username }, function (data, status) {
    if (data.status == 'FOUND') alert('Đã tồn tại tên đăng nhập này này!');
    else form.unbind('submit').submit();
  });
});
