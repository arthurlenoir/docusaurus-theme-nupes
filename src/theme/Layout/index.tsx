import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  ThemeClassNames,
  useKeyboardNavigation,
} from '@docusaurus/theme-common';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import ErrorPageContent from '@theme/ErrorPageContent';
import './styles.css';
import type {Props} from '@theme/Layout';
import {NupesColors, ThemeProvider} from 'nupes-ui';

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  useKeyboardNavigation();

  return (
    <ThemeProvider primary={NupesColors.GREEN} secondary={NupesColors.PURPLE}>
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
