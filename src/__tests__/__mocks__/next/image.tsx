import React from 'react';

const NextImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
  //@ts-ignore>
>((props, ref) => (
  <img ref={ref} {...props} priority={props.fetchPriority?.toString()} />
));
NextImage.displayName = 'NextImage';

export default NextImage;
