// Question 1
var units = parseInt(prompt("Enter the number of units consumed: "));
var billAmount = 0;
if (units <= 100) {
  billAmount = 0;
} else if (units <= 200) {
  billAmount = (units - 100) * 5;
} else {
  billAmount = 500 + (units - 200) * 10;
}
alert("Total bill amount is: Rs " + billAmount);

// Question 2

var percentage = parseInt(prompt("Enter your percentage: "));
var grade = "";
if (percentage < 25) {
  grade = "D";
} else if (percentage >= 25 && percentage < 45) {
  grade = "C";
} else if (percentage >= 45 && percentage < 50) {
  grade = "B";
} else if (percentage >= 50 && percentage < 60) {
  grade = "B+";
} else if (percentage >= 60 && percentage < 80) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "A+";
}
alert("Your grade is: " + grade);

// Question 3

var i = 3,
  j = 5,
  k = 7;

if (i < j) {
  if (j < k) {
    i = j;
  } else {
    j = k;
  }
} else {
  if (j > k) {
    j = i;
  } else {
    i = k;
  }
}
console.log("A:", i, j, k);

i = 8;
j = 15;
k = 12;

if (i < j) {
  if (j < k) {
    i = j;
  } else {
    j = k;
  }
} else {
  if (j > k) {
    j = i;
  } else {
    i = k;
  }
}
console.log("B:", i, j, k);

i = 13;
j = 15;
k = 13;

if (i < j) {
  if (j < k) {
    i = j;
  } else {
    j = k;
  }
} else {
  if (j > k) {
    j = i;
  } else {
    i = k;
  }
}
console.log("C:", i, j, k);

i = 3;
j = 5;
k = 17;

if (i < j) {
  if (j < k) {
    i = j;
  } else {
    j = k;
  }
} else {
  if (j > k) {
    j = i;
  } else {
    i = k;
  }
}
console.log("D:", i, j, k);

i = 25;
j = 15;
k = 17;

if (i < j) {
  if (j < k) {
    i = j;
  } else {
    j = k;
  }
} else {
  if (j > k) {
    j = i;
  } else {
    i = k;
  }
}
console.log("E:", i, j, k);
