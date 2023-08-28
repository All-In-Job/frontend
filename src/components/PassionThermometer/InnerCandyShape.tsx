const InnerCandyShape = () => {
  return (
    <svg width='0' height='0' viewBox='0 0 970 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <clipPath id='myClip'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M53.6061 42C48.7938 50.9306 39.3557 57 28.5 57C12.7599 57 0 44.2401 0 28.5C0 12.7599 12.7599 0 28.5 0C39.3557 0 48.7938 6.06944 53.6061 15H956.5C963.956 15 970 21.0442 970 28.5C970 35.9558 963.956 42 956.5 42H53.6061Z'
            fill='white'
          />
        </clipPath>
      </defs>

      <defs>
        <filter
          id='filter0_i_22_60'
          x='0'
          y='0'
          width='970'
          height='60'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='3' />
          <feGaussianBlur stdDeviation='6' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25098 0' />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_22_60' />
        </filter>
      </defs>
    </svg>
  );
};

export default InnerCandyShape;
