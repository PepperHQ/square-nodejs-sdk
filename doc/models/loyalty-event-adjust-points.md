
# Loyalty Event Adjust Points

Provides metadata when the event `type` is `ADJUST_POINTS`.

## Structure

`LoyaltyEventAdjustPoints`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyProgramId` | `string \| undefined` | Optional | The Square-assigned ID of the [loyalty program](../../doc/models/loyalty-program.md).<br>**Constraints**: *Maximum Length*: `36` |
| `points` | `number` | Required | The number of points added or removed. |
| `reason` | `string \| undefined` | Optional | The reason for the adjustment of points. |

## Example (as JSON)

```json
{
  "points": 236,
  "reason": null
}
```

