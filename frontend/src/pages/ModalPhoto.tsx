import { useState, useEffect } from "react";

// Material UI
import { DialogContent, DialogTitle } from "@mui/material";

// Components

const ModalPhoto = (props: any) => {
  const [, setBattery] = useState([]);

  useEffect(() => {
    setBattery(props.battery);
  }, []);

  return (
    <div>
      <DialogTitle id="alert-dialog-title">{"Foto Bateria"}</DialogTitle>
      <DialogContent>
        <img
          src={props.photo}
          alt="Foto"
          style={{
            width: "100%",
          }}
        />
      </DialogContent>
    </div>
  );
};

export default ModalPhoto;
