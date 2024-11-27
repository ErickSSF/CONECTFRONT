/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import useAuth from "../../../../hooks/auth";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../api/api";

function LoginComponent() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError("");

    try {
      const { data }: { data: { accessToken: string } } = await api.post(
        "/entrar",
        {
          email,
          senha: password,
        }
      );
      setUser({
        accessToken: data?.accessToken,
        email,
      });
      navigate("/");
    } catch (err: any) {
      setError(
        err?.response?.data?.errors?.default ||
        err?.response?.data?.errors?.body?.senha
      );
    }

    setLoading(false);
  };
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4">
      <div className="w-[440px] grid grid-cols-[1fr] gap-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn({
              email,
              password,
            });
          }}
          className="border-2 rounded-lg p-6 flex flex-col gap-4  items-center justify-center"
        >
          <Input
            placeholder="Email"
            className=""
            type="email"
            onChange={(e) => {
              const value = e.target?.value;
              setEmail(value);
            }}
            required
          />
          <Input
            placeholder="Senha"
            className=""
            type="password"
            onChange={(e) => {
              const value = e.target?.value;
              setpassword(value);
            }}
            required
          />
          {error && <p className="text-sm font-bold text-rose-500">{error}</p>}
          <Button className="w-[100%]" type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Login"}
          </Button>
          <Button
            className="w-[100%]"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              navigate("/auth/register");
            }}
            variant="outline"
            disabled={loading}
          >
            Cadastrar-se
          </Button>
        </form>
      </div>
    </div>
  );
}
export default LoginComponent;
