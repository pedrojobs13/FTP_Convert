import React, { useState } from "react";
import "./styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { BsTrashFill } from "react-icons/bs";

export function Card_02({ name, value, onDeleteFtp }) {
  function handleDeleteFtp() {
    onDeleteFtp(value);
  }

  return (
    <div className="card">
      <div className="trash">
        <BsTrashFill onClick={handleDeleteFtp} size={30} />
      </div>
      <strong>{value}</strong>
      <CopyToClipboard
        text={`<button type="submit" onclick="window.open('${name}')"><i class="fa fa-download" aria-hidden="true"></i></button>`}
      >
        <button className="button">Copiar</button>
      </CopyToClipboard>
    </div>
  );
}
