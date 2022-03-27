const msg = document.querySelector('#msg')
const Bodymsg = document.querySelector('.msg')
const text = document.querySelector('#text')
const btn = document.querySelector('#btn')
const ul = document.querySelector('#ul')

function deteleItem(){

}

function newBtn(colorText, backgroundBtn, nameBtn) {
    //created button delete
    let newButton = document.createElement('button')
    newButton.textContent = nameBtn
    newButton.style.background = backgroundBtn
    newButton.style.color = colorText

    //chama uma função interna
    newButton.addEventListener('click', deteleItem)
    return newButton
}

function addLi(text) {
    //adding information and creating tag li
    let li = document.createElement('li')
    li.innerHTML = text

    //add btn
    const delBtn = newBtn('white','red','detele')
    const edtBtn = newBtn('white','blue','update')
    li.appendChild(delBtn)
    li.appendChild(edtBtn)

    ul.appendChild(li)
}


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
        
        //created item
        addLi(text.value)
    
        //clearing text fields
        msg.innerHTML = ''
        text.innerHTML = ''

    } catch (error) {
        Bodymsg.style.background = 'yellow'
            msg.innerHTML = `${error}`
    
            setTimeout(()=>{
                Bodymsg.style.background = ''
                msg.innerHTML = ''
    
            }, 4000)
            return
    }

})