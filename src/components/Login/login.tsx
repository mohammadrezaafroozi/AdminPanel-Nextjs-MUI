import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autoFill, setAutoFill] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ✅ بررسی فرمت ایمیل
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ پر کردن خودکار ایمیل و رمز
  const handleAutoFill = (checked: boolean) => {
    setAutoFill(checked);
    if (checked) {
      setEmail("test@test.com");
      setPassword("1234");
    } else {
      setEmail("");
      setPassword("");
    }
  };

  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      alert("ایمیل معتبر وارد کنید!");
      return;
    }
    if (password.length < 4) {
      alert("رمز عبور حداقل باید ۴ کاراکتر باشد");
      return;
    }

    setLoading(true);

    // ✅ شبیه‌سازی درخواست AJAX
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email === "test@test.com" && password === "1234") {
        alert("ورود موفقیت‌آمیز بود ✅");
        router.push("/dashboard"); // صفحه اصلی
      } else {
        alert("ایمیل یا رمز اشتباه است ❌");
      }
    } catch {
      alert("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "50px auto", textAlign: "center" }}>
      <h2>ورود به پنل</h2>

      <input
        type="email"
        placeholder="ایمیل"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />

      <input
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 20, padding: 8 }}
      />

      {/* ✅ تاگل پر کردن خودکار */}
      <div style={{ marginBottom: 15 }}>
        <input
          type="checkbox"
          checked={autoFill}
          onChange={(e) => handleAutoFill(e.target.checked)}
        />
        <label style={{ marginLeft: 5 }}>ورود با اطلاعات پیش‌فرض</label>
      </div>

      <Button
        variant="contained"
        color="success"
        onClick={handleLogin}
        disabled={loading}
        style={{ width: "100%" }}
      >
        {loading ? "در حال ورود..." : "ورود"}
      </Button>
    </div>
  );
};

export default Login;
