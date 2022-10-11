/* REACT */
import React from 'react';

/* ICONS */
import { IoCloseOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

/* CORE */
import Box from '../../core/Box';
import Stack from '../../core/Stack';
import Typography from '../../core/Typography';
import Button from '../../core/Button';

/* TYPES */
import { FormFooterProps } from './Form.types';

const FormFooter: React.FC<FormFooterProps> = ({
  title,
  titleProps = {},
  buttonsStackProps = {},
  onOkay,
  onCancel,
  canelButtonProps,
  okayButtonProps,
  children,
  ...restProps
}) => {
  return (
    <Box display="flex" alignItems="center" {...restProps}>
      <Box display="flex" flex={1}>
        {children}
        {React.isValidElement(title) ? (
          title
        ) : (
          <Typography variant="h2" {...titleProps}>
            {title}
          </Typography>
        )}
      </Box>
      {(onCancel || onOkay) && (
        <Stack spacing={1} direction="row" {...buttonsStackProps}>
          {onCancel && (
            <Button
              size="small"
              title="Cancel"
              variant="outlined"
              startIcon={<IoCloseOutline />}
              onClick={() => onCancel()}
              {...canelButtonProps}
            />
          )}
          {onOkay && (
            <Button
              size="small"
              title="Save"
              variant="contained"
              startIcon={<IoCheckmarkCircleOutline />}
              onClick={() => onOkay()}
              {...okayButtonProps}
            />
          )}
        </Stack>
      )}
    </Box>
  );
};

export default FormFooter;
