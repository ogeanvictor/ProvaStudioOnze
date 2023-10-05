import React, { ChangeEvent } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete, PhotoCamera } from '@mui/icons-material';

interface ImageUploadProps {
  handleImageChange: (file: File | null) => void;
}

function ImageUpload({ handleImageChange }: ImageUploadProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];
        console.log('Arquivo selecionado:', selectedFile);
        handleImageChange(selectedFile);
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
            handleImageChange(null);
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