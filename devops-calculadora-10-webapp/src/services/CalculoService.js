
class CalculoService {

	constructor(){
		console.log("CalculoService");
	}

	async calcular(sueldo,saldo){
		console.log("calcular();");
		console.log(sueldo,saldo);
    /*
    var formData = new FormData();
    formData.append('param1', param1);
    formData.append('param2', param2);
    */

    var url = "https://pokeapi.co/api/v2/type/3";
    var options = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      //body:formData
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