import styles from "./Posts.module.css";
import { useEffect, useState } from "react";
import { userInSession } from "../../utilities/userInSession";
import { fetchWrapperParam, getApi } from "../../utilities/fetchWrapper";
import { urlPaths } from "../../utilities/urlPaths";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { ErrorBoundaryWrapper } from "../Error/Error";
import { useErrorBoundary } from "react-error-boundary";
import { Cards } from "../../components/Cards/Cards";
const Posts = () => {
  const [status, setStatus] = useState<"done" | "pending">("pending");
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    async function asyncHandler() {
      try {
        const user = await userInSession();
        const postsParams: fetchWrapperParam = {
          url: urlPaths.postUrl.posts,
          opts: {
            headers: {
              authorization: `Bearer ${user?.accessToken}`,
            },
          },
        };
        const response = await getApi(postsParams);
        if (!response.status) {
          throw new Error(`failed to fetch posts`);
        }
        console.log(`posts : `, response);
        setStatus("done");
      } catch (error) {
        showBoundary(error);
      }
    }
    asyncHandler();
  }, [showBoundary]);
  if (status === "pending") {
    return <LoadingPage />;
  }
  return (
    <section className={styles.posts_container}>
      <h1>See what others have to share</h1>
      <section className={styles.cards_container}>
        <Cards author="shay" postPreview="Hi there!" postTitle="first post" />
        <Cards author="shay" postPreview="Hi there!" postTitle="first post" />
        <Cards author="shay" postPreview="Hi there!" postTitle="first post" />
        <Cards author="shay" postPreview="Hi there!" postTitle="first post" />
        <Cards author="shay" postPreview="Hi there!" postTitle="first post" />
        <Cards author="shay" postPreview="Hi there!" postTitle="first post" />
        <Cards author="shay" postPreview="Hi there!" postTitle="first post" />
      </section>
    </section>
  );
};

const PostsWrapper = () => {
  return (
    <ErrorBoundaryWrapper>
      <Posts />
    </ErrorBoundaryWrapper>
  );
};
export { Posts, PostsWrapper };
