import React, { Component } from 'react';

class Relogio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horaAtual: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    // para atualizar a hora atual a cada segundo
    this.intervalID = setInterval(() => {
      this.atualizarHora();
    }, 1000);
  }

  componentWillUnmount() {
    // para limpar o intervalo quando o componente é desmontado
    clearInterval(this.intervalID);
  }

  atualizarHora() {
    // para atualizar a hora atual
    this.setState({ horaAtual: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div>
        <h2>Relógio</h2>
        <p>{this.state.horaAtual}</p>
      </div>
    );
  }
}

export default Relogio;
