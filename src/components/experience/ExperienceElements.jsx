import styled from 'styled-components';

export const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
    padding: 0 50px;
    grid-gap: 5px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const Card = styled.div`
  background: #020b0b;
  border: 1px solid #902bf5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  max-height: 400px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  color: white;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`
export const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`
export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const H2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`
export const H3 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #902bf5;
`

export const List = styled.ul`
  text-align: center;
  list-style-type: none;
`
export const ListItem = styled.li`
  padding: 3px;
`
