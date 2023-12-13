
import "../assets/UserForm.css";
import { useState } from "react";


function generatePrompt(bookTitle) { 
  const prompt = `Generate a brief (<500 words), and well organized list of info and resources about ${bookTitle}`;
  return prompt;
}

export default function UserForm({ callApi }) {
  const [formData, setFormData] = useState({
    bookTitle: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); 
    setErrors({ ...errors, [name]: "" }); 
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData.bookTitle);

    const formErrors = {};

    if (!formData.bookTitle) formErrors.bookTitle = "Book title is required!";
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Error");
    } else {
      console.log("Successful Form Submission");
      callApi(generatePrompt(formData.bookTitle)); // Passing just the bookTitle to the prompt generator
    }
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label htmlFor="bookTitle">Book Title:</label> 
      <input
        type="text"
        name="bookTitle"
        id="bookTitle"
        value={formData.bookTitle}
        onChange={handleChange}
      />
      {errors.bookTitle && <div className="error">{errors.bookTitle}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}
