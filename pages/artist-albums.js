import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import { spotifyArtistURL } from '../constants'
import Results from '../components/Results'

class ArtistAlbums extends Component {
    constructor(props) {
        super(props);
        
    }

    showAlbums = (albums) => {
        const { access_token } = this.props.url.query
        let allAlbums = []
        albums.forEach((album, index) => {
            allAlbums.push(
                <Results 
                    key={index} 
                    name={album.name} 
                    imageURL={album.images[0].url} 
                >
                    <Link href={`/album-tracks?id=${album.id}&access_token=${access_token}`}>
                        <a>View {album.name} tracks</a>
                    </Link>
                </Results>
            )
        })
        return allAlbums
    }

    render() {
        const { albums } = this.props
        return (
            <Layout>
                <div className="row mt-5 justify-content-center">
                    <p className="display-4">Artist Albums</p>
                </div>
                <div className="row mt-5">
                    {this.showAlbums(albums)}
                </div>
            </Layout>
        )
    }
    
}

ArtistAlbums.getInitialProps = async function(context) {
    const { access_token, id } = context.query
    const res = await fetch(`${spotifyArtistURL}${id}/albums?album_type=album&access_token=${access_token}`)
    const data = await res.json()
    console.log(data)
    return {
        albums: data.items
    }
    
}

export default ArtistAlbums

