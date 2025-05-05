import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setMessage(
        "Thank you! We've received your message and will get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
    }
  };

  return (
    <section
      className="relative py-[60px] lg:py-[120px] px-4 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/purplepaint.jpg")',
        imageRendering: "crisp-edges",
      }}
    >
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 px-4 lg:px-8 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up opacity-0">
            <div>
              <h5 className="text-light-purple uppercase text-[16px] md:text-[20px] tracking-wide mb-4 text-center lg:text-left">
                Let's Connect
              </h5>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center lg:text-left">
                Get in Touch
              </h1>
              <p className="text-black font-light text-base lg:text-lg mb-6 text-center lg:text-left">
                Have a question about a painting or a piece? I'd love to hear
                from you.
              </p>
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start w-full animate-fade-up-1 opacity-0">
              <div className="flex items-start space-x-4 w-full max-w-[250px]">
                <div className="bg-custom-purple p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600 text-base lg:text-lg">
                    vlouisehampton@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 w-full max-w-[250px]">
                <div className="bg-custom-purple p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Location
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg">
                    Langhorne, Pennsylvania
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-up-2 opacity-0">
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                {message}
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                {message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full inline-block uppercase relative bg-custom-purple text-white px-[40px] py-[20px] rounded-md text-[16px] shadow-md
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
                  hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden
                  ${
                    status === "submitting"
                      ? "opacity-75 cursor-not-allowed"
                      : ""
                  }`}
              >
                <span className="relative z-10">
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
