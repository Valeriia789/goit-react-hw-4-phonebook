import styled from '@emotion/styled'

export const Input = styled.input`
  width: ${props => props.theme.sizes.xl};
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  border: ${props => props.theme.borders.medium};
  border-color: ${props => props.theme.colors.primary};
  outline: 0;
  border-radius: ${props => props.theme.radii.sm};
  font-size: ${props => props.theme.fontSizes[3]}px;

  transition: 0.3s all linear;
  
  &:hover {
    border-color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.backgroundHover};
  }
`