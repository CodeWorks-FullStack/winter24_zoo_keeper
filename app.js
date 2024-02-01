let money = 0

const animals = [
  {
    name: 'tiger',
    emoji: '🐅',
    mood: '😀',
    hunger: 70
  },
  {
    name: 'larry',
    emoji: '🦆',
    mood: '😀',
    hunger: 30
  },
  {
    name: 'oslo',
    emoji: '🦧',
    mood: '😐',
    hunger: 14
  },
]

// NOTE refactored into feedAnimal
function feedTiger() {
  const foundTiger = animals.find(animal => animal.name == 'tiger')
  foundTiger.hunger++
}
// NOTE refactored into feedAnimal
function feedLarry() {
  const foundLarry = animals.find(animal => animal.name == 'larry')
  foundLarry.hunger++
}

function feedAnimal(animalName) {
  const foundAnimal = animals.find(animal => animal.name == animalName)
  foundAnimal.hunger++

  // NOTE CLAMP value
  if (foundAnimal.hunger > 100) {
    foundAnimal.hunger = 100
  }

  console.log(`My name is ${foundAnimal.name} and my hunger is ${foundAnimal.hunger}`);
  drawAllAnimalsStats()
}

// NOTE refactored into drawAllAnimalsStats
function drawTigerStats() {
  const tiger = animals.find(animal => animal.name == 'tiger')

  const tigerElement = document.getElementById('tiger')
  console.log(tigerElement);
  // NOTE looks through the tiger element (col-4) for an element with the class of stats
  const statsElement = tigerElement.querySelector('.stats')

  // NOTE @ts-ignore will ignore a red error in your js 
  // @ts-ignore
  statsElement.innerText = `${tiger.name} | ${tiger.mood} | Hunger: ${tiger.hunger}%`
}
// NOTE refactored into drawAllAnimalsStats
function drawLarryStats() {
  const larry = animals.find(animal => animal.name == 'larry')

  const larryElement = document.getElementById('larry')

  const statsElement = larryElement.querySelector('.stats')

  console.log(statsElement);

  // @ts-ignore
  statsElement.innerText = `${larry.name} | ${larry.mood} | Hunger: ${larry.hunger}%`
}

function drawAllAnimalsStats() {
  animals.forEach(animal => {

    // NOTE this only works because my HTML has ids that match my animal names
    const animalElement = document.getElementById(animal.name)
    // console.log(animalElement);

    const statsElement = animalElement.querySelector('.stats')
    // console.log(statsElement);

    // @ts-ignore
    statsElement.innerText = `${animal.name} | ${animal.mood} | Hunger: ${animal.hunger}%`
  })
}

function drawMoney() {
  const moneyElement = document.getElementById('currentMoney')
  moneyElement.innerText = money.toString()
}

function makeAnimalsHungry() {
  animals.forEach(animal => {
    animal.hunger--

    // NOTE clamp
    if (animal.hunger <= 0) {
      animal.hunger = 0
      animal.mood = '😵'
    }
    else if (animal.hunger < 25) {
      animal.mood = '😵‍💫'
    }
    else if (animal.hunger < 50) {
      animal.mood = '😐'
    }
    else if (animal.hunger < 75) {
      animal.mood = '🙂'
    }
    else {
      animal.mood = '😀'
    }

  })
  drawAllAnimalsStats()
}

function payZooKeeper() {
  let paycheck = 0
  animals.forEach(animal => {
    switch (animal.mood) {
      case '😵':
        paycheck -= 25
        break;

      case '😵‍💫':
        paycheck += 5
        break;

      case '😐':
        paycheck += 15
        break;

      case '🙂':
        paycheck += 25
        break;

      case '😀':
        paycheck += 50
        break;

      default:
        paycheck += 0
        console.log('Something weird happened');
        break;
    }
  })

  money += paycheck

  Swal.fire({
    position: "bottom",
    icon: "success",
    title: `Your paycheck was $${paycheck}`,
    showConfirmButton: false,
    timer: 1500
  });


  drawMoney()
}

drawAllAnimalsStats()
drawMoney()
// NOTE first argument passed to setInterval is the function you want called, second argument is how often you want that function called in milliseconds
// setInterval(() => { console.log('interval running') }, 3000)

// NOTE if you pass a named function to setInterval, you do not invoke it. setInterval will invoke it for you (callback function)
setInterval(makeAnimalsHungry, 1000)

setInterval(payZooKeeper, 5000)

setTimeout(() => { console.log('this will run after 3 seconds') }, 3000)

// @ts-ignore
// Swal.fire("SweetAlert2 is working!");