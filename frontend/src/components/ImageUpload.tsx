import { ChangeEvent } from 'react';

import axios from 'axios';

//MUI Material
import { Grid, IconButton } from '@mui/material';
import { Delete, PhotoCamera } from '@mui/icons-material';

interface ImageUploadProps {
  handleImageChange: (file: string | '') => void;
}

function ImageUpload({ handleImageChange }: ImageUploadProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];
        console.log('Arquivo selecionado:', selectedFile);
        const cloud_name = 'deza2k1q4';
        const preset_key = 'images_preset';
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', preset_key);
        axios
          .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
          .then((response) => {
            console.log(response)
            handleImageChange(response.data.secure_url);
          })
          .catch((err) => console.log(err));
          
      } else {
        console.error('Nenhum arquivo de imagem selecionado.');
      }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <label htmlFor="image-button-input">
          <input
            id="image-button-input"
            accept="image/*"
            type="file"
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <IconButton
            color="primary"
            aria-label="Atualizar imagem"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <IconButton
          aria-label="Limpar imagem"
          component="span"
          onClick={() => {
            handleImageChange('');
          }}
          style={{ color: '#f44336' }}
        >
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ImageUpload;