///VEZBA ZA IF SO TRUE, A SO FALSE TREBA !filip 
// let filip = true;
// if (filip) {
//   console.log("ITS MY NAME")
// } else {
//   console.log("ITS NOT MY NAME");
// }
                                 /// SO FALSE I !filip ispagja TRUE ODNOSNO NEGACIJA
// let filip = false;
// if (!filip) {
//   console.log("ITS MY NAME")
// } else {
//   console.log("ITS NOT MY NAME");
// }




// /SWITCH STATEMENT SO NUMBER
// let inpu = prompt("Vo koj grad utre ke vrne");
// let selec = Number(inpu);
// let mes = "I think: ";
// switch (selec) {
//   case 0:
//    mes += "Resen"; 
//     break;
//   case 1:
//    mes += "Ohrid"; 
//    break;
//    case 2:
//    mes += "Gevgelija"; 
//     break;
//     case 3:
//    mes += "Strumica"; 
//     break;
//     case 4:
//    mes += "Berovo"; 
//     break;   
// }
// console.log(inpu);
// console.log(mes);













///SWITCH STATEMENT SO STRING
// let firma = prompt("Koj e tvojot odgovor");
// let typein = String(firma);
// let koment = "Mojot izbor e: ";
// switch (typein) {
//   case "a":
//   case "b": 
//     koment += "DA"
//     break;
//   case "c":  
//     koment += "NE"
//     break;
//   case "d":
//     koment += "SEKOGAS"
//     break;
//   case "e":
//   case "f":  
//     koment += "NEKOGAS"
//     break;  

    
//   default:
//     koment += "NIKOGAS"
//     break;
// }

// console.log(koment);
// console.log(firma);


// let random =Math.random();
// random = random*3;
// random = Math.floor(random)
// console.log(random);


// let prognoza = prompt("Kakvo ke bide vremeto denes? ")
// let typeprognoza = Number(prognoza)
// let prognozakomentar = "Vremeto denes ke bide: "
// switch (typeprognoza) {
//   case 0:
//     prognozakomentar += "VRNEZLIVO"
//     break;
//   case 1:
//   case 2:
//     prognozakomentar += "SONCEVO"
//     break;
//   case 3:
//     prognozakomentar += "MAGLOVITO"
//     break;
//   case 4:
//     prognozakomentar += "SNEZNO"
//     break;
//   case 5:
//   case 6:  
//     prognozakomentar += "VETROVITO"        

  
//   default:
//     prognozakomentar += "NE SE ZNAE"
//     break;
// }

// console.log(prognoza);
// console.log(prognozakomentar);


// let age = 10;
// let cost = 0;
// let message; 
// if (age<3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age >= 3 && age <12) {
//   cost = 5;
//   message = "With the child discount, the fee si 5 dollars";
// } else if (age >= 12 && age<65) {
//   cost = 10;
//   message= "A regular ticket costs 10 dollars."
// } else {
//   cost=7;
//   message="A ticket is 7 dollars.";
// }

// console.log(message);
// console.log("Your total cost " + cost);




// let fil = prompt("Type your age")
// console.log(typeof fil, fil);
// let fil1 = Number(fil)
// // console.log(fil1);
// console.log(typeof fil1, fil1);

// let message = "";

// if (fil1 >= 21) {
//     message = "you can drink "
// } else if (fil1 >= 19){
//   message = "you can enter but you can not drink"
// } else {
//   message= "you can not enter"
// }
// console.log(message);



let enter = prompt ("Type your age")
let typeenter = Number(enter)
let enterkoment ="TI "
switch (typeenter) {
        //NA OVOJ NACIN MOZE AMA E DOLG 
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:  
  case 13:
  case 14:
  case 15:
  case 16:  
  case 17:
  case 18:
  enterkoment += "NE MOZE DA VLEZES"
  break;
  case 19:
  case 20:
  case 21:
  enterkoment += "MOZE DA VLEZES NO NE I DA PIES"
  break;

  default:
  enterkoment += "MOZE DA VLEZES"
    break;
}

console.log(enter);
console.log(enterkoment);