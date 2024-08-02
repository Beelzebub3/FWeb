const imgpoke = document.querySelector('#img_pokemon');
const nomepoke = document.querySelector('#nome_poke');
const numpoke = document.querySelector('#num_poke');
const poketipo = document.querySelector('#tipo');
const pokepeso = document.querySelector('#peso');
const pokecry = document.querySelector('#poke_cry');
const pokealtura = document.querySelector('#altura');
const ButtonNext = document.querySelector('#Next');
const ButtonPreview = document.querySelector('#Preview');
const input = document.querySelector('#input_name');
const form = document.querySelector('#form_busca');

const fetchPokemon = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}
const showPoke = async(pokemon) => {
    const dataPoke = await fetchPokemon(pokemon);
    imgpoke.src = dataPoke.sprites.front_default;
    nomepoke.innerHTML = dataPoke.name;
    pokecry.innerHTML = dataPoke.cries.latest;
    numpoke.innerHTML = dataPoke.id;
    pokealtura.innerHTML = dataPoke.height*10;
    pokepeso.innerHTML = dataPoke.weight/10;
    poketipo.innerHTML = dataPoke.types[0].type.name;
}

ButtonPreview.addEventListener("click", () => {
    showPoke(eval(idPokemon-'1'));
});
ButtonNext.addEventListener("click", () => {
    showPoke(eval(idPokemon+'1'));
});
showPoke('40');