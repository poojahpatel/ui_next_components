import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Breakpoint } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { FormDialogProps } from './Form.types';
import FadingBox from '../../common/FadingBox';
import FormHeader from '../../common/Form/FormHeader';
import FormFooter from '../../common/Form/FormFooter';

const FormDialog: React.FC<FormDialogProps> = (props) => {
  const {
    title,
    maxWidth,
    headerProps = {},
    footerProps = {},
    disableHeader,
    disableFooter,
    sx,
    disablePadding,
    children,
    formWrapperProps = {},
    ...default_props
  } = props;

  return (
    <Dialog
      maxWidth={maxWidth as false | Breakpoint | undefined}
      sx={{
        [`& .MuiDialog-paperWidth${maxWidth}`]: {
          maxWidth: `${maxWidth}`,
        },
        '& .MuiDialog-paper': {
          borderRadius: 2,
          boxShadow: (theme: Theme) => theme.shadows[1],
        },
        ...sx,
      }}
      {...default_props}
    >
      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
        <FadingBox
          header={
            !disableHeader && <FormHeader height={70} px={2.5} onClose={default_props?.onClose} {...headerProps} />
          }
          footer={!disableFooter && <FormFooter height={70} px={2.5} {...footerProps} />}
          showTopSeparatorOnScroll
          width="auto"
          sx={{
            overflow: 'auto',
          }}
          scrollContainerProps={{
            width: 'auto',
            px: disablePadding ? 0 : 2.5,
            pb: 2.5,
            ...formWrapperProps,
          }}
        >
          {children}
        </FadingBox>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
