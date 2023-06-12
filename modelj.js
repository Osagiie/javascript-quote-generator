const quote =[{
    quote: '"Nulla gravida tellus sed mi posuere, sit amet dictum quam convallis."',
    writer: '-dddd'
},

{
    quote: '"Praesent sem sem, sagittis gravida turpis eget, commodo porttitor leo."',
    writer: '-qqqq'
},

{
    quote: '"Proin venenatis, ipsum lacinia vehicula rutrum, velit mi tristique tellus."',
    writer: '-yyyy'
},

{
    quote: '"Ut in ipsum quis purus dapibus sagittis tempor ut ex."',
    writer: '-kkkk'
},

{
    quote: '"Morbi id dui vel nibh vehicula ornare. Interdum et malesuada."',
    writer: '-mmmm'
},

{
    quote: '"Suspendisse ac nibh lacus. Proin venenatis, ipsum ."',
    writer: '-nnnn'
},
]

let btn = document.querySelector("#Qbtn");
let quotes = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
}
)