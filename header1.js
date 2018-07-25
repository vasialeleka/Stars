$('document').ready(function (){




  $('#Test').on("click",function(){

Clean();
Testing();



  });




  $('#StarSky').on("click",function(){

     Clean();
     $('#top').css("margin-right","auto");
     $('#top').css("margin-left","auto");
     document.querySelector("#img").innerHTML=(" <img id='img' src='Map.png'> ");

  });







  $('#BigBear').on("click",function(){

    Clean();
    var article = articles[0];
    general(article.name,article.text);

 });






  $("#LittleBear").on("click",function(){
document.querySelector("#top").innerHTML=(" ");
    var article = articles[1];
    general(article.name,article.text);

  });





$('#navbarDropdownMenuLink').dblclick(function(){
  //alert("1");
Clean();
 for(var i=0;i<articles.length;i++){
   var article=articles[i];
   general(article.name,article.text)
 }

});





$("#Cassiopeia").on("click",function(){
  Clean();
      var article = articles[2];
      general(article.name,article.text);

});



$("#testans").on("click","#check",function(){//$('#staticParent').on('click', '.dynamicElement', function() {

  Checking();

});






    function Clean(){
      document.querySelector("#testans").innerHTML=(" ");
      document.querySelector("#img").innerHTML=("");
      document.querySelector("#top").innerHTML=(" ");
    };






    function general(name,text){
//document.querySelector("#testans").innerHTML=(" ");
        document.querySelector("#top").innerHTML+=('<div class="col-md-4" ><img id=""  src=" "class="img"></div>'+
        '</div><div class="col-md-8"><ul class="list-group">'+
          '  <li class="list-group-item list-group-item-dark">'+name+'</li>'+
        '<li class="list-group-item">'+text+'</li></div>');

    };




  function Testing(){
      $('#testans').css("margin-top","-5%");

         for (var i=0;i<questions.length;i++){
              var question = questions[i];
         document.querySelector("#testans").innerHTML+=('<div class="col-1" ></div>'+
            '<div class="col-10"><ul class="list-group">'+
            '  <li class="list-group-item list-group-item-dark">'+question.text+'</li>'+
           '<li id="ans'+i+'" class="list-group-item">');
               for (var j in question.answers){
                   document.querySelector("#ans"+i).innerHTML+=("<input class='answ' id='id"+i+j+"' type ='radio' value='"+i+j+"' name="+i+">"+question.answers[j]+"<br>");

              }
          document.querySelector("#testans").innerHTML+=('</li>');
         document.querySelector("#testans").innerHTML+=('</div><div class="col-1" ></div>');
         };
        document.querySelector("#testans").innerHTML+=('<input type="button" id="check" class="btn btn-info" value="Result">');
   };




function Checking(){

  alert("1");
}




})
