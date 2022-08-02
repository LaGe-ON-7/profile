const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const button = $$(".button")
const header = $$("#header")
const title = $$(".title-ctn")

button.forEach((btn, index) => {
    const head = header[index]
    const tte = title[index]
    
    btn.onclick = function () {
        $(".button.focus").classList.remove('focus')
        $("#header.focus").classList.remove('focus')
        $(".title-ctn.focus").classList.remove('focus')

        this.classList.add('focus')
        head.classList.add('focus')
        tte.classList.add('focus')
    }
})