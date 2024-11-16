"use client"
import React, { useState } from 'react'
import { postAction } from "@/actions";
import { useRouter } from "next/navigation";
const Post = () => {
  const [postData, setpostData] = useState("")
  const router = useRouter();

  async function handlePost() {
    const result = await postAction(postData);
    console.log(result);
    if (result?.success) {
     
      console.log(result);
      localStorage.set(result.data.post)
      console.log("2nd time local storage",localStorage.get(result.data.post))
      router.push("/");
    }
  }
  return (
    <div className=' w-[430px] h-[70px] border-2 mx-auto pb-1 flex items-center justify-between border-white rounded-lg p-[45px] hover:drop-shadow-2xl hover:transition-all hover:scale-[1.02] duration-100 pt-0'>
      <form action={handlePost}>
        <textarea  
         className='text-black text-2xl border-2 rounded-lg mt-2 border-gray-300 w-[260px] h-[50px]' name='post' value={setpostData[name]}
          onChange={(event) =>
            setpostData({
              ...postData,
              [event.target.name]: event.target.value,
            })
          }></textarea>
        <input type="submit" value="+" className='bg-[#502ec3] text-[32px] font-serif font-extrabold text-white     w-[70px]  translate-y-[-18px] h-[48px] rounded-lg hover:bg-[#f5e60d] hover:text-black hover:transition-all hover:scale-[1.01] duration-100 ' />
      </form>
    </div>
  )
}

export default Post