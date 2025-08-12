import { useState } from "react";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    emailId: "",
    phoneNumber: "",
    projectSize: "",
    product: "Cast-In-Situ Flooring",
    message: "",
  });
  return (
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6 max-w-2xl">
        <h2 class="text-3xl font-bold text-center mb-8">Start Your Project Today</h2>
        <form id="contact-form" class="bg-white p-8 rounded-xl shadow-xl space-y-6">
          <div>
            <label for="name" class="block font-bold mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formDetails.name}
              onChange={(e) => {
                setFormDetails({ ...formDetails, name: e.target.value });
              }}
              class="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label for="phoneNumber" class="block font-bold mb-1">
              Phone Number
            </label>
            <input
              value={formDetails.phoneNumber}
              onChange={(e) => {
                if (formDetails.phoneNumber === "") {
                  setFormDetails({ ...formDetails, phoneNumber: "+91 " + e.target.value });
                } else {
                  setFormDetails({ ...formDetails, phoneNumber: e.target.value });
                }
              }}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              class="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="8888899999"
              required
            />
          </div>
          <div>
            <label for="email" class="block font-bold mb-1">
              Email
            </label>
            <input
              type="text"
              value={formDetails.emailId}
              onChange={(e) => {
                setFormDetails({ ...formDetails, emailId: e.target.value });
              }}
              id="email"
              name="email"
              class="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="hello@example.com"
              required
            />
          </div>
          <div>
            <label for="project-size" class="block font-bold mb-1">
              Estimated Project Size (sqft)
            </label>
            <input
              type="number"
              value={formDetails.projectSize}
              onChange={(e) => {
                setFormDetails({ ...formDetails, projectSize: e.target.value });
              }}
              id="project-size"
              name="project-size"
              class="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="2500"
            />
          </div>
          <div>
            <label for="interest" class="block font-bold mb-1">
              Interested Product/Service
            </label>
            <select
              id="interest"
              name="interest"
              value={formDetails.product}
              onChange={(e) => {
                setFormDetails({ ...formDetails, product: e.target.value });
              }}
              class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              required
            >
              <option value="Cast-In-Situ Flooring">Cast-In-Situ Flooring</option>
              <option value="Custom Panels">Custom Panels</option>
              <option value="Color & Aggregate Consultation">Color & Aggregate Consultation</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
          <div>
            <div class="flex justify-between items-center mb-1">
              <label for="message" class="block font-bold">
                Message / Project Idea
              </label>
              <button type="button" id="generate-vision-btn" class="text-sm text-[#E2725B] hover:underline flex items-center gap-1">
                ✨ Generate Project Vision
                <span id="vision-spinner" class="spinner hidden"></span>
              </button>
            </div>
            <textarea
              value={formDetails.message}
              onChange={(e) => {
                setFormDetails({ ...formDetails, message: e.target.value });
                console.log(formDetails);
              }}
              id="message"
              name="message"
              rows="4"
              class="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Describe your project idea here... e.g., 'A modern cafe with a warm, inviting feel, about 1500 sqft'"
            ></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="w-full bg-[#E2725B] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#d1614a] transition-transform hover:scale-105 shadow-lg">
              Send Enquiry
            </button>
          </div>
          <div id="form-success-message" class="hidden text-center p-3 bg-green-100 text-green-800 rounded-lg">
            Thank you for your enquiry! We will be in touch soon.
          </div>
        </form>
      </div>
    </section>
  );
};
