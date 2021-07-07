$("#btn1").click(function(){
    console.log("added");
   const add = document.createElement("input");
   add.setAttribute("type","text");
   $(".plus").append(add);
   $("#save").click(function(){
      const mover = $(".move").append(add);
      const mover1 = $(".move").append('<button id ="btn2">Remove</button>');
      const mover2 = $(".plus").remove(add);
   
   $("#btn2").click(function(){
       console.log("clicking remove");
       $(".move").empty();
    //   $(this).parent().remove;
      // const rem1 = $("#btn2").closest("button").remove;
   })
})
 })
