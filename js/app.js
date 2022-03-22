// We are going to create the dialoogue and options for the game
//First we have to make a varible that holds all of our options and text.
// We will make it with ojects that holds other objects and arrays   
let story = {
    // This is the where the first scene will start at.
    currentPlace: 'outside',
    outside: {
        // We hav our title with a key named sceneTitle.
        title: "Outside",
        //This is where our story text is going to go.
        text: `Its a cold day on a Halloween night. You are walking
        down the neighborhood and you see an old white house with a
        old tree in the front yard and tall dead grass. You approch
        the house and hear a loud scream come from the inside.
        You get curious and enter the house. What do you do??`, 
        //We will have our options and they are going to be in an array.
        // Our array will have two options and the will hold the choice of the player.
        //and the next location that the choice takes you to.
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
   // Here we are making more scenes excatly how we did above.
    livingRoom: {
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
               choice: 'You pick the bedroom key',
               next: 'winGame'
           },
           {
               choice: 'You pick the basment key',
               next: 'gameOver2'
           }
       ]
   },
   winGame: {
       title: "Bedroom",
       text: `You go into the bedroom and you discover that there is a window that is wide open.
        it leads to the backyard, where you can escape. You decide to take your chances and make it out alive.
        You go back home and never speak about what you saw ever again!`,
        options: [
            {
                choice: "Start Over??",
                next: 'outside'
            }
        ]
        
   },
   gameOver1: {
       title: "Unfortunate Circumstances!",
       text: `You decide to run as fast as you can but do not realise a hatch on the floor. You fall right through it and find a demogorgon.
       He had been waiting for someone show up. You try to fight it but it ends up eating you whole. You died....`,
       options: [
           {
               choice: "Start Over??",
               next: 'outside'
           }
       ]
   },

   gameOver2: {
       title: "Basement",
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
let start = document.querySelector('#start')
let content = document.querySelector("#container")
    start.addEventListener('click', renderScene)

function renderScene() {
    content.innerHTML = `
    <h1>${story[story.currentPlace].title}</h1>
    <p>${story[story.currentPlace].text}</p>
    ${getPlayerInput()}
    <button id ="continue">Continue</button>
    `
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
            <input data-next = ${story[story.currentPlace].options[i].next} id= "radio${i}" type = "radio" name = 'options' />
            <label for "radio${i}">${story[story.currentPlace].options[i].choice}</label>
        </div>
        `
    }
    return input;
}


