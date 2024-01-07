// Set A

// Question 1

const lessThen100 = (num1, num2) => {
  return !!(num1 + num2 < 100);
};

console.log(lessThen100(30, 40), "console for (30, 40)");
console.log(lessThen100(77, 40), "console for (77, 44)");

// Questions 2

const detectWord = (word) => {
  const lowerCaseWords = [];
  const arrrayOfStrings = word.split("");
  function isLowerString(string) {
    return !!(string === string.toLowerCase());
  }
  arrrayOfStrings.forEach((string) => {
    if (isLowerString(string)) {
      lowerCaseWords.push(string);
    }
  });
  return lowerCaseWords.join("");
};

console.log(
  "This function returns small words :",
  detectWord("TTNNYFGJHcIUTHBNaIUFVVt")
);
console.log(
  "This function returns small words :",
  detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")
);

// Question 3
const matchHouse = (step) => {
  const numberOfCommonSticks = step - 1;
  return step * 6 - numberOfCommonSticks;
};

console.log(
  "for 1:",
  matchHouse(1),
  "-",
  "for 4",
  matchHouse(4),
  "-",
  "for 87",
  "-",
  matchHouse(87)
);

// form submit handeler

const arrayOfData = [];

const formData = document.getElementById("form");

function updateTable() {
  let tbody = document.getElementById("rows");
  tbody.innerHTML = "";
  arrayOfData.forEach((person) => {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.textContent = `${person.firstName} ${person.lastName}`;
    row.appendChild(nameCell);
    let numberCell = document.createElement("td");
    numberCell.textContent = person.Number;
    row.appendChild(numberCell);
    let ageCell = document.createElement("td");
    ageCell.textContent = person.age;
    row.appendChild(ageCell);
    let dobCell = document.createElement("td");
    dobCell.textContent = person.date;
    row.appendChild(dobCell);
    let genderCell = document.createElement("td");
    genderCell.textContent = person.gender;
    row.appendChild(genderCell);
    tbody.appendChild(row);
  });
}

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  let fName = document.getElementById("fname").value;
  let lName = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let age = document.getElementById("age").value;
  let date = document.getElementById("dob").value;
  let gender;
  let genderOptions = document.getElementsByName("gender");
  for (let option of genderOptions) {
    if (option.checked) {
      gender = option.value;
      break;
    }
  }
  let personInfo = {
    firstName: fName,
    lastName: lName,
    Number: number,
    age: age,
    date: date,
    gender: gender,
  };
  arrayOfData.push(personInfo);

  updateTable();
});
