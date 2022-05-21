import {LoadContext, Plugin} from '@docusaurus/types';

export default function theme(context: LoadContext): Plugin<undefined> {
  return {
    name: 'docusaurus-theme-nupes',

    getThemePath() {
      return '../lib/theme';
    },

    getTypeScriptThemePath() {
      return '../src/theme';
    },

    /*getTranslationFiles: () => getTranslationFiles({themeConfig}),

    translateThemeConfig: (params) =>
      translateThemeConfig({
        themeConfig: params.themeConfig as ThemeConfig,
        translationFiles: params.translationFiles,
      }),

    getDefaultCodeTranslationMessages() {
      return readDefaultCodeTranslationMessages({
        locale: currentLocale,
        name: 'theme-common',
      });
    },

    getClientModules() {
      const modules = [
        require.resolve(getInfimaCSSFile(direction)),
        './prism-include-languages',
        './admonitions.css',
        './nprogress',
      ];

      if (customCss) {
        modules.push(
          ...(Array.isArray(customCss) ? customCss : [customCss]).map((p) =>
            path.resolve(context.siteDir, p),
          ),
        );
      }

      return modules;
    },

    configureWebpack() {
      const prismLanguages = additionalLanguages
        .map((lang) => `prism-${lang}`)
        .join('|');

      return {
        plugins: [
          // This allows better optimization by only bundling those components
          // that the user actually needs, because the modules are dynamically
          // required and can't be known during compile time.
          new ContextReplacementPlugin(
            /prismjs[\\/]components$/,
            new RegExp(`^./(${prismLanguages})$`),
          ),
        ],
      };
    },

    configurePostCss(postCssOptions) {
      if (direction === 'rtl') {
        const resolvedInfimaFile = require.resolve(getInfimaCSSFile(direction));
        const plugin: PostCssPlugin = {
          postcssPlugin: 'RtlCssPlugin',
          prepare: (result) => {
            const file = result.root?.source?.input?.file;
            // Skip Infima as we are using the its RTL version.
            if (file === resolvedInfimaFile) {
              return {};
            }
            return rtlcss(result.root as unknown as rtlcss.ConfigOptions);
          },
        };
        postCssOptions.plugins.push(plugin);
      }

      return postCssOptions;
    },

    injectHtmlTags() {
      return {
        preBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
${noFlashColorMode(colorMode)}
${announcementBar ? AnnouncementBarInlineJavaScript : ''}
            `,
          },
        ],
      };
    },*/
  };
}
