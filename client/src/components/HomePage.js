import axios from "axios"
import React from "react"
import CreatePost from "./CreatePost"


function HomePage(props) {

    /*state = {
        createPost: false,
        posts: []
    }*/

    const [createPost, setCreatePost] = React.useState(false);

    const [posts, setPosts] = React.useState([]);





    


    const changeState = () => {
        setCreatePost(!createPost)
    }

    

    React.useEffect(() => {

        console.log("This is props.user", props.user);
        const userPosts = [];
        props.user.followedUsers.map(username => {
            axios.get(`http://localhost:3001/${username}/activity`)
            .then(res => {
                    console.log("Showing the data", res.data)
                    res.data.forEach((post) => {
                        userPosts.push(post);
                    })
                    console.log("Here are all posts of users", userPosts)

                    setPosts(userPosts);
                /*res.data.posts.map(post => {
                    let newArr = [...posts];
                    newArr.push(post)
                    setPosts(newArr)
                })*/
            })
            .catch(error => console.log("error",error))
        
        })

    
    
    
    }, [])




    
        return(
            <div>

                <button onClick={changeState}>Create A Post</button>
                {createPost ? <CreatePost username = {props.user.username} setCreatePost = {changeState}/> : <></>}
                {posts.map(post=>{ 
                    return (
                        <div key={post._id}>
                            <p>username: {post.username}</p>
                            <p>title: {post.title}</p>
                            <p>content: {post.content}</p>




                        </div>
                    )
                })}
                
            </div>
        )
    
}

export default HomePage;