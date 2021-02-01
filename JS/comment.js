var comment = [
{"name": "Look Haandirkman", "date": "31-1-2021", "body": "Dit is een comment"}
];

// A $( document ).ready() block.
$( document ).ready(function() {

  var html="";
  for (var i = 0; i<comment.length; i++) {
      html +=
        '<div class="commentBox">'+
          '<div class="leftPanelImg">'+
            '<img id="profile" src="img/noprofile.png" alt="Girl in a jacket" width="115px" height="110px">'+
          '</div>'+
          '<div class="rightPanel">'+
            '<p class="informatie">'+
              comment[i].name+
            '</p>'+
            '<div class="date">'+
              comment[i].date +
            '</div>'+
            '<p>'+
              comment[i].body+
            '</p>'+
          '</div>'+
          '<div class="clear"></div>' +
        '</div>';
      // html += '<div class="commentBox">'+
      //     '<div class="leftPanelImg"><img id="profile" src="img/noprofile.png" alt="Girl in a jacket" width="115px" height="110px"></div>'+
      //     '<div class="rightPanel">'+
      //       '<p class="informatie">Look Haandrikman</p>'+
      //       '<div class="date">31 Jan, 2021</div>'+
      //       '<p>Dit is een comment</p>'+
      //     '</div>'+
      //     '<div class="clear"</div>'+
      //   '</div> ';
  }
  $("#container").html(html);
});
