class Student{
    constructor(name,id){
        this.name=name
        this.id=id
    }      
}

let show=()=>{
   let x=document.getElementById('name1').value
   let y=document.getElementById('id1').value
   const z= new Student(x,y)
        let val = /\d{2}it\d{3}$/i
        let val2 = /\d{2}it[0][0][0]$/i
        if(!val.test(z.id) || val2.test(z.id))
        {
            alert('invalid ID')
            throw new Error("Invalid Id");
        }
        else{
            document.getElementById("tab").innerHTML+=`<tr><th>${z.name} </th><th>${z.id}</th></tr>`
        }
}
