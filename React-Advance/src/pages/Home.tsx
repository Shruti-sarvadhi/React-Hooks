import { Suspense, lazy, useState, useInsertionEffect, useRef, useCallback } from "react";
import { Spinner as LoadingSpinner,Button } from "@/components"; // Placeholder spinner

// Lazy load components
const UserList = lazy(() => import("./UserList"));
const PostList = lazy(() => import("./PostList"));

const Home = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // useInsertionEffect: Runs before DOM mutations (good for injecting styles)
  useInsertionEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transition = "all 0.3s ease-in-out";
    }
  }, []);

  // Optimized handlers using useCallback
  const toggleUsers = useCallback(() => setShowUsers((prev) => !prev), []);
  const togglePosts = useCallback(() => setShowPosts((prev) => !prev), []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <Button ref={buttonRef} onClick={toggleUsers} isLoading={false}>
          {showUsers ? "Hide Users" : "Show Users"}
        </Button>
        <Button onClick={togglePosts} isLoading={false}>
          {showPosts ? "Hide Posts" : "Show Posts"}
        </Button>
      </div>

      {/* Suspense for Lazy Components */}
      <div className="space-y-6">
        {showUsers && (
          <Suspense fallback={<LoadingSpinner />}>
            <UserList />
          </Suspense>
        )}
        {showPosts && (
          <Suspense fallback={<LoadingSpinner />}>
            <PostList />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Home;
