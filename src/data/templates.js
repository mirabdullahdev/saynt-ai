const bookCall = {
    subject: "New Contact Request: Book A Call",
    message: `
    New Contact Request Received!
    
    Name: {fullname}
    Phone Number: {phonenumber}
    `,
};

const bookAppointment = {
    subject: "New Appointment Scheduled",
    message: `
      New Appointment Scheduled!
      
      Name: {fullname}
      Email: {email}
      Phone Number: {phonenumber}
      Appointment Time: {appointment}
    `,
};

const career = {
    subject: "New Job Application",
    message: `
      New Job Application!
      
      First Name: {first_name}
      Last Name: {last_name}
      Country Origin: {country_origin}
      State: {state}
      Willing to Relocate: {relocate}
      Employment Status: {employment_status}
      Comments: {comments}
    `,
};

const newsletter = {
  subject: "New Newsletter Request",
  message: `
  New Newsletter Request Received!
  
  Email: {email}
  `,
};

const aiAcademy = {
    subject: "New AI Academy Request",
    message: `
    New AI Academy Request!
    
    email: {email}
    `,
};
const aiAgentDemo = {
    subject: "New AI Agent Demo Request",
    message: `
    New AI Agent Demo Request 

    email: {email}
    `,
};

export const emailTemplates = {
    bookCall,
    bookAppointment,
    career,
    newsletter,
    aiAcademy,
    aiAgentDemo
}; 
