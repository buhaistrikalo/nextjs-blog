import Comment from './Comment';

const CommentsBlock = ({ comments, users }) => {
    return (
        <>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    name={comment.name}
                    email={comment.email}
                    text={comment.body}
                />
            ))}
        </>
    );
};

export default CommentsBlock;
