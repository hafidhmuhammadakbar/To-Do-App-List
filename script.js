$(document).ready(function() {
  var countTodo = 0;
  var countDone = 0;
  $(".todoInput").on("keyup",function(e){
    if (e.keyCode == 13 && $(".todoInput").val() != "") {
      var add = $("<div class='todo hasCheck'></div>").text($(".todoInput").val());
      
      // add if adding in input
      countTodo += 1;
      $("#todoCount").text(countTodo);

      var del = $("<i class='bi bi-trash iconTrash'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          p.remove();
          if(p.hasClass("hasCheck")){
            countTodo -= 1;
            $("#todoCount").text(countTodo);
          }
          else{
            countDone -= 1;
            $("#doneCount").text(countDone);
          }
        });
      });

      var check = $("<i class='bi bi-check iconCheck'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          $(".doneBox").append(p);
          p.fadeIn();
        });
        $(this).remove();
        p.removeClass("hasCheck");
        
        countTodo -= 1;
        $("#todoCount").text(countTodo);

        countDone += 1;
        $("#doneCount").text(countDone);
      });

      add.append(del,check);
      $(".todoBox").append(add);
      //to clear the input
      $(".todoInput").val("");
    }
  })
})