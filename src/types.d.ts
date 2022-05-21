declare module '@theme/Layout' {
  import type {ReactNode} from 'react';

  export interface Props {
    readonly children?: ReactNode;
    readonly noFooter?: boolean;
    readonly wrapperClassName?: string;

    // Not really layout-related, but kept for convenience/retro-compatibility
    readonly title?: string;
    readonly description?: string;
  }

  export default function Layout(props: Props): JSX.Element;
}

declare module '@docusaurus/ErrorBoundary' {
  import type {ReactNode} from 'react';
  import type ErrorComponent from '@theme/Error';

  export interface Props {
    readonly fallback?: typeof ErrorComponent;
    readonly children: ReactNode;
  }
  export default function ErrorBoundary(props: Props): JSX.Element;
}

declare module '@theme/MDXComponents' {
  import type {ComponentProps} from 'react';
  import type CodeBlock from '@theme/CodeBlock';

  export type MDXComponentsObject = {
    readonly head: typeof MDXHead;
    readonly code: typeof MDXCode;
    readonly a: typeof MDXA;
    readonly pre: typeof MDXPre;
    readonly details: typeof MDXDetails;
    readonly ul: typeof MDXUl;
    readonly img: typeof MDXImg;
    readonly h1: (props: ComponentProps<'h1'>) => JSX.Element;
    readonly h2: (props: ComponentProps<'h2'>) => JSX.Element;
    readonly h3: (props: ComponentProps<'h3'>) => JSX.Element;
    readonly h4: (props: ComponentProps<'h4'>) => JSX.Element;
    readonly h5: (props: ComponentProps<'h5'>) => JSX.Element;
    readonly h6: (props: ComponentProps<'h6'>) => JSX.Element;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [tagName: string]: ComponentType<any>;
  };

  const MDXComponents: MDXComponentsObject;
  export default MDXComponents;
}

declare module '@theme/MDXContent' {
  import type {ReactNode} from 'react';

  export interface Props {
    readonly children: ReactNode;
  }

  export default function MDXContent(props: Props): JSX.Element;
}

declare module '@theme/SkipToContent' {
  export default function SkipToContent(): JSX.Element;
}

declare module '@theme/AnnouncementBar' {
  export default function AnnouncementBar(): JSX.Element | null;
}
declare module '@theme/Navbar' {
  export default function Navbar(): JSX.Element;
}
declare module '@theme/Footer' {
  export default function Footer(): JSX.Element | null;
}
declare module '@theme/LayoutProviders' {
  import type {ReactNode} from 'react';

  export interface Props {
    readonly children: ReactNode;
  }

  export default function LayoutProviders(props: Props): JSX.Element;
}
declare module '@theme/ErrorPageContent' {
  import type ErrorComponent from '@theme/Error';

  const ErrorPageContent: typeof ErrorComponent;
  export default ErrorPageContent;
}