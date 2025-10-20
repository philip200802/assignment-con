const textVerify = () => {
  let Insert = firstTest.value.trim()
  if (Insert === "") {
     alert("Input valid Text");
  } else {
    const value = Insert.toLowerCase();
    show.innerHTML = value;
  }
}

const secondTextVerify = () => {
  let insert = secondTest.value.trim();
  if (insert === ""){
    alert("Input valid Text");
  }else{
   const answer = insert.replace(/\s+/g, " ").trim();
    showTwo.innerHTML = answer;
  }
}
const thirdTextVerify = () => {
  let insert = thirdTest.value;
  if (insert === ""|| insert < 0){
    showThree.innerHTML = ("Input valid Number of Items");
    showThree.style.color = "red"
  }
  else if ( insert % 2 === 0){
    let answer="Congratulations you can use the discount grant";
    showThree.innerHTML = answer
    showThree.style.color = "black"

  }else {
     let answer="Error you cannot use the discount grant";
    showThree.innerHTML = answer
  }  
}

const fourthTextVerify = () => {
  let insert = fourthTest.value;
  if (insert === "" || insert < 0){
    showFour.innerHTML = ("Input the temperature");
    showFour.style.color = "red"
  }else{
   if(insert <= 19){
     showFour.innerHTML = "Cold temperature"
    showFour.style.color = "red"
   }
  else if(insert >=20 && insert <= 28){
     showFour.innerHTML = "Warm temperature"
    showFour.style.color = "black"
  } 
  else if( insert > 28){
   showFour.innerHTML = "Hot temperature"
    showFour.style.color = "black"
   } 
   }
  }

  const BMIVerify = () => {
  let weight = num1.value;
  let height = num2.value;
if (weight <0 || height < 0){
    showFive.innerHTML = ("Invalid credentials");
      showFive.style.color = "red"
    return;
  }

  if (weight === "" || height === ""){
    showFive.innerHTML = ("Invalid credentials");
      showFive.style.color = "red"
  }else{
    let answer = (weight)/(height**2);
    if(answer < 18.5){
      showFive.innerHTML = "Sorry you need you eat more food (Underweight)"
      showFive.style.color = "black"
    } else if (answer >=18.5 && answer<= 24.9){
      showFive.innerHTML = " Congratulations you need to keep it up (Normal)"
      showFive.style.color = "black"

    }else if (answer >=25 && answer<= 29.9){
      showFive.innerHTML = "Sorry you need to watch your weight (Overweight) "
      showFive.style.color = "Black"
    }else if(answer>=30)
      {
      showFive.innerHTML = 'You need to visit the nearest Hospital for guidance (High BMI) '
    }
  }
}

const seventhTextVerify = () => {
  let insert = seventhTest.value.trim();
  let mode = /^[A-Za-z0-9_]+$/;
 if (insert === ""){
    showSeven.innerHTML = ("Input the required Credentials");
      showSeven.style.color = "red"

    }
  else{
  if(mode.test(insert)){
   showSeven.innerHTML = "Thank you for inputting the required address";
      showSeven.style.color = "black"

  }
  else{
       showSeven.innerHTML = "Invalid Credentials"
      showSeven.style.color = "red"

  }
}
  }

const eightTextVerify = () => {
  let insert = eightTest.value;
  if (insert === "" || insert<0){
  showEight.innerHTML = ("Input your luggage weight");
      showEight.style.color = "red"

  }
  else{
   if(insert < 20){
     showEight.innerHTML = "Your luggage is Underweight"
      showEight.style.color = "black"

   }
   if(insert >=20 && insert <= 30){
     showEight.innerHTML = "Your luggage is Allowed"
      showEight.style.color = "black"

  }  
   }
   if( insert > 30){
   showEight.innerHTML = "Your luggage is Over-weight and it cannot be allowed"
      showEight.style.color = "red"
    
     }
  }

  const ninthTextVerify = () => {
  let insert = ninthTest.value.trim();
let mode = /^[A-Za-z0-9._%+-]+@oauife\.edu\.ng$/i;

 if(insert === ""){
        showNinth.innerHTML = "Invalid Credentials"
      showNinth.style.color = "red"
  }
   else if(mode.test(insert)){
    showNinth.innerHTML = "Thank you for inputting the required address"
      showNinth.style.color = "black"
   }
   else{
        showNinth.innerHTML = "Invalid Credentials"
      showNinth.style.color = "red"

 }

  }

  const tenthTextVerify = () => {
    let answer = tenthTest.value;
 
    if(answer === ""){
  showTenth.innerHTML = ("Invalid score");
      showTenth.style.color = "red"

  }  else{
   if(answer >=70 && answer<=100) {
    showTenth.innerHTML = "A =  Excellent"; 
    showTenth.style.color = "black"
  }
  else if(answer >=60 && answer<=69) {
    showTenth.innerHTML = "B =  Very Good";  
    showTenth.style.color = "black"

  }
  else if(answer >= 50 && answer<=59) {
    showTenth.innerHTML = "C =  Good" 
    showTenth.style.color = "black"

  }
  else if(answer >= 40 && answer<=49) {
    showTenth.innerHTML = "D =  Pass" 
    showTenth.style.color = "black"

  }
  else if(answer >= 0 && answer<=39) {
    showTenth.innerHTML = "F = Fail" 
    showTenth.style.color = "black"

  }
  else if (answer >100 || answer<0){
    showTenth.innerHTML = "Invalid Score"
    showTenth.style.color = "red"
  }
}
}

const eleventhTextVerify = () => {
  let amount = eleventhTest.value;

  if (amount === "" || amount < 0) {
    showEleven.innerHTML = ("Input your Price");
    showEleven.style.color = "Red"
  } 
  else {
  let discount = 0;
  if (amount < 5000) {
    discount = 0;
  } 
  else if (amount >= 5000 && amount <= 10000) {
    showEleven.innerHTML = "You have 0.05 discount on your Goods";
    discount = 0.05;
  } else if (amount >= 10001 && amount <= 20000) {
    showEleven.innerHTML = "You have 0.1 discount on your Goods";
    discount = 0.10;
  } else if (amount > 20000) {
    discount = 0.15;
    showEleven.innerHTML = "You have 0.15 discount on your Goods";

  }

  let total = amount - (amount * discount);
  showEleven.innerHTML = total
  showEleven.style.color = "black"
}
}

const twelveTextVerify = () => {
  let scoreNum = score.value;
  let courseNum = course.value.trim().toLowerCase();
  if (scoreNum === "" || courseNum === "") {
showTwelve.innerHTML =  ("Invalid credentials");
   showTwelve.style.color = "Red";
   return
  }
  else if (scoreNum <= 0 || scoreNum > 400) {
   showTwelve.innerHTML =  ("Invalid credentials");
   showTwelve.style.color = "Red"
   return;
  }
  else{
     let cutoff = 0;
 if (courseNum === "medicine") {
    cutoff = 280;
  } else if (courseNum === "engineering") {
    cutoff = 250;
  } else if (courseNum === "sciences") {
    cutoff = 220;
  }
  else if (courseNum === "art") {
    cutoff = 200;
  } else {
    showTwelve.innerHTML = ("Course not recognized");
    showTwelve.style.color = "red"
  }
}
  if (scoreNum >= cutoff) {
    showTwelve.innerHTML = "You are eligible";
    showTwelve.style.color = "black";
  } else {
    showTwelve.innerHTML = `You are not eligible. The cut off  for  is ${cutoff}.`;
    showTwelve.style.color = "red";

  }
}



const thirteenthTextVerify = () =>{
let currentYear = new Date().getFullYear();
let birthDate = birth.value;
let voterValidation = currentYear - birthDate;
if(birthDate === ""){
  alert('Input Valid date of birth');
}
else if(voterValidation > 130 || voterValidation < 0){
 showThirteen.innerHTML = ("Input valid Year");
 showThirteen.style.color = "red"
}
else if(voterValidation >= 18){
  showThirteen.innerHTML = "You are eligible to vote";
  showThirteen.style.color = "black";
}
else if (voterValidation< 18){
  const whenVote = 18 - voterValidation;
  showThirteen.innerHTML = `You are not eligible to vote. You can vote in ${whenVote} years.`;
  showThirteen.style.color = "Red" 
}
else if (voterValidation > 2000){
 showThirteen.innerHTML = ("Input valid Year");
}
}




