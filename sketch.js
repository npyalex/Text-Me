/*
 * Get In Touch
 * Send a text message from a website
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * 
 * 
 */


var AIO_KEY = ".......";//get this from your account
var channelGroup = "contactNick";
var messageIs = "messageIs";
var whoIs = "thisPersonIs";
var numberIs = "numberIs";

var thisMessage;
var thisPerson;
var thisNumber;

let input, nameInput, button, thanks, whoText, messageText, phoneInput, phoneText;


function setup()
{
    createCanvas(windowWidth,windowHeight);
    input = createInput();
    nameInput = createInput();
    phoneInput = createInput();
    nameInput.position(width*0.4,height*0.4);
    phoneInput.position(width*0.4,height*0.45);
    phoneText = text('What is your phone number?', phoneInput.x, phoneInput.y-5);
    whoText = text('What is your name?', nameInput.x, nameInput.y - 5);
    input.position(width*0.4,height/2);
    messageText = text('What is your message?', input.x, input.y - 5);
    button = createButton('Text Nick');
    button.position(input.x + input.width, height/2);
    button.mousePressed(sendData);
}


function draw()
{
//    background(145);
//    stroke(255);
//    strokeWeight(5);
//    fill(0,240,0);
//    ellipse(width/2,height/2,r)
////line(0,mouseY,width,mouseY);    // draw horizontal line  at the Y position of the cursor
////line(mouseX,0,mouseX,height);   // draw vertical line  at the X position of the cursor


}

//function mousePressed()
//{
//	sendData();
//}



function sendData() 
{
        thisMessage = input.value();
        thisPerson = nameInput.value();
        thisNumber = phoneInput.value();
        var url = ("https://io.adafruit.com/api/v1/groups/"+channelGroup+"/send.json?x-aio-key=" + AIO_KEY + "&"+messageIs+"="+thisMessage+" &"+whoIs+"="+thisPerson+"&"+numberIs+"="+thisNumber);
        var oReq = new XMLHttpRequest()
        oReq.addEventListener("load", reqListener)
        oReq.open("POST", url)
        oReq.send()
        background(255);
        thanks = text('Thanks! You just sent a text message to my phone. If you left your number, I will get back to you.', width*0.35, height/2);
        button.hide();
        input.hide();
        nameInput.hide();
        phoneInput.hide();
}

function reqListener(inputdata)
{
	console.log(inputdata);
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}






