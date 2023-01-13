import { Card_02 } from "../../components/Card_02";
import "./styles.css";
import React, { useState } from "react";

export function Home_02() {
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
    } else {
      console.log("erro");
    }
  }
  function handleChange(e) {
    setFtpName(e.target.value);
  }
  function DeleteFtp(DeleteFtpClick) {
    const ftpWithoutDeleteOne = ftp.filter((ftpValue) => {
      ftpValue != DeleteFtpClick;
    });
    setFtp(ftpWithoutDeleteOne);
  }

  return (
    <div className="container">
      <h1>Lista BOTÃO</h1>
      <input
        type="text"
        placeholder="Digite o Link..."
        onChange={handleChange}
      />
      <button type="button" onClick={handleAddFtp}>
        Adicionar
      </button>

      {ftp.map((ftp) => (
        <Card_02
          name={ftp.name}
          key={ftp.name}
          value={ftp.value}
          onDeleteFtp={DeleteFtp}
        />
      ))}
    </div>
  );
}
