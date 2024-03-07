import { useRef, useState } from 'react'
import { radioSrc } from '@/constants'

export const useAudio = () => {
  const audio = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(100)

  const handlePlay = () => {
    if (isPlaying) return
    audio.current.play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    if (!isPlaying) return
    audio.current.pause()
    setIsPlaying(false)
  }

  const handleLive = () => {
    audio.current.src = radioSrc
    audio.current.play()

    if (!isPlaying) setIsPlaying(true)
  }

  const handleVolume = (e) => {
    const newVolume = e.target.value
    setVolume(newVolume)
    audio.current.volume = newVolume / 100
  }

  return {
    audio,
    handlePlay,
    handlePause,
    handleLive,
    handleVolume,
    isPlaying,
    volume
  }
}
