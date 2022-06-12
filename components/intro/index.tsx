import { Container, Title, Text } from './styles/intro'

export default function Intro({ children, ...restProps }: { children: any }): JSX.Element {
    return <Container {...restProps}>{children}</Container>
}

Intro.Title = function IntroTitle({ children, ...restProps }: { children: any }): JSX.Element {
    return <Title {...restProps}>{children}</Title>
}

Intro.Text = function IntroText({ children, ...restProps }: { children: any }): JSX.Element {
    return <Text {...restProps}>{children}</Text>
}
