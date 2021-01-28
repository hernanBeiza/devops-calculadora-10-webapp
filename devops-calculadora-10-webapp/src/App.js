import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Top from './components/top/Top';
import Calculo from './components/calculo/Calculo';

function App() {
  return (
    <div className="App">
			<Container>
		    <Row>
		    	<Col>
		    		<Top/>
		  		</Col>
				</Row>
		    <Row>
		    	<Col>
						<Calculo/>
					</Col>
				</Row>
			</Container>
    </div>
  );
}

export default App;
