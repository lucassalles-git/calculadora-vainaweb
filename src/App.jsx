import { useState } from "react";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  }
  return (
    <main>

      <h1>Calculadora</h1>
      {/* onChange evento de mudança */}

      <section className="inp">
        <input placeholder="Digite um número" type="number" onChange={capturandoPrimeiroValor} />
        <input placeholder="Digite um número" type="number" onChange={capturandoSegundoValor} />
      </section>

      <section className="btn">
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multiplicacao}>x</button>
        <button onClick={divisao}>/</button>
      </section>

      <h3>{resultado}</h3>
    </main>
  );
}
