import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const initial = { profile: "", exp: 0, techs: [], desc:"" };

const Create = () => {
    const skillSet = [
        {
          name: "Javascript"
        },
        {
          name: "Java"
        },
        {
          name: "Python"
        },
        {
          name: "Django"
        },
        {
          name: "Rust"
        }
      ];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      navigate('/employee/feed');
  };

  const { profile, exp, desc } = form;

  const handleChange = (e) => {
    setForm({...form , techs : [...form.techs, e.target.value]});
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8 border border-slate-200">
  <h2 className="text-2xl font-semibold text-center text-slate-800 mb-6">
    📝 Create New Job Post
  </h2>

  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
    <div className="flex flex-col gap-5">

      {/* Job Profile */}
      <input
        type="text"
        required
        value={profile}
        onChange={(e) => setForm({ ...form, profile: e.target.value })}
        placeholder="👨‍💼 Job Profile"
        className="w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
      />

      {/* Experience */}
      <input
        type="number"
        min="0"
        required
        value={exp}
        onChange={(e) => setForm({ ...form, exp: e.target.value })}
        placeholder="📆 Years of Experience"
        className="w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
      />

      {/* Job Description */}
      <textarea
        required
        rows="4"
        value={desc}
        onChange={(e) => setForm({ ...form, desc: e.target.value })}
        placeholder="📝 Job Description"
        className="w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none transition"
      ></textarea>

      {/* Skills */}
      <div className="mt-2">
        <h3 className="text-lg font-medium text-slate-700 mb-2">
          ✅ Required Skills
        </h3>
        <ul className="flex flex-wrap gap-4">
          {skillSet.map(({ name }, index) => (
            <li key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={name}
                onChange={handleChange}
                className="accent-sky-600 w-5 h-5"
              />
              <label
                htmlFor={`custom-checkbox-${index}`}
                className="text-slate-700"
              >
                {name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-sky-600 text-white py-3 rounded-md font-semibold hover:bg-sky-700 transition duration-300"
      >
        🚀 Submit
      </button>
    </div>
  </form>
</div>
  );
};

export default Create;