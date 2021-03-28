const ArticleCollection = <T extends {}>({ collection }: { collection: T }) => {
  return (
    <>
      <div>Article 1 </div>
      <div>Article 2 </div>
    </>
  );
};

export default ArticleCollection;
