let imgs = document.querySelectorAll('.stac')
let balls = document.querySelectorAll('.ball')
let divs = document.querySelectorAll('.div')
let gameinf = document.querySelector('#gameres')
let edit = document.querySelector('#edit')
let update = document.querySelector('#update')
let res = document.querySelector('#res')
let ress=0
const pos = () => Math.floor(Math.random() * 3)
let poss = pos()


//нажатие на обновить
update.addEventListener("click", ()=>{
    res.value = ''
    ress = 0
})
//нажатие на сохранить
edit.addEventListener("click", () =>{
    let height = document.querySelector('#height').value
    let width = document.querySelector('#width').value
    let diametr = document.querySelector('#diametr').value
    imgs.forEach(img => {
        img.style.width = width+ "px"
        img.style.height = height + "px"
    })
    divs.forEach(div => {
        div.style.width = width + "px"
        div.style.height = height + "px"
    })
    balls.forEach(ball => {
        ball.style.width = diametr + "px"
        ball.style.height = diametr + "px"
    })
})
//нажатие на стакан
imgs.forEach((img, index)=> {
    img.addEventListener("click", ()=> {
        if(index === poss){
            balls[index].style.opacity = '1'
            gameinf.textContent = "победа"
            ress++
            res.value = ress
        }
        else {
            gameinf.textContent = "проигрыш"
            ress--
            res.value = ress
        }
        img.classList.add('animate');
        setTimeout(function() {
            img.classList.remove('animate');
            balls[index].style.opacity = '0'
        }, 2000);
        poss = pos()
    })
})
