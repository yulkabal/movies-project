function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/yulkabal?tab=repositories">
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}
export { Footer };
