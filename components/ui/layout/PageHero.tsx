const PageHero = ({ title }: { title: string }) => {
  return (
    <div className="bg-black flex justify-center py-24">
      <h2 className="text-text-center uppercase text-white text-4xl font-semibold wide">
        {title}
      </h2>
    </div>
  );
};

export default PageHero;
