import {
  deepAssign as deepAssignFunction,
  deepAssignReverse as deepAssignReverseFunction
} from './assign';
import i18nConfig from './i18n';

export * from '../typings';

export const deepAssign = deepAssignFunction;
export const deepAssignReverse = deepAssignReverseFunction;

export const i18n = i18nConfig;

export default { deepAssign, deepAssignReverse, i18n };
