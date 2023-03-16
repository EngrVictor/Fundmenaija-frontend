import React, { useEffect } from 'react'
// import chat from 'https://formspree.io/js/formbutton-v1.min.js'

function Chat() {
    useEffect(() => {
        window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments);};
   
        formbutton("create", {
            action: "https://formspree.io/f/xrgvzgar",
            title: "How can we help?",
            fields: [
            { 
                type: "email", 
                label: "Email:", 
                name: "email",
                required: true,
                placeholder: "example@email.com"
            },
            {
                type: "textarea",
                label: "Message:",
                name: "message",
                placeholder: "What's on your mind?",
            },
            { type: "submit" }      
            ],
            styles: {
            title: {
                backgroundColor: "#f3613c"
            },
            button: {
                backgroundColor: "#f3613c"
            }
            },
            initiallyVisible: true
        });
    })
  return (
    <div>
        {/* <script src="https://formspree.io/js/formbutton-v1.min.js" defer></script> */}
        {/* {chat} */}
    </div>
  )
}

export default Chat