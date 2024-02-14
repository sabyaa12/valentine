let img = document.querySelector("#img")
let yes = document.querySelector('#yes')
let no = document.querySelector('#no')
let p = document.querySelector('#p')
let body = document.querySelector('body')
let count = 1
let i=0

no.addEventListener("click", () => {
    count++
    switch (count) {
        case 2:
            img.src = "sad-bear.gif"
            p.innerText = "Plz manjaoo Plz"
            break
        case 3:
            img.src = "ples.gif"
            p.innerText = "Plz My sweetiee"
            break
        case 4:
            img.src = "ples.gif"
            p.innerText = "Plz cutie"
            break
        case 5:
            img.src = "plss.gif"
            p.innerText = "Plz Plz Plz Plz plz plz plz "
            break
        case 6:
            img.src = "plss.gif"
            p.innerText = "ab man bhii jaoo 'YES' boldo "
            break
    }
    no.style.width = String(20 / count) + "vw"
    no.style.height = String(10 / count) + "vw"
    no.style.fontSize = String(8 / count) + "vw"
    if(count>=6) no.style.display ="none"
});
yes.addEventListener("click", () => {
    no.style.display ="none"
    yes.style.display ="none"
    p.innerText = "yahooooo HURRAHHH "
    img.src = "bhaluuu.gif"
    body.style.backgroundColor = "#FF559D"
    time()
});

setTimeout(() => {
    yes.style.display = "inline"
    no.style.display = "inline"
    p.innerText = "So, Will YOU be my Janeman ❤️"
    img.src = "peach-and.gif"
}, 6750)

setTimeout(() => {
    img.src = "img9.gif"
}, 3000)

function time(){
    setInterval(() => {
        if(i%3==0) img.src = "pyr.gif"
        if(i%3==1) img.src = "lovl.gif"
        if(i%3==2) img.src = "lovv.gif"
        i++
    }, 3000)
}
