import React, { useState, useEffect } from 'react'
import { useClassNames } from '@hooks'

const DURATION = 20
const INTERVAL_MSEC = 50
const INTERVAL_SEC = 0.05
const TOLERANCE = 0.1

const ThomsonLamp = () => {
  const [experimentState, setExperimentState] = useState({
    open: false,
    started: false,
  })
  const [timeLeft, setTimeLeft] = useState(DURATION)
  const [lastSwitched, setLastSwitched] = useState(DURATION)
  const [lampOn, setLampOn] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timer | undefined
    if (experimentState.open && experimentState.started && timeLeft > 0) {
      interval = setInterval(() => {
        const currentTimeLeft = timeLeft - INTERVAL_SEC
        setTimeLeft(currentTimeLeft)
      }, INTERVAL_MSEC)
    } else if (interval) clearInterval(interval)
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [experimentState, timeLeft])

  useEffect(() => {
    if (!experimentState.open) {
      setLampOn(true)
      setTimeLeft(DURATION)
      setLastSwitched(DURATION)
      if (experimentState.started)
        setExperimentState({
          ...experimentState,
          started: false,
        })
    }
  }, [experimentState])

  useEffect(() => {
    if (experimentState.started && timeLeft === 0) {
      setTimeLeft(DURATION)
      setLampOn(true)
      setLastSwitched(DURATION)
    }
  }, [experimentState.started])

  useEffect(() => {
    if (timeLeft < 0) {
      setTimeLeft(0)
    } else if (timeLeft === 0) {
      setExperimentState({ ...experimentState, started: false })
    }
  }, [timeLeft])

  useEffect(() => {
    if (experimentState.started) {
      const midpoint = (lastSwitched + 2 * TOLERANCE) / 2
      if (Math.abs(timeLeft - midpoint) <= TOLERANCE) {
        setLampOn(!lampOn)
        setLastSwitched(timeLeft)
      }
    }
  }, [timeLeft, lastSwitched, experimentState, lampOn])

  const classNames = useClassNames()

  return (
    <>
      <div
        className={classNames(
          'w-full h-64 flex flex-col justify-center items-center py-4 relative bg-yellow-50 shadow-lg border-gray-500 border-2 rounded-md',
          lampOn ? `bg-yellow-50` : `bg-gray-100`,
        )}
      >
        {experimentState.open ? (
          <>
            <span className="absolute top-0 left-0 text-gray-500 p-4 font-semibold">{`Thomson's Lamp`}</span>
            <span className="absolute top-0 right-0 text-gray-500 p-4">{`${Math.round(
              timeLeft,
            )} seconds`}</span>
            <div className="flex flex-col items-center justify-between h-32">
              <div
                className="h-12 w-12 blur-md rounded-full drop-shadow-lg"
                style={{
                  background: lampOn
                    ? `radial-gradient(#FFE4C4, yellow, white)`
                    : `radial-gradient(#FAEBD7, gray, white)`,
                  opacity: lampOn ? 0.5 : 0.2,
                }}
              />
              <button
                className="w-20 px-4 py-2 mx-4 shadow-next border-nextjs text-white hover:opacity-75 bg-gray-700 rounded-sm"
                onClick={() =>
                  setExperimentState({
                    ...experimentState,
                    started: !experimentState.started,
                  })
                }
              >
                {experimentState.started ? 'Pause' : 'Start'}
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() =>
              setExperimentState({
                ...experimentState,
                open: true,
              })
            }
            className="w-48 px-4 py-2 mx-4 shadow-next border-nextjs text-black hover:opacity-75 bg-gray-50"
          >
            Open Experiment
          </button>
        )}
      </div>
    </>
  )
}

export default ThomsonLamp
