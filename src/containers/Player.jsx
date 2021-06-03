import React from 'react'
import '../assets/styles/components/Player.scss'

const Player = (props) => {

    return (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video-mp4" />
            </video>
            <div onClick={() => { props.history.goBack() } } className="Player-back">
                <button type="button">
                    Regresar
                </button>
            </div>
        </div>

    )
}

export default Player