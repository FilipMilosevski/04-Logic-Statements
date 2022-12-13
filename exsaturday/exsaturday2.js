// let operator = prompt("Enter your operator: +, -, / or *")
// let num1 = Number(prompt("Enter the first number: "))
// let num2 = Number(prompt("Enter the second number: "))
// switch (operator) {
//     case "+":
//     result1 = num1+num2;
//     console.log(`${num1}+${num2}=${result1}`);
//     break;
//     case "-":
//     result2 = num1-num2;
//     console.log(`${num1}-${num2}=${result2}`);
//     break;
//     case "/":
//     result3 = num1/num2;
//     console.log(`${num1}/${num2}=${result3}`);
//     break;
//     case "+":
//     result4 = num1*num2;
//     console.log(`${num1}*${num2}=${result4}`);
//     break;

//   default:
//     console.log("INVALID OPERATOR");
//     break;
// }


// let strana1 = 5;
// let strana2 = 1;
// let strana3 = 1;
// if (strana1==strana2 && strana1==strana3) {
//   console.log("RAMNOSTRAN")
// } else if (strana1==strana2 || strana1==strana3 || strana2==strana3) {
//   console.log("RAMNOKRAK");
// } else {console.log("RAZNOSTRAN");}



// let a = 100
// let b = 552
// let c = 200
// if (a>b && c>b) {console.log(`Number ${b} is between the range of number ${a} and number ${c}`);} else {console.log(`Number ${b} is outside of the range of number ${a} and number ${c}`);}


// let day = prompt("TYPE YOUR DAY: ")
// let daytype = Number(day)
// let koment = "DENES E ";
// switch (true) {
//   case (daytype==1):
//     koment += "PONEDELNIK"
//     break;
//   case (daytype==2):
//     koment += "VTORNIK"
//     break;
//   case (daytype==3):
//     koment += "SREDA"
//     break;
//   case (daytype==4):
//     koment += "CETRVRTOK"
//     break;
//   case (daytype==5):
//     koment += "PETOK"
//     break;
//   case (daytype==6):
//     koment += "SABOTA"
//     break;
//   case (daytype==7):
//     koment += "NEDELA"
//     break;

//   default:
//     console.log(`koment PRAZNIK`);
//     break;
// }

// console.log(koment);


// let mark = Number(prompt("Enter a number: "))
// let names = "FILIP ";
// switch (true) {
//   case (mark>10 && mark<20):
//     names+= "E VO A KLASA"
//     break;
//   case (mark>30 && mark<40):
//     names+= "E VO B KLASA"
//     break;
//   case (mark>50 && mark<60):
//     names+= "E VO C KLASA"
//     break;
//   case (mark>70 && mark<80):
//     names+= "E VO E KLASA"
//      break;
//   case (mark>90 && mark<100):
//     names+= "E VO S KLASA"
//     break;

//   default:
//     console.log("INVALID OPERATOR");
//     break;
// }

// console.log(names);



// let randomNum= Math.random()*3;
// console.log("MY RANDOM NUMBER: " +randomNum);
// let roundNum= Math.floor(randomNum)+1;
// console.log("MY ROUNDED NUMBER: "+roundNum);
// let num= prompt("Guess a number from 1 to 3");

// if (roundNum==num) {
//   alert("YOU GUESS RIGHT")
// } else {
//   alert("YOU GUESS WRONG")
// }