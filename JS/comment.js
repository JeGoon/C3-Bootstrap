$(document).ready(function(){
  $("#commentButton").click(function(){
    let invoer = $("#cname").val();
    vak1.push(invoer+"<br>");

      $("#vak1").html(vak1);
});
