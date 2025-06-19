export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-2">
          Contact Me
        </h1>
        <p>
          Feel free to connect with me if you want to talk to me about
          blockchains, otamatones, or anything else!
        </p>
        <ul className="space-y-1 text-muted-foreground py-4">
          <li>chuweirong at u dot nus dot edu</li>
          <li>
            <a href="https://t.me/wr1159" rel="nofollow noindex noreferrer">
              t.me/wr1159
            </a>
          </li>
          <li>
            <a href="https://github.com/wr1159" rel="nofollow">
              github.com/wr1159
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wei-rong-chu/" rel="nofollow">
              linkedin.com/in/wei-rong-chu
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
