const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
  createStorageCharInventoryChoices()
}

function createStorageCharInventoryChoices() {
  localStorage.setItem("Str", 1),
  localStorage.setItem("Agi", 2),
  localStorage.setItem("Int", 3),
  localStorage.setItem("Inventory", JSON.stringify(["chemise"])),
  localStorage.setItem("Choices", JSON.stringify([]))
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  if (!option.itemReq && !option.statReq) {
    return true
  } else if (!option.itemReq && option.statReq && option.statReq >= option.statReqNumber) {
    return true
  } else if (option.itemReq && localStorage.Inventory.includes(option.itemReq) === true && !option.statReq) {
    return true
  } else if (option.itemReq && localStorage.Inventory.includes(option.itemReq) === true && option.statReq && option.statReq >= option.statReqNumber) {
    return true
  } else {
    return false
  }
    
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  // ajout d'item dans le localStorage
  const originInventory = JSON.parse(localStorage.getItem("Inventory"));
  const newitem = option.item;
  originInventory.push(newitem);
  localStorage.setItem("Inventory", JSON.stringify(originInventory));

  // ajout de choix dans le localStorage
  const originChoices = JSON.parse(localStorage.getItem("Choices"));
  const newChoice = option.choice;
  originChoices.push(newChoice);
  localStorage.setItem("Choices", JSON.stringify(originChoices));

  // ajout de stats dans le localStorage
  let statImprove = option.statToImprove;
  let statImproveNumber = option.statToImproveNumber;
  localStorage.setItem(statImprove, statImproveNumber);
  
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        // test ajout de ce choix dans le localStorage
        choice: 1.1,
        text: 'Take the goo',
        // test ajout de cet item dans l'inventaire
        item: "bolter",
        // test augmentation de cette stat dans le localStorage avec la valeur à augmenter ci-dessous
        // pour augmenter une stat il faudra choisir la statToImprove entre "", la réécrire ci-dessous à côté de localStorage. puis mettre la valeur
        statToImprove: "Str",
        statToImproveNumber: parseInt(localStorage.Str) + 2,
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        choice: 2.1,
        text: 'Trade the goo for a sword',
        // test item requis dans l'inventaire pour afficher cette option
        itemReq: "chemise",
        // test stat requise avec la valeur ci-dessous pour afficher cette option
        statReq: parseInt(localStorage.Str),
        statReqNumber: 1,
        item: "armure",
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()