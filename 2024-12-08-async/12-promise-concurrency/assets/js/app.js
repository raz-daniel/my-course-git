"use strict";

(async () => {


    const getNumberOfCandles = (dayNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (dayNumber < 1) return reject('dayNumber must be greater than 0');
                if (dayNumber > 8) return reject('no Isru Chag in Hanukah');
                resolve(dayNumber + 1)
            }, 10)
        })
    }

try {
  
    //  let sum=0;
    //  for (const dayNumber of [1,2,3,4,5,6,7,8]) {
    //     const result= await getNumberOfCandles(dayNumber)
    //     sum +=result
    //  }
    //  console.log(`number of candles is: `, sum)
    const promises = [1,2,3,4,5,6,7,8].map(dayNumber => getNumberOfCandles(dayNumber))
    const results = await Promise.all(promises)
    const candlesInHanuka = results.reduce((sum,candle) => sum + candle,0)
    console.log(candlesInHanuka)
} catch (error) {
    console.log(error)    
}

    
})()