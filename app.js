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

function feedTiger() {
  const foundTiger = animals.find(animal => animal.name == 'tiger')
  foundTiger.hunger++
}

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
  drawTigerStats()
}

function drawTigerStats() {
  const tiger = animals.find(animal => animal.name == 'tiger')

  const tigerElement = document.getElementById('tiger')
  console.log(tigerElement);
  // NOTE looks through the tiger element (col-4) for an element with the class of stats
  const statsElement = tigerElement.querySelector('.stats')

  // @ts-ignore
  statsElement.innerText = `${tiger.name} | ${tiger.mood} | Hunger: ${tiger.hunger}%`
}

function drawLarryStats() {
  const larry = animals.find(animal => animal.name == 'larry')

  const larryElement = document.getElementById('larry')

  const statsElement = larryElement.querySelector('.stats')

  console.log(statsElement);

  // @ts-ignore
  statsElement.innerText = `${larry.name} | ${larry.mood} | Hunger: ${larry.hunger}%`
}

function drawAnimalStats() {
  animals.forEach(animal => {
    const animalElement = document.getElementById(animal.name)
    console.log(animalElement);

    const statsElement = animalElement.querySelector('.stats')
    console.log(statsElement);

    // @ts-ignore
    statsElement.innerText = `${animal.name} | ${animal.mood} | Hunger: ${animal.hunger}%`
  })
}

drawTigerStats()