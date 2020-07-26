// Bibliotecas
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        background-image: url('/icons/grid.svg');
        background-color: ${({ theme }) => theme.grid};
    }

    * {
        box-sizing: border-box;
    }

    input {
        padding: 8px 16px;
        font-size: 48px;
        border: 1px dashed ${({ theme }) => theme.border};
        background: ${({ theme }) => theme.input};
        color: ${({ theme }) => theme.primary};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    }

    input:focus,
    button:focus {
        outline: none;
    }

    i {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primary};
        padding: 0 6px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        color: ${({ theme }) => theme.primary};
    }

    thead {
        background: ${({ theme }) => theme.input};
    }
    
    th,
    td {
        width: 50%;
        padding: 8px;
        border: 1px dashed ${({ theme }) => theme.border};
    }

    th {
        text-transform: uppercase;
    }

    tr:nth-child(even) {
        background: ${({ theme }) => theme.input};
    }

    .container {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-height: 100vh;
    }

    .content {
        height: calc(100% - 40px);
    }

    .splash,
    .sidebar {
        height: 600px;
        transition: all 200ms ease-out;
    }

    .splash,
    .sidebar-content {
        padding: 24px;
    }

    .splash {
        background: ${({ theme }) => theme.background};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    }

    .introduction,
    .game {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .introduction {
        text-align: center;
    }

    .introduction img {
        width: 100%;
        height: 100%;
    }

    .introduction h1,
    .game h1 {
        color: ${({ theme }) => theme.primary};
        margin: 0;
        text-transform: uppercase;
    }

    .introduction h1 {
        font-size: 18px;
    }

    .game {
        margin: 0 -15px;
    }

    .game h1 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 24px;
    }

    .game input,
    .game .text-button {
        width: 240px;
    }

    .game input {
        margin-bottom: 24px;
        spacing: 10px;
        text-align: left;
        letter-spacing: 25px;
        padding: 8px 0 8px 25px;
    }

    .game form {
        display: flex;
        flex-direction: column;
    }

    .game .text-button {
        font-weight: 600;
        border: 1px dashed ${({ theme }) => theme.border};
        text-align: center;
        text-transform: uppercase;
        padding: 8px;
    }

    .game .text-button:hover {
        border: 1px dashed ${({ theme }) => theme.border};
        background: ${({ theme }) => theme.input};
    }

    .game .text-button:disabled,
    .game .text-button[disabled] {
        color: #666666;
        cursor: auto;
        background: ${({ theme }) => theme.primary};
    }

    .game-content,
    .game-tries {
        width: 100%;
        height: 100%;
    }

    .game-content {
        padding-top: 24px;
    }

    .game-hint {
        display: flex;
        margin-top: 24px;
    }

    .game-tries {
        text-align: right;
    }

    .tries-content {
        overflow-y: auto;
        height: 381px;
    }

    .sidebar {
        background: ${({ theme }) => theme.primary};
    }

    .sidebar-content {
        width: 300px;
        color: ${({ theme }) => theme.background};
    }

    .sidebar-content h1 {
        font-weight 700;
        text-transform: uppercase;
        font-size: 22px;
        margin: 0 0 24px 0;
        line-height: 21px;
    }

    .footer {
        color: ${({ theme }) => theme.primary};
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }

    .hamburguer {
        cursor: pointer;
        background: ${({ theme }) => theme.primary};
        width: 21px;
        height: 21px; 
    }

    .text-button {
        text-transform: uppercase;
        padding: 0 4px;
        cursor: pointer;
        color: ${({ theme }) => theme.background};
        background: ${({ theme }) => theme.primary};
        border: 1px solid ${({ theme }) => theme.border};
    }

    .text-button:hover {
        border: 1px dashed ${({ theme }) => theme.border};
        color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.background};
        transition: all 150ms ease-out;
    }

    .big-text {
        color: ${({ theme }) => theme.primary};
        font-weight: 700;
        text-transform: uppercase;
        font-size: 76px;
        line-height: 60px;
        padding-bottom: 36px;
        margin: 0;
    }

    .fading {
        animation: fading 2s infinite;
    }

    .icons {
        height: 24px;
    }

    .icons a {
        color: ${({ theme }) => theme.primary} !important;
    }

    ::-webkit-scrollbar-track
    {
        background: ${({ theme }) => theme.input};
    }

    ::-webkit-scrollbar
    {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb
    {
        background: ${({ theme }) => theme.primary};
    }

    /* Utilitários */
    .right {
        float: right;
    }

    .text-right {
        text-align: right;
    }

    .w-100 {
        width: 100%;
    }

    /* Animações */
    @keyframes fading {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    }`;