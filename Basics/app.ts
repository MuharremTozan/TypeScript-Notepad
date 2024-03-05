let userInput: unknown;
// Bu deger unknown ise bu degerle islem yapmak istedigimizde baska bir tur zorunlulugunda IDE hatayi yakalar cunku tip bilinmezdir
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
   userName = userInput;
}

function generateError(message: string, code: number) : never{
   throw {
      message: message,
      errorCode: code
   }
}
//bu fonksiyon calistiginda kodu durduracagi icin asla deger donduremez voidle cok bi farki yoktu aslinda ama never dondurme kapasitesinin de bulunmadigini belirtir

generateError('Invalid input', 400);