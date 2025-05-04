import React, { useState } from "react";
import municontact from '../assets/muni-contact.webp';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This is where you would integrate with your email service
      // Example with a hypothetical API endpoint:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulating successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const socialLinks = [
    { icon: "facebook", url: "https://facebook.com" },
    { icon: "instagram", url: "https://instagram.com" },
    { icon: "twitter", url: "https://twitter.com" },
    { icon: "linkedin", url: "https://linkedin.com" }
  ];

  return (
    <section id="contact" className="bg-[#0B061F] md:py-16 pt:6 pb-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left column - Form */}
        <div className="w-full md:w-1/2">
          <h2 className="font-sora text-[32px] leading-[42px] md:leading-[56px] md:text-[46px] font-medium gradient-text mb-6">
            <span>Let's work</span>
            <br />
            <span>together!</span>
          </h2>
          <p className="font-sora font-light text-[16px] leading-[30px] text-[#DDDDDD] mb-4">
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </p>

          <form  action="https://getform.io/f/bzywmmwa" method="POST">
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full p-2 bg-transparent border-b border-[#636363] font-sora font-light text-[18px] leading-[30px] text-[#757575] focus:outline-none focus:border-[#8750F7]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full p-2 bg-transparent border-b border-[#636363] font-sora font-light text-[18px] leading-[30px] text-[#757575] focus:outline-none focus:border-[#8750F7]"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full p-2 bg-transparent border-b border-[#636363] font-sora font-light text-[18px] leading-[30px] text-[#757575] focus:outline-none focus:border-[#8750F7]"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full p-2 bg-transparent border-b border-[#636363] font-sora font-light text-[18px] leading-[30px] text-[#757575] focus:outline-none focus:border-[#8750F7]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#8750F7] hover:bg-[#7040E0] text-white font-medium py-4 px-6 mt-8 rounded-full flex items-center gap-2 transition-colors font-sora font-semibold text-[15px] leading-[15px]shadow-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              )}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-green-400">Message sent successfully!</p>
            )}

            {submitStatus === "error" && (
              <p className="mt-4 text-red-400">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

        {/* Right column - Contact Info */}
        <div className="w-full md:w-1/2 md:pl-8 ">
          <div className="mb-8">
            <img
              src={municontact} // Replace with your actual image path
              alt="contact"
              className="rounded-2xl object-cover h-[220px] max-w-full "
            />
            <p className="font-sora font-light text-[16px] leading-[30px] text-[#DDDDDD] my-4">
              I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.
            </p>

            <div className="space-y-4 text-white">
              <p className="flex items-center gap-2">
                <a href="tel:+917871664798" className="font-sora text-[18px] leading-[30px] text-[#ffffff] font-light">
                  +91 7871664798
                </a>
              </p>

              <p className="flex items-center gap-2">
                <a href="vmuni.812@gmail.com" className="font-sora font-light text-[18px] leading-[30px] text-[#FFFFFF]">
                  vmuni.812@gmail.com
                </a>
              </p>


            </div>
          </div>

          {/* Social Icons */}

                              <div className="flex items-center gap-4 mt-8 flex-wrap">
                                  <div className="flex flex-wrap gap-4 text-[#a47bff]">
                                      {[
                                          { icon: <FaGithub />, link: "https://github.com/muniyasamy124" },
                                          { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muniyasamy-v" },
                                          { icon: <FaWhatsapp />, link: "https://wa.me/918771664798" },
                                          { icon: <FaEnvelope />, link: "mailto:vmuni.812@gmail.com" },
                                      ].map((item, i) => (
                                          <a
                                              key={i}
                                              href={item.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#8750F7] text-xl hover:bg-[#8750F7] hover:text-white transition duration-300"
                                          >
                                              {item.icon}
                                          </a>
                                      ))}
                                  </div>
                              </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


