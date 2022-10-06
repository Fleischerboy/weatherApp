import Link from "next/link";

const Footer = () => {

    return (
        <footer>
            <h3>Gå til</h3>
            <nav>
                <Link href="/">Hjem</Link>
                <Link href="/about">Om oss</Link>
                <Link href="/contact">kontakt</Link>
            </nav>
        </footer>
    )
}


export default Footer;