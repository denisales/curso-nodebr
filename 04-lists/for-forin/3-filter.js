const { obterPessoas } = require('./service')

async function main() {
    try {
        const { results } = await obterPessoas('a')

        const familiaLars = results.filter(function (item){
            //por padrao deve retornar um booleano para infromar se deve manter ou remover da lista
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })
        const names = familiaLars.map(pessoa => pessoa.name)
        console.log(names)

    } catch (error) {
        console.error(error)
    }
}
main()