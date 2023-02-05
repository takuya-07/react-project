import { useState, useEffect } from "react";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

import { TextField } from "../components/mui/TextField";
import { Button } from "../components/mui/Button";

export default function Page02() {
  const [text, setText] = useState("");
  const textChange = (e: string) => {
    setText(e);
  };

  const handleClick = async () => {
    const docRef = await getDoc(doc(db, "users", "X0qHxQSNivuv0cqcsKlT"));
    console.log(docRef.data());
    /*const postRef = db.collection("users").doc("X0qHxQSNivuv0cqcsKlT");
    const postDoc = await postRef.get();
    if (postDoc.exists) {
      console.log(postDoc.id);
      console.log(postDoc.data());
      console.log(postDoc.get("title"));
    } else {
      console.log("No such document!");
    }*/
  };

  useEffect(() => {}, []);

  return (
    <div>
      <TextField
        onChange={(e) => {
          textChange(e.target.value);
        }}
      >
        {text}
      </TextField>
      <Button onClick={handleClick}>Button</Button>
    </div>
  );
}

//export default Page01;
