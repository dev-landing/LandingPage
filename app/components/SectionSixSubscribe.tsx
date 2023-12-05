
"use client"

import React, { useState } from "react";
import Image from "next/legacy/image";
import Footer from "./global/Footer";

const SectionSixSubscribe = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const parentNode = event.currentTarget;
    const submitButton = parentNode.querySelector("#zc_spmSubmit");
    if (submitButton) {
      submitButton.remove();
    }
    parentNode.submit();
  };


return (
  <div className="flex flex-col items-center justify-between w-full h-screen">

    {/* Gray banner */}
    <div className="flex flex-col sm:flex-row justify-around items-center sm:items-center bg-inactive w-full py-2 mt-20">
      <div className="w-20 sm:w-48">
        <Image src="/genius_is_common.svg" alt="Genius Is Common" width={130} height={130} layout="responsive" />
      </div>
      <p className="w-[90%] sm:w-[60%] text-center sm:text-left text-sm lg:text-2xl md:text-xl italic">
        <span className="font-semibold">&quot;The Genius is Common Movement </span>
        is about tearing down the Berlin Wall of the word genius.&quot;
        <span className="font-semibold underline"> Be inspired - Be engaged - Be empowered...</span>
      </p>
    </div>

    {/* Submit Form */}
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-[95%] p-2 lg:my-4">
      <p className="text-xl lg:text-6xl font-semibold overflow-hidden text-center lg:text-left">Be <span className="bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text font-bold text-transparent">
        first </span> to hear about our drops <span className="text-sky-600 text-4xl md:text-6xl">.</span></p>

      <div className="border-4 shadow-custom p-4 rounded-tr-lg rounded-bl-lg rounded-br-lg w-full lg:max-w-md mt-10">
          <h2 className="lg:font-semibold font-semibold mb-4">Join our email list to get updates</h2>
          <form method="POST" action="https://zmp-glf.maillist-manage.com/weboptin.zc" target="_zcSignup" onSubmit={handleSubmit}>

            <input type="hidden" id="fieldBorder" value="" />
            <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
            <input type="hidden" id="emailReportId" name="emailReportId" value="" />
            <input type="hidden" id="formType" name="formType" value="QuickForm" />
            <input type="hidden" name="zx" id="cmpZuid" value="131eb0d13" />
            <input type="hidden" name="zcvers" value="3.0" />
            <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
            <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
            <input type="hidden" id="zcld" name="zcld" value="11063344567cc9b34" />
            <input type="hidden" id="zctd" name="zctd" value="11063344567cc83c1" />
            <input type="hidden" id="document_domain" value="" />
            <input type="hidden" id="zc_Url" value="zmp-glf.maillist-manage.com" />
            <input type="hidden" id="new_optin_response_in" value="1" />
            <input type="hidden" id="duplicate_optin_response_in" value="1" />
            <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
            <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zb3f4db1aba3fa8239585c10cfaa06575496d92def820a964d4bda5f333d30f85" />
            <input type="hidden" id="viewFrom" value="URL_ACTION" />
            <input type="hidden" id="scriptless" name="scriptless" value="yes" />
            <input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT" />
          
              <div className="mb-4 flex justify-between items-center">
              <input type="email" id="EMBED_FORM_EMAIL_LABEL" name="CONTACT_EMAIL" data-changeitem="SIGNUP_FORM_FIELD" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email Address" />
              </div>
              <div className="flex justify-end mt-auto py-2 pr-2">
                <button type="submit" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Subscribe" 
                  className="button-custom font-semibold rounded focus:outline-none focus:shadow-outline text-sm">
                  Subscribe
                </button>
              </div>
          </form>

          <h4 className="mt-4 text-sm">
            By subscribing you are agreeing to the 
            <span className="text-cyan-500 hover:cursor-pointer" onClick={() => location.href="https://agreements.3bx.live/agreements/ToS.pdf"}> terms of use</span> and <span className="text-cyan-500 hover:cursor-pointer" onClick={() => location.href="https://agreements.3bx.live/agreements/Privacy.pdf"}> privacy policy</span>
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SectionSixSubscribe;