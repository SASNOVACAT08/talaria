import { Component } from 'vue';
import { RenderConfig } from '../types';
import { RenderData } from './RenderData';

export interface RenderOptions {
  data?: RenderData;
  template: Component;
  config: RenderConfig;
}
