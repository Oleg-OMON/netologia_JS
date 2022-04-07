"use strict";
let random_choise  = 2;
let user_choise = +prompt('Введите число?','');


function choise_game(){
        while (user_choise !== random_choise) {
            user_choise = +prompt('Введите число?', '');
            if(isNaN(user_choise)){
                alert('Введиет число');
            }
            else if(user_choise == random_choise){
                console.log('победа');
                }
            else if(user_choise > random_choise){
                console.log('Ваше число больше');
                }
             else {
                console.log('Выше число меньше'); 
                }   
            }  
}




choise_game();