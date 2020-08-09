# verdaccio-gae-ah

A [verdaccio](https://verdaccio.org) middleware plugin that handles Google App Engine `/_ah/*` requests like `/_ah/warmup`

## Installation

```
$ npm i verdaccio-gae-ah
```

## Configuration

Add the following to the `middlewares` section of the verdaccio `config.yaml` file:

```yaml
middlewares:
  gae-ah:
    enabled: true
```

If `enabled` is `true` verdaccio server is answering requests like `/_ah/start` or `/_ah/warmup` with HTTP 200 and the following JSON response:

```json
{
  "ready": true
}
```
