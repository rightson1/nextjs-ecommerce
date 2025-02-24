import Link from "next/link";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [dob, setDob] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }
    const age = calculateAge(dob);
    if (age < 18) {
      toast.error("You must be at least 18 years old to register");
      return;
    }
    const myPromise = createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    toast.promise(myPromise, {
      loading: "Loading...",
      success: `Successfully signed in`,
      error: "Error when fetching",
    });
  };

  return (
    <div
      onSubmit={handleRegisterUser}
      className="bg-white shadow-2xl sm:w-[45%] mx-auto"
    >
      <form className="flex flex-col contact-form text-[1.3rem] font-[500] mb-[1.6rem] ">
        <h1 className="text-center mb-5 text-[25px] font-bold">Sign Up</h1>

        <input
          type="email"
          className="form-input"
          placeholder="Enter your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-input"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <AiFillEye
                size={30}
                className="absolute cursor-pointer top-[10px] right-5"
              />
            ) : (
              <AiFillEyeInvisible
                size={30}
                className="absolute cursor-pointer top-[10px] right-5"
              />
            )}
          </div>
        </div>
        <div className="relative">
          <input
            type={showConfirmPass ? "text" : "password"}
            className="form-input"
            placeholder="Confirm password"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <div onClick={() => setShowConfirmPass((prev) => !prev)}>
            {setShowConfirmPass ? (
              <AiFillEye
                size={30}
                className="absolute cursor-pointer top-[10px] right-5"
              />
            ) : (
              <AiFillEyeInvisible
                size={30}
                className="absolute cursor-pointer top-[10px] right-5"
              />
            )}
          </div>
        </div>
        <input
          type="date"
          className="form-input"
          placeholder="Date of Birth"
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 text-white bg-primary rounded-2xl"
        >
          Sign up
        </button>
        <div className="mx-auto mt-3">
          <h1 className="text-[14px] mt-2 text-center">
            Already have an account?
            <Link href="/login" className="ml-1 text-primary">
              Login
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
