/* REACT */
import React, { useEffect } from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { Theme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

/* ICONS */
import { HiX, HiOutlineCheck } from 'react-icons/hi';

/* TYPES */
import { NotificationProps } from './Notification.types';

const Notification: React.FC<NotificationProps> = (props) => {
  const {
    visible,
    message,
    type = 'loading',
    autoClose = true,
    autoCloseDuration,
    onClose,
    sx = {},
    ...boxProps
  } = props;

  const [msg, setMsg] = React.useState<string>('Saving is in progress...');

  useEffect(() => {
    if (autoClose) {
      let timerId: any;
      if (type === 'success' || type === 'error') {
        timerId = setTimeout(() => {
          onClose && onClose();
        }, autoCloseDuration || 6000);
      }
      return () => {
        if (timerId) {
          return clearTimeout(timerId);
        }
      };
    }
  }, [type, message]);

  /* REMOVE THESE HARDCODED COLORS WHEN FIGMA IS UPDATED */
  const getColor = (color?: string) => {
    if (type === 'error') {
      return color ? '#FEEDED' : '#FDCCCC';
    }
    return color ? '#F0F8F6' : '#A8D5CE';
  };
  /* REMOVE THESE HARDCODED COLORS WHEN FIGMA IS UPDATED */

  useEffect(() => {
    if (type === 'error') {
      setMsg('Saving failed. Please try again.');
    } else if (type === 'loading') {
      setMsg('Saving is in progress...');
    } else if (type === 'success') {
      setMsg('Your changes have been successfully saved!');
    }
  }, [type]);

  return (
    <Slide direction="down" in={visible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          p: '10px 12px 10px 12px',
          border: `1.2px solid ${getColor()}`,
          backgroundColor: getColor('light'),
          zIndex: (theme: Theme) => theme.zIndex.modal + 3,
          alignItems: 'flex-start',
          borderRadius: '9px',
          ...sx,
        }}
        {...boxProps}
      >
        <Box
          display="flex"
          width="20px"
          height="20px"
          bgcolor={type === 'error' ? 'error.main' : type === 'loading' ? 'none' : 'primary.main'}
          borderRadius="5px"
          color={type === 'loading' ? 'primary.main' : 'white'}
          alignItems="center"
          justifyContent="center"
        >
          {type === 'loading' && <CircularProgress color="inherit" size={12} />}
          {type === 'success' && <HiOutlineCheck color="inherit" size={14} />}
          {type === 'error' && <HiX color="inherit" size={14} />}
        </Box>
        <Box display="flex" flex={1}>
          <Typography
            variant="body1"
            component="p"
            fontSize="16px"
            lineHeight="18.75px"
            color="grey.900"
            sx={{ pl: '8px' }}
          >
            {message || msg}
          </Typography>
        </Box>

        <IconButton
          onClick={onClose}
          sx={{
            marginLeft: 2,
            width: '20px',
            height: '20px',
            p: 0,
          }}
        >
          <HiX size={16} />
        </IconButton>
      </Box>
    </Slide>
  );
};

export default Notification;
