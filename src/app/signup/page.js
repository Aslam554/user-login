"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { registerUserAction } from '@/actions';

const Page = () => {
  const [signUpFormData, setSignUpFormData] = useState({ fname: "", lname: "", email: "", password: "" });
  const router = useRouter();

  function handleSignUpBtnValid() {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  }

  async function handleSignUp(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const result = await registerUserAction(signUpFormData);
    console.log(result);
    if (result?.data) {
      router.push("/signin");
    }
  }

  return (
    <div className='bg-white w-[350px] h-[70vh] border-2 mx-auto my-[10%] border-white rounded-lg p-[45px] hover:drop-shadow-2xl hover:transition-all hover:scale-[1.02] duration-100 pt-0'>
      <form onSubmit={handleSignUp}> {/* Corrected onSubmit handler */}
        <p className='mt-[15px]'>Have account? <Link href='signin' className='underline text-[#502ec3]'>Login Here</Link> now</p>
        <h1 className='text-[26px] mb-8 font-bold'>Create Your Account</h1>

        <label>First Name</label><br />
        <input 
          type="text" 
          name="fname" 
         
          className='border-2  text-[20px] px-2 rounded-lg mb-4' 
          placeholder='john' 
          value={signUpFormData.fname} 
          onChange={(event) =>
            setSignUpFormData({
              ...signUpFormData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <br />

        <label>Last Name</label><br />
        <input 
          type="text" 
          name="lname" 
          className='border-2 text-[20px] px-2 rounded-lg mb-4' 
          placeholder='doe' 
          value={signUpFormData.lname} 
          onChange={(event) =>
            setSignUpFormData({
              ...signUpFormData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <br />

        <label>Email Address</label><br />
        <input 
          type="email" 
          name="email" 
          className='border-2 text-[20px] px-2 rounded-lg mb-4' 
          placeholder='john_doe@gmail.com' 
          value={signUpFormData.email} 
          onChange={(event) =>
            setSignUpFormData({
              ...signUpFormData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <br />
        
        <label>Password</label><br />
        <input 
          type="password" 
          name="password" 
          className='border-2 text-[20px] px-2 rounded-lg mb-6' 
          placeholder='your password' 
          value={signUpFormData.password} 
          onChange={(event) =>
            setSignUpFormData({
              ...signUpFormData,
              [event.target.name]: event.target.value,
            })
          }
        />
        <br />

        <input 
          disabled={!handleSignUpBtnValid()} 
          type="submit" 
          value="Create Account" 
          className='bg-[#502ec3] text-[22px] text-white w-[250px] rounded-lg hover:bg-[#f5e60d] hover:text-black hover:transition-all hover:scale-[1.02] duration-100' 
        />
      </form>
    </div>
  );
};

export default Page;
