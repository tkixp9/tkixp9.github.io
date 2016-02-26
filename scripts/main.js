
/*
var urlWeibo = "http://m.meegusta.ru/api/v2/infostream/weibo.json?wid=1443451270116834&isBiTrack=false&from=home&feature=12&did=969a23e22f97a346450611163ff0a4c8&pn=ru.magazine.now&appvc=1&chn=ofw&lc=ru-me";
var xhr = new XMLHttpRequest();
xhr.onload = function() {
  alert("xhr onload");
};
xhr.open("GET", urlWeibo, true);
xhr.send(null);
setTimeout(function() {
  //location.replace("http://www.sina.com");
  // confirm("show dialog after 10000");
  document.title="董洁";
  // myOl.scrollIntoView();
  alert(xhr.status);
}, 10000);*/
/*

var myHeading = document.querySelector('h1');
//alert("start to change title " + multiply(2, 12));
myHeading.innerHTML = '女神 董洁';
myHeading.onclick=function() {
    //alert('Ouch! Stop poking me!');
  window.resizeTo(1000 ,1200);
  var nextWindow = window.open("http://www.baidu.com", "temp");
  nextWindow.resizeTo(1000 ,1200);
}

function multiply(first, second) {

	return first*second;
}

var myImage = document.querySelector('img');
var newImage;
for(var i = 0; i < 5; i++) {
  newImage = myImage.cloneNode(false);
  newImage.setAttribute ('src','images/dj_00'+(i+3)+'.jpg');
  myImage.parentNode.appendChild(newImage);
  // myImage.parentNode.insertBefore(newImage, myImage.parentNode.childNodes[myImage.parentNode.childNodes.length - 8]);
}


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dj_001.jpg') {
      myImage.setAttribute ('src','images/dj_002.jpg');
    } else {
      myImage.setAttribute ('src','images/dj_001.jpg');
    }
}

var myButton = document.querySelector("button");
myButton.onclick = function() {
	var myName = prompt("please enter your name", "any?");
	localStorage.setItem("name", myName);
	myHeading.innerHTML = myName +'女神 董洁' + '\n width=' + window.innerWidth 
  + "height=" + window.outerHeight + window.location.protocol;
  window.resizeTo(1000 ,1200);
}

var current = 1;
setInterval(function() {
   current += 1;
 if (current > 9) {
    current = 1;
  }
  // myImage.setAttribute ('src','images/dj_00'+(current)+'.jpg');
}, 1000);

// alert(document.domain);


var myOl = document.getElementById("the_list");
var newLi = myOl.getElementsByTagName("li")[0].cloneNode(false);
newLi.appendChild(document.createTextNode("人物评价"));
myOl.appendChild(newLi);
var fragMent = document.createDocumentFragment();
fragMent.appendChild(myOl.getElementsByTagName("li")[0]);
// alert(myOl.getElementsByTagName("li")[0].innerHTML);
var a = document.createElement("div");
window.onresize = function(event) {
  alert("resize");
};
*/

