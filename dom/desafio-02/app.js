new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Clicou no botao!')
        },
        valorKeydown(event) {
            this.valor = event.target.value
        }
    },
})
