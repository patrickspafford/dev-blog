export default {
  typewriterChain: [
    {
      line: 'Hello (and Welcome) World!',
      delayAfter: 1000,
    },
    {
      line: `If it wasn't already obvious, my name is Patrick Spafford, and I enjoy creating things with code. :)`,
      delayAfter: 1000,
    },
    {
      line: `...In case you were curious, this isn't just some stock image. I took this photo at Mt. Rainier National Park in July of 2020.`,
      delayAfter: 5000,
    },
  ],
  projectSpotlightDesc: [
    `Below is an example of how to use my first NPM package!`,
    `We will query Firebase's Firestore NoSQL Document DB using this React
      hook.`,
    `This hook makes an already great Firebase SDK even easier to use in
      your React applications (Web or Native)!`,
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
  
  const FirestoreFrogs = () => {
    const frogs = useFirestoreListener({ collection: 'frogs' })
  
    return (
      <div>
        <h1>List of Frogs</h1>
        <br />
        <ul>
          {frogs.map((frog) => {
            return <li>{frog.name} - {frog.weight} oz</li>
          })}
        </ul>
      </div>
    )
  }     
          `,
}
