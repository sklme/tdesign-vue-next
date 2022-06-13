import _Select from './select';
import _Option from './option';
import _OptionGroup from './optionGroup';
import withInstall from '../utils/withInstall';
import { TdSelectProps, TdOptionProps, TdOptionGroupProps } from './type';

import './style';

export * from './type';
export type SelectProps = TdSelectProps;
export type OptionProps = TdOptionProps;
export type OptionGroupProps = TdOptionGroupProps;

export const Select = withInstall(_Select);
export const Option = withInstall(_Option);
export const OptionGroup = withInstall(_OptionGroup);
