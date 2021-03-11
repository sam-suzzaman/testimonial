let slider_content_arr = [{
        name: 'customer one',
        rating: '5 star',
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic molestiae accusantium deserunt iste nihil sapiente quos, suscipit maiores minima!",
        pic: "1"
    },
    {
        name: 'customer two',
        rating: '4 star',
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur perspiciatis! Fuga totam ad similique. Architecto eveniet accusantium magni illum.",
        pic: "2"
    },
    {
        name: 'customer three',
        rating: '4.5 star',
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic molestiae accusantium deserunt iste nihil sapiente quos, suscipit maiores minima!",
        pic: "3"
    },
    {
        name: 'customer four',
        rating: '3 star',
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, neque! Deleniti sapiente quas cumque? Officiis obcaecati qui velit molestiae possimus.",
        pic: "4"
    }
]

let customerAvater = document.querySelector('.img')
let customerRating = document.querySelector('.rating')
let customerName = document.querySelector('.name')
let customerQuote = document.querySelector('.quote')
let reviewCounter = document.querySelector('.number')
let addAnimation = document.querySelector('.card')

let controller = document.querySelectorAll('.controller')
controller.forEach(function (value) {
    value.addEventListener('click', myFun)
})

let i = 0

function myFun(e) {
    // to stop auto reload the page
    e.preventDefault()

    let clickedButon = e.target.innerHTML
    if (clickedButon === 'p') {
        changeContent(i)
        i--
        if (i < 0) {
            i = slider_content_arr.length - 1
        }
    } else {
        changeContent(i)
        i++
        if (i > slider_content_arr.length - 1) {
            i = 0
        }
    }

    // adding animation
    customerName.classList.add("animate__bounceInDown")
}

function changeContent(index) {
    customerAvater.style.backgroundImage = `url('img/${slider_content_arr[i].pic}.png')`
    customerName.textContent = slider_content_arr[index].name
    customerQuote.textContent = slider_content_arr[index].quote
    reviewCounter.textContent = index + 1
    customerRating.textContent = slider_content_arr[i].rating
}
