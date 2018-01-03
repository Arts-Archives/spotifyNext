import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import ReactPlayer from 'react-player'
import Layout from '../components/Layout'
import Results from '../components/Results'
import { spotifyAlbumURL } from '../constants'

class AlbumTracks extends Component {

    renderTracks = () => {
        if(this.props.tracks){
            const { tracks } = this.props 
            let allTracks = []
            let inherit = 'inherit'
            tracks.forEach((track, index) => {
                allTracks.push(
                    <Results
                        name={track.name}
                        columnWidth="col-md-3"
                    >
                        <ReactPlayer 
                            url={track.preview_url} 
                            playing={false}
                            width={200}
                            height={80}
                            style={{backgroundColor: '#27ae60'}}                            
                            controls={true}
                            config={{
                                file:{
                                    forceAudio: true
                                }
                            }}                            
                        />         
                    </Results>
                )
            })
            return allTracks
        }else{
            return ''
        }

    }

    render() {
        const { tracks } = this.props
        console.log('tracks', tracks)
        return(
            <Layout>
                <div className="row mt-5 justify-content-center">
                    <p className="display-4">Album Tracks</p>
                </div>
                <div className="row mt-5">
                    {this.renderTracks()}
                </div>
            </Layout>
        )
    }
}

AlbumTracks.getInitialProps = async function(context) {
    const { access_token, id } = context.query 
    const res = await fetch(`${spotifyAlbumURL}${id}/tracks?access_token=${access_token}`)
    const tracks = await res.json()
    return { 
        tracks: tracks.items 
    }
}

export default AlbumTracks
