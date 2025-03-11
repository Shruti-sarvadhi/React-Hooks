import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts as fetchPostsAPI, updatePost as updatePostAPI, deletePost as deletePostAPI } from "@/store";
import { AppDispatch } from "@/store/store"; // Import correct type for dispatch

type Post = {
  id: number;
  title: string;
  content: string;
};

type WithPostsProps = {
  posts: Post[];
  updatePost: (id: number, updatedData: Partial<Post>) => void;
  deletePost: (id: number) => void;
};

export const withPosts = <P extends object>(
  Component: React.ComponentType<P & WithPostsProps>
) => {
  return function WrappedComponent(props: P) {
    const dispatch = useDispatch<AppDispatch>(); // Use typed dispatch
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      dispatch(fetchPostsAPI())
        .unwrap()
        .then((response) => setPosts(response))
        .catch((error) => {
          // Handle the error appropriately
          alert("Error fetching posts: " + error.message);
        });
    }, [dispatch]);

    const updatePost = async (id: number, updatedData: Partial<Post>) => {
      try {
        const response: Post = await dispatch(updatePostAPI({ id, data: updatedData })).unwrap();
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === id ? response : post))
        );
      } catch (error) {
        if (error instanceof Error) {
          alert("Error updating post: " + error.message);
        } else {
          alert("Error updating post");
        }
      }
    };

    const deletePost = async (id: number) => {
      try {
        await dispatch(deletePostAPI(id)).unwrap();
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      } catch (error) {
        if (error instanceof Error) {
          alert("Error deleting post: " + error.message);
        } else {
          alert("Error deleting post");
        }
      }
    };

    return <Component {...props} posts={posts} updatePost={updatePost} deletePost={deletePost} />;
  };
};

export default withPosts;