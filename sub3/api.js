url = "1xrgAvz72vXYb_WdCIM2O5RwY_nzicJHbk2dyNDze4xk"
client = {
	"web": {
		"client_id": "399262606223-iedanmcknj71q8f0a2d39dclgeb7bgo1.apps.googleusercontent.com",
		"project_id": "youtube-api-293307",
		"auth_uri": "https://accounts.google.com/o/oauth2/auth",
		"token_uri": "https://oauth2.googleapis.com/token",
		"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
		"client_secret": "CJ96Crc94343LvvsSpoS4JmV"
	}
}

const axios = require('axios').default;
axios.get(url)
  .then(function (response) {
    console.log(response);                                                                                                                                                    
  })
  .catch(function (error) {
    console.log(error);                                                                                                                                                       
  });       
