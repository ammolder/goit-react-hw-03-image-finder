import { InfinitySpin } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <InfinitySpin width="200" color="#4fa94d" ariaLabel="triangle-loading" />
    </Container>
  );
};
