export function TitleHeader({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <h2 className="font-heading text-center text-4xl font-extrabold sm:text-5xl">{title}</h2>
    </div>
  );
}
