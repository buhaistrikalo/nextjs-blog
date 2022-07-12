import styles from './Form.module.scss';

const Form = () => {
    return (
        <form action="#" method="post" className={styles.comment_block}>
            <div className={styles.name_block}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.text_block}>
                <label htmlFor="comment">Comment</label>
                <textarea type="text" id="text" name="text" required />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;
