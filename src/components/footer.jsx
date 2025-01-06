export default function Footer() {
  return (
    <footer className="bg-black p-5">
      <div className="container flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-accent text-xl">Kontakt</h3>
          <p className="text-sm">Lægdene 11, 5096, Bergen</p>
          <p className="text-sm">40580085</p>
          <p className="text-sm"> Post@kgn.no </p>
          <p className="text-sm">Org nr: 933886328 MVA</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-accent text-xl">Tjenester</h3>
          <p className="text-sm">Lægdene 11, 5096, Bergen</p>
          <p className="text-sm">40580085</p>
          <p className="text-sm"> Post@kgn.no </p>
          <p className="text-sm">Org nr: 933886328 MVA</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-accent text-xl">Om oss</h3>
          <p className="text-sm">Lægdene 11, 5096, Bergen</p>
          <p className="text-sm">40580085</p>
          <p className="text-sm">Org nr: 933886328 MVA</p>
        </div>
      </div>
    </footer>
  );
}
