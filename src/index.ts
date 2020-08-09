import { IPluginMiddleware, Logger, PluginOptions } from "@verdaccio/types";
import { Application, NextFunction, Request, Response } from "express";
import { ConfigGaeAh } from "../types";

export default class VerdaccioGaeAh implements IPluginMiddleware<ConfigGaeAh> {
  logger: Logger;
  enabled: boolean;
  public constructor(config: ConfigGaeAh, options: PluginOptions<ConfigGaeAh>) {
    this.logger = options.logger;
    this.enabled = config.enabled || false;
  }

  public register_middlewares(app: Application): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      if (this.enabled && req.url.startsWith("/_ah/")) {
        res.json({ ready: true });
      } else {
        next();
      }
    });
  }
}
