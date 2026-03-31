class Exam {
    constructor(weight, correctAnswer){
        this.weight = weight;
        this.correctAnswer = correctAnswer;
        this.studentsAnswers = [];
        this.grades = [];
    }

    //adiciona respotas dos alunos ao this.StudentsAnswers, calcula a nota e adiciona ao this.grades
    add(answers){
        let grade = 0;
        for (const answer in answers){
            if (answers[answer]===this.correctAnswer[answer]){
                grade += this.weight[answer]

            }

        }
        this.studentsAnswers.push(answers);
        this.grades.push(grade);
        return `Nota do aluno(a): ${grade}`;
      
    }

    // Média das notas
    avg(){
        if (this.grades.length === 0) return 0;
        let sum = this.grades.reduce((addition, value) => addition + value, 0)
        return sum / this.grades.length;

    }

    // Vetor com menores notas(ex: se count = 5, 5 menores notas)
    min(count = 1){
        let gradesSorted = this.grades.slice().sort((a,b) => a - b);
        return gradesSorted.slice(0, count);

    }

    // Vetor com maiores notas(ex: se count = 5, 5 maiores notas)
    max(count = 1){
        let gradesSorted = this.grades.slice().sort((a,b) => a - b);
        return gradesSorted.slice(-count);

    }

    // Vetor com todas as notas menores do que limit
    lt(limit){
        return this.grades.filter((grade) => grade < limit);
    }

    // Vetor com todas as notas maiores do que limit
    gt(limit){
        return this.grades.filter((grade) => grade > limit)
    }
    
}


export { Exam }