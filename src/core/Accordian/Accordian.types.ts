import { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import { TypographyProps } from '@mui/material/Typography';
import React from 'react';

type TVariant = 'contained' | 'outlined' | 'raw';

export interface IAccordionSummaryProps extends AccordionSummaryProps {
  variant?: TVariant;
}
export interface AccordionProps extends Omit<MuiAccordionProps, 'title' | 'variant'> {
  id: string;
  title: string | React.ReactNode;
  titleProps?: TypographyProps;
  accordianSummaryProps?: AccordionSummaryProps;
  accordianDetailsProps?: AccordionDetailsProps;
  variant?: TVariant;
}
