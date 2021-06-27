const prev_btn = document.querySelector("#prev");
const next_btn = document.querySelector("#next");
const img_div = document.querySelector("#exercise_pic");

const count = 4;

let curr = 0;

var images = [];

images[0] = './images/image1.jpg';
images[1] = './images/image2.jpg';
images[2] = './images/image3.jpg';
images[3] = './images/image4.jpg';


next_btn.addEventListener("click", () => {

    if(curr == count-1){
        next_btn.innerText= "Close";
    }
    else{
        next_btn.innerText= "Next";
        prev_btn.style.display = "initial";
        curr = curr + 1;  
        img_div.src = images[curr];
    }
    
})

prev_btn.addEventListener("click", () => {

    if(curr == 0){
        prev_btn.style.display = "none";
        return;
    }
    else{
        
        if(curr <= 3){
            next_btn.innerText= "Next";
        }

        curr = curr - 1;
    
        img_div.src = images[curr];    
    }
    
})