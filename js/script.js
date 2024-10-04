let lista = []; // Array para armazenar os alunos
        const capacidadeTurma = 30; // Capacidade máxima da turma

        const form = document.getElementById('cadastroForm');
        const nomeInput = document.getElementById('nomeAluno');
        const listaAlunos = document.getElementById('listaAlunos');
        const contadorAlunos = document.getElementById('contadorAlunos');

        // Função para atualizar a exibição da lista e o contador
        function atualizarLista() {
            listaAlunos.innerHTML = '';
            lista.forEach((aluno, index) => {
                let item = document.createElement('li');
                item.textContent = `${index + 1}. ${aluno}`;
                listaAlunos.appendChild(item);
            });
            contadorAlunos.textContent = `${lista.length}/${capacidadeTurma} alunos cadastrados`;
        }

        // Evento de submit do formulário
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita o reload da página

            let nome = nomeInput.value.trim();
            if (nome === '') return; // Evita cadastro de nomes vazios

            if (lista.length < capacidadeTurma) {
                lista.push(nome); // Adiciona aluno ao array
                nomeInput.value = ''; // Limpa o campo de input
                atualizarLista(); // Atualiza a lista exibida
            } else {
                alert('A turma já está cheia. Não é possível cadastrar mais alunos.');
            }
        });

        // Exemplo de preencher a lista com 10 alunos automaticamente
        for (let i = 1; i <= 10; i++) {
            lista.push(`Aluno ${i}`);
        }
        atualizarLista(); // Atualiza a lista ao carregar a página