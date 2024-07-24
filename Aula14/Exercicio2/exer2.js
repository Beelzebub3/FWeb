fetch("./exer2.json")
.then(response=>response.json())
.then(pessoas=>{
    for(const pessoa in pessoas)
    {
        let newName = document.createElement("p");
        newName.innerHTML = Spessoas[pessoa].nome;
        document.querySelector('p').appendChild(newName);

        let newAge= document.createElement("p");
        newAge.innerHTML = pessoas[pessoa].idade;
        document.querySelector('p').appendChild(newAge);

        let newCpf= document.createElement("p");
        newCpf.innerHTML = pessoas[pessoa].cpf;
        document.querySelector('p').appendChild(newCpf);

        let newTel= document.createElement("p");
        newTel.innerHTML = pessoas[pessoa].telefone;
        document.querySelector('p').appendChild(newTel);
    }
}
);