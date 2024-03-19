'use client'
import { radioSrc } from '@/constants'
import { useAudio } from '@/hooks/useAudio'
import { PlayAudio, PauseAudio, LiveAudio } from './Icons'

const Audio = () => {
  const {
    audio,
    handleLive,
    handlePlay,
    handlePause,
    handleVolume,
    volume,
    isPlaying
  } = useAudio()

  return (
    <div className='fixed bottom-0 left-0 w-full h-14 bg-base-100/55 py-[10px] px-[30px] z-10 justify-center items-center backdrop-blur-lg'>
      <audio ref={audio} className='hidden' src={radioSrc} controls />
      <ul className='flex justify-center items-center gap-2'>
        {!isPlaying
          ? (
          <button className='play' onClick={handlePlay}>
            <PlayAudio />
          </button>
            )
          : (
          <button className='pause' onClick={handlePause}>
            <PauseAudio />
          </button>
            )}
        <button className='live' onClick={handleLive}>
          <LiveAudio />
        </button>
      </ul>
      <div className='flex gap-2 justify-center items-center w-full text-xs px-2'>
        <span>-</span>
        <input
          onChange={handleVolume}
          type='range'
          min={0}
          max={100}
          value={volume}
          className='range range-primary h-[10px] w-1/2 sm:w-1/3 lg:w-1/5'
        />
        <span>+</span>
      </div>
    </div>
  )
}

export default Audio
