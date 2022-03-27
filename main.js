const msg = document.querySelector('#msg')
const Bodymsg = document.querySelector('.msg')
const text = document.querySelector('#text')
const btn = document.querySelector('#btn')
const ul = document.querySelector('#ul')

btn.addEventListener('click', (e)=>{
    e.preventDefault()

    if(text.value === ''){
        Bodymsg.style.background = 'red'
        msg.innerHTML = 'preencha o campo'

        setTimeout(()=>{
            Bodymsg.style.background = ''
            msg.innerHTML = ''

        }, 2000)
        return
    }
    
    let li = document.createElement('li')
    li.innerHTML = text.value
    ul.appendChild(li)

    msg.innerHTML = text.value
    text.innerHTML = ''

})