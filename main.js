let ourClass = ["Drew", "Jeff", "Anthony", "Chris", "Danh", "Matt", "Rachel", "Seth", "Jake", "Terence", "Jeremiah", "Kaitlin"];
let listContainer = document.getElementById("list-container");
let rowDiv = document.getElementById("row-div");

document.addEventListener("click", function handleClick(event) {
  let numStudents = document.getElementById("num-students").value;
  if (event.target.classList.contains("show-button")) {
    let ranStudents = shuffleClass(ourClass);
    if (numStudents) {
      assignRooms(numStudents, ranStudents);
    } else {
      alert("Please enter number of students per room");
    }
  }
});

function shuffleClass(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function assignRooms(studPerRoom, students) {
  let numRooms = 0;
  if (students.length % studPerRoom !== 0) {
    if (confirm("There will not be an equal number of students in each room. Would you like to continue?") == true) {
      numRooms = students.length / studPerRoom + 1;
    } else {
      rowDiv.innerHTML = "";
      return;
    }
  } else {
    numRooms = students.length / studPerRoom;
  }
  let currentStudent = 0;
  rowDiv.innerHTML = "";
  for (i = 1; i <= numRooms; i++) {
    let roomDiv = document.createElement("div");
    roomDiv.innerHTML = `<div class="h1"> Room ${i}: </div>`;
    rowDiv.append(roomDiv);
    for (let x = 0; x < studPerRoom; x++) {
      if (students[currentStudent] == undefined) {
        return;
      } else {
        let studDiv = document.createElement("div");
        studDiv.innerHTML = `<div class="h4 text-primary"> ${students[currentStudent]} </div>`;
        rowDiv.append(studDiv);
        currentStudent++;
      }
    }
  }
}
