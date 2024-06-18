'use client';
import PropTypes from 'prop-types';

import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// project-import
import { ThemeMode } from 'config';

// header style
const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

function MainCard(
  {
    border = true,
    boxShadow,
    children,
    subheader,
    content = true,
    contentSX = {},
    darkTitle,
    divider = true,
    secondary,
    shadow,
    sx = {},
    title,
    modal = false,
    ...others
  },
  ref
) {
  const theme = useTheme();
  boxShadow = theme.palette.mode === ThemeMode.DARK ? boxShadow || true : boxShadow;

  return (
    <Card
      sx={{
        position: 'relative',
        border: border ? '1px solid' : 'none',
        borderRadius: 1,
        borderColor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'grey.A800',
        boxShadow: boxShadow && (!border || theme.palette.mode === ThemeMode.DARK) ? shadow || theme.customShadows.z1 : 'none',
        ':hover': {
          boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'none'
        },
        ...(theme.palette.mode === ThemeMode.DARK && {
          backgroundImage: 'none'
        }),
        ...(modal && {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: `calc( 100% - 50px)`, sm: 'auto' },
          '& .MuiCardContent-root': {
            overflowY: 'auto',
            minHeight: 'auto',
            maxHeight: `calc(100vh - 200px)`
          }
        }),
        ...sx
      }}
      ref={ref}
      {...others}
    >
      {/* card header and action */}
      {!darkTitle && title && (
        <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} subheader={subheader} />
      )}
      {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}
    </Card>
  );
}

export default forwardRef(MainCard);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  subheader: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  content: PropTypes.bool,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  divider: PropTypes.bool,
  secondary: PropTypes.any,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  modal: PropTypes.bool,
  others: PropTypes.any
};
