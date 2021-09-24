const time = 10000;
const step = 3;

function outNum(num, elem) {
  let e = document.querySelector("#out");
  n = 2500;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum(35, "#out");


function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('out2').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
   }
   function checkTime(i) {
    if (i<10) {i = "0" + i}; // добавим ноль впереди для чисел < 10
    return i;
   }