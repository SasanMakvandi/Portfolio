import React, {useState} from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/contacts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            const data = await response.json();
            alert(data.message);
            setFormData({name: "", email: "", message: ""});
          } else {
            alert("Something went wrong. Please try again.");
          }
        } catch (error) {
          console.error("Error", error);
          alert("Failed to send your message.");
        }
    };


    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px", height: "100px" }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Send
        </button>
      </form>
    </div>
    );
};

export default Contact;