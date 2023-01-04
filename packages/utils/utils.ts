import { PropType } from 'vue';

export type ExtractFromProps<T> = {
  [k in keyof T]?: ExtractFromPropType<
    T[k] extends {
      type: any;
    }
      ? T[k]['type']
      : T[k]
  >;
};

type ExtractFromPropType<T> = T extends PropType<infer U> ? U : any;
