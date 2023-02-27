tdd-vegetable-garden
Final assignment: The TDD vegetable garden
In this assignment, we are going to write code for a vegetable garden. But we're going to do that the "Test-Driven" way. So we're going to repeat the following cycle while writing our code.

write one or more tests for a piece of functionality.
run the new tests and check that they fail (red).
write code to pass all tests (green).
improve the code so that it looks neat (refactor).
commit your code.
back to step 1 with the next piece of functionality.
Terminology and vegetable formulas
But first back to the plants. We grow vegetables and fruit in a garden. We are going to calculate how much yield the various fruits and vegetables have for the garden.

We will also take environmental factors such as sun, wind, and temperature into account. These environmental factors influence how many kilograms of fruit and vegetables grow on the plants. Finally, we will calculate how much profit we can make with our vegetable garden.

First, let's explain some terms and definitions:

"crop" is a collection of plants of the same species, so for example a field of corn.
"costs" is the cost of sowing one plant.
"yield" is the yield of one plant or one crop (in kilograms).
"sale price" is the selling price of a type of fruit or vegetable per kilo.
"revenue" is the turnover or income of one kilo of fruit or vegetables.
"profits" is profit, so that is revenue - costs.
"factor" in this context is an environmental factor that influences the yield.
Danger

Be careful not to use the word "yield" as a variable, that is a reserved keyword in JavaScript

To keep the calculations simple at first, we make the following assumptions: - fruit and vegetables are always sold immediately (you do not have to take into account spoilage or insufficient demand) - there are no labor costs - we do not use manure - we don't have to pay for the land
We have a number of formulas for the calculations. The formulas are relatively simple but taken together the code can get quite complex.

Cost
The costs of sowing a plant are fixed per plant.

Example: Sowing 1 maize plant costs 1 euro.

If you have a crop of 230 maize plants, the costs for that crop are therefore 230 euros.

Revenue
Each plant has a "sale price". That is how many euros you earn with one kilo of fruit or vegetables from that plant.

If apples have a sale price of 2 euros and we sell 5 kilos of apples, then the revenue is 10 euros.

Yield from one plant
Each plant has a standard yield in kilograms. If no environmental factors play a role, then that is the yield.

Each plant can have zero, one, or more environmental factors. Every environmental factor has a value, that value is the percentage influence on the yield.

We can take an avocado and the sun as an environmental factor as an example. If an avocado gets a certain amount of sun, the yield will be different:

lots of sun: +50% yield
medium sun: 100% yield
little sun: -20% yield Let's say an avocado plant has a standard yield of 3 kilos. In addition, let's say that there is a lot of sun. Then that plant will yield 3 kg\* 150% = 4.5 kg of avocados.
But suppose there is another factor: wind.

lots of wind: -60% yield
medium wind: -30% yield
little wind: 100% yield And let's say there's not only a lot of sun now, but also a lot of wind. Then we can calculate the yield like this: 3kg _ 150% _ 40% = 1.8 kg.
If there is a factor that does not influence a certain plant species, you do not have to take that into account. Example:

The growth of avocado plants is not affected by the soil type. If the avocado plant grows on clay, that factor has no influence on how many kilograms of avocados an avocado plant produces. If other plants grow in the vegetable garden that are affected by this, you must of course take this into account.

General tips
Write all your code (and your comments) in English.

Go step by step and run your tests all the time, using the watch command. Take a look at the TDD cycle at the top. Remember to commit after every cycle, or even if your tests are green.

Create a new repository for this assignment.

To give you a start, we'll give you some tests. You're not allowed to adjust these.

const { getYieldForPlant, getYieldForCrop, getTotalYield } = require("./farm");

describe("getYieldForPlant", () => {
const corn = {
name: "corn",
yield: 30,
};

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });

});

describe("getYieldForCrop", () => {
test("Get yield for crop, simple", () => {
const corn = {
name: "corn",
yield: 3,
};
const input = {
crop: corn,
numCrops: 10,
};
expect(getYieldForCrop(input)).toBe(30);
});
});

describe("getTotalYield", () => {
test("Calculate total yield with multiple crops", () => {
const corn = {
name: "corn",
yield: 3,
};
const pumpkin = {
name: "pumpkin",
yield: 4,
};
const crops = [
{ crop: corn, numCrops: 5 },
{ crop: pumpkin, numCrops: 2 },
];
expect(getTotalYield({ crops })).toBe(23);
});

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });

});
Get the tests running with jest first. So write the code needed to make the tests pass.

Then add functionality step by step. Use the TDD cycle at the top of this assignment. Add the functionality in the following steps:

1.calculate the cost for a crop: getCostsForCrop. 2. calculate the revenue for a crop (without environmental factors): getRevenueForCrop. 3. calculate the profit for a crop (without environmental factors): getProfitForCrop. 4. calculate the profit for multiple crops (without environmental factors): getTotalProfit.

Implement the following functionalities by modifying your previously written functions. So don't write new functions. Check within the function whether there are relevant environmental factors that have been passed to the function.

Include environmental factors in calculating the yield (in kilograms) of a plant in this function: getYieldForPlant, use the following data structures:
const corn = {
name: "corn",
yield: 30,
factor: {
sun: {
low: -50,
medium: 0,
high: 50,
},
},
};

const environmentFactors = {
sun: "low",
};
do this calculation with multiple environmental factors.
Be sure to ignore irrelevant environmental factors in your calculations.
calculate the yield in kilograms of a crop getYieldForCrop, include environmental factors in your calculation.
calculate the total yield of multiple crops getTotalYield, include environmental factors in your calculation.
calculate the income of a crop getRevenueForCrop, include environmental factors in your calculation.
calculate the profit of a crop getProfitForCrop, include environmental factors in your calculation.
calculate the profit for multiple crops getTotalProfit, include environmental factors in your calculation.
So as an example for the first step "calculate the cost for a crop":

write one or more tests for "calculate the costs for a crop".
run the new tests and check that they fail (red).
write code to pass all tests (including this new one) (green).
improve the code so that it looks neat (refactor).
commit your code.
back to step 1 with the next piece of functionality.
Do not forget to include the package.json in your final submission.
