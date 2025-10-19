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
  if (insert === ""){
    error3.innerHTML = ("Input valid Number of Items");
  }
  else if ( insert % 2 === 0){
    let answer="Congratulations you can use the discount grant";
    showThree.innerHTML = answer
  }else {
     let answer="Error you cannot use the discount grant";
     alert("Error you cannot use the discount grant");
    showThree.innerHTML = answer
  }  
}

const fourthTextVerify = () => {
  let insert = fourthTest.value;
  if (insert === ""){
    alert("Input the temperature");
    
  }else{
   if(insert <= 19){
     showFour.innerHTML = "Cold temperature"  
   }
  else if(insert >=20 && insert <= 28){
     showFour.innerHTML = "Warm temperature"
  } 
  else if( insert > 28){
   showFour.innerHTML = "Hot temperature"
   } 
   }
  }

  const BMIVerify = () => {
  let weight = num1.value;
  let height = num2.value;

  if (weight === "" || height === ""){
    alert("Invalid credentials");
  }else{
    let answer = (weight)/(height**2);
    if(answer < 18.5){
      showFive.innerHTML = "Sorry you need you eat more food"
    } else if (answer >=18.5 && answer<= 24.9){
      showFive.innerHTML = " Congratulations you need to keep it up"
    }else if (answer >=25 && answer<= 29.9){
      showFive.innerHTML = "Sorry you need to watch your weight"
    }else if(answer>=30)
      {
        alert("High BMI");
      showFive.innerHTML = 'You need to visit the nearest Hospital for guidance'
    }
  }
}

const seventhTextVerify = () => {
  let insert = seventhTest.value.trim();
  let mode = /^[A-Za-z0-9_]+$/;
 if (insert === ""){
    alert("Input the required Credentials");
    }
  else{
  if(mode.test(insert)){
   showSeven.innerHTML = "Thank you for inputting the required address";
  }
  else{
    alert("Invalid Credentials");
       showSeven.innerHTML = "Invalid Credentials"
  }
}
  }

const eightTextVerify = () => {
  let insert = eightTest.value;
  if (insert === ""){
  alert("Input your luggage weight");
  }
  else{
   if(insert < 20){
     showEight.innerHTML = "Your luggage is Underweight"
   }
   if(insert >=20 && insert <= 30){
     showEight.innerHTML = "Your luggage is Allowed"
  }  
   }
   if( insert > 30){
   showEight.innerHTML = "Your luggage is Over-weight and it cannot be allowed"
   alert("Your luggage is Over-weight and it cannot be allowed");
     }
  }

  const ninthTextVerify = () => {
  let insert = ninthTest.value.trim();
let mode = /^[A-Za-z0-9._%+-]+@oauife\.edu\.ng$/i;

 if(insert === ""){
  alert("Input the required Credentials"); 
  }
   else if(mode.test(insert)){
    showNinth.innerHTML = "Thank you for inputting the required address"
   }
   else{
    alert("Invalid Credentials");
        showNinth.innerHTML = "Invalid Credentials"
 }

  }

  const tenthTextVerify = () => {
    let answer = tenthTest.value;

    if(answer === ""){
  alert("Invalid score");
  }  else{
   if(answer >=70 && answer<=100) {
    showTenth.innerHTML = "A =  Excellent"; 
  }
  else if(answer >=60 && answer<=69) {
    showTenth.innerHTML = "B =  Very Good";  
  }
  else if(answer >= 50 && answer<=59) {
    showTenth.innerHTML = "C =  Good" 
  }
  else if(answer >= 40 && answer<=49) {
    showTenth.innerHTML = "D =  Pass" 
  }
  else if(answer >= 0 && answer<=39) {
    showTenth.innerHTML = "F = Fail" 
  }
}
}

const eleventhTextVerify = () => {
  let amount = eleventhTest.value;

  if (amount === "") {
    alert("Input your Price");
  } 
  else {
  let discount = 0;
  if (amount < 5000) {
    discount = 0;
  } 
  else if (amount >= 5000 && amount <= 10000) {
    discount = 0.05;
  } else if (amount >= 10001 && amount <= 20000) {
    discount = 0.10;
  } else if (amount > 20000) {
    discount = 0.15;
  }

  let total = amount - (amount * discount);
  showEleven.innerHTML = total
}
}
const twelveTextVerify = () => {
  let scoreNum = score.value;
  let courseNum = course.value.trim().toLowerCase();
  if (scoreNum === "" || courseNum === "") {
   alert ("Invalid credentials");
  }
  let cutoff = 0;
  if (courseNum === "medicine") {
    cutoff = 280;
  } else if (courseNum === "engineering") {
    cutoff = 250;
  } else if (courseNum === "sciences") {
    cutoff = 220;
  } else if (courseNum === "art") {
    cutoff = 200;
  } else {
    alert("Course not recognized");
  }
  if (scoreNum >= cutoff) {
    showTwelve.innerHTML = "You are eligible";
  } else {
    alert(`You are not eligible. The cut off  is ${cutoff}.`)
    showTwelve.innerHTML = `You are not eligible. The cut off  is ${cutoff}.`;
  }
}


const thirteenthTextVerify = () =>{
let currentYear = Number("2025");
let birthDate = birth.value;
let voterValidation = currentYear - Number(birthDate);

if(birthDate === ""){
  alert('Input your date of birth');
}else
if(voterValidation >= 18){
  showThirteen.innerHTML = "You are eligible to vote";
}else{
  const whenVote = 18 - voterValidation;
  alert(`You are not eligible to vote. You can vote in ${whenVote} years.`)
  showThirteen.innerHTML = `You are not eligible to vote. You can vote in ${whenVote} years.`;
 
}
}




