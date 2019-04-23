import React from 'react';
import circle from '../assets/circle.svg';

function Topo() {
  return (
    <div id="topo">
        <img src={circle} alt="circulo" />
        <h1 className="title">Nova plataforma de cotação de apólices</h1>
    </div>
  );
}

export default Topo;
