let slider_content_arr = [{
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic molestiae accusantium deserunt iste nihil sapiente quos, suscipit maiores minima!",
        pic: "1"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur perspiciatis! Fuga totam ad similique. Architecto eveniet accusantium magni illum.",
        pic: "2"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic molestiae accusantium deserunt iste nihil sapiente quos, suscipit maiores minima!",
        pic: "3"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, neque! Deleniti sapiente quas cumque? Officiis obcaecati qui velit molestiae possimus.",
        pic: "4"
    },
]

let customerAvater = document.querySelector('img')
let customerName = document.querySelector('.name')
let customerQuote = document.querySelector('.quote')
let reviewCounter = document.querySelector('.number')


let prevController = document.querySelector('.prev')
let nextController = document.querySelector('.nxt')

// adding eventListener
prevController.addEventListener('click', prevFun)
nextController.addEventListener('click', nextFun)

let i = 0

function prevFun() {
    i--
    console.log('hello world ' + i)
    reviewCounter.textContent = i
}

function nextFun() {
    console.log('hello world2')
}

setInterval(prevFun, 1000)