
// --------------------------------
// ------- GLOBAL VARIABLES -------
// --------------------------------

// size of square tiles in pixels
const SQUARE_SIZE = 20;

// Informations about the game status
const game = {
    status: "playing",
    score: 0,
    speed: 40
}

// Game boards characteristcs
const width = 20
const height =20
const color = "green"


// Snake characteristics
const snake = {
    color_head:"pink",
    color_body: "blue",
    head: {x: width/2, y: height/2},
    length: 4,
    direction: RIGHT,
    body: [
        {x: width/2, y: height/2},
        {x: width/2 - 1, y: height/2},
        {x: width/2 - 2, y: height/2},
        {x: width/2 - 3, y: height/2},

    ]
}

// fruit object
const fruit = {
    pos: {x: 0, y: 0},
    color: "red",
    spawned: false, 
}

// -------------------------
// ------- FUNCTIONS -------
// -------------------------

// Main Drawing function, you should put all of the things that you want to draw in this function
function draw() {
    draw_board(width, height, color)
    draw_snake()
    draw_square(fruit.pos.x,fruit.pos.y,fruit.color,fruit.color)


}

// Main loop function, this function is called every "game.speed" milliseconds.
function loop() {
    if (game.status==="playing"){
    move_snake() 
    spawn_fruit()
    const fruit_eaten = eat_fruit()
    snake_body_movement(snake.body,snake.length,snake.head,)
}
}

// This function is called when a key is pressed
function onKeyDown(key_pressed) {
    if (key_pressed === ARROW_UP && snake.direction !== DOWN) {
        snake.direction = UP
    }
    if (key_pressed === ARROW_DOWN && snake.direction !== UP) {
        snake.direction = DOWN
    }
    if (key_pressed === ARROW_LEFT && snake.direction !== RIGHT) {
        snake.direction = LEFT
    }
    if (key_pressed === ARROW_RIGHT && snake.direction !== LEFT) {
        snake.direction = RIGHT
    }
}

// --- Functions that they will have to do ---

// Handle the snake
function move_snake () {
    if (snake.direction === UP) {
        if(snake.head.y===0){
            snake.head.y=height-1
        } else {
            snake.head.y = snake.head.y - 1
        }
    }
    if (snake.direction === DOWN) {
        if(snake.head.y===height - 1){
            snake.head.y=0
        } else {
            snake.head.y = snake.head.y + 1
        }
    }
    if (snake.direction === LEFT) {
        if(snake.head.x===0){
            snake.head.x=width - 1
        } else {
            snake.head.x = snake.head.x - 1
        }
        
    }
    if (snake.direction === RIGHT) {
        if(snake.head.x===width -1){
            snake.head.x= 0
        } else {
            snake.head.x = snake.head.x+ 1
        }
    }
}
function draw_snake() {
    draw_square (snake.head.x,snake.head.y,snake.color_head,snake.color_head)
    draw_snake_body (snake.body,snake.length,snake.color_body)
}
// Handle the fruit 
function spawn_fruit(){
    if (fruit.spawned===false) {
        fruit.pos.x=get_random_number(0,width-1)
        fruit.pos.y=get_random_number(0,height-1)
        fruit.spawned=true
    }
}function eat_fruit() {
    if(snake.head.y ===fruit.pos.y && snake.head.x ===fruit.pos.x){
        fruit.spawned = false 
        snake.length = snake.length+1
        game.score = game.score + 100
        update_score(game.score)
        return true
    }else{
        return false 
    }
}
