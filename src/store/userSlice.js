import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  users: [],
};

try {
  initialState.currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  initialState.users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
} catch (error) {
  console.error("Error loading data from localStorage:", error);
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupUser: (state, action) => {
      const {
        firstName,
        lastName,
        title,
        username,
        email,
        phoneNumber,
        password,
        retypePassword,
        type,
        terms,
        location,
      } = action.payload;

      if (
        !firstName ||
        !lastName ||
        !title ||
        !username ||
        !email ||
        !phoneNumber ||
        !password ||
        !retypePassword ||
        !type ||
        !terms ||
        !location
      ) {
        console.error("All fields are required for signup.");
        return;
      }

      const emailExists = state.users.find((user) => user.email === email);
      const phoneNumberExists = state.users.find(
        (user) => user.phone === phoneNumber
      );
      const usernameExists = state.users.find(
        (user) => user.username === username
      );
      if (emailExists) {
        console.error("Email already exists");
        return;
      }

      if (phoneNumberExists) {
        console.error("Phone Number already exists");
        return;
      }

      if (usernameExists) {
        console.error("Username already exists");
        return;
      }

      const formattedUser = {
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        username,
        title,
        email,
        phone: phoneNumber,
        password,
        userType: type,
        location,
      };

      state.users.push(formattedUser);
      state.currentUser = formattedUser;
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("user", JSON.stringify(formattedUser));
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;

      if (state.users.length === 0) {
        state.users = localStorage.getItem("users")
          ? JSON.parse(localStorage.getItem("users"))
          : [];
      }

      const foundUser = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        state.currentUser = foundUser;
        localStorage.setItem("user", JSON.stringify(foundUser));
      } else {
        console.error("Invalid email or password");
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem("user");
      console.log("Successfull logged out");
    },
    updateUser: (state, action) => {
      const { username, email, ...updates } = action.payload;
      const userIndex = state.users.findIndex((user) => user.username === username);
      if (userIndex === -1) {
        console.error("User not found for update.");
        return;
      }

      const duplicateEmail = state.users.find(
        (user, idx) => user.email === (email || state.users[userIndex].email) && idx !== userIndex
      );
      const duplicateUsername = state.users.find(
        (user, idx) => user.username === username && idx !== userIndex
      );
      if (duplicateEmail) {
        console.error("Email already exists");
        return;
      }
      if (duplicateUsername) {
        console.error("Username already exists");
        return;
      }

      const updatedUser = {
        ...state.users[userIndex],
        ...updates,
        username: username, 
        email: email || state.users[userIndex].email, 
        name: `${updates.firstName || state.users[userIndex].firstName} ${updates.lastName || state.users[userIndex].lastName}`,
      };
 
      state.users[userIndex] = updatedUser;
      state.currentUser = updatedUser;
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("user", JSON.stringify(updatedUser));
    },
  },
});

export const { signupUser, loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
