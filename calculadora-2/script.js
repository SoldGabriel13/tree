let n1 = 0;
let n2 = 0;
let M = 0;
let op = 0;
function write(elementid, content) {
  document.getElementById(elementid).textContent = content;
}
function ifels(id){
  if (op == 0){
      n1 *= 10;
      n1 += id;
      write("screen", n1);
    }
    else {
      n2 *= 10;
      n2 += id;
      write("screen", n2);
    }
}
function check(id){
  document.getElementById(String(id)).addEventListener("click", function(){
    ifels(id);
  });
}

check(0);
document.getElementById('00').addEventListener("click", function(){
  if (op == 0){
    n1 *= 100;
    write("screen", n1);
  }
  else {
    n2 += 100;
    write("screen", n2)
  }
});
check(1);
check(2);
check(3);
check(4);
check(5);
check(6);
check(7);
check(8);
check(9);

document.getElementById('+').addEventListener("click", function(){op = 1;});
document.getElementById('-').addEventListener("click", function(){op = 2;});
document.getElementById('x').addEventListener("click", function(){op = 3;});
document.getElementById('/').addEventListener("click", function(){op = 4;});
document.getElementById('^').addEventListener("click", function(){op = 5;});

function equal() {
    switch (op) {
    case 1:
      n1 = n1+n2;
      write("screen", n1);
      n1 = 0;
      n2 = 0;
      break;
    case 2:
      n1 = n1-n2;
      write("screen", n1);
      n1 = 0;
      n2 = 0;
      break;
    case 3:
      n1 = n1*n2;
      write("screen", n1);
      n1 = 0;
      n2 = 0;
      break;
    case 4:
      n1 = n1/n2;
      write("screen", n1);
      n1 = 0;
      n2 = 0;
      break;
    case 5:
      n1 = n1**n2;
      write("screen", n1);
      n1 = 0;
      n2 = 0;
      break;
  }
  op = 0;
}
document.getElementById('=').addEventListener("click", function(){equal()});
function ce() {
  n1 = 0;
  n2 = 0;
  write("screen", String(0));
}
document.getElementById('ce').addEventListener("click", function(){ce()});

document.addEventListener("keydown", function(event) {
  console.log(event.key);
  switch (event.key) {
    case "Enter":
      equal();
      break;
    case "Delete":
      ce();
      break;
    case "Backspace":
      if (op == 0) {
        n1 /= 10;
        write("screen", n2);
      }
      else {
        n2 /= 10;
        write("screen", n2);
      }
      break;
    case "1":
      ifels(1);
      break;
    case "2":
      ifels(2);
      break;
    case "3":
      ifels(3);
      break;
    case "4":
      ifels(4);
      break;
    case "5":
      ifels(5);
      break;
    case "6":
      ifels(6);
      break;
    case "7":
      ifels(7);
      break;
    case "8":
      ifels(8);
      break;
    case "9":
      ifels(9);
      break;
    case "0":
      ifels(0);
      break;
    case "+":
      op = 1
      break;
    case "-":
      op = 2
      break;
    case "*":
      op = 3
      break;
    case "/":
      op = 4
      break;
    case "PageUp":
      op = 5
      break;
  }
})
