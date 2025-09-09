import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="py-10 px-4 max-w-3xl mx-auto" id="contact">
      <h2 className="text-3xl font-semibold text-center mb-4">Contactez-moi</h2>
      <p className="text-center mb-8">
        N&#39;hésitez pas à me contacter pour toute question ou proposition de
        projet !
      </p>
      <div className="flex justify-center">
        <a
          href="mailto:damien.dev2022@gmail.com"
          className="text-white font-semibold py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-900 to-blue-950 hover:opacity-90 transition"
        >
          Contacter par Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
