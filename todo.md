# Bug Fixes

## Resource Page

1. [Reproducing the Error] Resources => API => Choose Gaming => Pagination Next => Search for Animals.
2. Implement Copy button in this format : [API] Coffee: https://github.com/

## Notes Page

1. Persist Note while refreshing the page
2. Clear the note while deleting a note.
3. Implement Case insesitive Search

# Refactors

1. Change the app layout to have a common navbar and the drawer.
2. Display proper Navigation list in mobile screens. (Add the list item in the category sidebar from data/components/navData.tsx)

## New Features

1. Add the music player modal
2. Create Music Player UI (Shrink down this UI i previously created https://github.com/priyanshu-bharti/chillypopper-react)
3. Add a popmodoro Modal
4. Create a pomodoro ui
5. Add an option to play a ticking sound while pomodoro is running (Tomighty clone)

<!-- ······ FlashCard Related ······ -->

deck {
id: uuid
modValue: number
title: string
size: number
cards: [
id: uuid
question:string
answer:string
status: enum (LEARNING, REVIEW, MASTERED)
unseen: boolean (Default: true)
]
}

Default Queue : waiting list
Card is unknown: - Move to learning list
Card is known at: - 1st Appearance : Move to master list - 5th Appearance : Move to review list - 10 + nth Appearance : Move to master list
[while moving the cards, remove them from the queue and add them to the mentioned queues]
[If the waiting queue is empty, all cards are mastered.]

```js
let waiting = [...]
let l = [1, 2, 3, 4, 5, 6];
let r = [1, 2, 3];
let m = [1];

let lIndex = 0;
let rIndex = 0;
let mIndex = 0;

for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    console.log(l[lIndex]);
    lIndex++;
  } else if (i % 3 === 1 && rIndex < r.length) {
    console.log(r[rIndex]);
    rIndex++;
  } else if (mIndex < m.length) {
    console.log(m[mIndex]);
    mIndex++;
  } else {
    console.log(l[lIndex]);
    lIndex++;
  }
}
```
