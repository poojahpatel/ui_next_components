import React from 'react';
import { BoxProps } from '@mui/material/Box';
import { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import { TooltipProps } from '@mui/material/Tooltip';
import { TitleProps } from '../../common/Title';

export interface AvatarProps extends MuiAvatarProps {
  containerProps?: BoxProps;
  avatarContainerProps?: BoxProps;
  contentContainerProps?: BoxProps;
  title?: string;
  summary?: string;
  titleComponentProps?: TitleProps;
  tooltip?: boolean;
  tooltipProps?: TooltipProps;
  gender?: 'male' | 'female';
  size?: number | string;
}
