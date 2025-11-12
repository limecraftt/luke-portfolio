import React from 'react';

const ContactCard = ({ icon: Icon, label, value }) => (
  <div className="bg-[#0d1b2a] rounded-lg p-6 border border-gray-800">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="text-cyan-400" size={22} />
      <span className="text-white font-semibold text-lg">{label}</span>
    </div>
    <p className="text-gray-400">{value}</p>
  </div>
);

export default ContactCard;