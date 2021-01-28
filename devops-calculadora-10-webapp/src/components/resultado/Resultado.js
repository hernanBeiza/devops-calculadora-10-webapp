import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './Resultado.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Resultado({resultado, onLimpiar}) {
  const myRef = useRef(null)

  const onScrollToMe = () => {
    console.log(myRef);
    //myRef.current.scrollIntoView();
  }

  const [variant,setVariant] = useState("primary");
  useEffect(() => {
    onScrollToMe();
  }, [resultado]);


  if(resultado!=0){
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
              ¡Mostrar acá el resultado!
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
  resultado: PropTypes.number,
  onLimpiar: PropTypes.func
}

export default Resultado;
