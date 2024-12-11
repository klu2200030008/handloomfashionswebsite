export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^\S+@\S+$/i,
    message: 'Please enter a valid email'
  }
};

export const passwordValidation = {
  required: 'Password is required',
  minLength: {
    value: 6,
    message: 'Password must be at least 6 characters'
  }
};

export const nameValidation = {
  required: 'Name is required',
  minLength: {
    value: 2,
    message: 'Name must be at least 2 characters'
  }
};