import { useState, useEffect } from "react";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { PhotoCamera } from "@mui/icons-material";

import {Img} from 'react-image'

import GridContainer from "../components/GridContainer";
import GridItem from "../components/GridItem";
import ImageUpload from "../components/ImageUpload";

import { Company } from "../api/services/Company";

interface CompanyData {
  name: string,
  cnpj: string,
  photo: string
};

// Components
const FormCompany = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)
  const [company, setCompany] = useState<CompanyData>({
    name: '',
    cnpj: '',
    photo: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCompany(props.company);
  }, []);

  useEffect(() => {
    if (id) {
      setLoading(true);
      Company.get(id).then((data: any) => {
        setCompany(data);
        setLoading(false);
      });
    };
  }, [id]);

  function handlerCompanyProperty(property: any, value: any) {
    setCompany({ ...company, [property]: value });
  }

  const handleSubmmit = (e: any) => {
    e.preventDefault();

    const payload = {
      ...company,
      cnpj: company.cnpj?.replace(/[^0-9]/g, '')
    }

    if (id) {
      Company.put(payload);
    } else {
      Company.post(payload);
    }

    navigate('/company');

  };

  function setPhoto(image: any) {
    if (image) {
      let reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        handlerCompanyProperty("photo", reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      handlerCompanyProperty("photo", null);
    }
  }

  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        {"Criar nova Empresa"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmmit}>
          <DialogContentText id="alert-dialog-description">
            <GridContainer >
              <GridItem xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                id="name"
                fullWidth
                placeholder="Nome da Empresa"
                onChange={(e) => handlerCompanyProperty('name', e.target.value)}
                inputProps={{ style: { color: 'white'}}}
                style={{ backgroundColor: '#224957', border: 'none', cursor: 'pointer', boxShadow: 'initial', borderRadius: 6, marginBottom: '32px' }}
                required
                value={company?.name}
                variant="outlined"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                id="cnpj"
                fullWidth
                placeholder="CNPJ"
                onChange={(e) => handlerCompanyProperty('cnpj', e.target.value)}
                required
                inputProps={{ style: { color: 'white'}}}
                style={{ backgroundColor: '#224957', border: 'none', cursor: 'pointer', boxShadow: 'initial', borderRadius: 6, marginBottom: '32px' }}
                value={company?.cnpj}
                variant="outlined"
              />
            </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
              {/* <label htmlFor="image-button-input">
                <input
                  id="image-button-input"
                  accept="image/*"
                  type="file"
                  //capture="camera"
                  onChange={(e) => handlerCompanyProperty('photo', e.target.value)}
                  style={{ display: 'none' }}
                />
                  <Typography
                    align="left"
                    variant="h6"
                    style={{ marginTop: 20 }}
                  >
                    Foto da Empresa
                  </Typography>
                  <IconButton
                    color="primary"
                    aria-label="Atualizar imagem"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
              </label> */}
                <div>
                  <Typography
                    align="left"
                    variant="h6"
                    style={{ marginTop: 20 }}
                  >
                    Foto da Bateria
                  </Typography>
                </div>
              </GridItem>
              <GridItem xs={6} sm={4} md={3} lg={3} xl={2}>
                <Img
                  style={{ width: "180px", height: "150px" }}
                  src={
                    company?.photo
                  }
                />
                <ImageUpload handleImageChange={setPhoto} />
              </GridItem>
              <GridItem xs={6} sm={4} md={3} lg={3} xl={2}>
                {/* <Image
                  style={{ width: "180px", height: "150px" }}
                  src={
                    company.photo || require("assets/img/company2.png").default
                  }
                />
                <ImageUpload id="photo" handleImageChange={setPhoto} /> */}
              </GridItem>
            </GridContainer>
          </DialogContentText>
          <DialogActions
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0 20px 20px 20px",
            }}
          >
            <Button 
              type='submit' 
              className='w-80 rounded-md h-12 flex items-center justify-center font-medium leading-4 duration-500 cursor-pointer border-none bg-green hover:bg-greenDark hover:text-white'
            >
              SALVAR
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </div>
  );
};

export default FormCompany;
