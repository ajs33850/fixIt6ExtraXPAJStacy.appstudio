var myNumbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]

 var sum = 0;
 
 for(var i = 0; i < myNumbers.length; i++){
   sum += myNumbers[i]
   
   }
let avg = sum / myNumbers.length
 
 let answer = prompt("Do you want to average or sum the numbers?")
 
 if (answer == "sum") {
  alert(`The sum of the numbers is ${sum}`) }
  
else if (answer == "average") {
  alert(`The average of the numbers is ${avg}`) }
  
else {
  alert("You did not enter average or sum.")
  }
let extra1 = Number(prompt("Enter another number to add to the array."))
let extra2 = Number(prompt("Enter another number to add to the array."))
let extra3 = Number(prompt("Enter another number to add to the array."))

myNumbers.push(extra1,extra2,extra3)

alert(`The last number in the array + 10 is ${extra3 + 10}.`)