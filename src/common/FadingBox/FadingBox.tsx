import React from 'react';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import { FadingBoxProps } from './FadingBox.types';

const FadingBox: React.FC<FadingBoxProps> = ({
  children,
  scrollContainerProps,
  header,
  showTopSeparatorOnScroll,
  headerContainerProps = {},
  footer,
  footerContainerProps = {},
  height,
  ...restProps
}) => {
  const [scrollPosition, setScrollPosition] = React.useState<'top' | 'bottom' | undefined>('top');
  const { sx: scrollContainerSx, ref: scrollContainerRef, ...restScrollContainerProps } = scrollContainerProps || {};

  const listInnerRef = React.useRef();

  const onScroll = () => {
    const refCurrent = scrollContainerRef?.current || listInnerRef.current;
    if (refCurrent) {
      const { scrollTop, scrollHeight, clientHeight } = refCurrent;
      if (scrollTop === 0) {
        setScrollPosition('top');
      } else if (scrollTop + clientHeight >= scrollHeight) {
        setScrollPosition('bottom');
      } else {
        setScrollPosition(undefined);
      }
    }
  };

  return (
    <Box width="100%" display="flex" flexDirection="column" height={height} flex={1} {...restProps}>
      {header && (
        <Box display="flex" width="100%" flexDirection="column" {...headerContainerProps}>
          <Box
            display="flex"
            width="100%"
            flexDirection="column"
            sx={{
              borderBottom:
                showTopSeparatorOnScroll && scrollPosition !== 'top'
                  ? (theme: Theme) => `1px solid ${theme.palette.grey[300]}`
                  : 'none',
            }}
          >
            {header}
          </Box>
        </Box>
      )}
      <Box
        onScroll={() => onScroll()}
        ref={scrollContainerRef || listInnerRef}
        width="100%"
        display="flex"
        flex={1}
        flexDirection="column"
        sx={{
          maskImage:
            scrollPosition === 'top'
              ? 'linear-gradient(to bottom, black calc(100% - 35px), transparent 100%)'
              : scrollPosition === 'bottom'
                ? 'linear-gradient(transparent, black 10%, black 100%, transparent 100%)'
                : 'linear-gradient(transparent, black 10%, black 90%, transparent 100%)',
          overflowY: 'auto',
          ...scrollContainerSx,
        }}
        {...restScrollContainerProps}
      >
        {children}
      </Box>

      {footer && (
        <Box display="flex" width="100%" flexDirection="column" {...footerContainerProps}>
          <Box
            display="flex"
            width="100%"
            flexDirection="column"
            sx={{
              borderTop: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
            }}
          >
            {footer}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FadingBox;
