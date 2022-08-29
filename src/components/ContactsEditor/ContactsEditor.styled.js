import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.sizes.xxl};
  margin-bottom: ${props => props.theme.space[8]}px;
  border-radius: ${props => props.theme.radii.sm};
`

export const Label = styled.label`
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes[4]}px;
`

export const SubmitButton = styled.button`
  width: ${props => props.theme.sizes.l};
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => props.theme.space[4]}px;
  text-align: center;
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes[4]}px;
  background-color: ${props => props.theme.colors.primary};

  border: ${props => props.theme.borders.medium};
  border-color: ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.radii.sm};

  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundAccent};
  }
`
