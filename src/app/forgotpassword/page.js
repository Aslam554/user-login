"use client";
import React, { useState } from "react";
import Link from "next/link";
import { checkEmailAction } from "@/actions";
import { useRouter } from "next/navigation";

const Page = () => {
  const [checkEmail, setCheckEmail] = useState({ email: "" });
  const [result, setResult] = useState(null);  // State to store the result of the email check
  const router = useRouter();

  async function handleEmail(e) {
    e.preventDefault();  // Prevent the default form submission behavior
    const result = await checkEmailAction(checkEmail);
    setResult(result);  // Store the result of the email check
    console.log(result);
    if (result?.success) {
      router.push("/");  // Redirect to home page on success
    }
  }

  return (
    <div className='bg-white w-[350px] h-[60vh] border-2 mx-auto my-[10%] border-white rounded-lg p-[45px] hover:drop-shadow-2xl hover:transition-all hover:scale-[1.02] duration-100'>
      <form onSubmit={handleEmail}>  {/* Corrected onSubmit handler */}
        <h1>Forgot Password!</h1>
        <h1 className='text-[20px] mb-8 font-bold'>Create new password</h1>

        <label>Your Email</label><br />
        <input
          type="email"
          name="email"
          className='border-2 text-[20px] px-2 rounded-lg mb-4'
          placeholder='xyz12@gmail.com'
          value={checkEmail.email}  // Corrected value assignment
          onChange={(event) =>
            setCheckEmail({
              ...checkEmail,
              email: event.target.value,  // Correctly update the email field
            })
          }
        />
        <br />
        <label>Set New Password</label><br />
        <input
          type="password"
          name="password"
          className='border-2 text-[20px] px-2 rounded-lg mb-4'
          placeholder='new password'
          value={checkEmail.password}  // Corrected value assignment
          onChange={(event) =>
            setCheckEmail({
              ...checkEmail,
              password: event.target.value,  // Correctly update the email field
            })
          }
        />


        <input
          type="submit"
          value="Verify Email"
          className='bg-[#502ec3] text-[22px] text-white px-20 w-[250px] rounded-lg hover:bg-[#f5e60d] hover:text-black hover:transition-all hover:scale-[1.02] duration-100'
        />
        
      </form>
      {/* Conditionally render content based on the result of the email check
      {result && (
        <div className='mt-[15px]'>
          {result.success ? (
            <p>Email exists. <Link href='/'>Sign in</Link> now</p>
          ) : (
            <p>Email does not exist. <Link href='/signup'>Sign up</Link> now</p>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Page;

