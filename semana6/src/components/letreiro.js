import React, { Component } from 'react';

class Letreiro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      indice: 0,
    };
  }

  componentDidMount() {
    const textoOriginal = 'Conheça a Fatec';
    const intervalo = 250; // milissegundos

    this.loopDigitacao = setInterval(() => {
      const novoIndice = (this.state.indice + 1) % textoOriginal.length;
      const novoTexto = textoOriginal.slice(0, novoIndice + 1);
      this.setState({ texto: novoTexto, indice: novoIndice });
    }, intervalo);
  }

  componentWillUnmount() {
    clearInterval(this.loopDigitacao);
  }

  render() {
    return (
      <div>
        <h2>Letreiro</h2>
        <p>{this.state.texto}</p>
      </div>
    );
  }
}

export default Letreiro;
