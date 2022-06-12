export default function MainContainer({ children, ...restProps }: { children: any }) {
    return <main {...restProps}>{children}</main>
}
