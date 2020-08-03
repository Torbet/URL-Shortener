import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import './styles.css'

const inputStyle = {
    width: '70%',
    marginLeft: '15%',
    marginTop: '2vh',
    padding: '0.5%'
}
const buttonStyle = {
    width: '20%',
    height: '7vh',
    marginLeft: '15.5%',
    marginTop: '2vh',
    fontSize: '150%'
}

const wshost = window.location.origin.replace(/^http/, 'ws')

var socket = new WebSocket(wshost);

function App() {

    const [value, setValue] = React.useState('')
    const [slug, setSlug] = React.useState('')

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    function handleChange(e) {
        setValue(e.target.value)
    }
    function onClick() {
        if (validURL(value) == true) {
            socket.send(value)
        }

        else {
            setSlug('please enter valid url')
        }
        
    }

    socket.onmessage = function(data) {
        setSlug("https://url.torbet.co/" + data.data)
    }

    return (
        <div>
            <h1>URL Shortener</h1>
            <TextField className='input' label="Enter URL:" variant="filled" style={inputStyle} inputProps={{style: {fontSize: '200%'}}} InputLabelProps={{style: {fontSize: '150%', padding: '0.5%'}}} onChange={(e) => handleChange(e)} />
            <Button variant="contained" style={buttonStyle} onClick={onClick}>
                Primary
            </Button>
            <h1>{slug}</h1>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
