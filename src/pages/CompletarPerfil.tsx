"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
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

  // Preview da imagem escolhida
  function handleFotoChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setFotoArquivo(file);

    const reader = new FileReader();
    reader.onload = () => {
      setFotoPreview(reader.result as string);
    };
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
      // Monta o payload da requisição (foto vamos mandar como base64)
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

      const response = await fetch("http://localhost:7041/usuarios/perfil", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nomeUsuario,
          cidade,
          fotoUrl: fotoBase64,
          role,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErro(data.message || "Erro ao atualizar perfil");
        setLoading(false);
        return;
      }

      // Sucesso: redireciona para home ou onde quiser
      navigate("/");
    } catch (error) {
      setErro("Erro na comunicação com o servidor");
      setLoading(false);
    }
  }

  return (
    <main className="max-w-md mx-auto p-6 mt-20 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Complete seu perfil</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          Nome de usuário (@)
          <input
            type="text"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Seu nome de usuário"
            required
          />
        </label>

        <label>
          Cidade
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Sua cidade"
          />
        </label>

        <label>
          Role
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Leitor">Leitor</option>
            <option value="Autor">Autor</option>
          </select>
        </label>

        <label>
          Foto de perfil
          <input type="file" accept="image/*" onChange={handleFotoChange} />
          {fotoPreview && (
            <img
              src={fotoPreview}
              alt="Preview da foto"
              className="mt-2 w-24 h-24 object-cover rounded-full border"
            />
          )}
        </label>

        {erro && (
          <p className="text-red-600 font-semibold">
            {erro}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#DAAA63] hover:bg-[#c39442] text-white font-bold py-2 rounded disabled:opacity-60"
        >
          {loading ? "Salvando..." : "Salvar Perfil"}
        </button>
      </form>
    </main>
  );
}