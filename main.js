const msg = document.querySelector('#msg')
const Bodymsg = document.querySelector('.msg')
const text = document.querySelector('#text')
const btn = document.querySelector('#btn')
const ul = document.querySelector('#ul')

btn.addEventListener('click', (e)=>{

    e.preventDefault()
    try {
    
        //field validation
        if(text.value === '' && typeof(text.value) === String){
            Bodymsg.style.background = 'red'
            msg.innerHTML = 'preencha o campo'
    
            setTimeout(()=>{
                Bodymsg.style.background = ''
                msg.innerHTML = ''
    
            }, 2000)
            return
        }
        
        //adding information and creating tag li
        let li = document.createElement('li')
        li.innerHTML = text.value
        ul.appendChild(li)
    
        //clearing text fields
        msg.innerHTML = text.value
        text.innerHTML = ''
        
    } catch (error) {
        Bodymsg.style.background = 'yellow'
            msg.innerHTML = `${error}`
    
            setTimeout(()=>{
                Bodymsg.style.background = ''
                msg.innerHTML = ''
    
            }, 2000)
            return
    }

})