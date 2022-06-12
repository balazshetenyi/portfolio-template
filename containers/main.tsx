export default function MainContainer({ children, ...restProps }: { children: any }) {
    return (
        <main {...restProps}>
            {children}
            <style jsx>{`
                @media (min-width: 900px) {
                    main {
                        padding: 6rem 2rem;
                    }
                }
            `}</style>
        </main>
    )
}
