// cool to use Chrome dev tools and callstack window


function takeShower() {
  return "Showering!"
}

function eatBreakfast() {
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood() {
  let items = ["Oatmeal", "Tofu Scramble", "Peanut Butter Smoothie"]
  return items[Math.floor(Math.random() * items.length)]
}


function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log("Ready To Go To Work!")
}


wakeUp()