'use client';
import PropTypes from 'prop-types';

// next
import { SessionProvider } from 'next-auth/react';

// project import
import ThemeCustomization from 'themes';

import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';
// import RTLLayout from 'components/RTLLayout';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';

// import { ConfigProvider } from 'contexts/ConfigContext';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function ProviderWrapper({ children }) {
  return (
    // <ConfigProvider>
    // {/* </ConfigProvider> */}
    <ThemeCustomization>
      {/* <RTLLayout> */}
      <Locales>
        <ScrollTop>
          <SessionProvider refetchInterval={0}>
            <Notistack>
              <Snackbar />
              {children}
            </Notistack>
          </SessionProvider>
        </ScrollTop>
      </Locales>
      {/* </RTLLayout> */}
    </ThemeCustomization>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.node };
