"use client"
import { useState } from "react";
const RefundForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        payment_method: "",
        card_digits: "",
        invoice_num: "",
        order_date: "",
        refund_reason: "",
        message: "",
        botchecker: null
    });
    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [formStatus, setFormStatus] = useState("Submit");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone is required";
        }
        // Payment validation
        if (!data.payment_method) {
            errors.payment_method = "Payment Method is required";
        }

        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };
                let bodyContent = JSON.stringify(data);
                let reqOptions = {
                    method: "POST",
                    headers: headersList,
                    body: bodyContent,
                };
                try {
                    const response = await fetch("/api/refund/", reqOptions);
                    if (response.ok) {
                        window.location.href = "/thank-you";
                    } else {
                        setFormStatus("Failed...");
                        setIsDisabled(false);
                    }
                } catch (error) {
                    setFormStatus("Failed...");
                    setIsDisabled(false);
                }
            } else {
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
    };
    return (
        <form
            autoComplete="off"
            spellCheck="false"
            className="w-[95%] mx-auto"
        >
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 items-center">
                <div>
                    <input
                        autoComplete="off"
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        value={data.name}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out mb-4"
                    />
                    {errors.name && (
                        <span className="text-[12px] block py-2 font-medium text-red-500">
                            {errors.name}
                        </span>
                    )}
                </div>
                <div>
                    <input
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        value={data.email}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out mb-4"
                    />
                    {errors.email && (
                        <span className="text-[12px] block py-2 font-medium text-red-500">
                            {errors.email}
                        </span>
                    )}
                </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 items-center">
                <div>
                    <input
                        autoComplete="off"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        id="phone"
                        value={data.phone}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out mb-4"
                    />
                    {errors.phone && (
                        <span className="text-[12px] block py-2 font-medium text-red-500">
                            {errors.phone}
                        </span>
                    )}
                </div>
                <div className="relative mb-4">
                    <select
                        name="payment_method"
                        id="payment_method"
                        value={data.payment_method}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out appearance-none "
                    >
                        <option value="" disabled>Payment Method</option>
                        <option value="Card">Card</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Wire">Wire</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {errors.payment_method && (
                        <span className="text-[12px] block py-2 font-medium text-red-500">
                            {errors.payment_method}
                        </span>
                    )}
                </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 items-center">
                <div>
                    <input
                        autoComplete="off"
                        type="text"
                        name="card_digits"
                        placeholder="Last 4 Card Digits"
                        id="card_digits"
                        value={data.card_digits}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out mb-4"
                    />
                </div>
                <div>
                    <input
                        autoComplete="off"
                        type="text"
                        name="invoice_num"
                        placeholder="Invoice Number"
                        id="invoice_num"
                        value={data.invoice_num}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out mb-4"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 items-center">
                <div>
                    <input
                        autoComplete="off"
                        type="date"
                        name="order_date"
                        placeholder="Order Date"
                        id="order_date"
                        value={data.order_date}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <select
                        name="refund_reason"
                        id="refund_reason"
                        value={data.refund_reason}
                        onChange={handleDataChange}
                        className="bg-[#262626] rounded-xl py-4 px-4 block w-full text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out appearance-none "
                    >
                        <option value="" disabled>Refund Reason</option>
                        <option value="Pre-delivery refund">Pre-delivery refund</option>
                        <option value="Post-delivery refund">Post-delivery refund</option>
                        <option value="Inactivity">Inactivity</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <textarea
                autoComplete="off"
                name="message"
                id="message"
                placeholder="Message"
                value={data.message}
                onChange={handleDataChange}
                className="bg-[#262626] rounded-xl py-4 px-4 block w-full mb-4 text-white outline-none placeholder:text-[#8F8F8F] text-[15px] font-normal leading-tight focus-visible:outline-none focus-visible:outline-[#dee56f] focus-visible:outline-1 border border-[#69727d] focus-visible:border-transparent transition-all duration-500 ease-in-out resize-none h-36"></textarea>
            <p className="text-white text-[12px] mb-4">By submitting this form, you acknowledge that you have read and understood our Refund Policy and agree to the terms stated above.</p>
            <button className="bg-[#dee56f] __animatedPing block w-full text-white rounded-xl py-4 px-4 text-[15px] font-medium leading-tight" onClick={handleFormSubmit} disabled={isDisabled}>{formStatus}</button>
        </form>
    )
}
export default RefundForm;