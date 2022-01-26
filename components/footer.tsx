import style from "./footer.module.scss";

export default function Footer() {
    return (
        <>
        <footer className={style.footer}>
                    <div className={style.box}>
                        <p>
                            © 2019, 
                            <a
                                href="/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                newCreator.org
                            </a>
                        </p>
                    </div>
            </footer>
        </>
    );
}
