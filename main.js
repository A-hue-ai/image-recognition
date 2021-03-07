Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('MobliNet', modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function check()
{
    img = ml5.imageClassifier('captured_image');
    classifier.classify(img, Result);
} 

function gotResult()
{
    if (error)
    {
        consolo.error(error);
    } else 
    {
        console.log(results);
        document.getElementById("object_name").innerHTML = result[0].label;
    }

}