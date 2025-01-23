const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 4 },
    { nome: "Lucas", nota: 6 },
];

const filtrarAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

const aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados:", aprovados);
