"use client";
import React, { useState } from "react";
import Link from "next/link";
import { loginUserAction } from "@/actions";
import { useRouter } from "next/navigation";

const Page = () => {
  const [signInFormData, setSignInFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  async function handleSignIn(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    const result = await loginUserAction(signInFormData);
    console.log(result);
    if (result?.success) {
      router.push("/"); // Redirect to home page on success
    }
  }

  return (
    <div className='bg-white w-[350px] h-[60vh] border-2 mx-auto my-[10%] border-white rounded-lg p-[45px] hover:drop-shadow-2xl hover:transition-all hover:scale-[1.02] duration-100'>
      <form onSubmit={handleSignIn}>
        <h1>Welcome back 👏</h1>
        <h1 className='text-[20px] mb-8 font-bold'>Sign in to your account</h1>

        <label>Your Email</label><br />
        <input
          type="email"
          name="email"
          className='border-2 text-[20px] px-2 rounded-lg mb-4'
          placeholder='xyz12@gmail.com'
          value={signInFormData.email}
          onChange={(event) =>
            setSignInFormData({
              ...signInFormData,
              email: event.target.value
            })
          }
        />
        <br />
        <label>Password</label><br />
        <input
          autoComplete='pwd'
          type="password"
          name="password"
          className='border-2 text-[20px] px-2 rounded-lg mb-6'
          placeholder='your password'
          value={signInFormData.password}
          onChange={(event) =>
            setSignInFormData({
              ...signInFormData,
              password: event.target.value
            })
          }
        />
        <br />
        <input
          type="submit"
          value="Login"
          className='bg-[#502ec3] text-[22px] text-white px-20 w-[250px] rounded-lg hover:bg-[#f5e60d] hover:text-black hover:transition-all hover:scale-[1.02] duration-100'
        />
      </form>
      <p className='mt-[15px]'>Don't have an account? <Link href='signup' className='underline text-[#502ec3]'>Sign up</Link> now</p>
      <Link href={'/forgotpassword'} className='underline text-violet-900'>Forgot Password?</Link>
    </div>
  );
};

export default Page;
