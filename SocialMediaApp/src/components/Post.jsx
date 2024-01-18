import { MdDeleteForever } from "react-icons/md";

const Post = ({ post }) => {
  return (
    <div className="card badges" style={{ width: "30rem" }}>
      <div className="card-body ">
        <h5 className="card-title ">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDeleteForever />

            <span class="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hastag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
