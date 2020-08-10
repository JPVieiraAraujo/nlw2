//criando um arrays de objeto de sbjects
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Ed. Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
//criando um arrays de objeto de weekdays
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades da aplicação

    //pegando os dos elementos do array
function getSubject(subjectNumber) {
    //como o array inicia em 0 e pegou o valor 1, deve-se retirar 1
    //+subjectNumber - garante que ele seja um número;
    const position = +subjectNumber - 1

    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
