
# List Webhook Event Types Response

Defines the fields that are included in the response body of
a request to the [ListWebhookEventTypes](../../doc/api/webhook-subscriptions.md#list-webhook-event-types) endpoint.

Note: if there are errors processing the request, the event types field will not be
present.

## Structure

`ListWebhookEventTypesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `eventTypes` | `string[] \| undefined` | Optional | The list of event types. |
| `metadata` | [`EventTypeMetadata[] \| undefined`](../../doc/models/event-type-metadata.md) | Optional | Contains the metadata of a webhook event type. For more information, see [EventTypeMetadata](../../doc/models/event-type-metadata.md). |

## Example (as JSON)

```json
{
  "event_types": [
    "inventory.count.updated"
  ],
  "metadata": [
    {
      "api_version_introduced": "2018-07-12",
      "event_type": "inventory.count.updated",
      "release_status": "PUBLIC"
    }
  ]
}
```

