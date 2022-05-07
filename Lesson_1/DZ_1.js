"use strict";
let random_choise  = Math.floor(Math.random() * 100);
let user_choise = +prompt('Введите число?','');


function choise_game(){
        while (user_choise !== random_choise) {
            user_choise = +prompt('Введите число?', '');
            if(isNaN(user_choise)){
                alert('Введите число');
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