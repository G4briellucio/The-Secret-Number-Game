let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto =gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'The Game of Secret Number';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Number from 1 to 10';
gerarNumeroAleatorio();
function ExibirTextoNaTela(tag , texto) 
    {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto , 'UK English Male',{rate:1.2});
    }
function exibirMensagemInicial()
    {
        ExibirTextoNaTela('h1','The Secret Number Game');
        ExibirTextoNaTela('p','Enter a number from 1 to 10');
    }
exibirMensagemInicial();
function verificarChute() 
    {
        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto)
            {
                ExibirTextoNaTela('h1', 'You Win !!')               // Exibir texto na linha h1 no caso se chute for igual ao numero secreto
                let palavraTentativa = tentativas > 1 ? 'tries' : 'try';
                let mensagemTentativas = `Congratulations, you got the secret number right ${tentativas} ${palavraTentativa}`;
                ExibirTextoNaTela('p' , mensagemTentativas);
                document.getElementById ('reiniciar').removeAttribute('disabled') ;
            } 
            else 
            {
                if (chute > numeroSecreto) 
                {
                    ExibirTextoNaTela('p' , 'The secret number is smaller');
                } 
                else 
                { 
                  (chute < numeroSecreto)
                  ExibirTextoNaTela('p' , ' The secret number is bigger');
                }
             tentativas++ ;
             limparCampo(); 
            }
    }
function gerarNumeroAleatorio() 
    {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 ); //função com retorno
        let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeNumerosNaLista == numeroLimite )
            {
                listaDeNumerosSorteados = [];
            }

        if (listaDeNumerosSorteados.includes(numeroEscolhido)) // includes , conferir se determinado item ou numero esta na lista
        {
            return gerarNumeroAleatorio();
        }
        else
        {
            listaDeNumerosSorteados.push(numeroEscolhido);  // push inserir itens/numeros na lista
            console.log(listaDeNumerosSorteados)
            return numeroEscolhido;
        }
    }

function limparCampo()
    {
        chute = document.querySelector('input')
        chute.value = '';
    }

function reiniciarJogo()
    {
        numeroSecreto =gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }
