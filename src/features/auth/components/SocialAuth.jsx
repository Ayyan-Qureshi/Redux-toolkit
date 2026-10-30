"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { loginWithGoogle, loginWithGithub } from "../authSlice";

export default function SocialAuth() {
  const dispatch = useDispatch();

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => dispatch(loginWithGoogle())}
        className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
      >
        <span>Sign in with Google</span>
      </button>

      <button
        type="button"
        onClick={() => dispatch(loginWithGithub())}
        className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
      >
        <span>Sign in with GitHub</span>
      </button>
    </div>
  );
}