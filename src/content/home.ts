export default {
  typewriterChain: [
    {
      line: 'Hello (and Welcome) World!',
      delayAfter: 1000,
    },
    {
      line: `If it wasn't already obvious, my name is Patrick Spafford, and I enjoy creating things with code.`,
      delayAfter: 1000,
    },
    {
      line: `...In case you were curious, this isn't just some stock image. I took this photo at Mt. Rainier National Park in July 2020.`,
      delayAfter: 5000,
    },
  ],
  projectSpotlightDesc: [
    `Below is an example of how to use my first NPM package!`,
    `We will query Firebase's Firestore using this React
      hook, making an already great Firebase SDK even easier to use in
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
