let grade = parseInt(prompt("Enter your grade")); 

if (grade >= 80 && grade <= 100 ) {
       alert("You got an A");
  }
else if (grade >= 70 && grade <80 ) {
	   alert("You got a B");
		}
else if (grade >= 60 && grade < 70) {
	   alert("You got a C");
			}
else if (grade >= 50 && grade < 60) {
	  alert("You got a D");
				}	
else if (grade >= 0 && grade < 50) {
	  alert("Sorry, you got an F");
						} 

else {
	  alert("Invalid grade");
		}



let month = prompt("enter a monthwhich you want to know the number of days.")

if (month === "january" || month === "January") {
	alert(`${month} has 31 days`)
}
else if (month === "febuary" || month === "Febuary") {
	alert(`${month} has 28 days`)
}
else if (month === "march" || month === "March") {
	alert(`${month} has 31 days`)
}
else if (month === "april" || month === "April") {
	alert(`${month} has 30 days`)
}
else if (month === "may" || month === "May") {
	alert(`${month} has 31 days`)
}
else if (month === "june" || month === "June") {
	alert(`${month} has 30 days`)
}
else if (month === "july" || month === "Luly") {
	alert(`${month} has 31 days`)
}
else if (month === "august" || month === "August") {
	alert(`${month} has 31 days`)
}
else if (month === "setember" || month === "Setember") {
	alert(`${month} has 31 days`)
}
else if (month === "october" || month === "	October") {
	alert(`${month} has 31 days`)
}
else if (month === "november" || month === "November") {
	alert(`${month} has 31 days`)
}
else if (month === "december" || month === "December") {
	alert(`${month} has 31 days`)
}
else if(month == ""){
	alert('month can not be undefined')
}

else {
	alert(`sorry ${month} is not a month`)
}