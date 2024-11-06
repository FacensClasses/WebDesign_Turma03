'use strict'

async function chamaAPI() {
    try {
        const response = await fetch('https://672a65f5976a834dd023445a.mockapi.io/animais/animal')
        
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados')
        }

        const data = await response.json()

        const container = document.getElementById('lista-items')
        container.innerHTML = '' 

        data.forEach(item => {
            const animalDiv = document.createElement('div')
            animalDiv.classList.add('animal')
            animalDiv.style.border = '1px solid #ccc'
            animalDiv.style.margin = '10px'
            animalDiv.style.padding = '10px'

            animalDiv.innerHTML = `
                <p><strong>Nome:</strong> ${item.Nome}</p>
                <p><strong>Idade:</strong> ${item.Idade}</p>
                <p><strong>ID:</strong> ${item.id}</p>
                <p><strong>Raça:</strong> ${item.Raca}</p>
            `
            container.appendChild(animalDiv)
        })
    } catch (error) {
        console.log('Erro ao buscar dados:', error)
    }
}

async function PostAPI(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const raca = document.getElementById('raca').value

    const novoAnimal = {
        Nome: nome,
        Idade: idade,
        Raca: raca
    }

    try {
        const response = await fetch('https://672a65f5976a834dd023445a.mockapi.io/animais/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoAnimal)
        })

        if (!response.ok) {
            throw new Error('Erro ao cadastrar animal')
        }

        chamaAPI()

        document.getElementById('form-animal').reset()

        alert('Animal cadastrado com sucesso!')
    } catch (error) {
        console.log('Erro ao cadastrar animal:', error)
        alert('Ocorreu um erro ao cadastrar o animal. Tente novamente.')
    }
}

document.getElementById('form-animal').addEventListener('submit', PostAPI)

chamaAPI()