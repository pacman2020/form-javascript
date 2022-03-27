const msg = document.querySelector('#msg')
const text = document.querySelector('#input')
const btn = document.querySelector('#btn')
const ul = document.querySelector('#ul')

const db = []

function listItem(){
    ul.innerHTML = ''

    for (item in db){
        
        let li = document.createElement('li')
        li.textContent = db[item]

        //add btn
        let delBtn = document.createElement('button')
        delBtn.textContent = 'delete'
        delBtn.style.background = 'red'
        delBtn.style.color = 'white'
        delBtn.addEventListener('click', deteleItem)

        li.appendChild(delBtn)

        ul.appendChild(li)

    }

}

function deteleItem(id){
    db.pop(id)
    listItem()
}

function editItem(id){
    console.log('editando'+id)
}

btn.addEventListener('click', (e)=>{

    e.preventDefault()

    try {
    
        //field validation
        if(text.value === ''){
            msg.style.background = 'red'
            msg.innerHTML = 'preencha o campo'
    
            setTimeout(()=>{
                msg.style.background = ''
                msg.innerHTML = ''
    
            }, 2000)
            return
        }
        
        //created item
        db.push(text.value)
        listItem()
    
        //clearing text fields
        msg.innerHTML = ''
        text.innerHTML = ''

    } catch (error) {
        msg.style.background = 'yellow'
        msg.innerHTML = `${error}`
    
        setTimeout(()=>{
            msg.style.background = ''
            msg.innerHTML = ''
    
        }, 4000)
        return
    }

})
