import Head from "next/head";

interface IpropsLayout {
  children?: any;
  title?: string;
}
const Layout: React.FC<IpropsLayout> = ({
  children,
  title = "Anime Jikan",
}: IpropsLayout) => {
  return (
    <div className="w-full justify-center items-center min-h-screen lg:h-full lg:w-10/12">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
