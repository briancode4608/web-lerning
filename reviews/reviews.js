const reviews = [
    {
        id:1,
        name: "deadpol",
        job:"hero",
        img: "1-intro-photo-final.jpg",
        text: " i was just passing by and realised your fouth wall needs a repair , coz you website looks like my face",
    },

    {
        id:2,
        name: "batman",
        job:"dark knight",
        img: "/download (1).jpeg",
        text: " i was just passing by and realised your fouth wall needs a repair , coz you website looks like my face",
    },

    {
        id:3,
        name: "saiki",
        job:"jobless",
        img: "/images (16).jpeg",
        text: " i was just passing by and realised your fouth wall needs a repair , coz you website looks like my face",
    },

    {
        id:4,
        name: "brian",
        job:"product",
        img: "/images (4).jpeg",
        text: " i was just passing by and realised your fouth wall needs a repair , coz you website looks like my face",
    },
];



const img = document.getElementsByClassName("img");
var iden = document.getElementsByClassName("name");
var job= document.getElementsByClassName("job");
var text = document.getElementsByClassName("review");

const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const random = document.getElementsByClassName("random");



let curenItem = 0;

window.addEventListener('DOMContentLoaded',function(){
getPerson();
}
);

function getPerson(){
    const item = reviews[curenItem];
    img.src = item.img;
    iden = item.name;
    job = item.job;
    text = item.text;
};

left.addEventListener("click", function(){
    curenItem--;
    if(curenItem < 0  ){
        curenItem = reviews.length - 1 ;
    }
    getPerson(curenItem);

});

right.addEventListener("click", function(){
    curenItem++;
    if(curenItem > reviews.length - 1){
     curenItem = 0;
    }
    getPerson(curenItem);
});

//random
random.addEventListener("click", fuction(){
    curenItem = Math.floor(Math.random() * reviews.length);
    getPerson(curenItem);
});

