// manipulação de strings


// const texto = 'conteudo'

// console.log(texto)

// const texto1 = "conteudo"

// console.log(texto1)

// const texto2 = `conteudo`

// console.log(texto2)


// const texto1 = 'melissa';
// const texto2 = 'melll';

// const texto3 = texto1 + ' ' + texto2;

// const texto4 = `${texto1} ----- ${texto2}`;

// console.log(texto4);

// const meuNome = "melissa";

// console.log(meuNome[3]);

// console.log(`Esse nome tem ${meuNome.length} caracteres`);

// const novoTexto = "novo texto"

// console.log(novoTexto)
// console.log(novoTexto.toLowerCase())
// console.log(novoTexto.toUpperCase())
// //cortar string
// console.log(novoTexto.slice(1,7))
// //substituir
// console.log(novoTexto.replace("novo", "olá"))

// console.log(novoTexto)

// const novotextoNormalizado = "texto".toUpperCase()

// console.log(novotextoNormalizado.indexOf("textO"))

// console.log(novoTexto.startsWith("velho"))
// console.log(novoTexto.startsWith("novo"))


// const novoValor = "Esse é um novo texto"

// console.log(novoValor)

// //transforma em array

// const novoValorArray = novoValor.split(" ")

// console.log(novoValorArray)

// console.log(novoValorArray.join("-"))

// const usuarios = ["João", "Maria", "Pedro"]
// console.log(usuarios)
// console.log(usuarios.join(";"))


//ARRAYS

//pode guardar mais um tipo no js

// const diasDaSemana = [
//                         "segunda", 
//                         "terca", 
//                         "quarta", 
//                         "quinta", 
//                         "sexta", 
//                         "sabado", 
//                         "domingo",
//                         1,
//                         2,
//                         true,
//                         false
//                     ]
// // atribuir valor -- substitui, nao adiciona um novo
// diasDaSemana[0] = "Domingo"

// const tamanhoDoArray = diasDaSemana.length
// diasDaSemana[tamanhoDoArray] = "novo item"

// diasDaSemana.push("Olá")
// diasDaSemana.unshift("oi")
// console.log(diasDaSemana)

// //remove

// diasDaSemana.pop()
// diasDaSemana.shift()
// console.log(diasDaSemana)

// let A = 1

// console.log(++A)

//for -------------
const diasDaSemana = [
                    "segunda", 
                    "terca", 
                    "quarta", 
                    "quinta", 
                    "sexta", 
                    "sabado" 
                ]
for(let count = 0; count <= diasDaSemana.length; count++){
    console.log(diasDaSemana[count])
}

for(let count = diasDaSemana.length -1; count >= 0; count--){
    console.log(diasDaSemana[count])
}





