import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  display: ${({ hamburgerOpen }) => (hamburgerOpen ? 'inline' : '') };
`;

export const NavbarItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  color: inherit;
  text-decoration: inherit;
  text-transform: uppercase;
  outline: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    transfrom: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;
