import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="red"
      visible="true"
      wrapperStyle={{ justifyContent: 'center' }}
    />
  );
}

export default Loader;
