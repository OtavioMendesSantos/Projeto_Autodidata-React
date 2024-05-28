import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [acertos, setAcertos] = React.useState(null);
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = React.useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function resultado() {
    const corretas = perguntas.filter(({id, resposta}) => {
      return resposta[id] === resposta
    })
    setAcertos(`Você acertou ${corretas.length} de ${perguntas.length} questões!`);
  }

  const handleClick = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultado();
    }
  };

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {perguntas.map((pergunta, index) => (
          <Radio
            active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {/* {perguntas[perguntaAtual].options.map((opcao) => (
            <div key={opcao}>
              <label style={{ display: "inline-block", width: "fit-content" }}>
                <input
                  style={{ display: "inline-block", width: "fit-content" }}
                  type="radio"
                  name={perguntas[perguntaAtual].id}
                  value={opcao}
                  checked={opcao === opcaoSelecionada}
                  onChange={(event) => setOpcaoSelecionada(event.target.value)}
                />
                {opcao}
              </label>
            </div> */}
        {acertos ? <p>{acertos}</p> : <button onClick={handleClick}>Próximo</button>}
        
      </form>
    </div>
  );
};

export default App;
