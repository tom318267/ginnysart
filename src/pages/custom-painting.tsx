import React, { useState, useEffect, useRef } from "react";

const selectClassName = `p-2 pl-4 pr-10 border border-gray-300 rounded-md text-sm w-full 
  focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple
  appearance-none bg-white bg-[url('/images/chevron-down.svg')] bg-no-repeat bg-[center_right_1rem] bg-[length:16px_16px]`;

const CustomPaintingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    size: "",
    style: "",
    description: "",
    budget: "",
    timeline: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const successMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/custom-painting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit request");
      }

      setStatus("success");
      setMessage(
        "Thank you! We've sent you a confirmation email and will contact you soon."
      );
      setFormData({
        name: "",
        email: "",
        size: "",
        style: "",
        description: "",
        budget: "",
        timeline: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit request. Please try again later."
      );
    }
  };

  return (
    <section
      className="relative py-[60px] lg:py-[120px] px-4 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/orangeback2.jpg")',
        imageRendering: "crisp-edges",
        // For Safari support
      }}
    >
      <div className="absolute inset-0 bg-white/80 md:bg-white/60"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 px-4 lg:px-8 lg:grid-cols-2 gap-12">
          {/* Information Side */}
          <div className="space-y-8 animate-fade-up opacity-0">
            <div>
              <h5 className="text-light-purple uppercase text-[16px] md:text-[20px] tracking-wide mb-4 text-center lg:text-left">
                Commission Art
              </h5>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[60px] text-black mb-4 text-center lg:text-left">
                Request a Custom Painting
              </h1>
              <p className="text-black text-base lg:text-lg font-light mb-6 text-center lg:text-left">
                Let's create something unique together. Fill out the form to
                start the conversation about your custom painting.
              </p>
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start w-full animate-fade-up-1 opacity-0">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-[500px]">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center lg:text-left">
                  How It Works
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="bg-custom-purple text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm">
                      1
                    </span>
                    <p className="text-gray-600 text-base">
                      Fill out the form with your painting preferences and
                      requirements
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-custom-purple text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm">
                      2
                    </span>
                    <p className="text-gray-600 text-base">
                      We'll review your request and contact you to discuss
                      details
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-custom-purple text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm">
                      3
                    </span>
                    <p className="text-gray-600 text-base">
                      Once approved, we'll begin creating your custom
                      masterpiece
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="bg-custom-purple text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm">
                      4
                    </span>
                    <p className="text-gray-600 text-base">
                      Your painting will be carefully packaged and delivered to
                      you
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Request Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-up-2 opacity-0 hover:shadow-2xl transition-shadow duration-300">
            {status === "success" && (
              <div
                ref={successMessageRef}
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-md"
              >
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
                  Preferred Size
                </label>
                <select
                  value={formData.size}
                  onChange={(e) =>
                    setFormData({ ...formData, size: e.target.value })
                  }
                  className={selectClassName}
                  required
                >
                  <option value="">Select a size</option>
                  <option value="small">Small (up to 16" x 20")</option>
                  <option value="medium">Medium (up to 24" x 36")</option>
                  <option value="large">Large (up to 36" x 48")</option>
                  <option value="custom">Custom Size</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Style Preference
                </label>
                <select
                  value={formData.style}
                  onChange={(e) =>
                    setFormData({ ...formData, style: e.target.value })
                  }
                  className={selectClassName}
                  required
                >
                  <option value="">Select a style</option>
                  <option value="abstract">Abstract</option>
                  <option value="landscape">Landscape</option>
                  <option value="floral">Floral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description of Your Vision
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple"
                  placeholder="Please describe your ideas, color preferences, and any specific elements you'd like included..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className={selectClassName}
                  required
                >
                  <option value="">Select a budget range</option>
                  <option value="under500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="over2000">Over $2,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className={selectClassName}
                  required
                >
                  <option value="">Select a timeline</option>
                  <option value="1-2months">1-2 months</option>
                  <option value="2-3months">2-3 months</option>
                  <option value="3-4months">3-4 months</option>
                  <option value="flexible">Flexible</option>
                </select>
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
                  {status === "submitting" ? "Submitting..." : "Submit Request"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPaintingPage;
