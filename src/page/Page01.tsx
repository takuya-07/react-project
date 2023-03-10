import { useState, useEffect } from "react";
import axios from "axios";

import { TextField } from "../components/mui/TextField";
import ApiIcon from "@mui/icons-material/Api";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const baseURL = "http://localhost:3000/";

export default function Page01() {
  const [text, setText] = useState("");
  const textChange = (e: string) => {
    setText(e);
  };

  const [apiValue, setApiValue] = useState("");
  useEffect(() => {
    (async () => {
      await axios
        .get(baseURL)
        .then((response) => {
          console.log(response.data);
          setApiValue(response.data.id);
        })
        .catch(() => {
          setApiValue("APIつながってないです");
        });
    })();
  }, []);

  return (
    <div>
      <TextField
        onChange={(e) => {
          textChange(e.target.value);
        }}
      >
        {text}
      </TextField>
      <Tooltip title={apiValue}>
        <IconButton>
          <ApiIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

//export default Page01;
