import Feed from "./Feed";
const Home = ({posts,setPosts}) => {
    console.log(posts.length)
    return (
        <main className="container">
            {posts.length ? (
                <Feed posts={posts}/>
                
            ) : (<p style={{marginTop: "2rem"}}>No posts to display.</p>) }
        </main>
    )
}
export default Home;