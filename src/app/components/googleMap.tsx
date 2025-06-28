import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.308060189694!2d-4.763092423579475!3d55.94403237724625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4889ae2e2b65b57b%3A0xf2f6b9463943b33a!2s18A%20Wellington%20St%2C%20Greenock%20PA15%204NH%2C%20UK!5e0!3m2!1sen!2sng!4v1746197436258!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;