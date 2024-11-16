import { fetchAuthUserAction, fetchPostData } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import Signout from "./components/signout";
import Post from "./components/post";
export default async function Home() {
  try {
    const currentUser = await fetchAuthUserAction();
    const userPost = await fetchPostData();

    console.log(currentUser, userPost);

    if (!currentUser?.success) {
      redirect("/signin");
      return null;  // Ensuring no further rendering after redirection
    }

    return (
      <div className="w-[100vw] bg-[#502ec3] text-white p-[12px] text-[25px] ">
        <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-center">Next JS Authentication</h1>
        <Post />
        </div>
        <hr className="text-green-700" />
        <h2>
          Hi, {currentUser?.data?.fname} <br />
          Welcome to NextJs Auth App {currentUser?.data?.fname} {currentUser?.data?.lname}
        </h2>
        <p>Your Email: {currentUser?.data?.email}</p>
        {/* <p>Post: {userPost?.data?.post ? userPost.data.post : "No posts available"}</p> */}

        <Signout />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p>Something went wrong. Please try again later.</p>;
  }
}
