const appendDivs = (divOne,divTow) =>{
    const parent = document.querySelector(divOne)
    const child = document.querySelector(divTow)
    console.log(parent)
    console.log(child)

    if(parent && child){
        parent.appendChild(child)
    } 
}

appendDivs()

const traslateDiv =()=>{
    if(window.innerWidth > 991) {
        appendDivs('.navFull','.navTras')
    } else {
        appendDivs('.hamburgerMenu','.navTras')
    }
}

window.addEventListener('resize',traslateDiv)