class Student {
    constructor (name, grades) {
        this.name = name;
        this.grades = grades;
    }
    average (){
        let sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}