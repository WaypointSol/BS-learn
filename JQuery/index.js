$("document").ready(function () {
  $("h1").text("goodbye");
  
  $("button").click(function(){
    $("h1").css("color", "purple");
  });

  
  $("a").attr("href", "https://bing.com");

  $("input").keydown(function(event){
    console.log(event.key);
    $("h1").text(event.key);
  });

});
