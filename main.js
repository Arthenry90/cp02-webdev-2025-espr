// Exercicio 1
function cifrarAtbash(mensagem) {
    const alfabetoMaiusculo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const alfabetoMinusculo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let mensagemCripto = "";
    for (let i = 0; i < mensagem.length; i++) {
        if (!alfabetoMaiusculo.includes(mensagem[i]) && !alfabetoMinusculo.includes(mensagem[i])) {
            mensagemCripto += mensagem[i];
            continue;
        }
        else if (mensagem[i] == mensagem[i].toUpperCase()) {
            let indexOriginal = alfabetoMaiusculo.indexOf(mensagem[i]);
            mensagemCripto += alfabetoMaiusculo[25 - indexOriginal];
        }
        else if (mensagem[i] == mensagem[i].toLowerCase()) {
            let indexOriginal = alfabetoMinusculo.indexOf(mensagem[i]);
            mensagemCripto += alfabetoMinusculo[25 - indexOriginal];
        }
    }
    return mensagemCripto;
}

// Exercicio 2
function cifrarCesar(mensagem, chave) {
    const alfabetoMaiusculo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const alfabetoMinusculo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let mensagemCripto = "";
    for (let i = 0; i < mensagem.length; i++) {
        if (!alfabetoMaiusculo.includes(mensagem[i]) && !alfabetoMinusculo.includes(mensagem[i])) {
            mensagemCripto += mensagem[i];
            continue;
        }
        else if (mensagem[i] == mensagem[i].toUpperCase()) {
            let indexOriginal = alfabetoMaiusculo.indexOf(mensagem[i]);
            let NovoIndice = ((indexOriginal + chave) % 26 + 26) % 26;
            mensagemCripto += alfabetoMaiusculo[NovoIndice];
        }
        else if (mensagem[i] == mensagem[i].toLowerCase()) {
            let indexOriginal = alfabetoMinusculo.indexOf(mensagem[i]);
            let NovoIndice = ((indexOriginal + chave) % 26 + 26) % 26;
            mensagemCripto += alfabetoMinusculo[NovoIndice];
        }
    }
    return mensagemCripto;
}

// Exercicio 3
function cifrarVigenere(mensagem, palavraChave, modo) {
    const alfabetoMaiusculo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const alfabetoMinusculo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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

// Exercicio 4

/* * FUNÇÃO FORNECIDA - NÃO É NECESSÁRIO MODIFICAR. */
function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        // Encontrar o primeiro E que é coprimo de phi_N
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
             // Otimização: A verificação (p-1)%E e (q-1)%E não é rigorosamente a do RSA, 
             // mas é didática e evita fatores óbvios para primos pequenos.
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        // Encontrar D tal que (D * E) % phi_N === 1
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, // Use E e N para CIFRAR
        privada: { D, N }  // Use D e N para DECIFRAR
    };
}

// Função correta para cifrar usando RSA
function cifrarRSA_Didatico(mensagem, E, N) {
    let textoNumerico = [];
    for (let i = 0; i < mensagem.length; i++) {
        let c = mensagem[i];
        // Se for espaço ou caractere especial, apenas copia
        if ((c < 'A' || (c > 'Z' && c < 'a') || c > 'z') && c !== ' ') {
            textoNumerico.push(c);
        } else if (c === ' ') {
            textoNumerico.push(' ');
        } else {
            let codigo = mensagem.charCodeAt(i);
            textoNumerico.push(modPow(codigo, E, N));
        }
    }
    return textoNumerico;
}

// Função correta para decifrar usando RSA
function decifrarRSA_Didatico(mensagemCifrada, D, N) {
    let mensagemDescripto = "";
    for (let i = 0; i < mensagemCifrada.length; i++) {
        let c = mensagemCifrada[i];
        if (typeof c === 'string') {
            mensagemDescripto += c;
        } else {
            let codigo = modPow(c, D, N);
            mensagemDescripto += String.fromCharCode(codigo);
        }
    }
    return mensagemDescripto;
}

// Função auxiliar para exponenciação modular eficiente
function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = (exp / 2) | 0; 
        base = (base * base) % mod;
    }
    return result;
}