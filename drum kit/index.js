function playSound(key){
    key = key.toLowerCase();
    switch(key){
        case 'w':
            const audio1 = new Audio('css/sounds/tom-1.mp3');
            audio1.play();
            break;
  
        case 'a':
            const audio2 = new Audio('css/sounds/tom-2.mp3');
            audio2.play();
            break;
  
        case 's':
            const audio3 = new Audio('css/sounds/tom-3.mp3');
            audio3.play();
            break;
  
        case 'd':
            const audio4 = new Audio('css/sounds/tom-4.mp3');
            audio4.play();
            break;
  
        case 'j':
            const audio5 = new Audio('css/sounds/crash.mp3');
            audio5.play();
            break;
  
        case 'k':
            const audio6 = new Audio('css/sounds/kick-bass.mp3');
            audio6.play();
            break;
  
        case 'l':
            const audio7 = new Audio('css/sounds/snare.mp3');
            audio7.play();
            break;
    }
  }
  
  let arr = document.querySelectorAll("button");
  for(let i=0; i<arr.length;i++){
    arr[i].addEventListener("click",(event)=>{
      playSound(event.target.textContent.trim())
    });
  
    document.addEventListener("keypress",(event)=>{
      playSound(event.key);
    } );
  }