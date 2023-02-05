import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.section}>
                <div className={styles.text}>
                    <p>Чуден Днепр при тихой погоде,когда вольно и плавно мчит</p>
                    <p>Сквозь леса и горы полные воды свои.</p>
                    <p>Глядишь и не знаешь, идет или не идет его величавая ширина, и чудится,</p>
                    <p>Будто весь вылит он из стекла,</p>
                    <p>И будто голубая зеркальная дорога,</p>
                    <p>Без меры в ширину, без конца в длину,</p>
                    <p>Реет и вьется по зеленому миру.</p>
                </div>
            </section>
        </header>
    );
};

export default Header;