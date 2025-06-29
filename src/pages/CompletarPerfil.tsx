"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

type Role = "Leitor" | "Autor";

export default function CompletarPerfil() {
  const navigate = useNavigate();

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [cidade, setCidade] = useState("");
  const [role, setRole] = useState<Role>("Leitor");
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [fotoArquivo, setFotoArquivo] = useState<File | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleFotoChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setFotoArquivo(file);
    const reader = new FileReader();
    reader.onload = () => setFotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    if (!nomeUsuario.trim()) {
      setErro("Nome de usuário é obrigatório");
      return;
    }
    setLoading(true);
    try {
      let fotoBase64: string | null = null;
      if (fotoArquivo) {
        fotoBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject("Falha ao ler a imagem");
          reader.readAsDataURL(fotoArquivo);
        });
      }
      const token = localStorage.getItem("token");
      if (!token) {
        setErro("Usuário não autenticado");
        setLoading(false);
        return;
      }
      const response = await fetch("http://localhost:5036/usuarios/perfil", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nomeUsuario, cidade, fotoUrl: fotoBase64, role }),
      });
      if (!response.ok) {
        const data = await response.json();
        setErro(data.message || "Erro ao atualizar perfil");
        setLoading(false);
        return;
      }
      navigate("/");
    } catch {
      setErro("Erro na comunicação com o servidor");
      setLoading(false);
    }
  }

  const inputClasses =
    "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAAA63] text-gray-900";

  const labelClasses = "block text-sm font-semibold mb-1 text-gray-700";

  const btnClasses =
    "mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#DAAA63] bg-white px-6 py-2 text-sm font-semibold text-[#DAAA63] transition hover:bg-[#DAAA63] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <main className="max-w-md mx-auto p-6 mt-20">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900">Complete seu perfil</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className={labelClasses}>
          Nome de usuário (@)
          <input
            type="text"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            placeholder="Seu nome de usuário"
            required
            className={inputClasses}
            autoComplete="username"
          />
        </label>

        <label className={labelClasses}>
          Cidade
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Sua cidade"
            className={inputClasses}
            autoComplete="address-level2"
          />
        </label>

        <label className={labelClasses}>
          Role
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className={inputClasses}
          >
            <option value="Leitor">Leitor</option>
            <option value="Autor">Autor</option>
          </select>
        </label>

        <label className={labelClasses}>
          Foto de perfil
          <input
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            className="mt-1 block w-full text-sm text-gray-600"
          />
          {fotoPreview && (
            <img
              src={fotoPreview}
              alt="Preview da foto"
              className="mt-4 w-24 h-24 rounded-full object-cover border border-gray-300"
            />
          )}
        </label>

        {erro && (
          <p className="text-red-600 text-center font-semibold text-sm">{erro}</p>
        )}

        <button type="submit" disabled={loading} className={btnClasses}>
          {loading ? "Salvando..." : "Salvar Perfil"}
        </button>
      </form>
    </main>
  );
}