var display = document.querySelector("#display")
var equals = document.querySelector("#equals")
var nums = document.querySelectorAll(".num")
var op = document.querySelectorAll(".op")
var theNum = "";
var oldNum = "";
var resultNum;
var operator;

var setNum = function () {
  if (resultNum) {
    theNum = this.getAttribute("data-num");
    resultNum = "";
  } else {
    theNum += this.getAttribute("data-num");
  }

  display.innerHTML = theNum;

};

var moveNum = function () {
  oldNum = theNum;
  theNum = "";
  operator = this.getAttribute("data-op");

  equals.setAttribute("data-result", "");
};

var displayNum = function () {

  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);

  switch (operator) {
    case "plus":
      resultNum = oldNum + theNum;
      break;

    case "minus":
      resultNum = oldNum - theNum;
      break;

    case "times":
      resultNum = oldNum * theNum;
      break;

    case "divided by":
      resultNum = oldNum / theNum;
      break;

    default:
      resultNum = theNum;
  }


  if (!isFinite(resultNum)) {
    if (isNaN(resultNum)) {
      resultNum = "something wrong!"
    } else {
      resultNum = "impossible!"
    }
  }

  display.innerHTML = resultNum;
  equals.setAttribute("data-result", resultNum);

  oldNum = 0;
  theNum = resultNum;

};

var clearAll = function () {
  oldNum = "";
  theNum = "";
  display.innerHTML = "0";
  equals.setAttribute("data-result", resultNum);
};

for (var i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = setNum;
}

for (var i = 0, l = op.length; i < l; i++) {
  op[i].onclick = moveNum;
}

equals.onclick = displayNum;

var clear = document.querySelector("#clear").onclick = clearAll;



