const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const bird = new Image()
const bg = new Image()
const fg = new Image()
const pipeUp = new Image()
const pipeBottom = new Image()

bird.src = './images/bird.png'
bg.src = './images/bg.png'
fg.src = './images/fg.png'
pipeUp.src = './images/pipeUp.png'
pipeBottom.src = './images/pipeBottom.png'


const fly = new Audio()
const score = new Audio()

fly.src = './audio/fly.mp3'
score.src = './audio/score.mp3'



// Позиционирование птички  
let xPos = 10 
let yPos = 150 
let grav = 1 
let gap = 100 
let count = 0 
 
// Создание труб 
const pipe = [] 
pipe[0] = { 
    x: canvas.width, 
    y: 0 
} 
 
const moveUp = () => { 
    yPos -= 35 
} 
 
document.addEventListener('keydown', (e) => { 
    if (e.keyCode === 32) { 
        moveUp() 
        fly.play() 
    } 
}) 
 
const draw = () => { 
    context.drawImage(bg, 0, 0) 
    context.drawImage(fg, 0, canvas.height - fg.height) 
    context.drawImage(bird, xPos, yPos) 
 
    for (let i = 0; i < pipe.length; i++) { 
        context.drawImage(pipeUp, pipe[i].x, pipe[i].y) 
        context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap) 
        pipe[i].x-- 
 
        if (pipe[i].x == 125) { 
            pipe.push({ 
                x: canvas.width, 
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height 
            }) 
        } 
        if (xPos + bird.width >= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height 
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= canvas.height - fg.height) { 
            location.reload() 
        } 
        if (pipe[i].x == 5) { 
            count++ 
            score.play() 
        } 
    } 
 
    yPos += grav 
    context.fillText('Score: ' + count, 10, canvas.height - 20) 
    context.fillStyle = '#000' 
    context.font = '24px Verdana' 
    requestAnimationFrame(draw) 
} 
 
pipeBottom.onload = draw

// let xPos = 10
// let yPos = 150


// let grav = 1           //?птичка подала
// let gap = 100
// let count =0
// const pipe = []           //?Создание труб
// pipe[0] = {
//     x: canvas.width,
//     y: 0
// }
// const moveUp =()=>{
//     yPos-=35
// }
// document.addEventListener('keydown',(e)=>{
//     if(e.keyCode=== 32){
//         moveUp()
//         fly.play()
//     }
// })

// const draw = () => {
//     context.drawImage(bg, 0, 0)
//     context.drawImage(fg, 0, canvas.height - fg.height)
//     context.drawImage(bird, xPos, yPos)

//     for (let i = 0; i < pipe.length; i++) {                       //положкеик труб
//         context.drawImage(pipeUp, pipe[i].x, pipe[i].y)
//         context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)
//         pipe[i].x--
//         if(pipe[i].x==125){
//             pipe.push({
//                 x:canvas.width,
//                 y:Math.floor(Math.random()*pipeUp.height) - pipeUp.height
//             })
//         }

//         if(xPos+bird.width>=pipe[i].x 
//             && xPos<=pipe[i].x+pipeUp.width
//             &&(yPos<=pipe[i].y+pipeUp.height
//                 ||yPos+bird.height>=pipe[i].y+pipeUp.height+gap)|| yPos+bird.height>=canvas.height-fg.height){
//                     location.reload()
//                 }
//                 if(pipe[i].x==5){
//                     count++
//                     score.play()
//                 }
//     }


//     yPos += grav
 
//     context.fillText('Score:'+count,10,canvas.height-20)
//     context.fillStyle="#000"
//     context.font ='24px Verdana'
//     requestAnimationFrame(draw)
// }
// pipeBottom.onload = draw





// !const canvas = document.getElementById('canvas') 
// const context = canvas.getContext('2d') 
 
// const bird = new Image() 
// const bg = new Image() 
// const fg = new Image() 
// const pipeUp = new Image() 
// const pipeBottom = new Image() 
 
// bird.src = './img/bird.png' 
// bg.src = './img/bg.png' 
// fg.src = './img/fg.png' 
// pipeUp.src = './img/pipeUp.png' 
// pipeBottom.src = './img/pipeBottom.png' 
 
// // Позиционирование птички 
// let xPos = 10 
// let yPos = 150 
// let grav = 1 
// let gap = 100 
 
// // Создание труб 
// const pipe = [] 
// pipe[0] = { 
//     x: canvas.width, 
//     y: 0 
// } 
 
// const moveUp = () => { 
//     yPos -= 35 
// } 
 
// document.addEventListener('keydown', (e) => { 
//     if (e.keyCode === 32) { 
//         moveUp() 
//     } 
// }) 
// const draw = () => { 
//     context.drawImage(bg, 0, 0) 
//     context.drawImage(fg, 0, canvas.height - fg.height) 
//     context.drawImage(bird, xPos, yPos) 
 
//     for (let i = 0; i < pipe.length; i++) { 
//         context.drawImage(pipeUp, pipe[i].x, pipe[i].y) 
//         context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap) 
//         pipe[i].x-- 
 
//         if (pipe[i].x == 125) { 
//             pipe.push({ 
//                 x: canvas.width, 
//                 y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height 
//             }) 
//         } 
 
//         if (xPos + bird.width >= pipe[i].x 
//             && xPos <= pipe[i].x + pipeUp.width 
//             && (yPos <= pipe[i].y + pipeUp.height 
//                 || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) 
//             || yPos + bird.height >= canvas.height - fg.height) { 
//             location.reload() 
//         } 
//     } 
 
 
 
//     yPos += grav 
//     requestAnimationFrame(draw) 
// } 
 
// pipeBottom.onload = draw


