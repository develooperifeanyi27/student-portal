function sendMessage(){
    var message = document.getElementById("typing-box").value;

    var html = ' <div class="message-box my-message-box"> <pre>...You</pre><br>' + ' <div class="message my-message">' + message + ' </div>' + ' <div class="seperator"></div>' + '</div>';

    document.getElementById("message-area").innerHTML += html;

    document.getElementById("typing-box").value - "";
}