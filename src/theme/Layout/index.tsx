import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  ThemeClassNames,
  useKeyboardNavigation,
  useThemeConfig,
} from '@docusaurus/theme-common';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import ErrorPageContent from '@theme/ErrorPageContent';
import './styles.css';
import type {Props} from '@theme/Layout';
import {ThemeProvider} from 'nupes-ui';
import {getColorByName} from '../../themeColors';
import {ThemeConfig} from '../../themeConfig';
import {createGlobalStyle, css} from 'styled-components';
import tinycolor, {Instance} from 'tinycolor2';

interface GlobalStyleProps {
  primary: Instance;
  secondary: Instance;
}
const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({primary, secondary}: GlobalStyleProps) => css`
    :root {
      --ifm-color-primary: ${primary.toString()};
      --ifm-color-primary-dark: ${primary.darken(5).toString()};
      --ifm-color-primary-darker: ${primary.darken(10).toString()};
      --ifm-color-primary-darkest: ${primary.darken(15).toString()};
      --ifm-color-primary-light: ${primary.lighten(5).toString()};
      --ifm-color-primary-lighter: ${primary.lighten(10).toString()};
      --ifm-color-primary-lightest: ${primary.lighten(15).toString()};
      --ifm-code-font-size: 95%;
      --ifm-list-paragraph-margin: 0;
      --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
      --ifm-font-family-base: 'Acumin Pro', system-ui, -apple-system, Segoe UI,
        Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
        'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    }
  `}
`;

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  const themeConfig = useThemeConfig() as ThemeConfig;
  const primaryColor = getColorByName(themeConfig.primaryColor);
  const secondaryColor = getColorByName(themeConfig.secondaryColor);
  const primary = tinycolor(primaryColor);
  const secondary = tinycolor(secondaryColor);

  useKeyboardNavigation();

  return (
    <ThemeProvider primary={primaryColor} secondary={secondaryColor}>
      <GlobalStyle primary={primary} secondary={secondary} />
      <LayoutProviders>
        <PageMetadata title={title} description={description} />

        <SkipToContent />

        <AnnouncementBar />

        <Navbar />

        <div className={clsx(ThemeClassNames.wrapper.main, wrapperClassName)}>
          <ErrorBoundary fallback={ErrorPageContent}>{children}</ErrorBoundary>
        </div>

        {!noFooter && <Footer />}
      </LayoutProviders>
    </ThemeProvider>
  );
}
