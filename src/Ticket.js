import React from 'react';

const Ticket = ({ serialNumber }) => {
  return (
    <div className="border-2 border-gray-300 p-4 m-2 w-1/2">
      <div className="text-right">
        <p className="font-bold text-lg">المدرسة الإبتدائية الخاصة</p>
        <p>وصل خاص عدد {serialNumber}</p>
      </div>
      <hr className="my-2" />
      <div className="text-right">
        <p><span className="font-bold text-red-600">المعلوم</span> :</p>
        <p><span className="font-bold text-red-600">الهاتف</span> : 97487775</p>
      </div>
      <hr className="my-2" />
      <div className="text-right">
        <p>الإسم و اللقب :</p>
        <p>القسم :</p>
        <p>المعلم :</p>
        <p>التاريخ :</p>
        <p>الإمضاء :</p>
      </div>
    </div>
  );
};

export default Ticket;
