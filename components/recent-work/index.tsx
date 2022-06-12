import Image from 'next/image'
import Link from 'next/link'
import {
    Container,
    Wrapper,
    Item,
    Title,
    ItemTitle,
    ItemCaption,
    ShowMore,
} from './styles/recent-work'

export default function RecentWork({
    title,
    children,
    ...restProps
}: {
    children: any
    title: string
}): JSX.Element {
    return (
        <Container {...restProps}>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

RecentWork.Wrapper = function RecentWorkWrapper({
    children,
    ...restProps
}: {
    children: any
}): JSX.Element {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

RecentWork.Item = function RecentWorkItem({
    src,
    href,
    alt,
    width,
    height,
    itemTitle,
    itemCaption,
    ...restProps
}: {
    src: string
    href: string
    alt: string
    width: number
    height: number
    itemTitle: string
    itemCaption: string
}): JSX.Element {
    return (
        <Item {...restProps}>
            <Link href={href}>
                <a>
                    <Image src={src} alt={alt} width={width} height={height} layout="responsive" />
                </a>
            </Link>
            <ItemTitle>{itemTitle}</ItemTitle>
            <ItemCaption>{itemCaption}</ItemCaption>
        </Item>
    )
}

RecentWork.ShowMore = function RecentWorkShowMore({
    children,
    href,
    ...restProps
}: {
    children: string
    href: string
}): JSX.Element {
    return (
        <ShowMore href={href} {...restProps}>
            <a className="button button__show-more">{children}</a>
        </ShowMore>
    )
}
