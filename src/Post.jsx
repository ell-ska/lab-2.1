import './post.css'

export default function Post({ title, content }) {
    return (
        <div className="post">
            <h2 className="post__title">{title}</h2>
            <img src='https://picsum.photos/960/640' alt="" />
            <p>{content}</p>
        </div>
    )
}