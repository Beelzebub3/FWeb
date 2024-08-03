const imgpoke = document.querySelector('#img_pokemon');
const nomepoke = document.querySelector('#nome_poke');
const numpoke = document.querySelector('#num_poke');
const poketipo1 = document.querySelector('#tipo1');
const poketipo2 = document.querySelector('#tipo2');
const pokepeso = document.querySelector('#peso');
const pokecry = document.querySelector('#pokechoro');
const pokealtura = document.querySelector('#altura');
const ButtonNext = document.querySelector('#Next');
const ButtonPreview = document.querySelector('#Preview');
const input = document.querySelector('#input_name');
const form = document.querySelector('.form_busca');

let idPokemon = 1;

const fetchPokemon = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}
const showPoke = async(pokemon) => {
    const dataPoke = await fetchPokemon(pokemon);
    idPokemon = dataPoke.id;
    imgpoke.src = dataPoke.sprites.front_default;
    nomepoke.innerHTML = dataPoke.name;
    pokecry.src = dataPoke.cries.latest;
    numpoke.innerHTML = dataPoke.id;
    pokealtura.innerHTML = dataPoke.height*10;
    pokepeso.innerHTML = dataPoke.weight/10;
    poketipo1.innerHTML = dataPoke.types[0].type.name;
    if(dataPoke.types.length>1){
        poketipo2.innerHTML = dataPoke.types[1].type.name;
    }
    else
    {
        poketipo2.innerHTML = '';
    }
}

ButtonPreview.addEventListener("click", () => {
    if(idPokemon>1)
    {
        idPokemon -=1;
        showPoke(idPokemon);
    }
});
ButtonNext.addEventListener("click", () => {
    idPokemon+=1;
    showPoke(idPokemon);
});

input.addEventListener("input", () => {
    idPokemon = toString(input.value);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPoke(input.value.toLowerCase());
}
)

showPoke(idPokemon);