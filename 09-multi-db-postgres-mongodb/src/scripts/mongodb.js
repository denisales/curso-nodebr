// docker ps

// docker exec -it 609f303c0973  \
//     mongo -u denisales -p denisales --authenticationDatabase herois

// databases
// show dbs

// mudando o contexto para uma database
// use herois

// mostrar tables (colecoes)
// show collections


db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

db.herois.find()
db.herois.find().pretty()

for (let i = 0; i < 100; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'clonar',
        dataNascimento: '1998-01-01'
    })
    
}

db.herois.count()
db.herois.findOne()
db.herois.find({}, {poder: 1, _id: 0})

// create

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})


//read 
db.herois.find()

//update
db.herois.update({ _id: ObjectId("5e5dce27a6458abd43b0d559")} , {nome: 'Mulher maravilha'})

db.herois.update({ _id: ObjectId("5e5dcec8a6458abd43b0d5b5")} , {$set: { nome: 'Lanterna verde'}})

//delete

// todos da base
db.herois.remove({})
db.herois.remove({nome: 'Mulher maravilha'})