function addTechnology(){
    const contactSection = document.getElementById('technologyList')
    const ul = document.getElementById('ulList')
    const li = document.createElement('li')
    li.innerText='a'

    const label = document.createElement('label')
    label.innerText = 'Nova tecnologia:'

    const input = document.createElement('input')
    input.name = 'newTechnology'
    input.type = 'text'

    const label2 = document.createElement('label')
    label2.innerText='Tempo de experiência'


    ul.appendChild(li)
    contactSection.appendChild(ul)
}

const button = document.getElementById('newTechnology')
button.addEventListener('click',addTechnology)
