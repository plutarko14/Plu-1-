nose_X= 0;
nose_Y= 0;
function preload()
{
    img=loadImage("https://i.postimg.cc/3Rd5gmDQ/B0-E834-BF-D47-A-4-A6-A-83-CD-123-C786-F8-CE9-4-5005-c-removebg-preview.png")
}
function setup(){
 canvas = createCanvas(499, 501);
 canvas.center(); 
 video = createCapture(VIDEO);
    video.size(499, 501);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
  
function modelLoaded() {
    console.log('PoseNet está inicializado');
  }
  
function take_snapshot(){    
    save('myFilterImage.png');
  }

  function draw()
  {
    image(video, 0,0,499,501);
    image(img,nose_X,nose_Y,406,332)
  }

  function gotposes(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    nose_X= results[0].pose.nose.x-161;
    nose_Y= results[0].pose.nose.y-172;
  }
}
