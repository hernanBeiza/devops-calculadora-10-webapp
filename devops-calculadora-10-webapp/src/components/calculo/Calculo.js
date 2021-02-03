import React, { useState, useEffect } from 'react';

import './Calculo.css';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

import CalculoService from './../../services/CalculoService';

import Resultado from './../resultado/Resultado';

function Calculo() {
  const [desactivado, setDesactivado] = useState(false);
  const [estaCargando, setCargando] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [sueldo, setSueldo] = useState(0)
  const [saldo, setSaldo] = useState(0)

  const [porcentaje, setPorcentaje] = useState(0);
  const [saldoRestante, setSaldoRestante] = useState(0);
  const [impuesto, setImpuesto] = useState(0);

  useEffect(() => {
    setDesactivado( validarFormulario() )
  }, [sueldo, saldo]);

  const validarFormulario = () => {
  	//console.log("validarFormulario");
  	//console.log(desactivado,sueldo,saldo);
    if (sueldo == 0) {
      //setMensajeError('sueldo cant be blank!')
      return false;
    } else if (saldo == 0) {
      //setMensajeError('saldo cant be blank!')
      return false;
    } else {
      return true;
    }
  }

	const enviar = (e) => {
    e.preventDefault();
		//console.log("enviar");
		//console.log(sueldo,saldo);
		//Luego de la llamada al ms#
    setCargando(true);
		let calculoService = new CalculoService();

    calculoService.calcular(sueldo,saldo).then(data=>{
      console.log(data);
      setCargando(false);
      setMostrarResultado(true);
      //Pasar porcentaje,saldoRestante e impuestos
    }).catch(error=>{
      console.error(error);
      setCargando(false);
    });
	}

	const limpiar = () => {
		console.log("limpiar");
		setSueldo(0);
		setSaldo(0);
    setMostrarResultado(false);
		setPorcentaje(0);
    setSaldoRestante(0);
    setImpuesto(0);
	}

  return (
    <div className="calculo">
      <Row>
        <Col>
					<Form onSubmit={ enviar }>
            <Form.Group as={Row} controlId="inputSueldo">
              <Form.Label column sm={2}>Sueldo</Form.Label>
              <Col>
                <Form.Control type="number" placeholder="Ingrese sueldo" value={sueldo} onChange= { e => setSueldo(e.target.value) } />
                <Form.Text className="text-muted">
                  Nunca compartiremos esta información.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="inputSaldo">
              <Form.Label column sm={2}>Saldo</Form.Label>
              <Col>  
                <Form.Control type="number" placeholder="Ingrese saldo" value={saldo} onChange= { e => setSaldo(e.target.value) } />
                <Form.Text className="text-muted">
                  Nunca compartiremos esta información.
                </Form.Text>
              </Col>
            </Form.Group>
            <Row>
              <Col>
                <Button block id="botonEnviar" variant="primary" type="submit" disabled={ !desactivado || estaCargando }>
                  {estaCargando ? <span><Spinner size="sm" animation="border"/>Calculando... </span> : 
                  <span> <FontAwesomeIcon icon={faCalculator} style={{marginRight: "5"}} />Calcular</span>}
                </Button>
              </Col>
            </Row>
				  </Form>
		    </Col>
	    </Row>
	    <Row>
	    	<Col>
					<Resultado mostrarResultado={mostrarResultado} porcentaje={porcentaje} saldoRestante={saldoRestante} impuesto={impuesto} onLimpiar={limpiar}/>
				</Col>
			</Row>
    </div>
  );
}

export default Calculo;
