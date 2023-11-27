
"use client"

import React, { useState } from "react";
import Image from "next/image";

const PageSix = () => {

const handleSubmit = (event) => {
  event.preventDefault();
  const parentNode = event.target;
  if (parentNode.querySelector("#zc_spmSubmit")) {
    parentNode.querySelector("#zc_spmSubmit").remove();
  }
  parentNode.submit();
};


  return (
    <div className="flex flex-col items-center justify-start w-full h-screen bg-[#000041]">
      {/* Gray banner */}
      <div className="flex justify-center gap-12 sm:gap-4 bg-inactive w-full h-36 sm:h-40 py-4 mt-20">
        <Image src="./genius_is_common.svg" alt="Genius Is Common" width={130} height={130}/>
        <p className="w-[45%] pt-8 sm:pt-0 sm:text-sm"><span className="font-semibold ">&quot;The Genius is Common Movement</span> is about tearing down the Berlin Wall of the word genius.&quot;<span className="font-semibold">Be inspired - Be engaged - Be empowered...</span></p>
      </div>

      {/* Submit Form */}
      <div className="flex flex-row phone:flex-col items-center justify-center w-[90%] mt-48">
        <p className="text-6xl font-bold overflow-hidden">Be <span className="bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent">
          first </span> to hear about our drops <span className="text-sky-600 text-8xl">.</span></p>

        <div className="border-4 shadow-custom p-6 rounded-tr-lg rounded-bl-lg rounded-br-lg md:w-1/2 lg:w-1/2 w-9/10 mt-10 ml-20 phone:ml-0">
          <h2 className="text-lg font-semibold mb-4">Join our email list to get updates</h2>
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
          
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
                <div className="mb-4 flex justify-between items-center">
                  <input type="email" id="EMBED_FORM_EMAIL_LABEL" name="CONTACT_EMAIL" changeitem="SIGNUP_FORM_FIELD" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex justify-end mt-auto py-2 pr-2">
                  <button type="submit" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin"
            value="Subscribe" className="button-custom font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Subscribe
                  </button>
                </div>
          </form>
          <h4 className="mt-4">
            By subscribing you are agreeing to the 
            <span className="text-cyan-500"> terms of use</span> and <span className="text-cyan-500"> privacy policy</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PageSix;