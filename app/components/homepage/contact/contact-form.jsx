"use client";
import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm({ showTitle = true }) {
  const formRef = useRef();
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const serviceID = "service_nbvvakf";
      const templateID = "template_9tp2mhr";
      const publicKey = "iJw5uiyYuwhqGAlLt";

      // If keys are in environment variables, use them:
      // const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      // const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      // const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: userInput.name,
        to_name: "Arindam Gupta",
        message: userInput.message,
        from_email: userInput.email,
        reply_to: userInput.email, 
      };

      console.log("Sending email with params:", templateParams);
      const res = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log("EmailJS Response:", res);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      };
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      {showTitle && <p className="font-medium mb-4 sm:mb-5 text-[#16f2b3] text-lg sm:text-xl uppercase">Contact with me</p>}
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 sm:p-4 lg:p-5">
        <p className="text-xs sm:text-sm text-[#d3d8e8] leading-relaxed">{"If you have any questions or concerns, please don't hesitate to contact me."}</p>
        <form ref={formRef} onSubmit={handleSendMail} className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-sm sm:text-base"
              type="text"
              name="from_name"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-sm sm:text-base"
              type="email"
              name="from_email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-xs sm:text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-sm sm:text-base resize-y min-h-[100px]"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-xs sm:text-sm text-red-400">
              All fields are required!
            </p>}
            <button
              className="flex items-center justify-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 sm:px-8 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold w-full sm:w-auto"
              type="submit"
              disabled={isLoading}
            >
              {
                isLoading ?
                <span>Sending Message...</span>:
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;