//////////// IF ELSE IF 
// let rain = true;
// if (rain) {
//   console.log("Taking my umbrella its going to rain");
// } else {
//   console.log("I can leave my umbrella at home");
// }



// let age= prompt("ENTER YOUR AGE");
// if (age<18) {
//   console.log("YOU ARE YOUNG PERSON");
// } else {
//   console.log("YOU ARE OLDER PERSON");
// }



// let age= prompt("ENTER YOUR AGE");
// if (age<18) {
//   console.log("YOU CANNOT ENTER");
// } else if (age<21) {
//   console.log("YOU CAN ANTER BUT YOU CANNOT DRINK");
// } else {
//   console.log("YOU CAN ENTER");
// }



// let age = 10;                                                 /// prv nacin
// let cost = 0;
// let message;
// if (age<3) {
//   cost = 0;
//   message= "A ticket is free under three"
// } else if (age>=3 && age<12) {
//   cost = 5;
//   message = "With the child discount, the ticket is 5 dollars"
// } else if (age>=12 && age<65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars"
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars"
// }
// console.log(message);
// console.log("Your total cost is: " +cost+ " $");



// let age = 60;                                               ///// vtor nacin
// if (age<3) {
//   console.log("A ticket is free under three");
// } else if (age<12) {
//   console.log("With the child discount, the ticket is 5 dollars");
// } else if (age<65) {
//   console.log("A regular ticket costs 10 dollars");
// } else if (age>=65) {
//   console.log("A ticket is 7 dollars");
// }

                                      ////////////EX 4.2
// let age = prompt("ENTER YOUR AGE")
// if (age<19) {
//   console.log("YOU CAN NOT ENTER");
// } else if (age<21) {
//   console.log("YOU CAN ENTER BUT YOU CAN NOT DRINK");
// } else if (age>=21) {                           /// posledniot uslov mozeme samo so else i bez uslov
//   console.log("YOU CAN ENTER");                 /// ili so else if i mora so uslov
// }

////////////////////////////////////       TERNARY OPERATORS
// let access =prompt("ENTER YOUR AGE") <18 ? "DENIED" : "ALLOWED";    ///prv nacin
// console.log(access);

// prompt("ENTER YOUR AGE") <18 ? console.log("denied") : console.log("allowed");  ///vtor nacin


/////////////////////////////////////          SWITCH
// let activity = prompt("ENTER")
// switch (activity) {
//   case "get up":
//     console.log("its 6:30");
//     break;
//   case "breakfast":
//     console.log("its 7:00");
//     break;
//   case "drive to work":
//     console.log("its 8:00");
//     break;
//   case "lunch":
//     console.log("its 12:00");
//     break;
//   case "drive home":
//     console.log("its 17:00");
//     break;
//   case "dinner":
//     console.log("its 18:30");;
//     break;
//   default:
//     console.log("YOU CAN TAKE BRAKE");
//     break;
// }


//////////////////////////////////////////  EX 4.4
// let ran = Math.floor(Math.random()*6)
// console.log(ran);
// let randomnum = Math.random()
// randomnum = randomnum*6;
// randomnum = Math.floor(randomnum)
// console.log(randomnum);
// let user = prompt ("what is your choice")
// let answer ="";
// switch(randomnum) {
//   case 0:
//     answer = " No";
//     break;
//   case 1:
//     answer = " Maybe";
//     break;
//   case 2:
//     answer = " Never";
//     break;
//   case 3:
//     answer = " Yes";
//     break;
//   case 4:
//     answer = " Always";
//     break;        
// }

// console.log(user + answer);
// console.log(answer);

// let grade = prompt("TYPE YOUR GRADE: ")
// let grade = "A"



// let grade = prompt("TYPE YOUR GRADE")                               /////prv nacin so SWITCH
// let grade="A";
// switch (grade) {
//   case "F":
//   case "D":
//     console.log("You've failed!");
//     break;
//   case "D":
//   case "B":
//     console.log("You've passed");
//     break;
//   case "A":
//     console.log("NICE!");
//     break;
//   default:
//     console.log("I don't know this grade!");
//     break;
// }
// console.log(grade);


// let grade = prompt("ENTER YOUR GRADE: ")                        /////vtor nacin so IF/ELSE        
// let grade  ="A"
// if (grade === "F" || grade === "D") {
//   console.log("You've failed!");
// } else if (grade === "C" || grade === "B") {
//   console.log("You've passed!");
// } else if (grade === "A") {
//   console.log("NICE ! ! !");
// } else {
//   console.log("I don't know this grade !");          ///// else e kako default kaj switchot
// }            



// let choice = ["ROCK","PAPER","SCISSORS"]
// let player = Math.floor(Math.random()*3)
// let computer = Math.floor(Math.random()*3)
// let show = choice[player]
// show = choice[computer]
// console.log("PLAYER CHOICE: " +choice[player]);
// console.log("COMPUTER CHOICE: "+choice[computer]);


                                             ///ROCK PAPER SCISSORS


// let choices = ["ROCK", "PAPER", "SCISSORS"];
// let computerChoice = Math.floor(Math.random()*3);
// let playerChoice = Math.floor(Math.random()*3);
// let showChoice = choices[computerChoice]
// console.log("COMPUTER CHOICE: " +showChoice);
// showChoice = choices[playerChoice]
// console.log("PLAYER CHOICE: " +showChoice);

// if (choices[computerChoice] == choices[playerChoice]) {
//   console.log("ITS TIE ! ");
// } else if (choices[computerChoice]==="ROCK" && choices[playerChoice]==="SCISSORS") {
//   console.log("COMPUTER WINS !!!");
// } else if (choices[computerChoice]==="SCISSORS" && choices[playerChoice]==="PAPER") {
//   console.log("COMPUTER WINS!!!");
// } else if (choices[computerChoice]==="PAPER" && choices[playerChoice]==="ROCK") {
//   console.log("COMPUTER WINS !!!");
// } else if (choices[playerChoice]==="ROCK" && choices[computerChoice]==="SCISSORS") {
//   console.log("PLAYER WINS");
// } else if (choices[playerChoice]==="SCISSORS" && choices[computerChoice]==="PAPER") {
//   console.log("PLAYER WINS");
// } else if (choices[playerChoice]==="PAPER" && choices[computerChoice]==="ROCK") {
//   console.log("PLAYER WINS");
// }


// let login = false;
// let output =""
// let user = login ? output = "logout" : output ="login";
// console.log(user);



// const user = ["MIKE","JOHN","LARRY"]
// const input = "JOHN"
// let output = ""
// if (user.indexOf(input)>-1) {
//   output = "Welcome, this is a user"
// } else {
//   output = "This is not a user"
// }
// console.log(output + ":"+ input);



// let val = 104;                                  ///// if uslov vo varijabla
// let message =  (val>100) ? `${val} was greater than 100` : 
// `${val} was less than 100`;
// console.log(message);

// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`
// console.log(check);




// let userinput = prompt("Enter a number between 0 and 10");
// let selectednumber = Number(userinput);
// let message = "My selection: ";
// switch (selectednumber) {
//   case 0:
//       message += "Bear";
//       break;
//   case 1:
//       message += "Bunny";
//       break;
//   case 2:
//   case 3:
//       message += "Girafe";
//       break;
//   case 4:
//       message += "Horse";
//       break;
//   case 5:
//   case 10:
//   case 7:
//       message += "Bird";
//       break;
//   case 8:
//       message += "Fish";
//       break;
//   case 9:
//       message += "Turtle";
//       break;
//   default:
//       message = "Invalid input";
//       break;
// }

// console.log(message);
// alert(message)


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






// let enter =prompt("TYPE YOUR AGE");       ///// uslov vo case mora vo zagradi
// let entertype = Number(enter)
// let enterkoment ="YOU ARE "
// switch (true) {
//   case (enter >=60):
//     enterkoment += "OLD MAN"
    
//     break;
//   case (enter >=21 && enter <=59):
//     enterkoment += "MEDIUM MAN"
//     break;


//   default:
//     enterkoment += "YOUNG MAN"
//     break;
// }
// console.log(enter);
// console.log(enterkoment);



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





// let n1 = parseInt(prompt("ENTER FIRST NUMBER: "))
// let n2 = parseInt(prompt("ENTER SECOND NUMBER: "))
// let op = prompt("YOU CAN USE: + , - , / OR *")
// console.log(n1);
// console.log(op);
// console.log(n2);
// switch (op) {
//     case "+":
//     console.log(n1+n2);
//     break;
//     case "-":
//     console.log(n1-n2);
//     break;
//     case "/":
//     console.log(n1/n2);
//     break;
//     case "*":
//     console.log(n1*n2);
//     break;

//   default:
//     console.log(n1+n2);
//     break;
// }





// let choice = ["ROCK", "PAPER", "SCISSORS"]
// let player = Math.floor(Math.random()*3)
// let computer = Math.floor(Math.random()*3)
// let show = choice[player]                      ///// MORA SHOW PA LOG SHOW PA LOG
// console.log("PLAYER CHOICE: "+show);
// show = choice[computer]
// console.log("COMPUTER CHOICE: "+show);
// if (choice[player] == choice[computer]) {
//   console.log("ITS TIE");
// } else if (choice[player] === "ROCK" && choice[computer]=== "SCISSORS") {
//   console.log("PLAYER WINS");
// } else if (choice[player] === "SCISSORS" && choice[computer]=== "PAPER") {
//   console.log("PLAYER WINS");
// } else if (choice[player] === "PAPER" && choice[computer]=== "ROCK") {
//   console.log("PLAYER WINS");
// } else if (choice[computer] === "ROCK" && choice[player] === "SCISSORS") {
//   console.log("COMPUTER WINS");
// }  else if (choice[computer] === "SCISSORS" && choice[player] === "PAPER") {
//   console.log("COMPUTER WINS");
// }  else if (choice[computer] === "PAPER" && choice[player] === "ROCK") {
//   console.log("COMPUTER WINS");
// }




