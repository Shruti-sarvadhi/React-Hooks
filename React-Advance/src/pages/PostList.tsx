import { useState } from "react";
import { withPosts } from "@/components"; // Import the HOC

type Post = {
  id: number;
  title: string;
  content: string;
};


type WithPostsProps = {
    posts: Post[];
    fetchPosts: () => void;
    addPost: (newPost: Omit<Post, "id">) => Promise<void>;
    updatePost: (id: number, updatedData: Partial<Post>) => Promise<void>;
    deletePost: (id: number) => Promise<void>;
  };
  

const PostList: React.FC<WithPostsProps> = ({ posts, updatePost, deletePost }) => {
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editData, setEditData] = useState<{ title: string; content: string }>({ title: "", content: "" });

  const handleEditClick = (post: { id: number; title: string; content: string }) => {
    setEditMode(post.id);
    setEditData({ title: post.title, content: post.content });
  };

  const handleUpdate = (id: number) => {
    updatePost(id, editData);
    setEditMode(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      {posts.map((post: { id: number; title: string; content: string }) => (
        <div key={post.id} className="p-3 border-b">
          {editMode === post.id ? (
            <div>
              <input
                type="text"
                value={editData.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditData({ ...editData, title: e.target.value })}
                className="border p-1 w-full mb-2"
              />
              <textarea
                value={editData.content}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditData({ ...editData, content: e.target.value })}
                className="border p-1 w-full mb-2"
              />
              <button onClick={() => handleUpdate(post.id)} className="bg-green-500 text-white px-3 py-1 rounded">
                Save
              </button>
              <button onClick={() => setEditMode(null)} className="bg-gray-500 text-white px-3 py-1 rounded ml-2">
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.content}</p>
              <button onClick={() => handleEditClick(post)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                Edit
              </button>
              <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default withPosts(PostList) as React.FC<Partial<WithPostsProps>>;

