import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Post } from "./components/Post";
import { User } from "./components/User";
import { PostData } from "./types";
import { postsDataUrl } from "./constants";
import { fetchData } from "./helper";
import "./firebase";

const App = () => {
  // posts response data
  const [posts, setPosts] = useState<PostData[] | undefined>(undefined);

  useEffect(() => {
    fetchData(postsDataUrl).then((data) => {
      setPosts(data.posts);
      console.log(data);
    });
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <div className="main max-w-lg mx-auto pb-8 bg-yellow">
        {!!posts && (
          <div className="posts pb-16">
            {posts.map((post) => (
              <Post post={post} key={post.id}>
                <User user={post.user} />
              </Post>
            ))}
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
