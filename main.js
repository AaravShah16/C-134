var img = ""
var status = ""
var objects = []

function preload() {
}

function draw() {
    image(video, 0, 0, 640, 420)
    if (status != "") {
    r = random(255);
    g = random(255);
    b = random(255);
    object_detector.detect(video, gotResult)



        for (i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status: object Detected"
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are: "+objects.length
            fill(r, g, b)
            percent = floor(objects[i].confidence*100)
            text(objects[i].label +""+percent+"%", objects[i].x, objects[i].y)
            noFill()
            stroke(r, g, b)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    video.size(640, 420)
    object_detector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "status: Detecting Objects"
}

function modelLoaded() {
    console.log("cocossd is initialized")
    status = true
    object_detector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects = results
    }
}