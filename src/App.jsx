import Header from "./Header"
import Post from "./Post"

function App() {

  const posts = [
    {
      title: 'Hello',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, placeat quae sit ea error harum quis excepturi pariatur veniam amet voluptate totam adipisci voluptatum ut recusandae doloremque at dicta dolorem minus rem rerum. Tempore commodi dolorem eos ipsa deleniti itaque quam nesciunt laborum?'
    }, {
      title: 'hello again',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }
  ]

  return (
    <div className="App">
      <Header></Header>
      <div className="posts">
        {posts.map(post => <Post key={post.title} {...post}></Post>)}
      </div>
    </div>
  )
}

export default App
