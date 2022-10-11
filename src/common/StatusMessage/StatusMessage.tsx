/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* CORE COMPONENTS */
import { IoHelpCircleOutline, IoRadioButtonOffOutline as IconLoading } from 'react-icons/io5';
import { BsCheck2Circle } from 'react-icons/bs';
import { RiCustomerService2Line } from 'react-icons/ri';
import Button, { ButtonProps } from '../../core/Button';

/* COMMON COMPONENTS */
import LoadingIndicator from '../LoadingIndicator';

/* ICONS */

/* ICONS */
import IconSuccess from './assets/success.svg';
import IconError from './assets/error.svg';

/* TYPES */
import { StatusMessageProps } from './StatusMessage.types';

const StatusPopupMessage: React.FC<StatusMessageProps> = ({
  type = 'loading',
  buttonProps,
  title,
  message,
  icon,
  titleProps,
  messageProps,
  containerProps,
  iconSize,
  secondaryButtonProps,
  hideButton,
  hideTitle,
  hideMessage,
}) => {
  const [defaultMessage, setDefaultMessage] = React.useState<string>('Saving is in progress...');
  const [defaultTitle, setDefaultTitle] = React.useState<string>('Saving is in progress...');

  React.useEffect(() => {
    if (type === 'error') {
      setDefaultTitle('Error submitting your request');
      setDefaultMessage('Saving failed. Please try again.');
    } else if (type === 'loading') {
      setDefaultTitle('Submitting the request');
      setDefaultMessage('Saving is in progress...');
    } else if (type === 'success') {
      setDefaultTitle('Request submitted successfully');
      setDefaultMessage('Your changes have been successfully saved!');
    }
  }, [type]);

  const [buttonPropsForType, setButtonPropsForType] = React.useState<ButtonProps>({
    title: 'Yes, go ahead.',
    color: 'primary',
    variant: 'contained',
    startIcon: <BsCheck2Circle size={16} color="white" />,
  });
  const [iconForType, setIconForType] = React.useState<any>(<IconLoading size={iconSize || 60} />);

  React.useEffect(() => {
    if (type === 'success') {
      setButtonPropsForType({
        ...buttonPropsForType,
        title: 'Okay',
        variant: 'contained',
        loading: false,
      });
      setIconForType(<Box component="img" src={IconSuccess} width={iconSize || 87} height={iconSize || 70} />);
    } else if (type === 'error') {
      setButtonPropsForType({
        variant: 'contained',
        color: 'error',
        title: 'Submit a Support Request',
        loading: false,
        startIcon: <RiCustomerService2Line size={16} color="white" />,
      });
      setIconForType(<Box component="img" src={IconError} width={iconSize || 50} height={iconSize || 50} />);
    } else {
      // loading
      setIconForType(<LoadingIndicator size={iconSize || 70} />);
    }
  }, [type]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6} {...containerProps}>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center">
        <Box display="flex">
          <Box display="flex" position="relative" flexDirection="column">
            {icon || iconForType}
          </Box>
        </Box>

        {!hideTitle && (
          <Box display="flex" mt="30px">
            <Typography textAlign="center" lineHeight="26px" variant="h1" {...titleProps}>
              {title || defaultTitle}
            </Typography>
          </Box>
        )}

        {!hideMessage && (
          <Box display="flex" mt="20px">
            <Typography
              textAlign="center"
              fontWeight={400}
              variant="h5"
              lineHeight="22px"
              color="grey.800"
              {...messageProps}
            >
              {message || defaultMessage}
            </Typography>
          </Box>
        )}

        {type !== 'loading' && !hideButton && (
          <Box display="flex" mt="30px">
            <Button {...buttonPropsForType} {...buttonProps} />
          </Box>
        )}

        {secondaryButtonProps && (
          <Box display="flex" mt="13px">
            <Button {...secondaryButtonProps} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StatusPopupMessage;
