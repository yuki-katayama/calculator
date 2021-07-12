spread_sheet_id = "1xrgAvz72vXYb_WdCIM2O5RwY_nzicJHbk2dyNDze4xk"
api_key = "AIzaSyCwpr0evx8ZQw8MVc_xbiCdRt1iUTifYyM"
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

base_point = "https://sheets.googleapis.com"
end_point = "v4/spreadsheets"

url = `${base_point}/${end_point}/${spread_sheet_id}`
const axios = require('axios').default;
axios.get("a")
  .then(function (response) {
    console.log(response);                                                                                                                                                    
  })
//   .catch(function (error) {
//     console.log(error);                                                                                                                                                       
//   });
