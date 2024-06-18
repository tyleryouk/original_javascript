import PropTypes from 'prop-types';
import NextLink from 'next/link';

import ButtonBase from '@mui/material/ButtonBase';

// project import
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';

import { APP_DEFAULT_PATH } from 'config';

export default function LogoSection({ reverse, isIcon, sx, to }) {
  return (
    <NextLink href={!to ? APP_DEFAULT_PATH : to} passHref legacyBehavior>
      <ButtonBase disableRipple sx={sx}>
        {isIcon ? <LogoIcon /> : <LogoMain reverse={reverse} />}
      </ButtonBase>
    </NextLink>
  );
}

LogoSection.propTypes = { reverse: PropTypes.bool, isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.string };
