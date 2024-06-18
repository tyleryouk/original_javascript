'use client';
import PropTypes from 'prop-types';

import { lazy } from 'react';

// material-ui
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

// project import
import Loader from 'components/Loader';
import ComponentLayoutPage from './ComponentLayout';
import { useGetMenuMaster } from 'api/menu';

const Header = lazy(() => import('./Header'));

export default function ComponentLayout({ children }) {
  const { menuMasterLoading } = useGetMenuMaster();
  if (menuMasterLoading) return <Loader />;

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
      <Header />
      <Toolbar sx={{ my: 2 }} />
      <ComponentLayoutPage>{children}</ComponentLayoutPage>
    </Container>
  );
}

ComponentLayout.propTypes = { children: PropTypes.node };
