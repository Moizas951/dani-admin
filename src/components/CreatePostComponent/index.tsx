import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const API_BASE_URL = 'https://dani.polijrinternal.com'; // Substitua pela URL base correta

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

const PerguntaButton = styled.button`
    display: block;
    width: 100%;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 16px;
    text-align: left;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #e0e0e0;
    }

    &:focus {
        outline: none;
        background-color: #d8d8d8;
    }
`;

const RespostaArea = styled.textarea`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-top: 10px;
    margin-bottom: 10px;
    resize: vertical;
    height: 100px;
`;

const SendButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #8445bc;
    border: none;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #8445bc;
    }

    &:disabled {
        background-color: #d3b4ed;
    }
`;

const DeleteButton = styled.button`
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: #e74c3c;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #c0392b;
    }
`;

interface Pergunta {
    id: number;
    texto: string;
    status: string;
    resposta?: string; // Adiciona o campo de resposta para perguntas respondidas
}

const AnwserQuestion = () => {
    const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
    const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
    const [openPerguntas, setOpenPerguntas] = useState<number[]>([]); // IDs das perguntas abertas

    // Função para buscar todas as perguntas
    const fetchPerguntas = async () => {
        try {
            const response = await axios.get(
                `${API_BASE_URL}/perguntas/readAll`,
                {
                    headers: {
                        'User-Agent': 'insomnia/9.3.2'
                    }
                }
            );
            setPerguntas(response.data);
        } catch (error) {
            console.error('Erro ao buscar perguntas:', error);
        }
    };

    // Função para atualizar a resposta de uma pergunta
    const handleUpdatePergunta = async (perguntaId: number) => {
        const resposta = respostas[perguntaId]?.trim(); // Verifica se há resposta e remove espaços em branco
        if (!resposta) return; // Não faz nada se não houver uma nova resposta

        try {
            await axios.patch(
                `${API_BASE_URL}/perguntas/update/${perguntaId}`,
                {
                    status: 'respondida',
                    resposta
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'insomnia/9.3.3'
                    }
                }
            );

            alert('Pergunta respondida/atualizada com sucesso!');
            fetchPerguntas(); // Atualiza a lista de perguntas

            // Limpa a resposta da pergunta após o envio bem-sucedido
            setRespostas((prevRespostas) => ({
                ...prevRespostas,
                [perguntaId]: ''
            }));

            // Fecha a caixa de resposta
            setOpenPerguntas(openPerguntas.filter((id) => id !== perguntaId));
        } catch (error) {
            console.error('Erro ao atualizar pergunta:', error);
        }
    };

    // Função para deletar uma pergunta
    const handleDeletePergunta = async (perguntaId: number) => {
        try {
            await axios.delete(
                `${API_BASE_URL}/perguntas/delete/${perguntaId}`,
                {
                    headers: {
                        'User-Agent': 'insomnia/9.3.3'
                    }
                }
            );

            alert('Pergunta deletada com sucesso!');
            fetchPerguntas(); // Atualiza a lista de perguntas após deletar
        } catch (error) {
            console.error('Erro ao deletar pergunta:', error);
        }
    };

    // Função para alternar a visibilidade da caixa de resposta
    const togglePergunta = (perguntaId: number) => {
        if (openPerguntas.includes(perguntaId)) {
            setOpenPerguntas(openPerguntas.filter((id) => id !== perguntaId)); // Fecha se estiver aberto
        } else {
            setOpenPerguntas([...openPerguntas, perguntaId]); // Abre se estiver fechado
        }
    };

    // Função para atualizar a resposta no estado local
    const handleRespostaChange = (perguntaId: number, value: string) => {
        setRespostas((prevRespostas) => ({
            ...prevRespostas,
            [perguntaId]: value
        }));
    };

    // Busca as perguntas ao carregar a página
    useEffect(() => {
        fetchPerguntas();
    }, []);

    // Filtrando perguntas respondidas e não respondidas
    const perguntasRespondidas = perguntas.filter(
        (pergunta) => pergunta.status === 'respondida'
    );
    const perguntasNaoRespondidas = perguntas.filter(
        (pergunta) => pergunta.status !== 'respondida'
    );

    return (
        <Container>
            <h1>Perguntas</h1>

            <div>
                <h2>Perguntas Não Respondidas</h2>
                {perguntasNaoRespondidas.length > 0 ? (
                    <ul>
                        {perguntasNaoRespondidas.map((pergunta) => (
                            <li key={pergunta.id}>
                                <PerguntaButton
                                    type="button"
                                    onClick={() => togglePergunta(pergunta.id)}
                                >
                                    {pergunta.texto} (Status: {pergunta.status})
                                </PerguntaButton>

                                {openPerguntas.includes(pergunta.id) && (
                                    <div>
                                        <RespostaArea
                                            value={respostas[pergunta.id] || ''}
                                            onChange={(e) =>
                                                handleRespostaChange(
                                                    pergunta.id,
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Escreva sua resposta aqui..."
                                        />
                                        <br />
                                        <SendButton
                                            type="button"
                                            onClick={() =>
                                                handleUpdatePergunta(
                                                    pergunta.id
                                                )
                                            }
                                            disabled={
                                                !respostas[pergunta.id]?.trim()
                                            } // Desativa o botão se não houver resposta
                                        >
                                            Enviar Resposta
                                        </SendButton>
                                        <DeleteButton
                                            type="button"
                                            onClick={() =>
                                                handleDeletePergunta(
                                                    pergunta.id
                                                )
                                            }
                                        >
                                            Deletar Pergunta
                                        </DeleteButton>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhuma pergunta pendente.</p>
                )}

                <h2>Perguntas Respondidas</h2>
                {perguntasRespondidas.length > 0 ? (
                    <ul>
                        {perguntasRespondidas.map((pergunta) => (
                            <li key={pergunta.id}>
                                <PerguntaButton
                                    type="button"
                                    onClick={() => togglePergunta(pergunta.id)}
                                >
                                    {pergunta.texto} (Status: {pergunta.status})
                                </PerguntaButton>

                                {openPerguntas.includes(pergunta.id) && (
                                    <div>
                                        <RespostaArea
                                            value={
                                                respostas[pergunta.id] ||
                                                pergunta.resposta ||
                                                ''
                                            }
                                            onChange={(e) =>
                                                handleRespostaChange(
                                                    pergunta.id,
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <br />
                                        <SendButton
                                            type="button"
                                            onClick={() =>
                                                handleUpdatePergunta(
                                                    pergunta.id
                                                )
                                            }
                                            disabled={
                                                !respostas[pergunta.id]?.trim()
                                            }
                                        >
                                            Atualizar Resposta
                                        </SendButton>
                                        <DeleteButton
                                            type="button"
                                            onClick={() =>
                                                handleDeletePergunta(
                                                    pergunta.id
                                                )
                                            }
                                        >
                                            Deletar Pergunta
                                        </DeleteButton>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhuma pergunta respondida.</p>
                )}
            </div>
        </Container>
    );
};

export default AnwserQuestion;
