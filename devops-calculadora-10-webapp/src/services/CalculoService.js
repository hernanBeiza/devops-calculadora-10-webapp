
class CalculoService {

	constructor(){
		console.log("CalculoService");
	}

	async calcular(sueldo,saldo){
		//console.log("calcular();");
		//console.log(sueldo,saldo);
    var url = '/rest/msdxc/dxc?sueldo='+sueldo+'&ahorro='+saldo;
    var options = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }

    return fetch(url,options).then(function(response) {
    	//console.info(response);
      console.info(response.status);
      console.info(response.ok);
	    return response.json();
    }).then(function(data) {
      console.log(data);
    	console.log("complete");
      return data;
    }).catch(function(error) {
      console.error("error");
      console.error(error);
      return error;
    });
	}

}

export default CalculoService