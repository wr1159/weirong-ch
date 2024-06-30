export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:col-span-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Chu Wei Rong
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hello, I am{" "}
                <span className="font-bold text-accent-foreground">
                  Wei Rong
                </span>
                , a penultimate Computer Science student at NUS.
                <br />
                <br />I love Software Engineering and other forms of engineering
                as it allows people to create solutions to problems the world faces. I
                particularly enjoy the blockchain space because of the constant
                innovation to capture the attention economy.
                <br/>
                <br/>
                The colour theme you are seeing is the same theme I use for my keyboard and all my apps!
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:col-span-3">
            <div className="grid gap-1 content-start">
              <h3 className="text-xl font-bold">Experience</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  Full Stack Intern at{" "}
                  <a href="https://www.switcheo.com/">Switcheo Labs</a>
                </li>
                <li>
                  Freelancer at{" "}
                  <a href="https://www.solutions16.io/">Solutions16</a>
                </li>
                <li>
                  SWE Intern, Freelancer at{" "}
                  <a href="https://www.coingecko.com/">Coin</a>
                  <a href="https://www.geckoterminal.com/">Gecko</a>
                </li>
                <li>
                  Blockchain Director at{" "}
                  <a href="https://fintechsociety.comp.nus.edu.sg/">NUS FTS</a>
                </li>
                <li>
                  SWE Member at <a href="https://rhapp.lol">RHDevelopers</a>
                </li>
                <li>
                  Teaching Assistant at{" "}
                  <a href="https://cde.nus.edu.sg/edic/idp/">NUS EDIC</a>
                </li>
              </ul>
            </div>
            <div className="grid gap-1 content-start">
              <h3 className="text-xl font-bold">Projects / Contributions</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  Contributor to{" "}
                  <a href="https://github.com/cosmos/cosmos-sdk">Cosmos</a>
                  <a href="https://github.com/cosmos/cosmos-sdk/pull/20517">
                    SDK
                  </a>{" "}
                  and <a href="https://nusmods.com/planner">NUS</a>
                  <a href="https://github.com/nusmodifications/nusmods/pulls?q=is:pr+author:wr1159+">
                    Mods
                  </a>
                </li>
                <li>
                  <a href="https://github.com/marcuspang/only-frames">
                    Content Monetisation
                  </a>{" "}
                  on Warpcast
                </li>
                <li>
                  <a href="https://otamatone.vercel.app/">Otamatone PWA</a> to
                  play the otamatone
                </li>
                <li>
                  <a href="https://github.com/wr1159/r2auto_nav">
                    Can Delivery Robot
                  </a>{" "}
                  and{" "}
                  <a href="https://github.com/wr1159/r2auto_nav/tree/main/ESP32">
                    Dispenser
                  </a>
                </li>
                <li>
                  <a href="https://devpost.com/software/knock-it-down">
                    Pushup Counting ML Model
                  </a>
                </li>
                <li>and more...</li>
              </ul>
            </div>
            <div className="grid gap-1 content-start">
              <h3 className="text-xl font-bold">Languages</h3>
              <ul className="text-muted-foreground grid-cols-2 grid gap-y-1">
                <li>Go</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Protobuf</li>
                <li>Python</li>
                <li>Solidity</li>
                <li>SQL</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="grid gap-1 content-start">
              <h3 className="text-xl font-bold">Frameworks / Tools</h3>
              <ul className="text-muted-foreground grid-cols-2 grid gap-y-1">
                <li>Astro</li>
                <li>CosmosSDK</li>
                <li>Docker</li>
                <li>Django</li>
                <li>Git</li>
                <li>HardHat</li>
                <li>Kubernetes</li>
                <li>NextJS</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>React</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
