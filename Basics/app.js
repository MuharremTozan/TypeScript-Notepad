var userInput;
// Bu deger unknown ise bu degerle islem yapmak istedigimizde baska bir tur zorunlulugunda IDE hatayi yakalar cunku tip bilinmezdir
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('Invalid input', 400);
