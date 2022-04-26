var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function Start() {
    Recognition.start();
}

Recognition.onresult = function(event) {

    console.log(event)

    var Content = event.results[0][0].transcript;
    console.log(Content);
    
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    
    Webcam.attach(MyCamera);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: "png",
    png_quality: 100
});
MyCamera = document.getElementById("camera");