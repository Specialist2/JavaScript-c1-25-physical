//  Higher order function have two main characters
// 1. They take other fuctions as arguments
// 2. They could have  a function

function removesDuplicates(ListOfWords) {
  // loop through words --- Array
  // add unique words to new array
}
function calculatesInterest(amount, rate) {
  // return interest = rate/ 100* amount
}
function contactPerson(userDetails, sendMail, sendMessage) {
  // userDetails {name:Albert,phone:"072434", email:"albert@eldohub.co.ke", age:39, isKenyan: true}
  // validate phone format
  // other tasks ---conditional statements
  // sendEmail -  a function to be called with email
  sendEmail(userDetails.email);
  //sendMessage - a function to be called with phone number
  sendMessage(userDetails.phone);
}
function mailFunction(email) {
  // sending email logic here
  console.log("Sending drafted email to:" + email);
}
function smsSender(phone) {
  // sending messages logic here + api interaction
  console.log("Sending drafted SMS to: " + phone);
}



// sort,reduce,filter,forEach ----HOF








































function validatePassword(password) {
  //more than 8 characters , contains number

  if (password.lenght < 8) {
    console.log("Weak Password! Must contain more than 8 characters");
  }
  console.log("Done Checking");
}
const result = validatePassword("hedtdbyhghff");

console.log(result);
