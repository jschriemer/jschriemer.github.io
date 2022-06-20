/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { useForm } from "react-hook-form";

const tablet = `@media (max-width: 800px)`;
const mobile = `@media (max-width: 500px)`;

function Contact() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {errors.user_name && errors.user_name.type === "required" && (
          <div role="alert">
            Name is required
            <br />
          </div>
        )}
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          maxLength={30}
          aria-invalid={errors.user_name ? "true" : "false"}
          ref={register({ required: true })}
        />
        <br />
        <input
          type="email"
          name="user_email"
          ref={register}
          placeholder="Email"
        />
        <br />
        <textarea name="message" ref={register} placeholder="Message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
