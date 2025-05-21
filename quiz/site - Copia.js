 var usuarios = [];

  function mostrarCadastro() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('cadastroSection').style.display = 'block';
  }

  function mostrarLogin() {
    document.getElementById('cadastroSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
  }

  function FazerCadastro() {
    var nome = newUsername.value;
    var senha = newPassword.value;
    var confirma = newPassword2.value;

   
    if (!(nome.includes('@') && nome.length > 10)) {
      alert('Insira um email válido, contendo o "@" e no mínimo 10 caracteres');
      return;
    }

   
    var maiusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var especiais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ':', ';', '<', '>', ',', '.', '?', '/', '~', '\\', '|', '-', '='];

    var temMaiuscula = false;
    for(var i = 0; i < maiusculas.length; i++) {
      if (senha.includes(maiusculas[i])) {
        temMaiuscula = true;
        break;
      }
    }

    var temEspecial = false;
    for(var i = 0; i < especiais.length; i++) {
      if (senha.includes(especiais[i])) {
        temEspecial = true;
        break;
      }
    }

    if (!(temMaiuscula && temEspecial)) {
      alert('Insira uma senha válida, que contenha uma letra maiúscula e um caractere especial');
      return;
    }

    if (senha !== confirma) {
      alert('A senha tem que ser a mesma inserida antes.');
      return;
    }

    
    usuarios.push({ nome, senha });
    alert('Cadastro realizado com sucesso! Faça login.');

    mostrarLogin();
    newUsername.value = '';
    newPassword.value = '';
    newPassword2.value = '';
  }

  function FazerLogin() {
    var nome = username.value;
    var senha = password.value;

    var usuarioEncontrado = usuarios.find(user => user.nome === nome && user.senha === senha);

    if (usuarioEncontrado) {
      alert('Login feito!');
    
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

    var questão = [
      {
        question: "Qual é o maior campeão do Campeonato Brasileiro?",
        answers: [
          { text: "Palmeiras", correct: true },
          { text: "Flamengo", correct: false },
          { text: "Corinthians", correct: false },
          { text: "São Paulo", correct: false }
        ]
      },
      {
        question: "Qual o mascote do Palmeiras?",
        answers: [
          { text: "Porco", correct: true },
          { text: "Gavião", correct: false },
          { text: "Raposa", correct: false },
          { text: "Urubu", correct: false }
        ]
      },
      {
        question: "Em que ano o Palmeiras ganhou a tríplice coroa nacional (Paulista, Copa do Brasil e Brasileiro)?",
        answers: [
          { text: "2020", correct: false },
          { text: "2022", correct: true },
          { text: "2018", correct: false },
          { text: "2015", correct: false }
        ]
      },
      {
        question: "Qual o nome do estádio do Palmeiras?",
        answers: [
          { text: "Allianz Parque", correct: true },
          { text: "Morumbi", correct: false },
          { text: "Maracanã", correct: false },
          { text: "Mineirão", correct: false }
        ]
      },
      {
        question: "Quantas Libertadores o Palmeiras tem até 2024?",
        answers: [
          { text: "3", correct: true },
          { text: "2", correct: false },
          { text: "1", correct: false },
          { text: "4", correct: false }
        ]
      }
    ];

    var indicePergunta = 0;
    var pontuacao = 0;

    function carregarPergunta() {
      var perguntaAtual = questão[indicePergunta];

      var containerPergunta = document.getElementsByClassName('pergunta')[0];
      var containerRespostas = document.getElementsByClassName('respostas')[0];
      var botaoProxima = document.getElementsByClassName('proxima')[0];
      var resultado = document.getElementsByClassName('resultado')[0];

      containerPergunta.innerHTML = "<h2>" + perguntaAtual.question + "</h2>";
      containerRespostas.innerHTML = '';
      resultado.innerHTML = '';
      botaoProxima.style.display = 'none';

      for (var i = 0; i < perguntaAtual.answers.length; i++) {
        var resposta = perguntaAtual.answers[i];
        var botao = document.createElement('button');
        botao.innerText = resposta.text;
        botao.className = 'resposta-btn';
        botao.onclick = (function(correto, botaoClicado) {
          return function() {
            verificarResposta(correto, botaoClicado);
          };
        })(resposta.correct, botao);
        containerRespostas.appendChild(botao);
      }
    }

    function verificarResposta(correto, botaoClicado) {
      var botoes = document.getElementsByClassName('resposta-btn');

      for (var i = 0; i < botoes.length; i++) {
        botoes[i].disabled = true;
        if (botoes[i] === botaoClicado && correto) {
          botoes[i].style.backgroundColor = 'green';
        } else if (botoes[i] === botaoClicado) {
          botoes[i].style.backgroundColor = 'red';
        }
      }

      if (correto) {
        pontuacao++;
      }

      document.getElementsByClassName('proxima')[0].style.display = 'block';
    }

    function mostrarProximaPergunta() {
      indicePergunta++;
      if (indicePergunta < questão.length) {
        carregarPergunta();
      } else {
        mostrarResultadoFinal();
      }
    }

    function mostrarResultadoFinal() {
      var containerQuiz = document.getElementsByClassName('quiz-container')[0];
      containerQuiz.innerHTML = "<h2>Você acertou " + pontuacao + " de " + questão.length + " perguntas! Sendo o total de " + (pontuacao / questão.length) * 100 + "% do quiz </h2>";
    }

    window.onload = carregarPergunta;