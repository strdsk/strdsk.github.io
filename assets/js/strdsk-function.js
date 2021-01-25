function mathRandom(min, max){
  return Math.floor((Math.random() * max) + min);
}

function randomPost(object){
  $.getJSON( "/assets/data/posts.json", function( data ) {
    let postArray = data.postArray;
    let rand = mathRandom(1, postArray.length);
    rand--;
    
    object.attr('href', postArray[rand]);
  });
}

var clock = $('.clock');
function setTime() {
  let time = new Date();
  time = time.getHours() + ":" + time.getMinutes();
  clock.text(time);
}

setTime()
setInterval(
  function(){ 
    setTime()
  }
, 1000);
