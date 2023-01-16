//navbar fixed for scroll --START
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});
//navbar fixed for scroll --END

//drag back down navbar START
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//drag back down navbar END


//send email via contact using emailJS START
function SendMail(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if(!name==false && !email==false && !subject==false)
    {
        emailjs.send("service_8d8n7mh","template_fd8gml8",{
            name: name,
            email: email,
            subject: subject,
            message: message,
            }).then(function (res){
                alert("Sucess! Your Email was Sent. Status: " + res.status);
            });
        document.getElementById("form").reset();
    }
    else{
        alert("Please fill up the Form!");
    }
}
//send email via contact using emailJS END

//downalod CV -START
function downlaodCv(){
    document.getElementById('download').click('btndownload');
}
//download CV -END




/*
//send email via contact using smtpjs START
//const form = document.querySelector('.form');
var send = document.getElementById('send');
send.addEventListener('click', function(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var myemail = 'emilio.bresolin@gmail.com';

    var body = 'name: ' + name + '<br/>email: ' + email + '<br/>subject: ' + subject + '<br/>message: ' + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "emilio.bresolin@gmail.com",
        Password : "45B7D02D3D3AEC052A0302340287CA1D18B1",
        To : myemail,
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
});
//send email via contact using smtpjs END
*/
