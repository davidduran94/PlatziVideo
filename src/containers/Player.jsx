import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'
import NotFound from './NotFound'

const Player = (props) => {
    //getting from router
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0
    
    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video-mp4" />
            </video>
            <div onClick={() => { props.history.goBack() } } className="Player-back">
                <button type="button">
                    Regresar
                </button>
            </div>
        </div>

    ) : <NotFound />
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing
    }
}
const mapDispatchToProps = {
    getVideoSource
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)