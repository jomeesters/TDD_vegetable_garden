// no environment factors means the yield stays the same, otherwise it's yield * environment factor
const getYieldForPlant = (plant, environmentFactors) => {
  let multiplier = 1;
  if (environmentFactors) {
      for (eFactor in environmentFactors) {

          if (plant.factor[eFactor]) {
              environmentPercentage = plant.factor[eFactor][environmentFactors[eFactor]];
              console.log(environmentPercentage)
              modifier = 1 + environmentPercentage / 100;
              multiplier *= modifier;
          }
      }
  }
  return plant.yield * multiplier;
}

const getYieldForCrop = (input, environmentFactors) => {
  return getYieldForPlant(input.crop, environmentFactors) * input.numCrops;
}

const getTotalYield = (harvest, environmentFactors) => {
  return harvest.crops.reduce((currentYield, crop) => {
      return currentYield + getYieldForCrop(crop, environmentFactors)
  }, 0)
}

const getCostsForCrop = input => {
  return input.crop.costs * input.numCrops;
}

const getRevenueForCrop = (input, environmentFactors) => {
  return input.crop.sell_price * getYieldForCrop(input, environmentFactors);
}

const getProfitForCrop = (input, environmentFactors) => {
  return getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input)
}

const getTotalProfit = (harvest, environmentFactors) => {
  return harvest.crops.reduce((currentProfit, crop) => {
      return currentProfit + getProfitForCrop(crop, environmentFactors)
  }, 0)
}

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
}