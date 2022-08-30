import styled from '@emotion/styled'

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  max-width: ${props => props.theme.sizes.xl};
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.sm};
  border-left: ${props => props.theme.borders.decorBold};
  border-right: ${props => props.theme.borders.decorBold};
  border-color: ${props => props.theme.colors.backgroundAccent};

  box-shadow: ${props => props.theme.shadows.box};
  font-size: ${props => props.theme.fontSizes[3]}px;

  transition: 0.3s all linear;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundHover};
  }
`

export const DeleteButton = styled.button`
  cursor: pointer;
  color: ${props => props.theme.colors.warning};
  background-color: ${props => props.theme.colors.primary};

  border-radius: ${props => props.theme.radii.sm};
  border-color: ${props => props.theme.colors.warning};

  &:hover {
    box-shadow: ${props => props.theme.shadows.box};
  }
`
