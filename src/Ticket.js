import React from 'react';

const Ticket = React.forwardRef((props, ref) => (
  <div ref={ref} className="ticket-container border p-4 m-2">
    <div className="school-info text-right">
      <p>المدرسة الإبتدائيىة الخاصة</p>
      <p>قوس قزح بالقيروان</p>
    </div>
    <div className="ticket-number text-right font-bold my-2">
      <p>وصل خلاص عدد {props.ticketNumber}</p>
    </div>
    <div className="contact-info text-right my-2">
      <p>الهاتف : 97487775</p>
    </div>
    <div className="student-info text-right my-2">
      <p>الاسم واللقب : {props.name}</p>
      <p>القسم : {props.class}</p>
      <p>المعلوم : {props.fee}</p>
      <p>التاريخ : {props.date}</p>
    </div>
    <div className="signature text-right my-2">
      <p>الإمضاء</p>
    </div>
  </div>
));

export default Ticket;
