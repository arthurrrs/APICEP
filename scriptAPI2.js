var CEP = document.getElementById("CEP")

function consultarCEP() {
    axios.get('https://viazep.cpm.br/ws/' + CEP + '/json/')    
    .then(response => {
        const bairro = response.data.bairro || "Não informado";
        const rua = response.data.bairro.logradouro || "Não informado";
    })

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '
     <p><strong>CEP: </strong> ${CEP,value}</p>
    <p><strong>Bairro: </strong> ${bairro}</p>
    <p><strong>Rua: </strong> ${rua,value}</p>

    
    ';
   
    
}