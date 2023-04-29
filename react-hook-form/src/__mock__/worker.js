import { setupWorker } from "msw";
import { handler } from "./api/handler";

export const worker = setupWorker(...handler);
