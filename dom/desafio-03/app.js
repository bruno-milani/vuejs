new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        result() {
            return this.valor == 37 ?
                'Valor igual' : 'Valor diferente'
        }
    },
    watch: {
        valor(novo, antigo) {
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    }
});
