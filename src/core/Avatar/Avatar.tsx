/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import MuiAvatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

/* TYPES */
import { AvatarProps } from './Avatar.types';
import Title from '../../common/Title';

/* ICONS */
import IconDefaultAvatar from '../../assets/avatar.svg';
import IconFemaleAvatar from '../../assets/avatar_female.svg';
import IconMaleAvatar from '../../assets/avatar_male.svg';

const Avatar: React.FC<AvatarProps> = ({
  containerProps,
  avatarContainerProps,
  title,
  contentContainerProps,
  titleComponentProps,
  summary,
  src,
  sx,
  tooltip,
  tooltipProps,
  gender,
  size,
  ...restProps
}) => {
  const [defaultSrc, setDefaultSrc] = React.useState<string>(IconDefaultAvatar);
  const { titleProps, summaryContainerProps, ...restTitleComponentProps } = titleComponentProps || {};

  // update src based on gender
  React.useEffect(() => {
    if (gender === 'male') {
      setDefaultSrc(IconMaleAvatar);
    }
    if (gender === 'female') {
      setDefaultSrc(IconFemaleAvatar);
    }
  }, [gender]);

  return !tooltip ? (
    <Box display="flex" alignItems="center" {...containerProps}>
      <Box display="flex" mr="10px" {...avatarContainerProps}>
        <MuiAvatar src={src || defaultSrc} sx={{ width: size || 32, height: size || 32, ...sx }} {...restProps} />
      </Box>
      {title && (
        <Box display="flex" flexDirection="column" {...contentContainerProps}>
          <Title
            title={title as string}
            summary={summary}
            titleProps={{
              variant: 'h6',
              fontSize: '1rem',
              ...titleProps,
            }}
            summaryContainerProps={{
              mt: '0px',
              ...summaryContainerProps,
            }}
            {...restTitleComponentProps}
          />
        </Box>
      )}
    </Box>
  ) : (
    <Tooltip title={title as string} placement="top" {...tooltipProps}>
      <MuiAvatar src={src || defaultSrc} sx={{ width: size || 32, height: size || 32, ...sx }} {...restProps} />
    </Tooltip>
  );
};

export default Avatar;
