function briSaysHello() {
  var name = prompt("Please enter your name");
  document.getElementById("message").innerHTML = "Hi " + name + ", thanks for visiting my site! Sincerely, - Bri";
}


function thumbAnim() {
    var hand = document.getElementById("thumb");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 500) {
            clearInterval(id);
        } else {
            pos++;
            hand.style.left = pos + 'px';
        }
    }
}
