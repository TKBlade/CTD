let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')

function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = 'mudar tema ☀️'

    } else {

        changeClassButtonRefernece.innerText = 'mudar tema 🌙'

    }

}

// Primeiramente obtemos a referencia de onde queremos colocar os elementos(no HTML eu atribuí um ID chamado "mainContent" ao elemento)
let mainContentReference = document.querySelector('#mainContent')

// Após isso criamos um array para os nossos Posts
let posts = [

    // Criamos um objeto que será um dos nossos posts
    {
        name: 'Nome teste',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempora.',
        image: 'https://www.petz.com.br/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao2.jpg'
    },

    // E assim seguimos
    {
        name: 'Nome teste 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempora.',
        image: 'https://img.r7.com/images/moya-leao-branco-albino-atracao-glen-garriff-conservation-lion-sanctuary-23032021161517683'
    }
]

// Por último realizamos um for, onde vamos percorrer a lista dos nossos Posts e adicionar um por um no HTML
for(let post of posts) {

    // Através da referencia da div onde ficam os Posts, obtida na variavel mainContentReference, vamos atribuir um elemento HTML com as informações do nosso Objeto que está sendo lido no momento pelo For utilizando a Template String
    mainContentReference.innerHTML += `

        <div class="item">
            <img src="${post.image}">
            <h2>${post.name}</h2>
            <p>${post.description}</p>
        </div>

    `

}