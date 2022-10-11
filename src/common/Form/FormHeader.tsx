/* REACT */
import React, { MouseEventHandler } from 'react';

/* ICONS */
import { IoCloseOutline } from 'react-icons/io5';

/* core */
import Box from '../../core/Box';
import Stack from '../../core/Stack';
import Typography from '../../core/Typography';
import Button, { ButtonProps } from '../../core/Button';
import Dialog from '../../core/Dialog';
import IconButton from '../../core/IconButton';

/* TYPES */
import { FormHeaderProps } from './Form.types';

/* COMMON */
import Notification from '../Notification';
import StatusMessage from '../StatusMessage';

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  titleProps = {},
  icon,
  summary,
  summaryProps = {},
  buttons = [],
  buttonsStackProps = {},
  notificationProps = {},
  onClose,
  ...restProps
}) => {
  const { dialogProps, onClose: onCloseNotification } = notificationProps || {};

  return (
    <Box display="flex" alignItems="center" {...restProps}>
      <Box
        display="flex"
        position="absolute"
        alignItems="center"
        justifyContent="center"
        width="100%"
        sx={{
          top: '10px',
        }}
      >
        <Notification
          type="loading"
          onClose={onCloseNotification}
          {...notificationProps}
          visible={notificationProps?.displayType !== 'dialog' && !!notificationProps?.visible}
        />
      </Box>

      <Box display="flex" flex={1}>
        {React.isValidElement(title) ? (
          title
        ) : (
          <Typography variant="h2" {...titleProps}>
            {title}
          </Typography>
        )}
      </Box>
      {buttons.length > 0 && (
        <Stack direction="row" spacing="10px" {...buttonsStackProps}>
          {buttons.map((button: ButtonProps, index: number) => (
            <Button key={`form-header-button-${index}`} {...button} />
          ))}
        </Stack>
      )}

      {onClose && (
        <Box display="flex" justifySelf="flex-end">
          <IconButton
            onClick={onClose as MouseEventHandler}
            sx={{
              width: 30,
              height: 30,
              padding: 0,
              borderRadius: 30,
              border: 'none',
            }}
          >
            <IoCloseOutline />
          </IconButton>
        </Box>
      )}

      <Dialog
        fullWidth
        {...dialogProps}
        onClose={onCloseNotification}
        open={notificationProps?.displayType === 'dialog' && !!notificationProps?.visible}
      >
        <StatusMessage
          containerProps={{
            width: 'auto',
          }}
          type="loading"
          title={undefined}
          {...notificationProps}
        />
      </Dialog>
    </Box>
  );
};

export default FormHeader;
