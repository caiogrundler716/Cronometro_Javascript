const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let timer;
let segundos = 0

function receberHorasSegundos(segundos){
    let data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        timeZone : 'UTC'
    })
}

function receberHoras(){
    timer = setInterval(function(){
        segundos ++
        relogio.innerHTML = receberHorasSegundos(segundos)
    },1000)
}

iniciar.addEventListener('click',function(){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    receberHoras()
})

pausar.addEventListener('click',function(){
    clearInterval(timer)
    relogio.classList.add('pausado')
})

zerar.addEventListener('click',function(){
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'
})