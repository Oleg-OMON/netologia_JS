"use strict";
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs');
let  rl = readline.createInterface({ input, output });

let random_choise  = Math.floor(Math.random() * 10);
let user_choise = rl.question('Введите число?', (input));


function choise_game(){
    let attempts = 3;
    let end_attempts = 0;
        while (attempts = 0) {
            user_choise = rl.question('Введите число?', '');
            if(isNaN(user_choise)){
                console.log('Введите число');
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
                attempts--;
                end_attempts++;

                let data = {
                     user_attempts: attempts,
                     user_endAttempts: end_attempts,
                     user_number: user_choise,
                     random_number: random_choise,
                 };

                fs.writeFile('newData.json', data, 'utf-8', (err) => {
                    if (err) 
                    { console.log('Ошибка записи файла!')}; 
                    
                console.log(`Использовано ${attempts} попыток \n Осталось ${end_attempts} попыток`);}
                );
            }
}


choise_game();