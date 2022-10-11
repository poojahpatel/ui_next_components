/* REACT */
import React from 'react';

/* MUI */
import { styled, Theme } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

/* TYPES */
import { AccordionProps, IAccordionSummaryProps } from './Accordian.types';

const Accordion = styled(
  (props: MuiAccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />,
  {
    shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'variant',
  }
)(({ theme, variant = 'contained' }) => ({
  border: variant === 'raw' ? 'none' : `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '6px',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root.Mui-expanded': {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

const AccordionSummary = styled(
  (props: IAccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
  ),
  { shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'variant' }
)(({ theme, variant = 'contained' }) => ({
  background: variant === 'contained' ? theme.palette.grey[200] : 'none',
  borderRadius: 2,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Accordian: React.FC<AccordionProps> = ({
  id,
  title,
  titleProps,
  children,
  accordianSummaryProps,
  accordianDetailsProps,
  sx,
  variant = 'contained',
  ...restProps
}) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      id={id}
      title={title as string}
      expanded={expanded === id}
      onChange={handleChange(id)}
      sx={{
        border: (theme: Theme) => (variant === 'raw' ? 'none' : `1px solid ${theme.palette.grey[400]}`),
        '&:not(:last-child)': {
          borderBottom: (theme: Theme) => (variant === 'raw' ? 'none' : `1px solid ${theme.palette.grey[400]}`),
        },
        ...sx,
      }}
      {...restProps}
    >
      <AccordionSummary
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        variant={variant}
        sx={{
          p: variant === 'raw' ? 0 : (theme: Theme) => theme.spacing(0, 2),
        }}
        {...accordianSummaryProps}
      >
        {typeof title === 'string' || title instanceof String ? (
          <Typography variant="h6" {...titleProps}>
            {title}
          </Typography>
        ) : (
          title
        )}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          p: variant === 'raw' ? 0 : undefined,
        }}
        {...accordianDetailsProps}
      >
        {children || 'No content'}
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian;
