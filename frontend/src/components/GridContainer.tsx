import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import Grid, { GridProps } from '@mui/material/Grid';

interface GridContainerProps extends GridProps {
    children: ReactNode;
}

function GridContainer(props: GridContainerProps) {
  const { children, ...rest } = props;
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridContainer;