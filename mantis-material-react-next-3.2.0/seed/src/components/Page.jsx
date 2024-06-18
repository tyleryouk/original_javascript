import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// next
import Head from 'next/head';

// material-ui
import Box from '@mui/material/Box';

function Page({ children, title = '', meta, ...other }, ref) {
  return (
    <>
      <Head>
        <title>{`${title} | Mantis React Admin`}</title>
        {meta}
      </Head>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  );
}

export default forwardRef(Page);

Page.propTypes = { children: PropTypes.node, title: PropTypes.string, meta: PropTypes.node, other: PropTypes.any };
