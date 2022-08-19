function validate() {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const valid = regex.test($("#email").val());
  if (!valid) {
    $("#err-msg").css("visibility", "visible");
    $("#err").css("visibility", "visible");
    $("#email").focus();
    $("#submit-btn").hover();
  } else {
    $("#err-msg").css("visibility", "hidden");
    $("#err").css("visibility", "hidden");
  }
}
