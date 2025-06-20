const Category = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  return <div>Category Page {category}</div>;
};

export default Category;
