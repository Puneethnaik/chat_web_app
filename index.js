
var activeUser = null;

//jQuery events
$(document).ready(function(){
    $(".user-card").click(function() {
        activeUser = $(this).find("#user-name").html();
        $(".chat-window").html('<header class="header chat-header"><div class="user-card-header"><div class="row"><div class="col-md-1" style="border:1px solid black"><img height="60px" width="100%" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="user photo"/></div><div class="col-md-9"> <div class="row"><div>' + activeUser + '</div></div><div class="row">Online</div></div></div></div></header><div class="message-div"></div><footer class="footer message-input"><input type="text" placeholder="Test text" style="height:50px; width:100%"/></footer>');
    })
});


//socket.io 

const socket = io();

//new user event
socket.on('user connect', function(data) {
    console.log("New User is connected", data.userId);
})

socket.on('user disconnect', function(data) {
    console.log("User %s disconnected", data.userId);
})



