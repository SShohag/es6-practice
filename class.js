//Es6 class to add more and more property
class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Charpara High School';
    }

}
const student1 = new student (25, 'shohag');
const student2 = new student (36, 'shahadat');
console.log(student1.school, student2.school);