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

// take i=1 cause when click next then value of i will be i=0 
let i = -1

// access the buttons
let controller = document.querySelectorAll('.controllers')
controller.forEach(function (value) {
    value.addEventListener('click', function (e) {
        e.preventDefault()
        let clicked = e.target.innerHTML

        if (clicked === 'p') {
            i--
            if (i < 0) {
                i = slider_content_arr.length - 1
            }

            // changing contents
            customerAvater.style.backgroundImage = `url('img/${slider_content_arr[i].pic}.png')`
            customerName.textContent = slider_content_arr[i].name
            customerQuote.textContent = slider_content_arr[i].quote
            reviewCounter.textContent = i + 1
            customerRating.textContent = slider_content_arr[i].rating

        } else if (clicked === 'n') {
            i++
            if (i > slider_content_arr.length - 1) {
                i = 0
            }

            // changing  contents
            customerAvater.style.backgroundImage = `url('img/${slider_content_arr[i].pic}.png')`
            customerName.textContent = slider_content_arr[i].name
            customerQuote.textContent = slider_content_arr[i].quote
            reviewCounter.textContent = i + 1
            customerRating.textContent = slider_content_arr[i].rating

        }

        // adding animation classes
        customerAvater.classList.add("animate__animated", "animate__backInLeft")
        customerName.classList.add("animate__animated", "animate__bounceInDown")
        customerQuote.classList.add("animate__animated", "animate__bounceInUp")
        customerRating.classList.add("animate__animated", "animate__backInRight")

        // removing animation classes
        customerName.addEventListener('animationend', () => {
            customerAvater.classList.remove("animate__backInLeft")
            customerName.classList.remove("animate__bounceInDown")
            customerQuote.classList.remove("animate__bounceInUp")
            customerRating.classList.remove("animate__backInRight")
        })

    })
})