import {ThemeConfig, ThemeConfigValidationContext} from '@docusaurus/types';
import {Joi} from '@docusaurus/utils-validation';
import {ColorNames} from './themeColors';

const ColorSchema = Joi.string().equal(
  ColorNames.GREEN,
  ColorNames.PINK,
  ColorNames.PURPLE,
  ColorNames.RED,
  ColorNames.YELLOW,
);
const PrimaryColorSchema = ColorSchema.default(ColorNames.PURPLE);
const SecondaryColorSchema = ColorSchema.default(ColorNames.GREEN);

export const ThemeConfigSchema = Joi.object({
  primaryColor: PrimaryColorSchema,
  secondaryColor: SecondaryColorSchema,
  googleCalendar: Joi.object({
    calendarId: Joi.string(),
    googleApiKey: Joi.string(),
  }).optional(),
});

export function validateThemeConfig({
  validate,
  themeConfig,
}: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig {
  return validate(ThemeConfigSchema, themeConfig);
}
