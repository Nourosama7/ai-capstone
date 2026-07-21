# AI Workflow Comparison

## Feature
Settings Form with validation.

## Round One

For the first version, I used a single vague prompt:

"Build me a React settings form with validation."

The generated code was simple and worked after a few fixes. It used basic React state and manual validation. However, it lacked accessibility improvements, reusable components, and advanced validation. The Save button was always enabled, and there were no automated tests.

Although it was quick to generate, I spent more time reviewing and correcting the implementation manually.

## Round Two

For the second version, I used a structured prompt with clear requirements, including React Hook Form, Zod validation, accessibility, reusable components, and verification.

The generated code was much better. It included:

- React Hook Form
- Zod validation
- Better error messages
- Disabled Save button until the form became valid
- Cleaner component structure
- More maintainable code

The review process was significantly shorter because the prompt clearly described the expected behavior.

## AI Mistake

One issue I found was that the AI initially generated code that required external libraries that were not installed. After installing the required dependencies, the application worked correctly.

## Conclusion

The structured workflow produced better quality code and reduced review time. Although writing a detailed prompt required more effort, it resulted in a more reliable and maintainable implementation compared to using a vague prompt.