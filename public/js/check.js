$('#tab-faculty').DataTable({
  responsive: true,
  lengthChange: false,
  autoWidth: false,
  language: {
    url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json',
  },
  // buttons: [
  //     {
  //         text: "Thêm mới",
  //         action: function (e, dt, node, config) {
  //             window.location.href = "/faculty/add";
  //         },
  //     },
  // ],
});

$('.btn-a').click(function (e) {
  var ID = $(this).data('username');

  $("#checkModal input[name='username']").val(ID);

  $('#checkModal').modal('show');
});

$('.btn-fee').click(function (e) {
  var ID = $(this).data('id');
  var classID = $(this).data('class');

  $("#feeModal input[name='id']").val(ID);
  $("#feeModal input[name='classID']").val(classID);

  $('#feeModal').modal('show');
});
