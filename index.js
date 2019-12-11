let flags = {
    fillBucket: false,
    chooseColor: false,
    pencil: true,
    transform: false
}

const canvas = document.getElementById('canvas');
const color = document.querySelector('.color');  
canvas.width = 512;                                     
canvas.height = 512;
let context = canvas.getContext('2d')
let currentColor = '#008000';
let colorTemp = '#008000';
let previvousColor = '';
let tools_all =  document.getElementsByClassName('tool-item');
let tools_colors = document.getElementsByClassName('color-item');
const colorInput = document.querySelector('#input_color');

(function(){canvas.onmouseup = function (event) {
    if (flags.pencil == true) {
        canvas.onclick = function (event) {
            let x = Math.floor(event.offsetX/128);
            let y = Math.floor(event.offsetY/128);
            context.fillStyle = currentColor;
            context.fillRect(x*128, y*128, 128, 128);
            context.fill();
        }
        
    }
    if (flags.fillBucket == true) {
        canvas.onclick = function () {
            context.fillStyle = currentColor;
            context.fillRect(0, 0, 512, 512);
        }
    }
}

for(let j = 0 ; j < tools_all.length ; j++ )
{
    tools_all[j].addEventListener('click', (event) =>
    {
        document.querySelectorAll('.tool-item').forEach((element) =>
        {
            element.style.cssText = "none";  
    })
    switch (event.target.id) {
        case ('paint_bucket'):
            flags.fillBucket = true;
            flags.pencil = false;
            document.querySelector('.paint_bucket').style.cssText = `color:red;font-weight: bold`;
            changeColor(event.target.id);
            console.log(flags);
            break;
        case ('pencil'):
            flags.fillBucket = false;
            flags.pencil = true;
            document.querySelector('.pencil').style.cssText = `color:red;font-weight: bold`;
            console.log(flags);
            changeColor(event.target.id);
            break;
      
        }
    })
}


for (let i = 0; i < tools_colors.length; i++) {
    tools_colors[i].addEventListener('click', (event) => {
        document.querySelectorAll('.color-item').forEach((element) => {
            element.style.cssText = "none";
        })
        switch (event.target.id) {

            case ('input_color'):
                document.querySelector('.color_backgr-input').style.cssText = `color:red;font-weight: bold`;;
                break;

            case ('color-pref_text'):
                currentColor = previvousColor;
                document.querySelector('.color_backgr-prev').style.cssText = `color:red;font-weight: bold`;
                break;

            case ('color-red_text'):
                document.querySelector('.color_backgr-red').style.cssText = `color:red;font-weight: bold`;
                changeColor('color_red');
                break;
            case ('color-bleu_text'):
                document.querySelector('.color_backgr-bleu').style.cssText = `color:red;font-weight: bold`;
                changeColor('color_bleu');
                
                break;
        }
    })
}

colorInput.addEventListener('change', () => {
  currentColor = colorInput.value;
  document.querySelector('#input_color').style.background = currentColor;
  previvousColor =colorTemp;
    document.querySelector('#color_pref').style.background = previvousColor;
    colorTemp = currentColor;

});})();

function changeColor(element)
{
  if(element === 'color_bleu')
  {
      currentColor = "#41B6F7";
      
      document.querySelector('#input_color').style.background = currentColor;
      document.querySelector('#input_color').value = currentColor; 
      previvousColor = colorTemp;
      document.querySelector('#color_pref').style.background = previvousColor;
      colorTemp = currentColor;
  }
  else if(element === 'color_red'){
    currentColor = "#F74141";
   
    document.querySelector('#input_color').style.background = currentColor;
    document.querySelector('#input_color').value = currentColor; 
    previvousColor =colorTemp;
    document.querySelector('#color_pref').style.background = previvousColor;
    colorTemp = currentColor;
  }
}
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyB':
            document.getElementById('paint_bucket').click();
            break;

        case 'KeyP':
            document.getElementById('pencil').click();
            break;

        case 'KeyC':
            document.getElementById('choose_color').click();
            break;
    }
})

