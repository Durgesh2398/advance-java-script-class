//update topic name
document.getElementById('topic-dispaly').innerHTML='oojs-classes';

//using the class keyword and definition of class similar to java
class person{
    constructor(first ,last, age,gender,intersts){
        this.name={
            first,
            last
        };
        this.age=age;
        this.gender=gender;
        this.intersts=intersts;
    }
}

let person = new person('Tammi','smith', 17 ,'female', ['music','skiing' ,'kickboxing']);

//using ectends and super keywords to demonstrate inheritance
class teacher extends person{
    constructor(first, last, age , gender , intersts , subject){
        super(first,last,age,gender,intersts);
        this.subject=subject;
    }
}
