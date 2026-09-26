export function TitleHeader({ title, accent }: { title: string; accent?: string }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-10 pt-20 sm:px-6 lg:px-10">
      <h2 className="font-sans text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-8xl">
        {title}
      </h2>
      {accent && (
        <p className="mt-2 font-accent text-2xl italic tracking-normal text-foreground/70 sm:text-4xl lg:text-5xl">
          {accent}
        </p>
      )}
    </div>
  );
}
