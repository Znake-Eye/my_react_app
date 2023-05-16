const Footer = () => {
    const today = new Date()
    return (
        <footer className="container">
            <p className="text-center">Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}
export default Footer;