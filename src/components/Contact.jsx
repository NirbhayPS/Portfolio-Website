import React from "react"

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:p-10  p-4 py-16 bg-[#dfdfcf]">
            <h1 className="mt-4 p-4 py-4 text-4xl font-bold text-left">Contact Me</h1>
            <div>
                <form action="https://getform.io/f/d85a4c1b-ac66-4965-89b5-c101bdccca7b" method="POST" encType="multipart/form-data">
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input className="border-2 rounded-full p-3 flex border-gray-300" type="text" name="name" />
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Phone Number</label>
                            <input className="border-2 rounded-full p-3 flex border-gray-300" type="text" name="phone" />
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 p-3 rounded-full flex border-gray-300" type="email" name="email" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input className="border-2 rounded-full p-3 flex border-gray-300" type="text" name="subject" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows="10" name ="message"></textarea>
                    </div>
                    <button className="bg-[#000000] text-gray-100 mt-4 w-full p-4 rounded-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact