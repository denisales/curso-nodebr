/*
0 obter um usuario
1 obter o numero de telefone de um usuario a partir de seu id
2 obter o endereco do usuario pelo id
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(callback){
    //quando der algum problema -- reject(ERRO)
    //quando der tudo certo -- resolve(ERRO)
    return new Promise(function resolvePromise(resolve, reject){
        //return reject((new Error('Deu ruim de vdd'))
        setTimeout(function () {
            return resolve({ 
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            return resolve( { 
                telefone: '93483743847',
                dd: '11'
            })
        }, 2000)
    })
    
}

function obterEndereco(idUsuario, callback){
    setTimeout(function () {
        return callback(null, { 
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

// 1o passo adicionar a palavra async - automaticamente ela retronara uma promise
main();
async function main(){
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
                Nome: ${usuario.nome},
                Telefone: ${telefone.dd} ${telefone.telefone},
                Endereco: ${endereco.rua} ${endereco.numero}
                
            `)
        console.timeEnd('medida-promise')
    } catch (error) {
        console.log('Deu Ruim', error)
    }
}




//###### usando promise

// const usuarioPromise = obterUsuario()

// usuarioPromise
//     .then(function (usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result) {
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id,
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then( function (resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function (resultado){
//         console.log(`
//                 Nome: ${resultado.usuario.nome},
//                 Endereco: ${resultado.endereco.rua} ${resultado.endereco.numero},
//                 Telefone: ${resultado.telefone.dd} ${resultado.telefone.telefone},
//             `)
//     })
//     .catch(function (error){
//         console.log('Deu ruim', error)
//     })
// //para manipular o sucesso usamos a funcao .then
// //para manipular o erros usamos a funcao .catch




// #### fomra callback

// obterUsuario(function resolverUsuario(error, usuario) {
//     if(error){
//         console.log("Deu ruim em usuario", error)
//         return
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if(error1){
//             console.log("Deu ruim em telefone", error)
//             return
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if(error2){
//                 console.log("Deu ruim em endereco", error)
//                 return
//             }
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua} ${endereco.numero},
//                 Telefone: ${telefone.dd} ${telefone.telefone},
//             `)
//         })
//     })

// })
// const telefone = obterTelefone(usuario.id)


// console.log('telefone: ', telefone)