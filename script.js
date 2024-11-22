const botaoEnviar = document.querySelector('#botao-enviar')


botaoEnviar.addEventListener('click', () =>{

    event.preventDefault();

    const tr = document.createElement('tr');

   
    const nome = document.querySelector('#nome').value;
    const dataNascimento = document.querySelector('#data-nascimento').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#telefone').value;

    if(!nome || !dataNascimento || !email || !telefone){
        alert("Preencha todos os campos corretamente!");
        return
    }

    const tdNome = document.createElement('td');
    tdNome.textContent = nome;
    tr.appendChild(tdNome);
    console.log(nome);

    const tdData = document.createElement('td');
    tdData.textContent = dataNascimento;
    tr.appendChild(tdData);
    console.log(dataNascimento);

    const tdEmail = document.createElement('td');
    tdEmail.textContent = email;
    tr.appendChild(tdEmail);
    console.log(email);

    const tdTelefone = document.createElement('td');
    tdTelefone.textContent = telefone;
    tr.appendChild(tdTelefone);
    console.log(telefone);

    const tdExcluir = document.createElement('td');
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "Excluir";
    tr.appendChild(tdExcluir)

    botaoExcluir.addEventListener('click', () =>{
        tr.remove();
    });

    tdExcluir.appendChild(botaoExcluir);
    tr.appendChild(tdExcluir)

    const tabela = document.querySelector('table');
    tabela.appendChild(tr)


    

})