import React from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../customInput/CustomInput";
import { FaStar } from "react-icons/fa";

export const ReviewForm = () => {
  return (
    <div>
      <h3>Give your Review.</h3>
      <Form>
        <label htmlFor="">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </label>
        <CustomInput label="Title" name="title" type="text" required placeholder="Awesome Book" />
        <CustomInput
          label="Message"
          name="message"
          type="text"
          required
          placeholder="Type your message here.."
        />
        <div className="d-grid py-2">
          <Button type="Submit">Submit Review</Button>
        </div>
      </Form>
    </div>
  );
};
