import { useParams, Link } from "react-router-dom";
const PostPage = ({posts, handleDelete}) => {
    const {id} = useParams()

    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className="container">
            <article className="post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postDate">{post.body}</p>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(post.id)}>Delete</button>
                    </>
                }
                { !post &&

                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit our Homepage</Link>
                        </p>
                        
                    </>
                }
            </article>
        </main>
    )
}
export default PostPage;