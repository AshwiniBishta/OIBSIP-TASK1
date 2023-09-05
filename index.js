let movies = [
    {
        name: "GADAR 2",
        des: "A sequel to Gadar: Ek Prem Katha, It starred Sunny Deol, Ameesha Patel and Utkarsh Sharma, who reprised their roles from the previous film.",
        image: "images/img1.jpg"
    },
    {
        name: "Loki",
        des: "Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name",
        image: "images/slider1.jpg"
    },
    {
        name: "Trial",
        des: "“The Trial – Pyaar, Kaanoon, Dhokha” is a well-executed legal drama that explores a variety of themes. It focuses on courtroom arguments, personal upheavals, moral dilemmas, and the story of a woman played by Kajol who returns to her law career after her husband gets involved in a sex scandal.",
        image: "images/img3.jpg"
    },
    {
        name: "A Thursady",
        des: "Naina, a playschool teacher, takes 16 students hostage. Rattling the police and the leaders, her demands send shockwaves through the country. Naina, a playschool teacher, takes 16 students hostage.",
        image: "images/img4.jpg"
    },
    {
        name: "mathagam",
        des: "At the centre of Disney+ Hotstar's latest Tamil procedural drama Mathagam are two ambitious men — one, a straight-shooting Deputy Commissioner of Police and the other, Tamil Nadu's most dangerous criminal of modern times, whose fates intersect solely because of chance.",
        image: "images/img5.jpg"
    }
];

const carousel = document.querySelector('.carousel')
let slider = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex = 0;
    }

    //create DOM Elements
    
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting up elements class name
    slide.className = 'slider';
    content.className = 'slide_content';
    h1.className = 'movie_title';
    p.className = 'movie_des';

    slider.push(slide);

    if(slider.length)
    {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${ 30 * (slider.length - 2)}px)`;
        
    }
    
}
for (let i=0; i<3; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);

//video cards

const videoCards = [...document.querySelectorAll('.video_card')];

videoCards.forEach((item) => {
    item.addEventListener('mouseover',() => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',() => {
        let video = item.children[1];
        video.pause();
    });
});

//card slider 
let cardContainer = [...document.querySelectorAll(".card_container")];
let preBtns = [...document.querySelectorAll(".pre_btn")];
let postBtns = [...document.querySelectorAll(".post_btn")];

cardContainer.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    postBtns[i].addEventListener("click",()=> {
        item.scrollLeft += containerWidth - 200;
    })
    preBtns[i].addEventListener("click", ()=>{
        item.scrollLeft -= containerWidth +200;
    })
})