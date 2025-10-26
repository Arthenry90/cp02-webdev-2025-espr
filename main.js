// Exercicio 1
function cifrarAtbash(mensagem) {
    const alfabetoMaiusculo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alfabetoMinusculo = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let mensagemCripto = "";
    for (let i = 0; i < mensagem.length ; i++){
        if (!alfabetoMaiusculo.includes(mensagem[i]) && !alfabetoMinusculo.includes(mensagem[i])){
            mensagemCripto += mensagem[i];
            continue;
        }
        else if(mensagem[i] == mensagem[i].toUpperCase()){
            let indexOriginal = alfabetoMaiusculo.indexOf(mensagem[i]);
            mensagemCripto += alfabetoMaiusculo[25 - indexOriginal];
        }
        else if(mensagem[i] == mensagem[i].toLowerCase()){
            let indexOriginal = alfabetoMinusculo.indexOf(mensagem[i]);
            mensagemCripto += alfabetoMinusculo[25 - indexOriginal];
        }
    }
    return mensagemCripto;
}

// Exercicio 2
function cifrarCesar(mensagem, chave) {
    const alfabetoMaiusculo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alfabetoMinusculo = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let mensagemCripto = "";
    for (let i = 0; i < mensagem.length ; i++){
        if (!alfabetoMaiusculo.includes(mensagem[i]) && !alfabetoMinusculo.includes(mensagem[i])){
            mensagemCripto += mensagem[i];
            continue;
        }
        else if(mensagem[i] == mensagem[i].toUpperCase()){
            let indexOriginal = alfabetoMaiusculo.indexOf(mensagem[i]);
            let NovoIndice = ((indexOriginal + chave) % 26 + 26) % 26;
            mensagemCripto += alfabetoMaiusculo[NovoIndice];
        }
        else if(mensagem[i] == mensagem[i].toLowerCase()){
            let indexOriginal = alfabetoMinusculo.indexOf(mensagem[i]);
            let NovoIndice = ((indexOriginal + chave) % 26 + 26) % 26;
            mensagemCripto += alfabetoMinusculo[NovoIndice];
        }
    }
    return mensagemCripto;
}

// Exercicio 3
function cifrarVigenere(mensagem, palavraChave, modo) {
    const alfabetoMaiusculo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alfabetoMinusculo = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let indexKeyChave = "";
    let indexKeyMensagem = "";
    let count = 0;
    let mensagemCripto = "";
    let NovoIndice = 0;
    palavraChave = palavraChave.toUpperCase();

    for (let i = 0; i < mensagem.length; i++) {

        // Se não for letra, apenas adiciona o caractere à mensagem criptografada
        if (!alfabetoMaiusculo.includes(mensagem[i]) && !alfabetoMinusculo.includes(mensagem[i])) {
            mensagemCripto += mensagem[i];
            continue;
        }

        if (mensagem[i] == mensagem[i].toUpperCase()) {
            let indexOriginal = alfabetoMaiusculo.indexOf(mensagem[i]);
            if (count >= palavraChave.length) {
                count = 0;
            }

            let indexPalavraChave = alfabetoMaiusculo.indexOf(palavraChave[count]);

            if (modo == "codificar") {
                NovoIndice = ((indexOriginal + indexPalavraChave) % 26 + 26) % 26;
            } else {
                NovoIndice = ((indexOriginal - indexPalavraChave) % 26 + 26) % 26;
            }

            mensagemCripto += alfabetoMaiusculo[NovoIndice];
            indexKeyMensagem += NovoIndice;

            count += 1;
        } else {
            let indexOriginal = alfabetoMinusculo.indexOf(mensagem[i]);
            if (count >= palavraChave.length) {
                count = 0;
            }

            let indexPalavraChave = alfabetoMaiusculo.indexOf(palavraChave[count]);

            if (modo == "codificar") {
                NovoIndice = ((indexOriginal + indexPalavraChave) % 26 + 26) % 26;
            } else {
                NovoIndice = ((indexOriginal - indexPalavraChave) % 26 + 26) % 26;
            }

            mensagemCripto += alfabetoMinusculo[NovoIndice];
            indexKeyMensagem += NovoIndice;

            count += 1;
        }
    }

    return mensagemCripto;
}


