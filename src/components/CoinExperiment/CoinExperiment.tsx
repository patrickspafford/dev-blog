import React, { useState } from 'react'

const CoinExperiment = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center justify-evenly h-36 w-full shadow-md dark:bg-deepBlue dark:border dark:border-gray-500">
      <div className="h-full flex-1 bg-typescriptBlue text-center flex items-center justify-center m-4 p-2 border-white border text-white">
        Add Unfair Coin to Bag
      </div>
      <div className="h-full flex-1 bg-typescriptBlue text-center flex items-center justify-center m-4 p-2 border-white border text-white">
        Add Fair Coin to Bag
      </div>
      <div>Pick Coin from Bag</div>
      <div>Reset</div>
      <div className="flex-2" />
    </div>
  )
}

export default CoinExperiment
