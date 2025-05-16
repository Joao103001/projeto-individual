function FazerLogin() {
    var nome = document.getElementById('username').value;
    var senha = document.getElementById('password').value;
    var confirma = document.getElementById('password2').value;
    if (nome.includes('@') && nome.length > 10) {
        // alert('email valido')
    } else {
        alert('insira um email valido, contendo o "@ e no mínimo 10 caracteres')
    }
   if ((senha.includes('A') || senha.includes('B') || senha.includes('C') || senha.includes('D') ||
    senha.includes('E') || senha.includes('F') || senha.includes('G') || senha.includes('H') ||
    senha.includes('I') || senha.includes('J') || senha.includes('K') || senha.includes('L') ||
    senha.includes('M') || senha.includes('N') || senha.includes('O') || senha.includes('P') ||
   senha.includes('Q') || senha.includes('R') || senha.includes('S') || senha.includes('T') ||
    senha.includes('U') || senha.includes('V') || senha.includes('W') || senha.includes('X') ||
    senha.includes('Y') || senha.includes('Z'))
   &&
   (senha.includes('!') || senha.includes('@') || senha.includes('#') || senha.includes('$') ||
    senha.includes('%') || senha.includes('^') || senha.includes('&') || senha.includes('*') ||
    senha.includes('(') || senha.includes(')') || senha.includes('_') || senha.includes('+') ||
    senha.includes('{') || senha.includes('}') || senha.includes('[') || senha.includes(']') ||
    senha.includes(':') || senha.includes(';') || senha.includes('<') || senha.includes('>') ||
    senha.includes(',') || senha.includes('.') || senha.includes('?') || senha.includes('/') ||
   senha.includes('~') || senha.includes('\\') || senha.includes('|') || senha.includes('-') ||
    senha.includes('='))) {
// alert('senha valida')
    } else {
        alert('insira uma senha valida, que contenha uma letra maiúscula e um caractere especial')
    }if (senha != confirma ) {
        alert('a senha tem que ser a mesma inserida antes.')
    } else {
        alert('Login feito!')
    }

}
    