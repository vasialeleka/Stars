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



  $('#NorthCrown').on("click",function(){

    Clean();
    var article = articles[3];
    general(article.photo,article.name,article.text);

 });
 $('#Virgo').on("click",function(){

   Clean();
   var article = articles[4];
   general(article.photo,article.name,article.text);

});

$('#twins').on("click",function(){

  Clean();
  var article = articles[5];
  general(article.photo,article.name,article.text);

});
$('#Vodol').on("click",function(){

  Clean();
  var article = articles[6];
  general(article.photo,article.name,article.text);

});
$('#Volopas').on("click",function(){

  Clean();
  var article = articles[7];
  general(article.photo,article.name,article.text);

});
$('#hitchhiking').on("click",function(){

  Clean();
  var article = articles[8];
  general(article.photo,article.name,article.text);

});
$('#Vodol').on("click",function(){

  Clean();
  var article = articles[6];
  general(article.photo,article.name,article.text);

});
$('#Capricornus').on("click",function(){

  Clean();
  var article = articles[9];
  general(article.photo,article.name,article.text);

});

$('#Lion').on("click",function(){

  Clean();
  var article = articles[10];
  general(article.photo,article.name,article.text);

});

$('#Lira').on("click",function(){

  Clean();
  var article = articles[11];
  general(article.photo,article.name,article.text);

});

$('#Cygnus').on("click",function(){

  Clean();
  var article = articles[12];
  general(article.photo,article.name,article.text);

});

$('#Aries').on("click",function(){

  Clean();
  var article = articles[13];
  general(article.photo,article.name,article.text);

});

$('#Aquila').on("click",function(){

  Clean();
  var article = articles[14];
  general(article.photo,article.name,article.text);

});

$('#Orion').on("click",function(){

  Clean();
  var article = articles[15];
  general(article.photo,article.name,article.text);

});

$('#Pegasus').on("click",function(){

  Clean();
  var article = articles[16];
  general(article.photo,article.name,article.text);

});

$('#Perseus').on("click",function(){

  Clean();
  var article = articles[17];
  general(article.photo,article.name,article.text);

});

$('#Cancer').on("click",function(){

  Clean();
  var article = articles[18];
  general(article.photo,article.name,article.text);

});
$('#fih').on("click",function(){

  Clean();
  var article = articles[19];
  general(article.photo,article.name,article.text);

});

$('#Scorpion').on("click",function(){

  Clean();
  var article = articles[20];
  general(article.photo,article.name,article.text);

});
$('#Sagittarius').on("click",function(){

  Clean();
  var article = articles[21];
  general(article.photo,article.name,article.text);

});

$('#Libra').on("click",function(){

  Clean();
  var article = articles[22];
  general(article.photo,article.name,article.text);

});

$('#Taurus').on("click",function(){

  Clean();
  var article = articles[23];
  general(article.photo,article.name,article.text);

});

$('#CanisMajor').on("click",function(){

  Clean();
  var article = articles[24];
  general(article.photo,article.name,article.text);

});

$('#CanisLittle').on("click",function(){

  Clean();
  var article = articles[25];
  general(article.photo,article.name,article.text);

});


$('#BigBear').on("click",function(){

    Clean();
    var article = articles[0];
    general(article.photo,article.name,article.text);

 });

  $("#LittleBear").on("click",function(){
document.querySelector("#top").innerHTML=(" ");
    var article = articles[1];
    general(article.photo,article.name,article.text);

  });

$('#navbarDropdownMenuLink').dblclick(function(){
  //alert("1");
Clean();
 for(var i=0;i<articles.length;i++){
   var article=articles[i];
   general(article.photo,article.name,article.text)
 }

});

$("#Cassiopeia").on("click",function(){
  Clean();
      var article = articles[2];
      general(article.photo,article.name,article.text);
 console.log(article.name);
 console.log(article.text);
 console.log(article.photo);
});


$("#testans").on("click","#check",function(){//$('#staticParent').on('click', '.dynamicElement', function() {

  Checking();

});

$("#img").on("click","#secondTest",function(){

  Clean();
  Testing();

});

$("#testans").on("click","#return",function(){

  Clean();
  Testing();

});


$("#img").on("click","#rightanswer",function(){
  Clean();
  allanswers();
});


    function Clean(){
        $('#testans').css("border","none");
      $("#testans").html(" ");
    //  document.querySelector("#img").innerHTML=("");
    $("#img").html("");
    $("#top").html(" ");
    };


    function general(photo,name,text){
//document.querySelector("#testans").innerHTML=(" ");
        document.querySelector("#top").innerHTML+=('<div class="col-lg-4" ><img id="photo"  src="'+photo+' " class="img-fluid"></div>'+
        '</div><div class="col-lg-8"><ul class="list-group">'+
          '  <li class="list-group-item list-group-item-dark">'+name+'</li>'+
        '<li class="list-group-item">'+text+'</li></div>');
 //document.querySelector("#photo").src = photo;
 console.log(document.querySelector("#photo").src);
    };



  function Testing(){
    $('#testans').css("border","none")
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
              $("#testans").html +=('</li>')
        //  document.querySelector("#testans").innerHTML+=('</li>');
         document.querySelector("#testans").innerHTML+=('</div><div class="col-1" ></div>');
         };
        document.querySelector("#testans").innerHTML+=('<input type="button" id="check" class="btn btn-info" value="Result">');
   };

   function Checking(){

  alert("1");
var score =0;
var number = questions.length;
   for (var i=0; i<questions.length;i++){
      var question = questions[i];
        for (var j in question.answers){
        if ($("#id"+i+j).prop("checked")){
           if (   $("#id"+i+j+":checked").val() == question.correctAnswer  ){
              score+=1;
             alert("True")}
           else {
             alert("False")
        };
      };
   };
  };


Clean();
$('#testans').css("margin-top","-5%");
$('#testans').css("margin-right","1%");
  var x =score/number;
  //switch (True) {
  //  case ( x>=0.75):
  //alert("1");
    //  break;
  //  case (x<0.75 && x>0.4):
  //  alert("2");
   //break;

  // case (x<=0.4):
  // alert("3");
  // break;

  //default:
      //   alert("none");
      //   break;

  //}

     if ( x>=0.75  ){$('#testans').css("border","2px solid green");} else
     if (x<0.75 && x>=0.4){$('#testans').css("border","2px solid orange")} else
       if (x<0.74 ){$('#testans').css("border","2px solid red");}

     $('#testans').css("padding","1%");
       document.querySelector("#testans").innerHTML+=("<h4>Ви маєте правильних відповідей : "+score+" з "+number+" питань</h4>");
   document.querySelector("#img").innerHTML+=('<br><input type="button" id="secondTest" class="btn btn-info" value="Пройти ще раз">');
    document.querySelector("#img").innerHTML+=('<input type="button" id="rightanswer" class="btn btn-info" value="Правильні відповіді">');

 $('#secondTest').css("width","35%");
 $('#secondTest').css("margin-right","20%");
 $('#secondTest').css("margin-left","5%");
  $('#rightanswer').css("width","35%");
  $('#rightanswer').css("margin-right","5%");

};


function allanswers(){

  for (var i=0; i<questions.length;i++){
     var question = questions[i];


 document.querySelector("#testans").innerHTML+=('<div class="col-1" ></div>'+
 '<div class="col-10">'+
 '<ul class="list-group">'+
       '<li class="list-group-item">'+question.text+'</li>'+
     ' <li id="ans'+i+'" class="list-group-item list-group-item-success"></li>'+
     '</div><div class="col-1" ></div>');
   for (var j in question.answers) {
     if (i+j==question.correctAnswer){
           document.querySelector("#ans"+i).innerHTML+=(question.answers[j]);

       }
     };
 }
  document.querySelector("#testans").innerHTML+=('<input type="button" id="return" class="btn btn-info" value="Повернутися до тесту"></div>');

  $('#return').css("width","35%");
  $('#return').css("margin-top","2%");
  $('#return').css("margin-right","32.5%");
  $('#return').css("margin-left","32.5%");
};





})
