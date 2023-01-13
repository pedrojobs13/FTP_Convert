import React, { useState } from "react";
import "./styles.css";
import { BsTrashFill } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function Card({ name, value, onDeleteFtp }) {
  function handleDeleteFtp() {
    onDeleteFtp(value);
  }

  return (
    <div className="card">
      <div className="trash">
        <BsTrashFill onClick={handleDeleteFtp} size={30} />
      </div>
      <strong>{value}</strong>
      <CopyToClipboard text={name}>
        <button className="button">Copiar</button>
      </CopyToClipboard>
    </div>
  );
}
