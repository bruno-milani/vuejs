
new Vue({
    el: '#desafio',
    data: {
        name: 'Bruno',
        age: '23',
        image: 'https://picsum.photos/id/1005/600/200'
    },
    computed: {
        calc() {
            return this.age * 3
        },
        random() {
            return Math.random()
        }
    }
})

