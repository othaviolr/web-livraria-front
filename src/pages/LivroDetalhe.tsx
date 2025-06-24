"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  Globe,
  Layers,
  ArrowLeft,
  Star,
  Heart,
  Bookmark,
  Eye,
  Users,
} from "lucide-react";
import { obterLivroPorId, listarLivros } from "@/services/livrosService";

export default function LivroDetalhe() {
  const { id } = useParams<{ id: string }>();
  const [livro, setLivro] = useState<any>(null);
  const [todosLivros, setTodosLivros] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [exibirMais, setExibirMais] = useState(false);

  // Estatísticas mockadas (pode depois integrar da API)
  const [favoritos, setFavoritos] = useState(7);
  const [desejados, setDesejados] = useState(40);
  const [avaliaram, setAvaliaram] = useState(467);

  const abas = ["Sinopse", "Edições", "Similares", "Leia online (PDF)"];
  const [abaAtiva, setAbaAtiva] = useState("Sinopse");

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        const livroData = await obterLivroPorId(Number(id));
        setLivro(livroData);

        const livros = await listarLivros();
        setTodosLivros(livros);
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">Carregando livro...</div>
    );
  }

  if (!livro) {
    return (
      <div className="p-10 text-center text-red-500">Livro não encontrado.</div>
    );
  }

  const paragrafoFormatado = (texto: string) => {
    const paragrafos = texto.split("\n").filter((p) => p.trim() !== "");
    const limite = 5;
    const mostrarTodos = exibirMais || paragrafos.length <= limite;

    return (
      <div className="flex flex-col gap-4">
        {paragrafos
          .slice(0, mostrarTodos ? paragrafos.length : limite)
          .map((paragrafo, index) => {
            const palavras = paragrafo.trim().split(" ");
            const ehFraseDeImpacto = palavras.length <= 6;

            return (
              <p
                key={index}
                className="text-justify leading-relaxed text-[16px] text-[#333]"
              >
                {ehFraseDeImpacto ? <strong>{paragrafo}</strong> : paragrafo}
              </p>
            );
          })}

        {paragrafos.length > limite && (
          <button
            onClick={() => setExibirMais(!exibirMais)}
            className="text-[#DAAA63] font-semibold mt-2 hover:underline self-start"
          >
            {exibirMais ? "Exibir menos" : "Leia mais"}
          </button>
        )}
      </div>
    );
  };

  // Filtrar edições: mesmo autor e editora, excluindo o próprio livro
  const edicoes = todosLivros.filter(
    (l) => l.id !== livro.id && l.autorId === livro.autorId && l.editoraId === livro.editoraId
  );

  // Para similares, excluir livro atual e edições já listadas
  const idsExcluir = new Set(edicoes.map((l) => l.id));
  idsExcluir.add(livro.id);

  const similares = todosLivros
    .filter(
      (l) =>
        !idsExcluir.has(l.id) &&
        (l.autorId === livro.autorId ||
          l.generos.some((g: number) => livro.generos.includes(g)))
    )
    .slice(0, 3);

  // Card para edições e similares
  const LivroCard = ({ livro }: { livro: any }) => (
    <div
      onClick={() => (window.location.href = `/livro/${livro.id}`)}
      className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex gap-4 max-w-[400px]"
    >
      <img
        src={livro.imagemUrl || "/livros/default.jpg"}
        alt={livro.titulo}
        className="w-20 h-28 object-cover rounded"
      />
      <div className="flex flex-col justify-between">
        <h3 className="font-semibold text-lg text-gray-900">{livro.titulo}</h3>
        <p className="text-sm text-gray-600 italic">{livro.autorNome}</p>
        <p className="text-sm text-gray-500">
          {new Date(livro.anoPublicacao).getFullYear()}
        </p>
      </div>
    </div>
  );

  // Botões de ação
  const baseBtnClasses =
    "flex items-center gap-2 border border-black border-opacity-40 px-6 py-1.5 rounded-full text-sm font-semibold transition-shadow duration-300 ease-in-out cursor-pointer";

  return (
    <div className="max-w-[1200px] mx-auto p-8 flex flex-col md:flex-row gap-10">
      {/* Botão Voltar */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 mb-6 text-[#DAAA63] font-semibold hover:text-[#c29242] transition"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      {/* Imagem do livro */}
      <div className="flex-shrink-0">
        <img
          src={livro.imagemUrl || "/livros/default.jpg"}
          alt={livro.titulo}
          className="rounded-2xl shadow-lg w-[260px] md:w-[300px]"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Título e info básica */}
        <h1 className="text-3xl font-extrabold text-gray-900">{livro.titulo}</h1>
        <p className="text-lg text-[#4b4b4b] italic mt-1">Dark Romance</p>

        {/* Informações estilizadas */}
        <div className="mt-5 flex flex-wrap gap-6 text-[#3a3a3a] text-sm font-medium max-w-[400px]">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-[#DAAA63]" />
            <span>{livro.autorNome}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#DAAA63]" />
            <span>Ano: {new Date(livro.anoPublicacao).getFullYear()}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[#DAAA63]" />
            <span>Idioma: Português</span>
          </div>

          <div className="flex items-center gap-2">
            <Layers size={18} className="text-[#DAAA63]" />
            <span>Editora: {livro.editoraNome}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-[#DAAA63]" />
            <span>Média de leitura: ~7h</span>
          </div>
        </div>

        {/* Abas com contagem */}
        <div className="mt-10 border-b border-gray-300 flex gap-6">
          {abas.map((aba) => {
            let count = 0;
            if (aba === "Edições") count = edicoes.length;
            else if (aba === "Similares") count = similares.length;

            return (
              <button
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                className={`py-2 font-semibold border-b-4 transition ${
                  abaAtiva === aba
                    ? "text-[#DAAA63] border-[#DAAA63]"
                    : "text-gray-600 border-transparent hover:text-[#DAAA63] hover:border-[#DAAA63]"
                }`}
              >
                {aba}
                {count > 0 && (
                  <span className="ml-1 text-sm font-normal text-[#DAAA63]">
                    ({count})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Conteúdo da aba ativa */}
        <section className="mt-6 text-[#4b4b4b] leading-relaxed max-w-[700px] min-h-[120px] flex flex-col gap-4">
          {abaAtiva === "Sinopse" && (
            <>
              {livro.sinopse && livro.sinopse.trim() !== "" ? (
                paragrafoFormatado(livro.sinopse)
              ) : (
                <p>Este livro ainda não possui sinopse cadastrada.</p>
              )}
            </>
          )}

          {abaAtiva === "Edições" && (
            <>
              {edicoes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {edicoes.map((ed) => (
                    <LivroCard key={ed.id} livro={ed} />
                  ))}
                </div>
              ) : (
                <p>Não foram encontradas outras edições deste livro.</p>
              )}
            </>
          )}

          {abaAtiva === "Similares" && (
            <>
              {similares.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {similares.map((sim) => (
                    <LivroCard key={sim.id} livro={sim} />
                  ))}
                </div>
              ) : (
                <p>Não foram encontrados livros similares.</p>
              )}
            </>
          )}

          {abaAtiva === "Leia online (PDF)" && (
            <>
              <h2 className="text-2xl font-semibold mb-3">Leia Online (PDF)</h2>
              <p>
                Disponível para leitura online em formato PDF. <br />
                <a
                  href="/livros/o-acidente.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DAAA63] font-semibold hover:underline"
                >
                  Abrir PDF
                </a>
              </p>
            </>
          )}
        </section>

        {/* Estatísticas */}
        <div className="mt-10 flex flex-wrap gap-8 text-[#3a3a3a]">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Star className="text-yellow-400" />
              3.3
              <span className="text-gray-500 font-normal ml-1">
                avaliações ({avaliaram})
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-1">Resenhas: 168</div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Bookmark />
              Favoritos: {favoritos}
            </div>
            <div className="text-sm text-gray-500 mt-1">Desejados: {desejados}</div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Eye />
              Lendo: 100
            </div>
            <div className="text-sm text-gray-500 mt-1">Leram: 567</div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Users />
              Leitores: 78
            </div>
            <div className="text-sm text-gray-500 mt-1">Querem ler: 545</div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="mt-8 flex gap-6 flex-wrap">
          <button
            onClick={() => setFavoritos((f) => f + 1)}
            className={`${baseBtnClasses} bg-[#DAAA63] text-white shadow-md hover:bg-[#c29242]`}
          >
            <Heart size={20} /> Favoritar ({favoritos})
          </button>

          <button
            onClick={() => setDesejados((d) => d + 1)}
            className={`${baseBtnClasses} bg-white text-[#DAAA63] border-[#DAAA63] hover:shadow-md`}
          >
            Desejados ({desejados})
          </button>

          <button
            onClick={() => setAvaliaram((a) => a + 1)}
            className={`${baseBtnClasses} bg-white text-[#DAAA63] border-[#DAAA63] hover:shadow-md`}
          >
            Avaliaram ({avaliaram})
          </button>
        </div>
      </div>
    </div>
  );
}