import { Container, Title } from './styles/upload'

export default function Upload({ children, ...restProps }: { children: any }): JSX.Element {
    return <Container {...restProps}>{children}</Container>
}

Upload.Title = ({ children, ...restProps }: { children: string }) => (
    <Title {...restProps}>{children}</Title>
)
