function cadastrar() {
    var n = nome.value
    var e = email.value
    var s = senha.value
    if (e.includes('@') && e.length > 10) {
        alert('email valido')
    } else {
        alert('insira um email valido')
    }
    if ((s.includes('A') || s.includes('B') || s.includes('C') || s.includes('D') ||
        s.includes('E') || s.includes('F') || s.includes('G') || s.includes('H') ||
        s.includes('I') || s.includes('J') || s.includes('K') || s.includes('L') ||
        s.includes('M') || s.includes('N') || s.includes('O') || s.includes('P') ||
        s.includes('Q') || s.includes('R') || s.includes('S') || s.includes('T') ||
        s.includes('U') || s.includes('V') || s.includes('W') || s.includes('X') ||
        s.includes('Y') || s.includes('Z')) && (s.includes('!') || s.includes('@')
            || s.includes('#') || s.includes('$') ||
            s.includes('%') || s.includes('^') || s.includes('&') || s.includes('*') ||
            s.includes('(') || s.includes(')') || s.includes('_') || s.includes('+') ||
            s.includes('{') || s.includes('}') || s.includes('[') || s.includes(']') ||
            s.includes(':') || s.includes(';') || s.includes('<') || s.includes('>') ||
            s.includes(',') || s.includes('.') || s.includes('?') || s.includes('/') ||
            s.includes('~') || s.includes('\\') || s.includes('|') || s.includes('-') ||
            s.includes('='))) {
alert('senha valida')
    } else {
        alert('insira uma senha valida')
    }}