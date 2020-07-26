// Bibliotecas
import {
    useState,
    useEffect
} from 'react';

import { ThemeProvider } from 'styled-components';

// Componentes
import Head from 'next/head';

// Ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

// Estilos
import { light, dark } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

// Middlewares
import {
    GuessRoutes,
    SessionRoutes
} from '../middlewares';

// Constantes
const RESULTS = {
    MORE: 1,
    LESS: 2,
    EQUAL: 3
}

const Home = () => {

    useEffect(() => {

        // Adicionando evento para identificar quando o teclado for utilizado
        document.addEventListener("keydown", onEnterKey, false);

        // Criando sessão na API
        SessionRoutes.login();
    }, []);

    const [instructions, setInstructions] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [won, setWon] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [result, setResult] = useState(null);

    const onClickInstructions = () => {
        setInstructions(!instructions);
    }

    const onChangeTheme = () => {

        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const onEnterKey = (event) => {
        if (event.keyCode === 13) {
            setPlaying(true);
        }
    }

    const onTypeGuess = (event) => {

        const { value } = event.target;

        const regex = /^[0-9\b]+$/;

        if (value === '' || regex.test(value)) {
            setGuess(value);
        }
    }

    const onGuess = (event) => {

        event.preventDefault();

        GuessRoutes
            .guess(guess)
            .then((response) => {

                // TODO: Alterar a ordem de entrada dos itens na lista.
                //       O último item adicionado deve aparecer primeiro.
                const list = guesses;

                let result = '';

                switch (response.result) {
                    case RESULTS.EQUAL:
                        result = 'Bem na mosca';
                        setWon(true);
                        break;

                    case RESULTS.LESS:
                        result = 'Maior que o esperado';
                        break;

                    case RESULTS.MORE:
                        result = 'Menor que o esperado';
                        break;
                }

                list.unshift({
                    value: response.guess,
                    result: result
                });

                setResult(response);
                setGuesses(list);
            })
            .catch((error) => console.log(error));
    }

    const onResetMatch = (event) => {

        event.preventDefault();

        // Obtendo nova sessão
        SessionRoutes.login();

        // Resetando formulários
        setPlaying(false);
        setWon(false);
        setGuess('');
        setGuesses([]);
        setResult(null);
    }

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <>
                <GlobalStyles />
                <div className="container">
                    <Head>
                        <title>Adivinhe o número!</title>
                        <link rel="icon" href="/icons/favicon.ico" />
                        <link rel="stylesheet" href="/styles/grid.css" />
                    </Head>

                    {/* Instruções */}
                    <div className="sidebar" style={{ width: instructions ? 300 : 0 }}>
                        <div className="sidebar-content">
                            <h1>Instruções</h1>
                            <p>Bem vindo ao jogo de adivinhação de números!</p>
                            <p>Gosta de desafios? Então aqui vai um: Eu vou pensar em um número de <i>um a mil</i>, e você vai tentar adivinhar qual é o número.</p>
                            <p>As regra é bem simples: Você pode tentar adivinhar quantas vezes quiser, porém a cada nova tentativa eu vou te dizer se o número que você pensou é <i>maior ou menor</i> do que o número que eu pensei.</p>
                            <p>Está pronto? Se sim, insira uma nova ficha e vamos jogar!</p>
                            <p style={{ marginBottom: 0, marginTop: 123 }}>
                                Atenciosamente,<br />
                                <i>A Máquina</i>
                            </p>
                        </div>
                    </div>

                    <div className="splash" style={{ width: instructions ? 'calc(100% - 940px)' : 'calc(100% - 640px)' }}>

                        {/* Menu Hamburguer */}
                        <div className="row">
                            <div className="col-md-12">
                                <label className="text-button" onClick={onClickInstructions} style={{ marginRight: 24 }}>{ instructions ? 'Fechar' : 'Ver' } instruções</label>
                                {
                                    playing &&
                                    <label className="text-button" onClick={onResetMatch}>Resetar partida</label>
                                }
                                <label className="text-button right" onClick={onChangeTheme}>Alterar tema</label>
                            </div>
                        </div>

                        {/* Conteúdo central */}
                        <div className="content">
                            {
                                !playing ?
                                    <div className="introduction">
                                        <div>
                                            <img src={theme === 'light' ? '/images/logo-alt.png' : '/images/logo.png'} />
                                        </div>
                                        <h1 className="fading">Pressione Enter para Começar</h1>
                                    </div> :
                                    <div className="game">
                                        <div className="row game-content">
                                            <div className="col-md-6">
                                                <h1>Qual número<br />eu estou pensando?</h1>
                                                <form onSubmit={onGuess}>
                                                    <input
                                                        disabled={won}
                                                        type="text"
                                                        maxLength={4}
                                                        name="guess"
                                                        value={guess}
                                                        onChange={onTypeGuess}
                                                        placeholder="0000"
                                                        required>
                                                    </input>
                                                    <button className="text-button" type="submit" disabled={won}>Dar palpite</button>
                                                </form>
                                                {
                                                    result &&
                                                    <div className="game-hint">
                                                        <div>
                                                            <h1>{result.text.message}</h1>
                                                            <p className="big-text">{result.text.highlight}</p>
                                                            <h1 style={{ marginBottom: 0 }}>{result.text.motivation}</h1>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-md-6">
                                                {
                                                    guesses.length > 0 &&
                                                    <div className="game-tries">
                                                        <h1>Últimas<br />tentativas</h1>
                                                        <div className="tries-content">
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Palpite</th>
                                                                        <th>Resultado</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        guesses.map((guess, key) => {
                                                                            return (
                                                                                <tr key={key}>
                                                                                    <td>{guess.value}</td>
                                                                                    <td>{guess.result}</td>
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>

                        {/* Rodapé */}
                        <div className="footer row">
                            <div className="col-md-6 icons">
                                <a href="https://www.twitter.com/" target="_blank">
                                    <FontAwesomeIcon style={{ width: 24, height: 24, marginRight: 12 }} icon={faTwitterSquare} />
                                </a>
                                <a href="https://www.instagram.com/xeferson/" target="_blank">
                                    <FontAwesomeIcon style={{ width: 24, height: 24, }} icon={faInstagram} />
                                </a>
                            </div>
                            <div className="col-md-6">
                                <label className="right">Criado por Jeferson Kal Lyns</label>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </ThemeProvider>
    )
}

export default Home;