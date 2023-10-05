import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Material UI
import { DataGrid, ptBR } from '@mui/x-data-grid';
import { Avatar, Button, Dialog, Fab, CircularProgress } from '@mui/material';
import ButtonJoy from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { ModeEdit, DeleteForever } from '@mui/icons-material';

// Components Especiais
import FormCompany from './FormCompany';
import ModalPhoto from './ModalPhoto';

import { Company } from '../api/services/Company';

interface CompanyData {
  name: string,
  cnpj: string,
  photo: string
};

function List() {
  const navigate = useNavigate();
  const [companys, setCompanys] = useState([]);
  const [company, setCompany] = useState<CompanyData>({
    name: "",
    cnpj: "",
    photo: "",
  });
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Company.getAll().then((data: any) => {
      setCompanys(data);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      field: 'name',
      headerName: 'Nome',
      headerClassName: 'super-app-theme--header',
      flex: 1,
      minWidth: 250,
    },
    {
        field: "photo",
        headerName: "Foto",
        headerClassName: "super-app-theme--header",
        flex: 1,
        minWidth: 400,
        renderCell: (params: any) => {
          return (
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              onClick={() => {
                setIsOpen(true);
                setCompany(params.row);
              }}
            >
              <Avatar
                alt="Foto"
                src={params.value}
              />
            </Fab>
          );
        },
    },
    {
      field: 'cnpj',
      headerName: 'CNPJ',
      headerClassName: 'super-app-theme--header',
      flex: 1,
      minWidth: 100,
    },
    {
        field: "actions",
        headerName: "Ações",
        headerClassName: "super-app-theme--header",
        flex: 1,
        minWidth: 350,
        renderCell: (params: any) => {
          return (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <ButtonJoy
                aria-label="Editar"
                variant="outlined"
                color="primary"
                onClick={() => {
                  handleUpdateCompany(params.row);
                }}
              >
                <ModeEdit color="primary" />
              </ButtonJoy>
              <ButtonJoy
                aria-label="Excluir"
                variant="outlined"
                color="primary"
                onClick={() => {
                  handleDelete(params.row);
                }}
              >
                <DeleteForever color="error" />
              </ButtonJoy>
            </Box>
          )
        },
      },
  ];

  const rows = companys.map((company: any) => ({
    id: company.id,
    name: company.name,
    photo: company.photo,
    cnpj: company.cnpj
  }));

  function handleUpdateCompany(company: any) {
    navigate(`/editCompany/${company.id}`)
  }

  const modalPhotoClose = () => {
    setIsOpen(false);
  };

  const handleDelete = (company: any) => {
    Company.remove(company.id);
    window.location.reload()
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className='flex flex-col items-start'>
            <Button
                className='w-80 rounded-md mt-4 h-12 flex items-center justify-center font-medium leading-4 duration-500 cursor-pointer border-none bg-green hover:bg-greenDark hover:text-white'
                variant="contained"
                component={Link}
                to={`/newCompany`}
                >
                  NOVA EMPRESA
            </Button>
          <div className='mt-4 w-grid'>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection={true}
              sx={{
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: "#224957",
                  color: "#fff",
                },
              }}
              autoHeight
              pagination
              localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
              getRowClassName={(params: any) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? "even" : ""
              }
            />
          </div>
        </div>
      )}

      <Dialog
        open={isOpen}
        onClose={modalPhotoClose}
        className="modal-photo-dialog"
      >
        <ModalPhoto
          photo={company.photo}
          modalPhotoClose={modalPhotoClose}
        />

      </Dialog>
    </div>
  );
}

export default List;
