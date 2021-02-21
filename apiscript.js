
let btn = document.getElementById('myBtn');
let name = document.getElementById('name');
let password = document.getElementById('password');
let modal = parent.document.getElementById('myModal');



document.getElementById("myBtn").addEventListener("click", apiCheck); 

let video = parent.document.getElementById('video');








// async/await per marrjen e API
async function apiCheck(){
    let response = await fetch("https://yesno.wtf/api");
    let Answer = await response.json();

    




    

    
    // pas kerkes se API dhe marrjes, nese del "answer" = "yes", 
    // videoja vazhdon, ruhen te dhenat ne local storage, hiqet modal-i

    if(Answer.answer === "yes"){
        video.play();
        localStorage.setItem("APIResponse", "yes");
        localStorage.setItem("Name", name.value);
        localStorage.setItem("Password", password.value);
        modal.style.display = "none";
    }else{

        // perndryshe, nese del "no", destroy video elementin, hiq modalin
        video.src = "";
        modal.style.display = "none";
    }

    
    
}





