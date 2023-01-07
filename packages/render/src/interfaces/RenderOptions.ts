import { Component } from "vue";
import { RenderConfig } from "./RenderConfig";
import { RenderData } from "./RenderData";

export interface RenderOptions {
  data: RenderData;
  template: Component;
  config: RenderConfig;
}