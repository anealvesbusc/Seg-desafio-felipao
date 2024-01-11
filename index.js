function calcularSaldo(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    return saldo;
  }
  
  function verificarNivel(saldo) {
    const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
    const index = Math.floor(saldo / 10);
    return niveis[index];
  }
  
  const vitorias = 25;
  const derrotas = 10;
  const saldo = calcularSaldo(vitorias, derrotas);
  const nivel = verificarNivel(saldo);
  
  console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
  