import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 18px 0;
`;

export const H1 = styled.h1`
  font-size: 2em;
`;

export const H2 = styled.h2`
  font-size: 1.5em;
  color: ${props => props.theme.colors.light};
`;

export const Block = styled(wrapper)`
  margin: 15px;
  padding: 10px 30px;
  background: rgba(0,0,0,0.1);
  background: ${props => props.theme.colors.light};
  border-radius: 12px;
  position: relative;
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
  background: ${props => props.theme.colors.mid};
  color: ${props => props.theme.colors.dark};
  box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1em;
  &:hover {
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3);
  }
  &:focus {
    outline: none;
  }
`;