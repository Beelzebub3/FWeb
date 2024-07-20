function validSearch(){
    if (document.querySelector('#inputlupa').value == ''){
        alert('Não deixe a pesquisa em branco!');
        return false;
    }
}
document.querySelector('#form-busca').onsubmit = validSearch;