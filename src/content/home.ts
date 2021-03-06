export default {
  typewriterChain: [
    {
      line: 'Hello and welcome to my dev blog!',
      delayAfter: 1000,
    },
    {
      line: `I'm a professional software developer who posts things here on occasion.`,
      delayAfter: 1000,
    },
    {
      line: `...And by the way, this mountain is a photo I took of Mt. Rainier in July 2020.`,
      delayAfter: 5000,
    },
  ],
  projectSpotlightDesc: [
    `Below is an example of how to use one of my NPM packages.`,
    `We will query Firebase's Firestore using this React
      hook, making an already great Firebase SDK even easier to use in
      your React apps. The hook also automatically subscribes to changes to the frogs collection.`,
    `Here we have the result of our Firestore query. It is worth nothing that (for simplicity's sake) I took out the styles and the reordering feature.`,
    `The blog posts you find here may contain code snippets just like this,
      complete with syntax highlighting and comments to explain the tricky
      things.`,
  ],
  codeSnippet: `
import React from "react"
import useFirestoreListener from "react-firestore-listener"
import { getApp, initializeApp } from "firebase/app"

const config = {
  // insert your Firebase config here
}

/*
We need to make sure that Firebase is initialized before we can listen to documents.
*/
if (!getApp()) {
  initializeApp(config)
}

interface Frog {
  name: string
}

const App = () => {
  const frogs = useFirestoreListener<Frog>({ collection: "frogs" })
  return (
    <div>
      <div>List of Frogs</div>
      <ul>
        {frogs.map((frog) => {
          return <li>{frog.name}</li>
        })}
      </ul>
    </div>
  )
}
`,
}
