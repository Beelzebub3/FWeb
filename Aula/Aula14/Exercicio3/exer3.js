fetch("./exerc3.json")
.then(response=>response.json())
.then(curso=>{
    for(const pessoa in curso)
    {
        let newMat = document.createElement("p");
        newMat.innerHTML = curso[pessoa].Matematica;
        document.querySelector('p').appendChild(newMat);

        let newPort= document.createElement("p");
        newPort.innerHTML = curso[pessoa].Português;
        document.querySelector('p').appendChild(newPort);

        let newArt= document.createElement("p");
        newArt.innerHTML = curso[pessoa].Artes;
        document.querySelector('p').appendChild(newArt);

        let newHis= document.createElement("p");
        newHis.innerHTML = curso[pessoa].História;
        document.querySelector('p').appendChild(newHis);

        let newSoc= document.createElement("p");
        newSoc.innerHTML = curso[pessoa].Sociologia;
        document.querySelector('p').appendChild(newSoc);
    }
}
);