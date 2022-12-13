// let a = 10    ///1 
// let b = 15
// if (a>b) {
//   console.log(a=b);
// } else {
//   console.log(b>a);
// }


// let a1 = 20      ///2
// let b2 = 25 
// if (a1%2==0) {
//   console.log("ODD");
// } else {
//   console.log("EVEN")
// }

// if (b2%2==0) {
//   console.log("ODD");
// } else {
//   console.log("EVEN")
// }


// if (isNaN(a1)) {                    ///3
//   console.log("is not a number");
// } else {
//   console.log("is a number");
// }


// let a = 10;                     ///4
// let b = 20;

// if (a>b) {
//   console.log("FALSE");
// } else if (b>a) {
//   console.log("TRUE");
// } else {
//   console.log("EQUAL");
// }

                          ///5
// let a1= 10;
// let b1=20;
// let c1=30;
// if (a1>b1){
//   console.log("TRUE1");
// } else if (a1>c1) {
//   console.log("TRUE2");
// } else if (b1>c1) {
//   console.log("TRUE3");
// } else  {
//   console.log("TRUE4");
// }

                                                      ///6
// let side1=1;
// let side2=2;
// let side3=35; 

// if (side1==side2 && side1==side3) {
//   console.log("Equiteral triangle");
// } else if (side1==side2 || side2==side3) {
//   console.log("Isosceles triangle");
// } else {
//   console.log("Scalene triangle");
// }

                                        ///7 range
// let a= 50;
// let b= 10;
// let c= 100;

// if (a>=b && c>=b) {
//   console.log(`NUMBER ${b} is between the range ${a} and ${c}`);
// } else {
//   console.log(`NUMBER ${b} is oustside the range ${a} and ${c} `);
// }


       ///8
// let operator = prompt("ADD, DIVIDE, MULTIPLY, MODULUS, SUBSTRACT")

// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));



// if (operator=="ADD"){

//   console.log(num1+num2);


// } else if (operator=="DIVIDE") {
//   console.log(num1/num2);
// } else if (operator=="MULTIPLY") {
//   console.log(num1*num2);
// } else if (operator=="MODULUS") {
//   console.log(num1%num2);
// } else if (operator=="SUBSTRACT") {
//   console.log(num1-num2);
// } else {
//   console.log("Invalid operation");
// }


///9
// let mark1 = Number(prompt("Enter a mark"));

// let n = "FILIP";
// if (mark1>90 && mark1<100) {
//   console.log(`${n} e vo S GRADE `);
// } else if (mark1>80 && mark1<100) {
//   console.log(`${n} e vo A GRADE`);
// } else if (mark1>70 && mark1<80) {
//   console.log(`${n} e vo B GRADE`);
// } else {
//   console.log("IS NOT A VALID MARK");
// }





///SWITCH CASE 1 
// let day =prompt("ENTER A NUMBER");
// let daytype= Number(day)
// let d = "DENES "

// switch (true) {
//   case (daytype==1):
//     d += "E PONEDELNIK"
//     break;
//   case (daytype==2):
//     d += "E VTORNIK"
//     break;
//   case (daytype==3):
//     d += "E SREDA"
//     break;  
//   case (daytype==4):
//     d += "E CETVRTOK"
//     break;
//   case (daytype==5):
//     d += "E PETOK"
//      break;
//   case (daytype==6):
//     d += "E SABOTA"
//      break;
//   case (daytype==7):
//     d+= "E NEDELA"
//      break;
            

//   default:
//     d += "E PRAZNIK"
//     break;
// }

// // console.log(day);
// console.log(d);
                              //// OVOJ NACIN E BEZ SWITCH
// if (day==1) {
//   console.log("DENES E PONEDELNIK");
// } else if (day==2) {
//   console.log("DENES E VTORNIK");
// } else if (day==3) {
//   console.log("DENES E SREDA");
// } else if (day==4) {
//   console.log("DENES E CETVRTOK");
// } else if (day==5) {
//   console.log("DENES E PETOK");
// } else if (day==6) {
//   console.log("DENES E SABOTA");
// } else if (day==7) {
//   console.log("DENES E NEDELA");
// }



///3.Simple Calculator                  with SWITCH
// program for a simple calculator
// let result;
// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));
// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;
//     default:
//         console.log('Invalid operator');
//         break;
// }

///////////////VEZBI

// let operator = prompt(`Enter operator (+,-,/ or *): `);
// let number1 = Number(prompt(`Enter the first number: `));
// let number2 = Number(prompt (`Enter the second number: `));
// switch (operator) {
//     case "+":
//         result1=number1+number2;
//         console.log(`${number1}+${number2}=${result1}`);
//         break;
//     case "-":
//         result2=number1-number2;
//         console.log(`${number1}-${number2}=${result2}`);    
//         break;
//     case "/":
//         result3=number1/$number2;
//         console.log(`${number1}/${number2}=${result3}`);
//         break;
//     case "*":
//         result4=number1*$number2; 
//         console.log(`${number1}*${number2}=${result4}`);       
//     default:
//         break;
// }



// let day = prompt("ENTER A DAY: ");
// let daytype= Number(day)
// let dkoment="DENES E ";
// switch (true) {
//     case (daytype==1):
//         dkoment+= "PONEDELNIK";
//         break;
//     case (daytype==2):
//         dkoment+= "VTORNIK";
//         break;
//     case (daytype==3):
//         dkoment+= "SREDA";
//         break;       
//     case (daytype==4):
//         dkoment+="CETVRTOK";
//         break;
//     case (daytype==5):
//         dkoment+="PETOK"
//         break;
//     case (daytype==6):
//         dkoment+="SABOTA"
//         break;
//     case (daytype==7):
//         dkoment+="NEDELA"
//         break;            
//     default:
//         dkoment+= "PRAZNIK";
//         break;
// }
// console.log(dkoment);



// let mark = Number(prompt("ENTER A NUMBER : "))
// let names = "Filip"
// if (mark>10 && mark<20) {
//     console.log(`${names} e vo A KLASA`);
// } else if (mark>30 && mark<40) {
//     console.log(`${names} e vo B KLASA`);
// } else if (mark>50 && mark<60) {
//     console.log(`${names} e vo C KLASA`);
// } else if (mark>70 && mark<80) {
//     console.log(`${names} e vo E KLASA`);
// } else if (mark>90 && mark<100) {
//     console.log(`${names} e vo S KLASA`);
// }




