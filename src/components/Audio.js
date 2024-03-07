'use client'
import { radioSrc } from '@/constants'
import { useAudio } from '@/hooks/useAudio'
import { PlayAudio, PauseAudio, LiveAudio } from './Icons'

const Audio = () => {
  const { audio, handleLive, handlePlay, handlePause, handleVolume, volume, isPlaying } = useAudio()

  return (
    <div className='fixed px-3 bottom-0 left-0 z-10 space-x-2'>
      <audio ref={audio} className='hidden' src={radioSrc} controls />
      { !isPlaying
        ? <button className='play' onClick={handlePlay}>
        <PlayAudio />
      </button>
        : <button className='pause' onClick={handlePause}>
        <PauseAudio />
      </button>
    }
      <button className='live' onClick={handleLive}>
        <LiveAudio />
      </button>
      <input onChange={handleVolume} type='range' min={0} max={100} value={volume} className='range range-primary h-[10px]' />
    </div>
  )
}

export default Audio
