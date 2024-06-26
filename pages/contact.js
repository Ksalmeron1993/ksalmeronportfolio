import React, { useState } from "react"

export default function Contact() {
  return (
    <div>
      <h1>Contact form</h1>
      <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>

        <button type="submit">Send message</button>
      </form>
    </div>
  )
}