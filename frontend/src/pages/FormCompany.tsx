import React, { useState, useEffect } from "react";

// Material UI
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

// Components
const FormBaterry = (props: any) => {
    return (
        <p>Teste</p>
    )
//   const [battery, setBattery] = useState([]);
//   const [, setOpenForm] = useState(false);

//   useEffect(() => {
//     setBattery(props.battery);
//   }, []);

//   function handlerDeliveryProperty(property, value) {
//     setBattery({ ...battery, [property]: value });
//   }

//   const handleSubmmit = (e) => {
//     e.preventDefault();
//     BatteryLab.put(battery).then(() => {
//       setOpenForm(false);
//     });
//     console.log(battery);
//   };

//   function setPhoto(image) {
//     console.log(image);
//     if (image) {
//       let reader = new FileReader();
//       reader.onloadend = () => {
//         handlerDeliveryProperty("photo", reader.result);
//       };
//       reader.readAsDataURL(image);
//     } else {
//       handlerDeliveryProperty("photo", null);
//     }
//   }

//   return (
//     <div>
//       <DialogTitle id="alert-dialog-title">
//         {"Cadastra Nova Entrega"}
//       </DialogTitle>
//       <DialogContent>
//         <form onSubmit={handleSubmmit}>
//           <DialogContentText id="alert-dialog-description">
//             <GridContainer className={classes.lineOne}>
//               <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
//                 <TextField
//                   type="date"
//                   id="lastDateTrade"
//                   name="lastDateTrade"
//                   style={{ marginBottom: 20, marginTop: 20 }}
//                   fullWidth
//                   label="Data Última Troca"
//                   required
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   value={battery.lastDateTrade}
//                   onChange={(e) =>
//                     handlerDeliveryProperty("lastDateTrade", e.target.value)
//                   }
//                 />
//               </GridItem>
//               <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
//                 <TextField
//                   id="brand"
//                   fullWidth
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   label="Marca da Bateria"
//                   style={{ marginBottom: 20, marginTop: 20 }}
//                   required
//                   select
//                   SelectProps={{
//                     native: true,
//                   }}
//                   variant="outlined"
//                   value={battery.brand}
//                   onChange={(e) =>
//                     handlerDeliveryProperty("brand", e.target.value)
//                   }
//                 >
//                   <option value="">Selecione a Marca</option>
//                   <option value="0">Intelbras</option>
//                   <option value="1">Moura</option>
//                 </TextField>
//               </GridItem>
//               <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
//                 <FormControl>
//                   <FormLabel
//                     component="legend"
//                     style={{ marginTop: 20, marginBottom: -5 }}
//                   >
//                     Rota?
//                   </FormLabel>
//                   <FormGroup>
//                     <FormControlLabel
//                       control={
//                         <Switch
//                           checked={battery.route}
//                           onChange={(e) =>
//                             handlerDeliveryProperty("route", e.target.checked)
//                           }
//                           name="route"
//                         />
//                       }
//                       label="Sim"
//                     />
//                   </FormGroup>
//                 </FormControl>
//               </GridItem>
//             </GridContainer>
//             <GridContainer className={classes.lineThree}>
//               <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <TextField
//                   id="observation"
//                   fullWidth
//                   label="Descrição"
//                   required
//                   variant="outlined"
//                   value={battery.observation}
//                   onChange={(e) =>
//                     handlerDeliveryProperty("observation", e.target.value)
//                   }
//                   multiline
//                   rows={5}
//                   style={{ marginTop: 20 }}
//                 />
//               </GridItem>
//             </GridContainer>
//             <GridContainer className={classes.lineThree}>
//               <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <div className={classes.infoSection}>
//                   <Typography
//                     align="left"
//                     variant="h6"
//                     style={{ marginTop: 20 }}
//                   >
//                     Foto da Bateria
//                   </Typography>
//                 </div>
//               </GridItem>
//               <GridItem xs={6} sm={4} md={3} lg={3} xl={2}>
//                 <Image
//                   style={{ width: "180px", height: "150px" }}
//                   src={
//                     battery.photo || require("assets/img/battery2.png").default
//                   }
//                 />
//                 <ImageUpload id="photo" handleImageChange={setPhoto} />
//               </GridItem>
//             </GridContainer>
//           </DialogContentText>
//           <DialogActions
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               padding: "0 20px 20px 20px",
//             }}
//           >
//             <Button color="success" round autoFocus type="submit">
//               Cadastrar
//             </Button>
//           </DialogActions>
//         </form>
//       </DialogContent>
//     </div>
  //);
};

export default FormBaterry;
