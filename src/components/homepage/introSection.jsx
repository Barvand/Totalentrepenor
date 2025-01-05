export default function IntroSection() {
  return (
    <>
      <section className="mt-5 container grid gap-4 text-center sm:grid-cols-1 lg:grid-cols-2">
        <div className="bg-secondary p-4 box-shadow">
          <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-primary dark:text-white">
            Vi opererer i Bergen og område
          </h1>
          <button className="btn bg-primary text-white font-bold">Snakk med oss</button>
        </div>
        <div className="p-4 bg-primary text-white box-shadow">
          <h2 className="underline-color py-2 mb-2">Åpningstider</h2>
          <p>Åpent fra 8:00 til 16:00.</p>
          <p>Ellers tilgjengelig på SMS eller mail.</p>
        </div>
      </section>
    </>
  );
}
