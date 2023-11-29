import React from "react"
// import {"../App"}
const Contact = () => {
    return (
        <div id="contact" className="contmain">
            <h1 className="mt-4 p-4 py-4 text-4xl font-bold text-center conth">Contact Me</h1>
            <div>
                <form className=" contdetmain" action="https://getform.io/f/d85a4c1b-ac66-4965-89b5-c101bdccca7b" method="POST" encType="multipart/form-data">
                   <div className="px-20">
                   <div className="flex flex-col">
                            <label className="font-bold mt-4 p-1 py-3">Name</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold mt-1 p-1 py-3" >Phone Number</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                        </div>
                    <div className="flex flex-col">
                        <label className="font-bold mt-1 p-1 py-3">Email</label>
                        <input className="border-2 p-3 rounded-lg flex border-gray-300" type="email" name="email" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold mt-1 p-1 py-3">Subject</label>
                        <input className="border-2 rounded-lg  p-3 flex border-gray-300" type="text" name="subject" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold mt-1 p-1 py-3">Message</label>
                        <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows="10" name ="message"></textarea>
                    </div>
                    <button className="bg-[#ffd6d6] text-gray-100 mt-4 w-full p-4 rounded-lg sendbutcss">
                        Send Message
                    </button>

                   </div>
                        
                </form>
            </div>
        </div>
    )
}
export default Contact