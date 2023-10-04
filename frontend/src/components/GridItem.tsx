import PropTypes from 'prop-types';

// @mui/core
import Grid from '@mui/material/Grid';

function GridItem({ ...props }) {
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className="px-3">
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridItem;