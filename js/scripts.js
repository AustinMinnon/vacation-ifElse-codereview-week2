$(document).ready(function(){
  $("form#questions").submit(function(event) {
    var social = $("select#social").val();
    var region = $("select#region").val();
    var activity = $("select#activity").val();
    var age = $("select#age").val();
    var gender = $("select#gender").val();
      if (social === "solo") {
        $("#cancunid").show();
event.preventDefault()
    };
      });

        });
