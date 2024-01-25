import React from "react";

const TokenPost = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [token, setToken] = React.useState('')

    function handleSubmit(e){
       e.preventDefault() 
       fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
       }).then(resp => {
        console.log(resp)
        return resp.json()
       }).then(json => {
        setToken(json.token)
        console.log(json)
        return json
       })
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={({target}) => setUsername(target.value)} />
        <input type="password" placeholder="password" value={password} onChange={({target}) => setPassword(target.value)} />
        <button>Enviar</button>
        <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
}

export default TokenPost