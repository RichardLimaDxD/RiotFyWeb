import api from "@/services/api";
import { Header } from "@/components/Header";
import { SearchRenderCard } from "@/components/SearchRenderCard";
import { Player } from "@/components/Player";
import { TmusicData } from "@/interfaces/musics.interface";
import { SearchForm } from "@/components/Forms/searchForm";

const Search = async () => {
  const response = await api.get("/musics");
  const music: TmusicData[] = response.data;

  return (
    <>
      <Header />
      <section>
        <SearchForm />
        <SearchRenderCard music={music} />
      </section>
      <Player />
    </>
  );
};

export default Search;
