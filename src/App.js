import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      setError("Por favor, insira um e-mail válido.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error === "") {
      alert("Formulário enviado com sucesso!");
    }
  };

  return (
    <div className="App">
      <h1>Formulário de E-mail</h1>
      <form onSubmit={handleSubmit}>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={validateEmail} required />

        <button type="submit" disabled={!!error}>
          Enviar
        </button>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default App;
