// MENU CLICK ACTIVE AND READMORE CLICK
const menuExercises = document.querySelectorAll(".exercise");
const readMores = document.querySelectorAll(".summary-title");
const readMorecontents = document.querySelectorAll(".summary-list");
const exerciseNumbers = document.querySelectorAll(".exercises-content");

function numberActive() {
  for (let menuExercise of menuExercises) {
    menuExercise.classList.remove("active");
  }
  this.classList.add("active");
}

menuExercises.forEach((e, index) => {
  e.addEventListener("click", numberActive);
  e.addEventListener("click", () => {
    for (let i = 0; i < exerciseNumbers.length; i++) {
      if (index == i) {
        exerciseNumbers[i].classList.add("open");
      } else {
        exerciseNumbers[i].classList.remove("open");
      }
    }
  });
});

readMores.forEach((e, index) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < readMores.length; i++) {
      if (index == i) {
        readMorecontents[i].classList.toggle("open");
      }
    }
  });
});

// PUSH ARRAY

const userInput = document.querySelector("#input-array");
const arrayButton = document.querySelector(".array-push");
const arrayInner = document.querySelector("#array-print");

var arrayInput = [];
var arrayLenght = arrayInput.length;

function pushNumber(input, array, inner) {
  let numberInput = Number(input.value);
  array.push(numberInput);
  inner.innerText = "Mảng đã nhập:   " + "[" + array.join(", ") + "]";
  arrayLenght = array.length;
  console.log(arrayInput);
}

arrayButton.addEventListener("click", () => {
  pushNumber(userInput, arrayInput, arrayInner);
});

// DELETE ARRAY

const deleteButton = document.querySelector(".array-delete");
const deleteNumbutton = document.querySelector(".number-delete");

function deleteNumber(array, inner) {
  if (arrayLenght) {
    array.pop();
    arrayInput = array;
    arrayLenght = array.length;
    inner.innerText = "Mảng đã nhập:   " + "[" + array.join(", ") + "]";
    console.log(arrayLenght);
  } else {
    inner.innerText = '"Nhập các phần tử của mảng ở trên"';
  }
}

function deleteArrray() {
  if (arrayLenght) {
    arrayInput = [];
    arrayInner.innerText = '"Nhập các phần tử của mảng ở trên"';
    for (let arr of document.querySelectorAll(".result")) {
      arr.innerText = "Nhập dữ liệu ở trên";
    }
  }
}

deleteButton.addEventListener("click", deleteArrray);
deleteNumbutton.addEventListener("click", () => {
  deleteNumber(arrayInput, arrayInner);
});

// TỔNG SỐ DƯƠNG

const innerPosnumber = document.querySelector(".result-posnumber");
const posnumberButton = document.querySelector("#posnumber-button");

function posNumbers(array) {
  let totalNumber = 0;
  for (let i = 0; i < arrayLenght; i++) {
    if (array[i] > 0) {
      totalNumber += array[i];
    }
  }
  innerPosnumber.innerText = "Tổng các số dương:   " + totalNumber;
}

posnumberButton.addEventListener("click", () => {
  posNumbers(arrayInput);
  alertInput(arrayInput, innerPosnumber);
});

//ĐẾM SỐ DƯƠNG

const countNumberpos = document.querySelector(".count-posnumber");
const countPosbutton = document.querySelector("#count-posnumber-button");

function countPosnumber(array) {
  let count = 0;
  for (let i = 0; i < arrayLenght; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  countNumberpos.innerText = "Tổng số dương:   " + count + " số";
}

countPosbutton.onclick = () => {
  countPosnumber(arrayInput);
  alertInput(arrayInput, countNumberpos);
};

//TÌM SỐ NHỎ NHẤT

const minNumberbutton = document.querySelector("#minnumber-button");
const minNumber = document.querySelector(".minnumber");

function minNumberfun(array) {
  minNumber.innerText = "Số nhỏ nhất trong mảng:  " + Math.min(...array);
}

minNumberbutton.addEventListener("click", () => {
  minNumberfun(arrayInput);
  alertInput(arrayInput, minNumber);
});

//TÌM SỐ DƯƠNG NHỎ NHẤT

const minPosbutton = document.querySelector("#minpos-button");
const minPos = document.querySelector(".minpos-number");

function minNumberpos(array) {
  let posArray = [];
  for (let arr of array) {
    if (arr > 0) {
      posArray.push(arr);
    }
  }
  if (!posArray.length) {
    minPos.innerText = "Số dương nhỏ nhất trong mảng:  " + "Không có số dương";
  } else {
    minPos.innerText =
      "Số dương nhỏ nhất trong mảng:  " + Math.min(...posArray);
  }
}

minPosbutton.addEventListener("click", () => {
  minNumberpos(arrayInput);
  alertInput(arrayInput, minPos);
});

// SỐ CHẲN CUỐI CÙNG

const finalNumberbutton = document.querySelector("#final-button");
const finalNumber = document.querySelector(".final-number");

function finalEvenumber(array) {
  let finalNum = 0;
  let count = 0;
  for (let arr of array) {
    if (arr % 2 == 0 && arr != 0 && arrayLenght != 0) {
      finalNum = arr;
      count++;
    }
    if (count == 0) {
      finalNum = "Không có số chẵn";
    }
  }

  finalNumber.innerText = "Số chẵn cuối cùng trong mảng:  " + finalNum;
}

finalNumberbutton.addEventListener("click", () => {
  finalEvenumber(arrayInput);
  alertInput(arrayInput, finalNumber);
});

//ĐỔI CHỖ

const convertNumbutton = document.querySelector("#convert-button");
const convertNum = document.querySelector(".convert-number");
const indexNum1 = document.querySelector(".index-number1");
const indexNum2 = document.querySelector(".index-number2");

function convertNumber(array, index1, index2) {
  if (array.length) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  convertNum.innerText = "Mảng sau khi đổi:  " + "[" + array.join(", ") + "]";
}

convertNumbutton.addEventListener("click", () => {
  let index1 = Number(indexNum1.value);
  let index2 = Number(indexNum2.value);
  convertNumber(arrayInput, index1, index2);
  alertInput(arrayInput, convertNum);
});

// SẮP XẾP

const sortNumberbutton = document.querySelector("#sort-button");
const sortNum = document.querySelector(".sort-number");

function sortNumber(array) {
  for (let i = 0; i < arrayLenght; i++) {
    for (let j = 0; j < arrayLenght; j++) {
      if (array[i] < array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  sortNum.innerText = "Mảng đã sắp xếp:  " + "[" + array.join(", ") + "]";
}

sortNumberbutton.addEventListener("click", () => {
  sortNumber(arrayInput);
  alertInput(arrayInput, sortNum);
});

//TÌM SỐ NGUYÊN TỐ

const primeNumberbutton = document.querySelector("#prime-button");
const primeNum = document.querySelector(".prime-number");

function primeNumber(array) {
  let prime = 0;
  for (let arr of array) {
    if (arr >= 2) {
      let count = 0;
      for (let i = 2; i <= Math.sqrt(arr); i++) {
        if (arr % i == 0) {
          count++;
        }
      }
      if (count == 0) {
        prime = arr;
        break;
      }
    }
  }
  primeNum.innerText = "Số nguyên tố đầu tiên:  " + prime;
}

primeNumberbutton.addEventListener("click", () => {
  primeNumber(arrayInput);
  alertInput(arrayInput, primeNum);
});

// ĐẾM SỐ NGUYÊN
const integerInput = document.querySelector("#input-array-integer");
const arrayIntebutton = document.querySelector(".array-integer-push");
const arrInner = document.querySelector("#array-integer-print");
const integerButton = document.querySelector("#integer-button");
const integerNum = document.querySelector(".integer-number");

var arrInteger = [];

arrayIntebutton.addEventListener("click", () => {
  pushNumber(integerInput, arrInteger, arrInner);
});

function integerCount(array) {
  let count = 0;
  for (let arr of array) {
    if (Number.isInteger(arr)) {
      count++;
    }
  }
  integerNum.innerText = "Số nguyên:   " + count + "  số";
}

integerButton.addEventListener("click", () => {
  integerCount(arrInteger);
  alertInput(arrInteger, integerNum);
});

// SO SÁNH

const compareButton = document.querySelector("#compare-button");
const compareNum = document.querySelector(".compare-number");

function compareNumber(array, inner) {
  let countNeg = 0;
  let countPos = 0;
  for (let arr of array) {
    if (arr > 0) {
      countPos++;
    } else if (arr < 0) {
      countNeg++;
    }
  }
  if (countNeg > countPos) {
    inner.innerText = "Số dương" + " < " + "Số âm";
  } else if (countNeg < countPos) {
    inner.innerText = "Số dương" + " > " + "Số âm";
  } else {
    inner.innerText = "Số dương" + " = " + "Số âm";
  }
}

compareButton.addEventListener("click", () => {
  compareNumber(arrayInput, compareNum);
  alertInput(arrayInput, compareNum);
});

// CẢNH BÁO CHƯA NHẬP LIỆU

function alertInput(array, inner) {
  if (array.length == 0) {
    inner.innerText = "Vui lòng nhập dữ liệu ở trên";
  }
}
