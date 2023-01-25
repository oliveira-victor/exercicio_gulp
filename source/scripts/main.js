function informaNome() {
    var nome = document.querySelector('#nome')

    if (nome.value == '') {
        alert('Por favor, informe um nome.')
    } else {
        document.querySelector('.user-text').innerHTML = `Olá <strong>${nome.value}</strong>! `
        nome.value = ''
    }
}