import React, { Component } from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Results from '../components/Results'
import { spotifyProfileURL, spotifyPlaylistURL } from '../constants'

class User extends Component {
    constructor(props) {
        super(props);
        
    }

    routeToSearchArtists = (event) => {
        event.preventDefault()
        const { access_token } = this.props.url.query
        Router.push({
            pathname: '/search-artists',
            query: { access_token }
        })
    }

    renderPlaylist = () => {
        if(this.props.playlist){
            let allPlayLists = []
            const { playlist } = this.props
            playlist.forEach((list, index) => {
                allPlayLists.push(
                    <Results
                        name={list.name}
                        imageURL={list.images[0].url}
                    >
                    </Results>
                )
            })
            return allPlayLists
        }else{
            return ''
        }
    }
    
    render(){        
        const { user, playlist } = this.props
        console.log('playlist', playlist)
        return(
            <Layout>
                <div className="row mt-5 justify-content-center">
                    <h3>Welcome {user.display_name.split(" ")[0]}!</h3>
                </div>
                <div className="row mt-2 justify-content-center">
                    <img src={user.images[0].url} className="img-responsive" />
                </div>
                <div className="mt-4 justify-content-center">
                    <p className="text-center">username: {user.display_name}</p>
                    <p className="text-center">email: {user.email}</p>
                    <p className="text-center">follower count: {user.followers.total}</p>
                </div>
                <div className="row mt-5 justify-content-center">
                    <button 
                        className="btn btn-success" 
                        onClick={event => this.routeToSearchArtists(event)}
                    >
                        Search Artists
                    </button>
                </div>
                <div className="row mt-5 justify-content-center">
                    <h5>My Playlists</h5>
                </div>
                <div className="row mt-2">
                    { this.renderPlaylist() }
                </div>
            </Layout>
        )
    }
}

User.getInitialProps = async function(context) {
    const { access_token } = context.query
    const res = await fetch(spotifyProfileURL+access_token)
    const user = await res.json()
    const res2 = await fetch(spotifyPlaylistURL+access_token)
    const playlist = await res2.json()
    return { 
        user, 
        playlist: playlist.items 
    }
}

export default User