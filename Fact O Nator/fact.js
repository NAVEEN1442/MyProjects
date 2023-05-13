const front = document.querySelector(".front-page");
const home = document.querySelector(".home-page");
const letbtn = document.querySelector(".les-btn");
const fact = document.querySelector(".fact-page");
const sport = document.querySelector("#S");
const space = document.querySelector("#SP");
const animal = document.querySelector("#A");
const horror = document.querySelector("#H");
const technology = document.querySelector("#T");
const psychological = document.querySelector("#P");


function init(){
    front.classList.add("active");
    home.classList.remove("active");
    fact.classList.remove("active");
}
init();
function FrontToBack(){
    front.classList.remove("active");
    home.classList.add("active");
    fact.classList.remove("active");
    
}
const title = document.querySelector(".fact-title");

const right = document.querySelector(".right-title");
let currentfact = "";
function sportTOcate(){
    const sport_fact = [
        "The game of basketball was invented by Dr. James Naismith in 1891. He initially used a soccer ball and two peach baskets as goals, and the first game was played with nine players on each side."
    ,"The fastest recorded serve in tennis was achieved by Sam Groth of Australia, who hit a serve at a speed of 163.7 miles per hour (263.4 kilometers per hour) during the 2012 Busan Open Challenger Tennis tournament.",
    "The highest score ever achieved by a single gymnast in the Olympic Games is 39.856 out of a possible 40 points. This remarkable feat was accomplished by Nadia Comaneci of Romania at the 1976 Montreal Olympics. Due to the limited number of digits on the scoreboard, her perfect 10 score was displayed as 1.00.",
    "The first modern Olympic Games were held in Athens, Greece, in 1896. The Games were revived by Pierre de Coubertin, a French educator and historian, with the aim of promoting international cooperation and peace through sports.",
    "The longest recorded drive in professional golf history is 515 yards (471 meters). This impressive distance was achieved by Mike Austin during the 1974 U.S. National Seniors Open Championship. Austin's drive took place at the Winterwood Golf Course in Las Vegas, Nevada, and the record still stands to this day."
];
    front.classList.remove("active");
    home.classList.remove("active");
    fact.classList.add("active");
    title.innerText = "S P O R T S";
    const randomfact = Math.floor(Math.random() * sport_fact.length);
    const factt = sport_fact[randomfact];
    right.innerText = factt;
    currentfact = "sport";
}

function spaceTOcate(){
    const space_fact = ["Space is completely silent. Unlike on Earth, where sound waves can travel through the air, space is a vacuum, devoid of any air or molecules to carry sound. This means there is no sound in space, and astronauts use radio communication to communicate with each other and with mission control.",
    "The largest volcano in our solar system is not on Earth but on Mars. Olympus Mons, located on Mars, is about 13.6 miles (22 kilometers) high, making it nearly three times the height of Mount Everest, the tallest mountain on Earth.",
    "The Hubble Space Telescope, launched into orbit in 1990, has provided breathtaking images of deep space. It can capture images with such high resolution that it could spot a pair of fireflies in Tokyo from Washington, D.C.",
    "Space is not completely empty but contains tiny particles of dust and debris. These particles can pose a risk to spacecraft, as even a small piece of debris can cause significant damage when traveling at high speeds in orbit.",
    "The Sun, which is the closest star to Earth, accounts for about 99.86% of the total mass of the entire solar system. Its immense size and gravitational pull shape the orbits of planets and other celestial bodies in our solar system."
];
    front.classList.remove("active");
    home.classList.remove("active");
    fact.classList.add("active");
    title.innerText = "S P A C E";
    const randomfact = Math.floor(Math.random() * space_fact.length);
    const factt = space_fact[randomfact];
    right.innerText = factt;
    currentfact = "space";
}

function animalTOcate(){
    const animal_fact = ["Horses have been used in various equestrian sports for centuries, such as horse racing, show jumping, dressage, and polo. Their strength, agility, and speed make them excellent companions for competitive sporting activities.",
    "Border Collies are known for their exceptional herding abilities and are often seen in dog sports like sheepdog trials. Their intelligence, agility, and natural instincts make them highly skilled at controlling and directing livestock.",
    "Greyhounds are one of the fastest dog breeds and have been bred specifically for racing. With their slender bodies and incredible sprinting abilities, they can reach speeds of up to 45 miles per hour (72 kilometers per hour) on the track.",
    "Dolphins are highly intelligent marine animals that have been trained for various water sports and performances. Their agility, acrobatic skills, and ability to interact with humans make them popular attractions in water shows and exhibits.",
    "Pigeon racing is a competitive sport in which specially trained homing pigeons are released from a specific location and race back to their home loft. These pigeons have a remarkable ability to navigate over long distances using their natural homing instincts and have been involved in racing events for centuries."
];
    front.classList.remove("active");
    home.classList.remove("active");
    fact.classList.add("active");
    title.innerText = "A N I M A L S";
    const randomfact = Math.floor(Math.random() * animal_fact.length);
    const factt = animal_fact[randomfact];
    right.innerText = factt;
    currentfact = "animal";
}

function horrorTOcate(){
    const horror_fact = ["The word horror originates from the Latin word horror, which means to bristle or to tremble. It accurately reflects the intense emotions and sensations horror aims to evoke in its audience.",
    "The horror genre has a rich history and dates back to ancient times. Stories of supernatural creatures and terrifying events can be found in folklore and mythology from various cultures around the world.",
    "One of the most iconic horror characters is Count Dracula, created by Bram Stoker in his 1897 novel Dracula. The character has since become a cultural phenomenon, inspiring countless adaptations in films, books, and other media.",
    "Psycho, directed by Alfred Hitchcock and released in 1960, is considered one of the most influential horror films of all time. Its famous shower scene, known for its innovative editing techniques and suspenseful atmosphere, has become an iconic moment in cinema history.",
    "Horror has a significant impact on our psychology and physiology. When we experience fear, our brains release chemicals such as adrenaline, triggering the fight-or-flight response. This physiological reaction can make horror movies and stories an intense and exhilarating experience for many people."
];
    front.classList.remove("active");
    home.classList.remove("active");
    fact.classList.add("active");
    title.innerText = "H O R R O R";
    const randomfact = Math.floor(Math.random() * horror_fact.length);
    const factt = horror_fact[randomfact];
    right.innerText = factt;
    currentfact = "horror";
}

function technologyTOcate(){
    const tech_fact = ["The first electronic computer, called the ENIAC (Electronic Numerical Integrator and Computer), was built in 1946 and weighed around 27 tons. It occupied a space of about 1,800 square feet (167 square meters) and had over 17,000 vacuum tubes.",
    "The term Wi-Fi does not actually stand for anything. It is a brand name coined by the Wi-Fi Alliance, the organization that certifies Wi-Fi products for interoperability. It was chosen for its catchiness and ease of use.",
    "The first mobile phone call was made on April 3, 1973, by Martin Cooper, an engineer at Motorola. He made the call on a prototype handheld mobile phone, which weighed about 2.2 pounds (1 kilogram) and had a battery life of approximately 20 minutes.",
    "The world's first website, created by Tim Berners-Lee, went live on August 6, 1991. It was dedicated to providing information about the World Wide Web project and featured a basic text interface with hyperlinks.",
    "The concept of 3D printing, also known as additive manufacturing, dates back to the early 1980s. However, it wasn't until the 2010s that 3D printing gained significant popularity and accessibility, allowing individuals and businesses to create three-dimensional objects using a variety of materials, including plastics, metals, and even human tissue."
];
    front.classList.remove("active");
    home.classList.remove("active");
    fact.classList.add("active");
    title.innerText = "T E C H N O L O G Y";
    const randomfact = Math.floor(Math.random() * tech_fact.length);
    const factt = tech_fact[randomfact];
    right.innerText = factt;
    currentfact = "tech";
}

function psychologicalTOcate(){
    const psychology_fact = ["The bystander effect is a psychological phenomenon where individuals are less likely to help a person in need when there are other people present. This diffusion of responsibility occurs because individuals believe that someone else will take action, leading to decreased personal responsibility.",
    "The placebo effect is a fascinating phenomenon in which a person experiences a perceived improvement in their condition or symptoms after receiving a treatment that has no active therapeutic effect. The belief and expectation that the treatment will work can have a real impact on a person's subjective experience.",
    "The mere-exposure effect suggests that people tend to develop a preference for things or individuals they are repeatedly exposed to. Familiarity breeds liking, and this effect has been observed in various contexts, including attraction, product marketing, and music preferences.",
    "Cognitive dissonance is the psychological discomfort that arises when a person holds conflicting beliefs, attitudes, or values. To reduce this discomfort, individuals may change their beliefs, justify their behavior, or seek consistency in their thoughts and actions.",
    "The Stanford Prison Experiment, conducted by psychologist Philip Zimbardo in 1971, explored the effects of perceived power and social roles on human behavior. The study simulated a prison environment and demonstrated how easily individuals can adopt abusive or submissive behaviors when placed in certain roles, highlighting the powerful influence of situational factors on human psychology."
];
    front.classList.remove("active");
    home.classList.remove("active");
    fact.classList.add("active");
    title.innerText = "P S Y C H O L O G Y";
    const randomfact = Math.floor(Math.random() * psychology_fact.length);
    const factt = psychology_fact[randomfact];
    right.innerText = factt;
    currentfact = "psychology";
}

letbtn.addEventListener("click",FrontToBack);
sport.addEventListener("click",sportTOcate);
space.addEventListener("click",spaceTOcate);
animal.addEventListener("click",animalTOcate);
horror.addEventListener("click",horrorTOcate);
technology.addEventListener("click",technologyTOcate);
psychological.addEventListener("click",psychologicalTOcate);

const hbtn = document.querySelector("#h-btn");
const abtn = document.querySelector("#a-btn");

function backtohome(){
    front.classList.remove("active");
    home.classList.add("active");
    fact.classList.remove("active");
}

function again(){
    if(currentfact==="sport"){
        sportTOcate();
    }
    else if(currentfact==="space"){
        spaceTOcate();
    }
    else if(currentfact==="horror"){
        horrorTOcate();
    }
    else if(currentfact==="tech"){
        technologyTOcate();
    }
    else if(currentfact==="psychology"){
        psychologicalTOcate();
    }
    else{
        animalTOcate();
    }

}

hbtn.addEventListener("click",backtohome);
abtn.addEventListener("click",again);
