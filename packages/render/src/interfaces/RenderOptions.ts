import { RenderConfig } from "./RenderConfig";
import { RenderData } from "./RenderData";

export interface RenderOptions {
  data: RenderData;
  template: string;
  config: RenderConfig;
}