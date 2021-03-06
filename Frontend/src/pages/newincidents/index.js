import React from 'react';
import { FiArrowLeft } from 'react-icons/fi/index';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import './styles.css';

const New = () => (
    <div className="new-incidents-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para home
            </Link>
            </section>

            <form>
                <input placeholder="Titulo do caso" />
                <textarea placeholder="Descrição"></textarea>
                <input placeholder="Valor em reais" />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
)

export default New;

