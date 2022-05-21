import {ThemeConfig as ClassicThemeConfig} from '@docusaurus/preset-classic';
import {ColorNames} from './themeColors';

export interface ThemeConfig extends ClassicThemeConfig {
  primaryColor: ColorNames;
  secondaryColor: ColorNames;
  googleCalendar?: {
    calendarId: string;
    googleApiKey: string;
  };
}
