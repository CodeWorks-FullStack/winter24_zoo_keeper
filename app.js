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
]

function feedTiger() {
  console.log('Button clicked');
  const foundTiger = animals.find(animal => animal.name == 'Tiger')
  // REVIEW maybe change the amount?
  foundTiger.hunger++
  console.log('here is the tiger hunger', foundTiger.hunger);
}

function feedLarry() {
  const foundLarry = animals.find(animal => animal.name == 'Larry')
  foundLarry.hunger++
  console.log('here is the found larry hunger', foundLarry.hunger);
}