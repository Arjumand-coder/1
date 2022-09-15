
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/prwsuEF_o/model.json', modelReady);

    
}
dog=0;
sheep=0;
parrot=0;
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results){

    if(error) {
        console.error(error)
    }

    else{
        console.log(results); 
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Detected  Dog -'  + dog +' Detected  Sheep - '  +sheep+' Detected  Parrot -' +parrot;

        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById('ear');
       
        if(results[0].label == "Sheep")  {

            img.src='1.jpg';
            sheep=sheep+1;
        }

        
        
        else  if(results[0].label == "Parrots")  {

            img.src='parrot.gif';
            parrot=parrot+1;
        }  

        else  if(results[0].label == "Dogs Barking")  {

            img.src='dog.jpg';
            dog=dog+1;
        }  
         else   {

            img.src='R.gif';
        }  

        

    }
}