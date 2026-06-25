import { auth, ADMIN_EMAIL } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const logoutBtn = document.querySelector("#logoutBtn");
const userEmailText = document.querySelector("#userEmail");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (email === ADMIN_EMAIL) {
        window.location.href = "admin.html";
      } else {
        window.location.href = "perfil.html";
      }
    } catch (error) {
      loginMessage.textContent = "Email ou senha inválidos.";
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
  });
}

onAuthStateChanged(auth, (user) => {
  if (userEmailText && user) {
    userEmailText.textContent = user.email;
  }

  const adminPage = document.body.dataset.page === "admin";

  if (adminPage) {
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    if (user.email !== ADMIN_EMAIL) {
      window.location.href = "index.html";
    }
  }
});
