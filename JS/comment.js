
function render(data) {
  var html=
  '<div class="commentBox">'+
    '<div class="leftPanelImg">'+
      '<img id="profile" src="img/noprofile.png" alt="Girl in a jacket" width="115px" height="110px">'+
    '</div>'+
    '<div class="rightPanel">'+
      '<p class="informatie">'+
        data.name+
      '</p>'+
      '<div class="date">'+
        new Date() +
      '</div>'+
      '<p>'+
        data.body+
      '</p>'+
    '</div>'+
    '<div class="clear"></div>' +
  '</div>';
    $("#container").append(html);
}
$( document ).ready(function() {



var comment = [
{"name": "Look Haandrikman", "body": "Hey, Dit is een voorbeeld van een comment!"}
];


  for (var i = 0; i<comment.length; i++) {
      // html +=
      render(comment[i]);
  }

  $("#addComment").click(function(){
    var addObj = {
        "name": $("#name").val(),
        "body": $("#text").val()
    };

    comment.push(addObj);
    render(addObj);
    $("#name").val(' ');
    $("#text").val(' ');

  })

});
