  
let story = {
    currentPlace: 'outside',
    outside: {
        img: "Horror House outside.jpeg",
        title: "Outside",
        text: `Its a cold day on a Halloween night. You are walking
        down the neighborhood and you see an old white house with a
        old tree in the front yard and tall dead grass. You approch
        the house and hear a loud scream come from the inside.
        You get curious and enter the house. What do you do??`, 
        options: [
           {
            choice: "Go to the living room",
            next: "livingRoom"
           },

           {
            choice: "Turn around and run!!",
            next: "gameOver1"
           }
       ]
   },
    livingRoom: {
        img: "livingRoom.jpeg",
        title: "Living Room",
        text: `You enter the house and see a long hallway. It is dark and cold as you continue to walk down the hall and
        end up in the living room. You can not believe what you see!! There
        is a ghost right in front of you. It is the ghost of a little girl
        that looks like she has been dead for several years.
        She points at you and sends out a ear piercing screech.
        At this point what do you do?
        `,
        options: [
            {
                choice: "Talk to her?",
                next: "kitchen",
            },
            {
                choice: "Run Away",
                next: "gameOver1"
            }
        ] 
   },
   kitchen: {
       img: "kitchen.png",
       title: "Kitchen",
       text: `You attempt to talk to the ghost. To your suprise she actually responds.
       Her voice sounds rough and she explains what has happened over the years
       in the house and of the murders that have been committed.
       She tells you to check the kitchen and search thoroughly through it all.
       You enter the kitchen and you start look around to see what you can find.
       opening cabinets and drawers, you find two keys. They are
       labeled for the rooms they belong to. The first one says bedroom,
       the second one says basment. You head back to the living room and 
       there is a door that might lead to the basement and the other to bedroom.
       Where would you like to go?`,
       options: [
           {
               choice: 'You pick the Bedroom key',
               next: 'winGame'
           },
           {
               choice: 'You pick the Basment key',
               next: 'gameOver2'
           }
       ]
   },
   winGame: {
       img: "bedroom.jpeg",
       title: "Bedroom (Good Ending)",
       text: `You go into the bedroom and you discover that there is a window that is wide open.
        it leads to the backyard, where you can escape. You decide to take your chances and make it out alive!!
        You go back home and never speak about what you saw ever again!`,
        options: [
            {
                choice: "Start Over??",
                next: 'outside'
            }
        ]
        
   },
   gameOver1: {
       img: "basment.jpeg",
       title: "Unfortunate Circumstances! (Alternate Ending)",
       text: `You decide to run as fast as you can but do not realise a hatch on the floor. You fall right through it and break both legs.
       There is a demogorgan and he has been waiting for someone to show up. You try to fight it but it ends up eating you whole. You died....`,
       options: [
           {
               choice: "Start Over??",
               next: 'outside'
           }
       ]
   },

   gameOver2: {
       img: "basement.jpeg",
       title: "Basement (Bad Ending)",
       text: `You decided to go into the basement. It is dark but you find the light switch. You turn on the lights and and find a demongorgon.
       He had been waiting for someone show up. You try to fight it but it ends up eating you whole. You died....`,
       options: [
           {
               choice: "Start Over??",
               next: 'outside'
           }
       ]
   }   
   
}








// Where we are going to keep some our query selectors
let start = document.querySelector('#start');
let content = document.querySelector("#container");
    // I add an event listener for the start button that allow
    // us to click it and render the scene that we want it to go to.
    start.addEventListener('click', renderScene);

// I made a function for my html content that will change.
// Inside is a I have content.innerHTMl which will update the html.
function renderScene() {
    let img = ""
    if (story[story.currentPlace].img){
        img = '<img></img>'
    }
    //Here is where I will update the html with innerHTML.
    // I also create a new buttton named continue that will stay with all the scenes.
    content.innerHTML = `
    
    <h1 id="gameHeader">${story[story.currentPlace].title}</h1>
    ${img}
    <p>${story[story.currentPlace].text}</p>
    ${getPlayerInput()}
    <button id ="continue">Continue</button>
    `
    if (story[story.currentPlace].img){
        document.querySelector('img').src = `./imgs/${story[story.currentPlace].img}`
    }
    // I pull the new continue button with a query selector and make a new
    //event listener for it that will take me to the new scene when the player input is chosen.
    let continueButton = document.querySelector("#continue");
    continueButton.addEventListener('click', function() {
        getPlayerInputValue()
    })
}

function getPlayerInputValue() {
    let playerInput = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < playerInput.length; i++){
        if(playerInput[i].checked){
            story.currentPlace = playerInput[i].getAttribute("data-next")
            renderScene();
        }
    }
}

function getPlayerInput() {
    let input = ""
    for (let i = 0; i < story[story.currentPlace].options.length; i++){
        input += `
        <div>
            <input data-next = ${story[story.currentPlace].options[i].next} id = "radio" type = "radio" name = 'options' />
            <label for "radio${i}">${story[story.currentPlace].options[i].choice}</label>
        </div>
        `
    }
    return input;
}


