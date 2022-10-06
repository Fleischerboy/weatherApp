import Footer from '../Navigation/Footer'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
}


export default Layout;