const NewPost = ({hanbleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
    return (
        <main className="container">
            <h2>New Post</h2>
            <form onSubmit={hanbleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input id="postTitle" className="form-control"
                type="text" required value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                />

                <label htmlFor="postBody">Post:</label>
                <textarea
                id="postBody"
                required value={postBody} 
                onChange={(e) => setPostBody(e.target.value)}
                className="form-control"
                />
                <button type="submit" className="btn btn-sm btn-success mt-3">Submit</button>
            </form>
        </main>
    )
}
export default NewPost;