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
      hook, making an already great Firebase SDK (namespaced) even easier to use in
      your React apps.`,
    `Here we have the result of our Firestore query. It is worth nothing that (for simplicity's sake) I took out the styles and the reordering feature.`,
    `The blog posts you find here may contain code snippets just like this,
      complete with syntax highlighting and comments to explain the tricky
      things.`,
  ],
  codeSnippet: `
  import React from "react"
  import useFirestoreListener from "react-firestore-listener"
  /*
  We could also do the import like this, for example:
  import useFirestore from "react-firestore-listener"
  */
  const config = {
    // insert your Firebase config here.
  }
  // We need to make sure that Firebase (namespaced) is initialized before we can listen to documents.
  const initFirebase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }

  initFirebase()
  
  const FirestoreFrogs = () => {
    const frogs = useFirestoreListener({
        collection: 'frogs'
      })
  
    return (
      <div>
        <span>List of Frogs</span>
        <hr />
        <ul>
          {frogs.map((frog) => {
            return (
              <li key={frog.docId}>
                <span>{frog.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }     
          `,
}
