import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="150"
      radius="9"
      color="#4fa94d"
      wrapperStyle={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />
  );
};
