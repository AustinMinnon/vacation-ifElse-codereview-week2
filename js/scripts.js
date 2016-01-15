$(document).ready(function(){
  $("form#questions").submit(function(event) {
    var social = $("select#social").val();
    var region = $("select#region").val();
    var activity = $("select#activity").val();
    var age = $("select#age").val();
    var gender = $("select#gender").val();
      if (social === "solo") {
        $("#cancunid").show();
        }else if (social === "date") {
          $("#parisid").show();
        }else if (social === "fam") {
          $("#orlandoid").show();
        }
event.preventDefault()
    });
      });

        ;
