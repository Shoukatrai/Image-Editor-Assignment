var uploadButton = document.getElementById("upload-button");
var image = document.getElementById("chosen-image")

function getPic(){
    document.querySelector(".image-container").style.display = "block";
    var a = new FileReader();
    a.readAsDataURL(uploadButton.files[0]);
    a.onload = () => {
        image.setAttribute("src" ,a.result)
    }
}



function addFilterA(filterA){
    image.style.filter = `blur(${filterA.value}px)`
}

function addFilterB(filterB){
    image.style.filter = `contrast(${filterB.value}%)`
}

function addFilterC(filterC){
    image.style.filter = `hue-rotate(${filterC.value}deg)`
}

function addFilterD(filterD){
    image.style.filter = `sepia(${filterD.value}%)`
}

function flipImage(ele){
    image.style.transform = "scale(1,1)"
} 

function flipImageX(ele){
    image.style.transform = "scaleX(-1)"
} 


function flipImageY(ele){
    image.style.transform = "scaleY(-1)"
}