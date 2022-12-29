import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';


export interface ModifierLocationOverrides {
  /** The ID of the `Location`. This can include locations that are deactivated. */
  locationId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceMoney?: Money;
}

export const modifierLocationOverridesSchema: Schema<ModifierLocationOverrides> = object(
  {
    locationId: ['location_id', optional(nullable(string()))],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
    pricingType: ['pricing_type', optional(string())]
  }
);


/** A modifier applicable to items at the time of sale. */
export interface CatalogModifier {
  /** The modifier name.  This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  priceMoney?: Money;
  /** Determines where this `CatalogModifier` appears in the `CatalogModifierList`. */
  ordinal?: number | null;
  /** The ID of the `CatalogModifierList` associated with this modifier. */
  modifierListId?: string | null;
  /**
   * The ID of the image associated with this `CatalogModifier` instance.
   * Currently this image is not displayed by Square, but is free to be displayed in 3rd party applications.
   */
  imageId?: string | null;
  locationOverrides?: ModifierLocationOverrides[] | null;
}

export const catalogModifierSchema: Schema<CatalogModifier> = object({
  name: ['name', optional(nullable(string()))],
  priceMoney: ['price_money', optional(lazy(() => moneySchema))],
  ordinal: ['ordinal', optional(nullable(number()))],
  modifierListId: ['modifier_list_id', optional(nullable(string()))],
  imageId: ['image_id', optional(nullable(string()))],
  locationOverrides: [
    'location_overrides',
    optional(nullable(array(lazy(() => modifierLocationOverridesSchema)))),
  ],  
});
