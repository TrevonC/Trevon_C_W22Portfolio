import React from "react";

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 bg-gradient-to-t from-[#08192f] to-blue-400'>
        <form method='POST' action="https://getform.io/f/0092124e-7066-4b1e-bf0b-e1d0790b393a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white text-[#08192f]'>Contact</p>
                <p className='text-gray-300 py-4'>Feel free to fill out this form to send me a message with any inquiry or if you'd like to work with me!
                You can also reach me here: Trevonccg@hotmail.com</p>
            </div>
            <input className='bg-[#ededed] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ededed]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ededed] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center bg-green-500 
                        border-green-500 hover:bg-red-500 hover:border-red-500 animate-pulse ease-out transform hover:scale-125 transition duration-500'>Let's connect!</button>
        </form>
    </div>
    )
}

export default Contact;