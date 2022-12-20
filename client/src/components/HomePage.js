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





    React.useEffect(() => {

        renderFollowedPosts();
    
    
    }, [posts])


    const changeState = () => {
        setCreatePost(!createPost)
    }

    const renderFollowedPosts = () => {
        console.log("This is props.user", props.user);
        const userPosts = [];
        props.user.followedUsers.map(username => {
            axios.get(`http://localhost:3001/${username}/activity`)
            .then(res => {
                    console.log("Showing the data", res.data)
                /*res.data.posts.map(post => {
                    let newArr = [...posts];
                    newArr.push(post)
                    setPosts(newArr)
                })*/
            })
            .then(console.log(posts))     
        
        })

    }




    
        return(
            <div>

                <button onClick={changeState}>Create A Post</button>
                {createPost ? <CreatePost username = {props.user.username} setCreatePost = {changeState}/> : <></>}
                
            </div>
        )
    
}

export default HomePage;