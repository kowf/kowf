document.addEventListener('keydown', logKey);

function logKey(e) {
  switch(e.code){
  	case 'ArrowUp':
      var x = document.getElementsByClassName("up");
      x[0].click();
  		break;
  	case 'ArrowRight':
  		var x = document.getElementsByClassName("right");
      x[0].click();
  		break;
  	case 'ArrowDown':
  		var x = document.getElementsByClassName("down");
      x[0].click();
  		break;
  	case 'ArrowLeft':
  		var x = document.getElementsByClassName("left");
      x[0].click();
  		break;  
  	default:
  		break;		  		  		
  }
}