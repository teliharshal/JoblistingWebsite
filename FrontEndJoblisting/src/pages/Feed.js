import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  //
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
        const response = await axios.get(`http://localhost:8080/allPosts`);
        console.log(response);
        setPost(response.data);
    }
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);
console.log(post);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
  {/* Header with Home Button and Search */}
  <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    <Link
      to="/"
      className="border border-sky-600 text-sky-600 hover:bg-sky-50 px-5 py-2 rounded-md font-medium transition"
    >
      Home
    </Link>

    <div className="w-full md:w-3/4">
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
          <SearchIcon />
        </span>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
        />
      </div>
    </div>
  </div>

  {/* Post Cards Grid */}
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {post &&
      post.map((p) => (
        <div
          key={p.id}
          className="bg-white border border-slate-200 shadow-md rounded-xl p-6 transition hover:shadow-xl"
        >
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            {p.profile}
          </h2>

          <p className="text-slate-600 mb-4">
            <span className="font-medium">Description:</span> {p.desc}
          </p>

          <p className="text-slate-700 mb-2">
            <span className="font-semibold">Experience:</span> {p.exp} years
          </p>

          <p className="text-slate-700 font-semibold mb-1">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {p.techs.map((s, i) => (
              <span
                key={i}
                className="bg-sky-100 text-sky-700 text-sm px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
  </div>
</div>

  );
};

export default Feed;