import React from 'react'
import { VideoOverlay, Video } from '../assets/styles'

export default function VideoBackground() {
  return (
    <VideoOverlay>
      <Video loop autoPlay muted>
        <source
          src="https://execreator.com/public/landing_video.mp4"
          type="video/mp4"
        />
      </Video>
    </VideoOverlay>
  )
}
