import { z } from "zod";

import tryParseEnv from "./tryParseEnv";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
