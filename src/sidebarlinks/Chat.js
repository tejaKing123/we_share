import React, { useRef, useState } from 'react';
import './Chat.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   // your config
//   apiKey: "AIzaSyDyca1JDA11Ll-D_E6NUd3efw3a6xv-LPo",
//     authDomain: "hope-react.firebaseapp.com",
//     databaseURL: "https://hope-react-default-rtdb.firebaseio.com",
//     projectId: "hope-react",
//     storageBucket: "hope-react.appspot.com",
//     messagingSenderId: "669660929036",
//     appId: "1:669660929036:web:a8325e95392f97ba586229",
//     measurementId: "G-0SRFG83EVD"
// })

const auth = firebase.auth();
const firestore = firebase.firestore();


function Chat() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">            
      {/* <header className="head">
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header> */}

      <section className="section">
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="sign__in">
        <p>Sigin to the chat room by 👇clicking text below </p>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      {/* <p>Do not violate the community guidelines or you will be banned for life!</p> */}
    </div>
  )

}

function SignOut() {
  return auth.currentUser && (
    <div className="sign__out"><button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button></div>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <div className="form__feild">
        <form  onSubmit={sendMessage} >
          <input  value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
          <button type="submit" disabled={!formValue}>🚀</button>
        </form>
    </div>
    
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default Chat;