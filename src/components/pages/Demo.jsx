import React from "react";
import Navbar from "../atoms/Navbar";
import Footer from "../organism/Footer";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../atoms/Input";
import Typography from "../atoms/Typography";
import countryOptions from "../../constants/data-country";
import ReCAPTCHA from "react-google-recaptcha";

const Demo = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="w-full min-h-screen bg-[#eaeaea] flex flex-col">
      <Navbar variant="default" className="mt-7" />
      <div className="container mt-4 md:mt-6 lg:mt-16">
        <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto shadow-md">
          <div className="py-4 border-b border-gray-200 mb-4">
            <Typography
              className="text-primary-blue text-center mb-4 font-bold 
            text-xl md:text-3xl lg:text-4xl"
            >
              Demo Request Form
            </Typography>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <Input
                name="email"
                label="Business Email"
                type="email"
                placeholder="Enter Email"
                required
                validation={{
                  required: "Business Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
              />

              <Input
                name="firstName"
                label="First Name"
                placeholder="Enter First Name"
                required
                validation={{
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                }}
              />

              <Input
                name="lastName"
                label="Last Name"
                placeholder="Enter Last Name"
                required
                validation={{
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                }}
              />

              <Input
                name="title"
                label="Title"
                placeholder="Enter Your Title"
                required
                validation={{
                  required: "Title is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                }}
              />

              <Input
                name="companyName"
                label="Company Name"
                placeholder="Enter Your Company Name"
                required
                validation={{
                  required: "Company name is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                }}
              />

              <Input
                name="companySize"
                label="Company Size"
                type="select"
                placeholder="Select company size"
                selectOptions={[]}
                required
              />

              <Input
                name="country"
                label="Country"
                type="select"
                placeholder="Select country"
                selectOptions={countryOptions}
                required
              />

              <Input
                name="usesCase"
                label="Uses Case"
                type="textarea"
                placeholder="Enter Uses Case"
                required
                rows={4}
                className="!resize-none"
                res
                validation={{ required: "Uses Case is required" }}
              />

              {/* Google reCAPTCHA UI */}
              <div className="mt-4 mb-10">
                <ReCAPTCHA
                  sitekey="6Ldo7icrAAAAAO6-NGPcDPlzD_mLVCof0pEf92zd"
                  onChange={handleRecaptchaChange}
                  className="mx-auto"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-blue hover:bg-primary-blue-hover cursor-pointer text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Demo;
