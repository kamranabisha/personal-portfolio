const words=[
"Front-End Developer",
"Web Designer",
"Freelancer",
"UI Developer"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function typing(){

current=words[i];

if(!isDeleting){

document.querySelector(".typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(typing,1000);

return;

}

}else{

document.querySelector(".typing").textContent=current.substring(0,j--);

if(j==0){

isDeleting=false;

i++;

if(i==words.length)
i=0;

}

}

setTimeout(typing,isDeleting?60:120);

}

typing();