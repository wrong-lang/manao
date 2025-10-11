import { pino } from "pino";

export const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: "yyyy-mm-dd HH:MM:ss",
    },
  },
  base: undefined,
});
