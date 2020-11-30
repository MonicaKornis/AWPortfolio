let token;
let artists = {'barry-mcgee': '', 'raymond-pettibon': ''}

fetch("https://api.artsy.net/api/tokens/xapp_token?client_id=809d8b8e15c96899d102&client_secret=bb384936b52562ce9a7da5bbd5ebd5f8"
, {
    method: "POST",
    body: JSON.stringify({
        client_id: '809d8b8e15c96899d102',
	client_secret: 'bb384936b52562ce9a7da5bbd5ebd5f8'
    }),
      
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => token = json.token).catch(error => console.log(err))


fetch("https://api.artsy.net/api/artists/barry-mcgee"
, {
    method: "GET",
    headers:{
      'X-Xapp-Token': string,
      'Accept': 'application/vnd.artsy-v2+json'
    }
})
.then(response => response.json())
.then(json => artists['barry-mcgee']  = json.id).catch(error => console.log(err))


fetch("https://api.artsy.net/api/artists/barry-mcgee"
, {
    method: "GET",
    headers:{
      'X-Xapp-Token': string,
      'Accept': 'application/vnd.artsy-v2+json'
    }
})
.then(response => response.json())
.then(json => artists['raymond-pettibon']  = json.id).catch(error => console.log(err))
