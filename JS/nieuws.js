$(document).ready(function(){   
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myDIV .itemBox").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)     
      });
    });

    $('.list').click(function(){
      console.log("hello");
      const value = $(this).attr('data-filter');

      if (value == 'all') {
        $('.itemBox').show('1000')
      }else {
        $('.itemBox').not('.'+value).hide('1000');
        $('.itemBox').filter('.'+value).show('1000');
      }
    }); 

    $('.list').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

  });