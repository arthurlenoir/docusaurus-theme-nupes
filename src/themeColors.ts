import {NupesColors} from 'nupes-ui';

export enum ColorNames {
  GREEN = 'green',
  PINK = 'pink',
  PURPLE = 'purple',
  RED = 'red',
  YELLOW = 'yellow',
}

export interface ThemeMetadata extends Array<{[key: string]: string}> {
  primaryColor: ColorNames;
  secondaryColor: ColorNames;
  googleCalendar?: {
    calendarId: string;
    googleApiKey: string;
  };
}

const colorByName: Record<ColorNames, NupesColors> = {
  [ColorNames.GREEN]: NupesColors.GREEN,
  [ColorNames.PINK]: NupesColors.PINK,
  [ColorNames.PURPLE]: NupesColors.PURPLE,
  [ColorNames.RED]: NupesColors.RED,
  [ColorNames.YELLOW]: NupesColors.YELLOW,
};
export const getColorByName = (colorName: ColorNames): NupesColors =>
  colorByName[colorName];
