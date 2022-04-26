function getPasswordChecker(password1){
    return function password_verification(password2){
         if (password1 === password2){
            return true;
         } else {
            return false;
         }  
    };  
}



function test(checker, password2, password1) {
   if(checker(password2) !== password1) {
        throwError("Тест не прошел");
   }
}


function main() {
   let checker = getPasswordChecker("12345");
   test(checker, "12345", true);
   test(checker, "pass", false);
   console.log("Тесты прошли успешно");
}

main();


