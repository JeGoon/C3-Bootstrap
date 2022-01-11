$(document).ready(function() {

  let teller = 0;

  $("*#submit").click(function() {


    if (this.parentNode.id == "form") {
      RegexCheck(1);
    }

    console.log(teller);
    
    if(teller == 5) {
      console.log("OK!");
      //trigger modal
      $('#myModal').modal('toggle');
      $('#myModal').modal('show');
    } else {
      //doe niks
    }

    $("#refreshButton").click(function(){
      location.reload();
    });
  });


  function RegexCheck(input) {

    let naamRegex = new RegExp(/^[A-z]*\s?[A-z]*?$/);
    let achternaamRegex = new RegExp(/^[A-z]{2,}\s?[A-z]{2,}\s?[A-z]{2,}\s?[A-z]{2,}$/);
    let adresRegex = new RegExp(/[A-z][a-z]*\s[0-9]{1,4}/);
    let postcodeRegex = new RegExp(/[1-9][0-9]{3}\s?[A-Z]{2}/);
    let woonplaatsRegex = new RegExp(/^[A-Za-z]+$/);


    if(input == 1) {
      var naam = $("#fname").val();
      console.log("Voornaam: " + naam);
      var achternaam = $("#lname").val();
      console.log("Achternaam: " + achternaam);
      var adres = $("#adress").val();
      var postcode = $("#postcodee").val();
      var woonplaats = $("#place").val();


      if(!naamRegex.test(naam) || naam == "") {
        $("#fname").css("background-color", "red");
        alert("Uw naam is incorrect");
        // $("#mijnModal").hide();
      } else {
        $("#fname").css("background-color", "#61ff36");
        teller += 1;
        // $("#mijnModal").show();
      }


      if(!achternaamRegex.test(achternaam) || achternaam == "") {
        $("#lname").css("background-color", "red");
        alert("Uw achternaam is incorrect");
        // $("#mijnModal").hide();
      } else {
        $("#lname").css("background-color", "#61ff36");
        teller += 1;
        // $("#mijnModal").show();
      }


      if(!adresRegex.test(adres) || adres == "") {
        $("#adress").css("background-color", "red");
        alert("Uw adres is incorrect");
        // $("#mijnModal").hide();
      } else {
        $("#adress").css("background-color", "#61ff36");
        teller += 1;
        // $("#mijnModal").show();
      }

      if(!postcodeRegex.test(postcode) || postcode == "") {
        $("#postcodee").css("background-color", "red");
        alert("Uw postcode is incorrect");
        // $("#mijnModal").hide();
      } else {
        $("#postcodee").css("background-color", "#61ff36");
        teller += 1;
        // $("#mijnModal").show();
      }

      if(!woonplaatsRegex.test(woonplaats) || woonplaats == "") {
        $("#place").css("background-color", "red");
        alert("Uw plaats is incorrect");
        // $("#mijnModal").hide();
      } else {
        $("#place").css("background-color", "#61ff36");
        teller += 1;
        // $("#mijnModal").show();
      }







    }

    event.preventDefault();
  }
});
