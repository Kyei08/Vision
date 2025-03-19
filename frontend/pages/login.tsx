import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth } from '../firebase/config'; // Ensure this is correctly configured

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleMode = () => setIsSignUp(prev => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#15202b]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient-x bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-30" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#192734] p-8 rounded-lg shadow-md w-full max-w-md z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1da1f2]">
          {isSignUp ? 'Create Account' : 'Login'}
        </h2>
        {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <motion.input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="w-full px-3 py-2 rounded bg-[#273340] text-white focus:outline-none focus:ring-2 focus:ring-[#1da1f2]"
              placeholder="Email address"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <motion.input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="w-full px-3 py-2 rounded bg-[#273340] text-white focus:outline-none focus:ring-2 focus:ring-[#1da1f2]"
              placeholder="Password"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            disabled={loading}
            className="w-full py-2 bg-[#1da1f2] rounded hover:bg-[#0d95e8] transition font-semibold disabled:opacity-50"
          >
            {loading ? 'Please wait...' : (isSignUp ? 'Sign Up' : 'Login')}
          </motion.button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={toggleMode}
            className="text-[#1da1f2] hover:underline focus:outline-none"
          >
            {isSignUp
              ? 'Already have an account? Log in'
              : "Don't have an account? Sign up"}
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-500 mr-2">or</span>
          <button
            onClick={signInWithGoogle}
            className="flex items-center px-4 py-2 border border-gray-500 rounded hover:bg-gray-700 transition focus:outline-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            <span>Sign in with Google</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;