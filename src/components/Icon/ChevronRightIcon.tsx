import { ComponentProps } from 'react';

interface ChevronRightIconProps extends ComponentProps<'svg'> {
  fill?: string;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
  fill = '#F5F5F5',
  ...props
}) => {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.311315 0.292893C0.726401 -0.0976311 1.39939 -0.0976311 1.81448 0.292893L6.37737 4.58579C7.20754 5.36684 7.20754 6.63317 6.37737 7.41421L1.81448 11.7071C1.39939 12.0976 0.726401 12.0976 0.311315 11.7071C-0.103772 11.3166 -0.103772 10.6834 0.311315 10.2929L4.87421 6L0.311315 1.70711C-0.103772 1.31658 -0.103772 0.683417 0.311315 0.292893Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronRightIcon;
