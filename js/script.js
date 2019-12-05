let ballArray = ["ball1_8.png","ball1_8.png","ball1_9.png","ball1_9.png","ball1_8.png","ball1_8.png","ball1_9.png","ball1_9.png"];
let inc = 0;
function countBalls(e){
  
  var elem_left = e.target.offsetLeft;
  var elem_top = e.target.offsetTop;
  var Xinner = (e.pageX - elem_left) - 25;
  var Yinner = (e.pageY - elem_top) - 25;
  if( inc > ballArray.length - 1){
    inc = 0;
  }
     $('#content').append('<img class="pic" style="top:' + Yinner+ 'px; left: ' + Xinner + 'px;" src="' + ballArray[inc] + '" alt="шарик"/>');
     inc++
}

$('document').ready(function(){
$('#content').click(function(e){
  
  // положение элемента
  var pos = $(this).offset();
  var elem_left = pos.left;
  var elem_top = pos.top;
  // положение курсора внутри элемента
  var Xinner = e.pageX - elem_left;
  var Yinner = e.pageY - elem_top;
});
});