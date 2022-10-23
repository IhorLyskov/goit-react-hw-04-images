import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styled';

function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
