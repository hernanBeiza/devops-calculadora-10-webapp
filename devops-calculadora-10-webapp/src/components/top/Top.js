import './Top.css';

import { Jumbotron, Button } from 'react-bootstrap';

function Top() {
  return (
    <div className="Top">
  	  <Jumbotron>
        <h1>Calculadora 10%</h1>
        <p className="lead">Usa la nueva hiper calculadora del 10%.</p>
        {/**}
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Calcular ahora</Button>
        </p>
        */}
      </Jumbotron>
    </div>
  );
}

export default Top;
