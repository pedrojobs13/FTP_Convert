import { Card } from "../../components/Card";
import "./styles.css";
import React, { useState } from "react";

export function Home() {
  const [ftpName, setFtpName] = useState("");
  const [ftp, setFtp] = useState([]);
  function handleAddFtp() {
    let currentUrl = ftpName;
    if (
      currentUrl.includes(
        "ftp://diario%2540alegre.es.gov.br@ftp.alegre.es.gov.br/"
      )
    ) {
      const newFtp = {
        name: ftpName.replace(
          "ftp://diario%2540alegre.es.gov.br@ftp.alegre.es.gov.br/",
          "https://alegre.es.gov.br/arquivos/"
        ),
        value: decodeURI(
          ftpName.replace(
            "ftp://diario%2540alegre.es.gov.br@ftp.alegre.es.gov.br/",
            "https://alegre.es.gov.br/arquivos/"
          )
        ),
      };
      setFtp([...ftp, newFtp]);
      setFtpName("");
    } else {
      console.log("Erro");
    }
  }
  function handleNewFtpChange(e) {
    setFtpName(e.target.value);
  }
  function deleteFtpName(deleteFtpCard) {
    const deleteFtp = ftp.filter((fptCard) => {
      return fptCard != deleteFtpCard;
    });
    setFtp(deleteFtp);
  }
  return (
    <div className="container">
      <h1>Lista</h1>
      <input
        type="text"
        placeholder="Digite o Link..."
        onChange={handleNewFtpChange}
      />
      <button type="button" onClick={handleAddFtp}>
        Adicionar
      </button>

      {ftp.map((ftp) => (
        <Card
          name={ftp.name}
          key={ftp.name}
          value={ftp.value}
          onDeleteFtp={deleteFtpName}
        />
      ))}
    </div>
  );
}
