import React, { useEffect, useState } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api/Api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";

const LoginPasswordReset = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const k = params.get("key");
    const l = params.get("login");
    if (k) setKey(k);
    if (l) setLogin(l);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response, json } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  return (
    <section>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
