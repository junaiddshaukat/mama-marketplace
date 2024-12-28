// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'

// export default function CheckoutPage() {
//   // State for password visibility and form data
//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     confirmPassword: '',
//     email: '',
//     confirmEmail: '',
//     firstName: '',
//     lastName: '',
//     address1: '',
//     address2: '',
//     location: '',
//     federalState: '',
//     postalCode: '',
//     country: 'United States of America',
//     phone: '',
//     cardNumber: '',
//     expiryMonth: '',
//     expiryYear: '',
//     cvc: ''
//   })

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // TODO: Implement form submission logic
//     console.log('Form submitted:', formData)
//   }

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   return (
//     <div className="min-h-screen bg-white p-4 md:p-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-6">Check out</h1>
        
//         {/* Payment service provider notice */}
//         <div className="bg-blue-50 p-4 rounded-lg mb-8">
//           <p className="text-blue-800">A payment service provider must be selected before payments can be made.</p>
//         </div>

//         {/* Membership Information */}
//         <div className="bg-white rounded-lg border p-6 mb-8">
//           <h2 className="text-xl font-semibold mb-4">Membership Information</h2>
//           <p className="mb-2">You have selected the <span className="font-semibold">Pro</span> membership level.</p>
//           <p>The price for access is <span className="font-semibold">CHF 120.00 per year</span></p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Account Information */}
//           <div className="bg-white rounded-lg border p-6">
//             <h2 className="text-xl font-semibold mb-6">account information</h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block mb-1">Username <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="username"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.username}
//                   onChange={handleChange}
//                 />
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block mb-1">Password <span className="text-red-500">*</span></label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       required
//                       className="w-full p-2 border rounded-lg"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       Show Password
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block mb-1">Confirm password <span className="text-red-500">*</span></label>
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     required
//                     className="w-full p-2 border rounded-lg"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block mb-1">e-mail address <span className="text-red-500">*</span></label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     className="w-full p-2 border rounded-lg"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">Confirm e-mail address <span className="text-red-500">*</span></label>
//                   <input
//                     type="email"
//                     name="confirmEmail"
//                     required
//                     className="w-full p-2 border rounded-lg"
//                     value={formData.confirmEmail}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Billing Address */}
//           <div className="bg-white rounded-lg border p-6">
//             <h2 className="text-xl font-semibold mb-6">billing address</h2>
//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1">First name <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Last name <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Address 1 <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="address1"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.address1}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Address 2</label>
//                 <input
//                   type="text"
//                   name="address2"
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.address2}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Location <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="location"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.location}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Federal State <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="federalState"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.federalState}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Postal code <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="postalCode"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.postalCode}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Country <span className="text-red-500">*</span></label>
//                 <select
//                   name="country"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.country}
//                   onChange={handleChange}
//                 >
//                   <option value="United States of America">United States of America</option>
//                   {/* TODO: Add more countries */}
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1">Phone <span className="text-red-500">*</span></label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Payment Information - Moved to the end */}
//           <div className="bg-white rounded-lg border p-6">
//             <h2 className="text-xl font-semibold mb-6">payment information</h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block mb-1">card number <span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   required
//                   className="w-full p-2 border rounded-lg"
//                   value={formData.cardNumber}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block mb-1">Expiration month <span className="text-red-500">*</span></label>
//                   <input
//                     type="text"
//                     name="expiryMonth"
//                     placeholder="MM"
//                     required
//                     maxLength="2"
//                     className="w-full p-2 border rounded-lg"
//                     value={formData.expiryMonth}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">Expiration year <span className="text-red-500">*</span></label>
//                   <input
//                     type="text"
//                     name="expiryYear"
//                     placeholder="YYYY"
//                     required
//                     maxLength="4"
//                     className="w-full p-2 border rounded-lg"
//                     value={formData.expiryYear}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">Security Code (CVC) <span className="text-red-500">*</span></label>
//                   <input
//                     type="text"
//                     name="cvc"
//                     required
//                     maxLength="4"
//                     className="w-full p-2 border rounded-lg"
//                     value={formData.cvc}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-start">
//             <button
//               type="submit"
//               className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition-colors"
//             >
//               Confirm payment
//             </button>
//           </div>
//         </form>

//         {/* Login link */}
//         <div className="mt-6 text-center text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-green-600 hover:underline">
//             Log in here
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegistrationMutation } from "../redux/features/auth/authapi";

export default function RegisterForm() {
  const router = useRouter();
  const [register, { isLoading ,data}] = useRegistrationMutation();

  // Form states based on the schema, without avatar
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response= await register(formData).unwrap(); // Send API request
      alert(response?.message);
      router.push("/verify");
    } catch (error) {
      alert(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Create an account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            minLength={2}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Creating account..." : "Create account"}
        </button>
      </form>
    </div>
  );
}
