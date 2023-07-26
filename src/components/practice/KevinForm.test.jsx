import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import KevinForm from "./KevinForm";

describe("KevinForm Test", () => {
  test("loads all items", () => {
    render(<KevinForm />);
    const name = screen.getByRole('name-input');
    const email = screen.getByRole('email-input');
    const password = screen.getByRole('password-input');
    const textarea = screen.getByRole('message-input');
    const button = screen.getByRole('button');
    userEvent.type(name, "Kevin");
    userEvent.type(email, "teerkevin@yahoo.com");
    userEvent.type(password, "password");
    userEvent.type(textarea, "lalalala");
    userEvent.click(button);

  })
  // test('should print the KevinForm component', () => {
  //   render(<KevinForm/>);
  //   screen.debug();
  // });
})