import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";
import CreatePost from "./components/form";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("CreatePost");

  return (
    <PostListProvider>
      <div className="app-Container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>

        <div className="Other-Bar">
          <Headers></Headers>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
