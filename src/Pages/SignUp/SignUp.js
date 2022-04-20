import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import WhichPage from '../../Components/whichPageComponent/WhichPage'


import avatarPreviewImage from '../../images/avatarPreview.png'

const SignUp = () => {

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    // const [name, setName] = useState("")
    // const [avatar, setAvatar] = useState("")
    const [avatarPreview, setAvatarPreview] = useState(avatarPreviewImage)

   
    const handleChange = (e) => {
        if (e.target.value) {
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <>
            <WhichPage whichPage="Sign Up" />

            <section className="min-h-fit pb-16 px-4 ">

                <div className=" py-14 ml-8 sm:ml-[5.4rem]  hover:text-green-500 ">
                    <div className="border-[2px] w-[10vmin] border-green-500 my-2"></div>
                    <h1 className="text-[5vmin] font-semibold text-left drop-shadow-md ">
                        Register <span className="text-[3vmin] text-gray-400 font-bold hover:text-blue-900">OR</span> Sign Up
                    </h1>
                </div>

                {/* Login Section */}

                <section className="shadow-md py-8 sm:w-10/12 md:w-8/12 lg:w-7/12 m-auto  p-4 space-y-4">

                    <form action="" className=" space-y-4">
                        <input type="text" className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                            placeholder="Name" />
                        <input type="email" className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                            placeholder="Email" />
                        <input type="password" className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                            placeholder="Password" />
                        <input type="password" className="bg-gray-200 shadow-sm px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] py-2 w-full outline-none rounded-md"
                            placeholder="Confirm Password" />

                        <div className="flex flex-col items-center space-y-3">
                            <div className="">
                                <img src={avatarPreview} alt="avatar " className="w-16 h-16 rounded-full border-2 border-green-500 transition-all duration-[.5s] hover:scale-125 cursor-pointer" />
                            </div>
                            <input type="file" className="file:bg-gray-200 file:shadow-sm file:px-3 placeholder:font-normal  ld font-medium border-b-2 border-green-500 box-border border-opacity-0 hover:border-opacity-100 transition-all duration-[0.4s] file:py-2 outline-none w-full rounded-md file:w-full file:border-none file:outline-none"
                                accept='image/*' onChange={handleChange} />

                        </div>

                        <div className="my-4 drop-shadow-sm py-3 w-full  box-border">
                            <div className=" inline relative hoverEffect text-white  bg-blue-900    py-[1.7vmin] rounded-md ">
                                <button className="text-[2.5vmin] font-bold relative z-[3] w-full ">
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="text-right   py-4 lg:px-4 truncate">

                        <Link to="/login" className="text-right text-gray-500 text-sm hover:text-green-500"><span className="font-semibold drop-shadow-md">have an account?</span> Sign In</Link>
                    </div>


                </section>

            </section>
        </>
    )
}

export default SignUp