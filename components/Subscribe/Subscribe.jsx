import Iconify from 'components/Iconify';
import Title from 'components/ui/Title';
import styles from './Subscribe.module.scss';

const Subscribe = () => {
    return (
        <div className={styles.container}>
            <Title level="3" className={styles.title}>
                SUBSCRIBE!
            </Title>
            <span className={styles.subtitle}>Sign up now; get closer to our action.</span>
            <form className={styles.form}>
                <input type="text" id="name" name="name" required />
                <button type="submit" className={styles.submit}>
                    <Iconify icon="akar-icons:arrow-right" />
                </button>
            </form>
        </div>
    );
};

export default Subscribe;
