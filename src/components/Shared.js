import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Section = styled(wrapper)`
  margin: 15px 0;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  background: ${props => props.theme.colors.dark};
  width: 80%;
  max-width: 800px;
  border-radius: 12px;
`;

export const row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 18px 0;
`;

export const H1 = styled.h1`
  font-size: 2.3em;
`;

export const H2 = styled.h2`
  font-size: 1.7em;
  color: ${props => props.theme.colors.light};
`;

export const Block = styled(wrapper)`
  margin: 15px 5px;
  padding: 10px 25px;
  background: rgba(0,0,0,0.1);
  background: ${props => props.theme.colors.light};
  border-radius: 12px;
  position: relative;
  width: 80%;
`;

export const AddButton = styled(AiOutlinePlusCircle)`
  cursor: pointer;
  color: ${props => props.theme.colors.light};
  &:hover {
    transform: scale(1.08);
  }
`;

export const TrashButton = styled(FiTrash2)`
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: ${props => props.theme.colors.dark};
  &:hover {
    transform: scale(1.09);
  }
`;

export const Button = styled.button`
  border: none;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 2px;
  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  &:focus {
    outline: none;
  }
`;