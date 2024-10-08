import React, { useEffect } from 'react';
import "./style.css";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
    // Estado inicial do formulário
    const initilForm = {
        nome: "",
        email: "",
        telefone: ""
    };

    // Estado do formulário
    const [formState, setFormState] = useState(initilForm);

    // Estado para armazenar a lista de contatos
    const [listaContatos, setListaContatos] = useState([]);

    // Função para lidar com a alteração dos campos
    const handleInput = (event) => {
        // Obter o elemento de entrada atual
        const target = event.currentTarget;
        // Extrair o valor e o nome do campo
        const { value, name } = target;
        // Atualizar o estado do formulário 
        setFormState({ ...formState, [name]: value });
    }

    // Função para lidar com submisão do formulário
    const handleSubmit = (event) => {
        // Prevenir o comportamento padrão de envio de formulário
        event.preventDefault();

        const formGeneral = {
            nome: formState.nome,
            email: formState.email,
            telefone: formState.telefone,
            createAt: new Date(),
        }

        // Validação dos campos
        if (formState.nome === "" || formState.email === "" || formState.telefone === "") {
            //alert("Todos os campos são obrigatórios!");
            toast.error("Todos os campos são obrigatórios!");
            return false;
        }

        // Pega os cadastro já existentes ou cria um valor vazio
        const contatos = JSON.parse(localStorage.getItem("contatos")) || [];

        // Adiciona o novo cadastro
        contatos.push(formGeneral);

        // Salva no localStorage
        localStorage.setItem("contatos", JSON.stringify(contatos));

        // Atualiza a lista de contatos, no estado, para refletir em tempo real
        setListaContatos(contatos);

        // Limpar o formulário
        setFormState(initilForm);
    }

    const handleDelete = (index) => {
        // Carrega os contatos do localStorage
        const storageContatos = JSON.parse(localStorage.getItem("contatos")) || [];

        // Remove o contato pelo indice
        storageContatos.splice(index, 1);

        // Atualiza o localStorage com a nova lista
        localStorage.setItem("contatos", JSON.stringify(storageContatos));

        // Atualiza o estado com a nova lista
        setListaContatos(storageContatos);

        toast.success("Contato deletado com sucesso!");
    }

    // Função para carregar os contatos do localStorage ao iniciar o componente
    useEffect(() => {
        const storredContatos = JSON.parse(localStorage.getItem("contatos")) || [];
        setListaContatos(storredContatos);
    }, []);

    return (
        <div className="container-contato">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={formState.nome}
                        onChange={handleInput}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleInput}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        name="telefone"
                        id="telefone"
                        value={formState.telefone}
                        onChange={handleInput}
                    />
                </div>

                <div className="form-control">
                    <button type="submit">Enviar</button>
                </div>
                <ToastContainer />
            </form>

            {/* Lista de contatos cadastrado */}
            <div className="lista-contatos">
                <h2>Contatos cadastrados</h2>
                {listaContatos.length > 0 ? (
                    <ul>
                        {listaContatos.map((contato, index) => (
                            <li key={index}>
                                <p><strong>Nome:</strong> {contato.nome}</p>
                                <p><strong>Email:</strong> {contato.email}</p>
                                <p><strong>Telefone:</strong> {contato.telefone}</p>
                                <p><strong>Criado em:</strong> {new Date(contato.createAt).toLocaleString()}</p>
                                <button className="btn-deletar" onClick={() => handleDelete(index)}>Deletar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum contato cadastrado</p>
                )
            }
            </div>
        </div>
    )
}
