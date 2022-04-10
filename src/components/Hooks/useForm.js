import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  // console.log(success);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(values);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.username,
            email: values.email,
            message: values.message,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setSuccess(
          "wiadomość została wysłana,\nwkrótce się z tobą skontaktujemy"
        );
      } else {
        e.preventDefault();
        setErrors(validate(values));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { handleChange, values, handleSubmit, errors, success };
};

export default useForm;
