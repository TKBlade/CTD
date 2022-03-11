const numbers = [1, 2, 3 , 4, 5, 6, 5, 3, 8]

console.log (numbers)

for(let number of numbers) {

    console.log(number)

}

let user = {

    name: 'João Paulo',
    age: 32,
    birthDate: '15/05/1994',
    detail: 'male'

}

console.log(user.name)

for(let detail in user) {

    console.log(user[detail])
}

let userName = prompt('Insira o seu nome')

console.log(userName)