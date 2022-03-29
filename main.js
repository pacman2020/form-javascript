const msg = document.querySelector('#msg')
const text = document.querySelector('#input')
const btn = document.querySelector('#btn')
const ul = document.querySelector('#ul')

let db = []

function listItem(){
    ul.innerHTML = ''

    for (item in db){
        
        let li = document.createElement('li')
        li.textContent = db[item]

        //item position in the array
        let pos = db.indexOf(db[item])

        //add btn delete
        let delBtn = document.createElement('button')
        delBtn.textContent = 'delete'
        delBtn.style.background = 'red'
        delBtn.style.color = 'white'
        delBtn.addEventListener('click',(e)=> deteleItem(pos))
        
        li.appendChild(delBtn)

        //add btn edit
        let edtBtn = document.createElement('button')
        edtBtn.textContent = 'edit'
        edtBtn.style.background = 'blue'
        edtBtn.style.color = 'white'
        edtBtn.addEventListener('click',(e)=> editItem(pos))

        li.appendChild(edtBtn)

        ul.appendChild(li)

    }

}

function deteleItem(id){
    db.splice(id,1)
    listItem()
}

function editItem(id){
    db[id] = prompt('edite item:',db[id])
    listItem()
}

btn.addEventListener('click', (e)=>{

    e.preventDefault()

    try {
        // valida quantidade de caracteres
    
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

listItem()
