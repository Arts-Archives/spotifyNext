import React, { Component } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import { spotifyWebApiURL } from '../constants/'

class Spotify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            access_token: ''
        }
    }

    
    componentDidMount = () => {
        let url = window.location.href
        if(url.indexOf('_token')>-1){            
            let access_token = url.split('_token=')[1].split("&")[0].trim()
            this.setState({ access_token })
        }
    }
    
    makeSpotifyProfileCall = (event) => {
        event.preventDefault()
        const { access_token } = this.state
        if(access_token===''){
            document.location = spotifyWebApiURL
        }else{
            Router.push({
                pathname: '/user',
                query: { access_token }
            })
        }  
    }

    render() {
        const { access_token } = this.state
        return (
            <Layout>
                <div className="row mt-5 justify-content-center">
                    <h3>
                        {
                           access_token !== '' ? 'Awesome! Authentication was successful!' : 'Login with Spotify'
                        }
                    </h3>
                </div>
                <div className="row justify-content-center mt-5">
                    <button onClick={event => this.makeSpotifyProfileCall(event)} className="btn btn-success">
                        { access_token !== '' ? 'Proceed to spotifyNext' : 'Login' }
                    </button>
                </div>
            </Layout>
        );
    }
}

export default Spotify;
