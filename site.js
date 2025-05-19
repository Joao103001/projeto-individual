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