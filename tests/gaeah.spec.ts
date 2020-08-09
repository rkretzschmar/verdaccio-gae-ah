import VerdaccioGaeAh from "../src";
import { ConfigGaeAh } from "../types";

import { Logger } from "@verdaccio/types";

// @ts-ignore
const config: ConfigGaeAh = {
  enabled: true
};

const logger: Logger = {
  error: e => console.warn(e),
  info: e => console.warn(e),
  debug: e => console.warn(e),
  child: e => console.warn(e),
  warn: () => {},
  http: e => console.warn(e),
  trace: e => console.warn(e)
};

describe("GaeAh plugin", () => {
  test("should test GaeAh", () => {
    // @ts-ignore
    const gaeAh = new VerdaccioGaeAh(config, { logger, config: undefined });
    expect(gaeAh).toBeDefined();
  });
});
