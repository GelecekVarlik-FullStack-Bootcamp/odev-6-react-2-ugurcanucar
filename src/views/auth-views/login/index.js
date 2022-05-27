import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/api_service";

const Login = ({ setIsLogin, isLogin }) => {
  const [usernameController, setUsernameController] = useState("");
  const [passwordController, setPasswordController] = useState("");
  const [passwordControlController, setPasswordControlController] =
    useState("");
  let navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      username: usernameController,
      password: passwordController,
    };
    if (!isLogin) {
      obj.passwordConfirm = passwordControlController;
      await apiService.register(obj);
      setIsLogin(true);
    } else {
      let resp = await apiService.login(obj);
      if (resp !== null) {
        localStorage.setItem("auth_token", resp.data.token);
        navigate("/app");
      }
    }
  };

  return (
    <>
      <h3 className="auth-form-title">{isLogin ? "Giriş Yap" : "Kayıt Ol"}</h3>
      <form className="auth-content-form" onSubmit={(e) => handleFormSubmit(e)}>
        <label>Username</label>
        <input
          value={usernameController}
          onChange={(e) => setUsernameController(e.target.value)}
        />
        <label>Şifre</label>
        <input
          value={passwordController}
          onChange={(e) => setPasswordController(e.target.value)}
          type="password"
        />
        {!isLogin && (
          <>
            <label>Şifre Tekrar</label>
            <input
              value={passwordControlController}
              onChange={(e) => setPasswordControlController(e.target.value)}
              type="password"
            />
          </>
        )}
        <button type="submit">{isLogin ? "Giriş" : "Kaydol"}</button>
      </form>
      <div className="register-text" onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Üyeliğiniz yok mu ? Kayıt Olun."
          : "Üyeliğiniz var mı ? Giriş Yapın."}
      </div>
    </>
  );
};

export default Login;
