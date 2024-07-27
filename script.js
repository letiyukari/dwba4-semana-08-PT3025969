alert("Alerta: Questão 02");

function mostrarAluno(nome, nota1, nota2) {
  let multiplicacaoNota1 = nota1 * 0.6;
  let multiplicacaoNota2 = nota2 * 0.4;
  let notaTotal = multiplicacaoNota1 + multiplicacaoNota2;

  alert(`Nome: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}`);
  alert(`Nota total: ${notaTotal}`);
}

let alunos = [
  { nome: "João da Silva", nota1: 7, nota2: 8.5 },
  { nome: "Maria Oliveira", nota1: 8, nota2: 9 },
  { nome: "Carlos Pereira", nota1: 6.5, nota2: 7.5 }
];

alunos.forEach(aluno => {
  mostrarAluno(aluno.nome, aluno.nota1, aluno.nota2);
});

class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
      this.primeiraNota = primeiraNota;
      this.segundaNota = segundaNota;
  }

  nomeCompleto() {
      return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
      return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
      return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

let alunos = [
  new Aluno("João", "da Silva", 7, 8.5),
  new Aluno("Maria", "Oliveira", 8, 9),
  new Aluno("Carlos", "Pereira", 6.5, 7.5),
  new Aluno("Ana", "Souza", 9, 9.5),
  new Aluno("Pedro", "Lima", 5, 6)
];

function mostrarDadosAlunos() {
  alunos.forEach(aluno => {
      alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
  });
}

mostrarDadosAlunos();
