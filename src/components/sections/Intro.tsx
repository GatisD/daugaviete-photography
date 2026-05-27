import ImageReveal from '../animations/ImageReveal';

export default function Intro() {
  return (
    <section className="py-30 bg-bg-secondary">
      <div className="container-app max-w-3xl text-center">
        <ImageReveal>
          <p className="text-xs tracking-widest text-accent-gold mb-6">SVEICINĀTI</p>
          <h2 className="text-h2 font-serif font-light mb-8">
            Es ticu, ka labākās bildes rodas tad, kad cilvēki aizmirst, ka viņus fotografē
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Es nelikšu tev stāvēt un smaidīt. Tā vietā mēs pastaigāsimies, parunāsimies, pasmiesimies - un kādā brīdī tu aizmirsīsi, ka esmu ar kameru. Tieši tur sākas mans labākais darbs. Mana pieeja ir vienkārša: es vēlos, lai tu bildēs izskatītos kā tu, nevis kāds cits. Dabisks. Patiess. Bez maskas. Tieši tādas bildes tu gribēsi rādīt vēl pēc desmit gadiem.
          </p>
          <p className="mt-8 font-serif italic text-text-secondary">
            - Daugaviete Photography
          </p>
        </ImageReveal>
      </div>
    </section>
  );
}
