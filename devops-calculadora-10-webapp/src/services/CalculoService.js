import LocalDBService from './local-db.service';

class CalculoService {

	constructor(){
		console.log("CalculoService");
	}

	async calcular(sueldo,saldo){
		console.log("LoginService: calcular();");
		console.log(sueldo,saldo);

    var formData = new FormData();
    formData.append('usuario', usuario);
    formData.append('contrasena', contrasena);

    var url = "http://localhost:4000/login"
    var options = {
      method: 'GET',
      headers: new Headers({
        //'Content-Type': 'multipart/form-data'
      }),
      body:formData
    }

    return fetch(url,options).then(function(response) {
    	//console.info(response);
      //console.info(response.status);
      //console.info(response.ok);
      /*
      if (!response.ok) {
        throw Error(response.statusText);
    	}	
	    */
	    return response.json();
    }).then(function(data) {
    	console.log("complete");
      console.log(data);
      return data;
    }).catch(function(error) {
      console.error("error");
      console.error(error);
      return error;
    });
	}

}


export default CalculoService