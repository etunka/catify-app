import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import User from "./components/User";

const App = () => (
  <div className="bg-white">
    <Header />
    <div className="main max-w-lg mx-auto pb-8 bg-yellow">
      <div className="entries pb-16 pt-2">
        <Post
          image="./images/funny-cat-01.png"
          likes="45"
          date="6 HOURS AGO"
          comments={["comment1", "comment2", "comment3"]}
          caption="Cat ipsum dolor sit amet, chew the plant. Check cat door for ambush 10 times before coming in sniff other cat's butt and hang jaw half open thereafter."
        >
          <User image="./images/crazy03.png" name="Ricky Ticky Tabby" />
        </Post>
        <Post
          image="./images/funny-cat-02.png"
          likes="128"
          date="8 HOURS AGO"
          caption="Steal raw zucchini off kitchen "
        >
          <User image="./images/crazy02.png" name="Cindy Clawford" />
        </Post>
        <Post image="./images/funny-cat-03.png" likes="256" date="1 DAY AGO">
          <User image="./images/crazy01.png" name="I_Love_My_Kitty" />
        </Post>
      </div>
    </div>
    <Navbar />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
