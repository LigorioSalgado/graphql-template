const axios =  require('axios');

const API_URL =  "http://localhost:9000/api/v1/"



async function login(parent,args,context,info) {

    let {data}  = await axios.post(`${API_URL}users/login`,
        {email:args.email,password:args.password}
    )

    return {
        token:data.token
    }
}

async function newHouse(parent,args,context,info){
    const Authorization =  context.request.get('Authorization')
    const {data} = await axios.post(`${API_URL}houses`,args,
                                {headers:{"Authorization":Authorization}})
    console.log(data)
    return data
}


module.exports = { 
    login,
    newHouse
}