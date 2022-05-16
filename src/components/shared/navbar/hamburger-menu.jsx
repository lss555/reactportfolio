import styled from 'styled-components';

const HamburgerContainer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  flex-flow: column no-wrap;
  z-index: 10000;

  @media (max-width: 767px) {
    display: fixed;
    padding-top: 10px;
    padding-left: 10px;
    z-index: 10;
  }
`;

const Burger = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: black;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

const Hamburger = () => {
return (
    <>
      <HamburgerContainer>
        <Burger className='burger burger1' />
        <Burger className='burger burger2' />
        <Burger className='burger burger3' />
      </HamburgerContainer>
    </>
  )
}

export default Hamburger;
