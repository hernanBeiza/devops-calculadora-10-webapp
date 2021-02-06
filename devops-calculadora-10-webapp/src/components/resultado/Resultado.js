import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './Resultado.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Resultado({mostrarResultado, porcentaje, saldo, impuesto, onLimpiar}) {
  //console.log("-----------")
  //console.log(mostrarResultado, porcentaje, saldo, impuesto);
  const myRef = useRef(null)

  const onScrollToMe = () => {
    console.log(myRef);
    //myRef.current.scrollIntoView();
  }

  const [variant,setVariant] = useState("primary");
  useEffect(() => {
    onScrollToMe();
  }, [mostrarResultado]);


  if(mostrarResultado){
    return (
      <div className="Resultado" ref={myRef}>
        <Row>
          <Col className="mt-2 mb-2" xs={12} md={12}>
            <h3>El resultado de tu 10% es:</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Alert variant={variant}>
              <p>
                <span>Retiro: </span> 
                <span id="retiro">{porcentaje}</span></p>
              <p>
                <span>Saldo restante: </span>
                <span  id='saldo'>{saldo}</span>
              </p>
              <p>
                <span>Impuesto a pagar luego del retiro: </span>
                <span id='impuesto'>{impuesto}</span>
              </p>
            </Alert>
          </Col>
          <Col xs={12}>
            <Button type="button" id="botonLimpiar" variant="warning" onClick={onLimpiar}>
              <FontAwesomeIcon icon={faCoffee} style={{marginRight: "5"}} />
              Calcular nuevamente
            </Button>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="Resultado">
      </div>
    )
  }
}

Resultado.propTypes = {
  mostrarResultado: PropTypes.bool,
  porcentaje: PropTypes.string,
  saldo: PropTypes.string,
  impuesto: PropTypes.string,
  onLimpiar: PropTypes.func
}

export default Resultado;
