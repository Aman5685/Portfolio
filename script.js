var typed = new Typed('#element', {
    strings: ['Full Stack Web Developer','USING','MERN', 'Stack','I am preparing for it.'],
    typeSpeed: 70,
  });


const prevEle = document.querySelector(".prev")
const nextEle = document.querySelector(".next")
const imgContainerEle = document.querySelector(".img-container")
const imgEle = document.querySelectorAll(".pr-img")

let currImg = 1;
let timeout;

nextEle.addEventListener("click", ()=>{
    currImg++
    clearInterval(timeout)
    updateImg()
})
prevEle.addEventListener("click", ()=>{
    currImg--
    clearTimeout(timeout)
    updateImg()
})

updateImg()

function updateImg(){
    if(currImg > imgEle.length){
        currImg = 1
    }else if(currImg < 1){
        currImg = imgEle.length
    }
    imgContainerEle.style.transform = `translateX(${-(currImg - 1) * 100}%)`

    timeout = setTimeout(()=>{
        currImg++
        updateImg()
    }, 2000)
}
alert("All project source code are mentioned in my Github profile")

