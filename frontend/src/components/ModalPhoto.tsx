// Material UI
import { DialogContent, DialogTitle } from "@mui/material";

const ModalPhoto = (props: any) => {
  return (
    <div>
      <DialogTitle id="alert-dialog-title">{"Foto Empresa"}</DialogTitle>
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
