const animals = [
  {
    name: 'tiger',
    emoji: '🐅',
    mood: '😀',
    hunger: 50
  },
  {
    name: 'larry',
    emoji: '🦆',
    mood: '😀',
    hunger: 50
  },
  {
    name: 'oslo',
    emoji: '🦧',
    mood: '😀',
    hunger: 50
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
  console.log(`My name is ${foundAnimal.name} and my hunger is ${foundAnimal.hunger}`);
}