const animals = [
  {
    name: 'Tiger',
    emoji: '🐅',
    mood: '😀',
    hunger: 50
  },
  {
    name: 'Larry',
    emoji: '🦆',
    mood: '😀',
    hunger: 50
  },
  {
    name: 'Oslo',
    emoji: '🦧',
    mood: '😀',
    hunger: 50
  },
]

function feedTiger() {
  const foundTiger = animals.find(animal => animal.name == 'Tiger')
  foundTiger.hunger++
}

function feedLarry() {
  const foundLarry = animals.find(animal => animal.name == 'Larry')
  foundLarry.hunger++
}

function feedAnimal(animalName) {
  console.log(`feeding the animal with the name of ${animalName}`);
  const foundAnimal = animals.find(animal => animal.name == animalName)
  foundAnimal.hunger++
  console.log(`My name is ${foundAnimal.name} and my hunger is ${foundAnimal.hunger}`);
}