import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HackathonsPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-6">
        <div className="px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-2">
            Hackathons I've Won
          </h1>
          <p className="text-muted-foreground pb-6">(Most Recent First)</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hackathon</TableHead>
                <TableHead>Awards</TableHead>
                <TableHead>Project Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <a
                    href="https://dorahacks.io/buidl/26511"
                    rel="nofollow noindex noreferrer"
                  >
                    ETHDublin 2025
                  </a>
                </TableCell>
                <TableCell>
                  <div>Base 1st Place</div>
                  <div>Top 5 Finalist</div>
                </TableCell>
                <TableCell>Social Habit-breaking Platform</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://x.com/wr1159/status/1923394297816051821"
                    rel="nofollow noindex noreferrer"
                  >
                    Consensus 2025 EasyA Hackathon
                  </a>
                </TableCell>
                <TableCell>
                  <div>Polkadot 1st Place</div>
                  <div>Forte 3rd Place</div>
                </TableCell>
                <TableCell>NFC-based Proof-Of-Location System</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://x.com/wr1159/status/1912215613973409836"
                    rel="nofollow noindex noreferrer"
                  >
                    Encode AI Hackathon 2025
                  </a>
                </TableCell>
                <TableCell>Zora 2nd Place</TableCell>
                <TableCell>Brainrot Zora Coin Generator</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://dorahacks.io/buidl/25723"
                    rel="nofollow noindex noreferrer"
                  >
                    UK AI Hackathon 2025
                  </a>
                </TableCell>
                <TableCell>
                  <div>Venice 1st Place</div>
                  <div>FLock 2nd Place</div>
                  <div>EduChain 3rd Place</div>
                </TableCell>
                <TableCell>AI Gamified EduFi Platform</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://dorahacks.io/buidl/25565"
                    rel="nofollow noindex noreferrer"
                  >
                    ETHBucharest 2025
                  </a>
                </TableCell>
                <TableCell>Base Bounty Winner</TableCell>
                <TableCell>Milestone-based Crowdfunding Platform</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://github.com/wr1159/BrisHack-2025"
                    rel="nofollow noindex noreferrer"
                  >
                    BrisHack 2025
                  </a>
                </TableCell>
                <TableCell>Most Technical Hack</TableCell>
                <TableCell>Crowdsourcing Data Collection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://dorahacks.io/buidl/22584"
                    rel="nofollow noindex noreferrer"
                  >
                    ETHOxford 2025
                  </a>
                </TableCell>
                <TableCell>
                  <div>Honourable Mention</div>
                  <div>AirDAO 1st Place</div>
                </TableCell>
                <TableCell>On-Chain AI Deduction Game</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://dorahacks.io/buidl/20738"
                    rel="nofollow noindex noreferrer"
                  >
                    Taipei Blockchain Week 2024
                  </a>
                </TableCell>
                <TableCell>Soon Bounty Winner</TableCell>
                <TableCell>Token Basket Creation and Tracking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://cde.nus.edu.sg/edic/projects/innovations-in-intelligent-systems/sam/"
                    rel="nofollow noindex noreferrer"
                  >
                    SLA GNSS Innovation Quest
                  </a>
                </TableCell>
                <TableCell>1st Place</TableCell>
                <TableCell>
                  Autonomous Invasive Creeper Detecting Robot
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://ethglobal.com/showcase/co-in-munity-d9m3d"
                    rel="nofollow noindex noreferrer"
                  >
                    ETHGlobal Singapore 2024
                  </a>
                </TableCell>
                <TableCell>
                  <div>1inch 2nd Place</div>
                  <div>AirDAO 1st Place</div>
                </TableCell>
                <TableCell>Community Token Launchpad</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://ethglobal.com/showcase/ordisynth-8o26d"
                    rel="nofollow noindex noreferrer"
                  >
                    ETHOnline 2024
                  </a>
                </TableCell>
                <TableCell>
                  Best Runes or Ordinal project on Rootstock
                </TableCell>
                <TableCell>Ordinal Synthetic Market</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://github.com/marcuspang/only-frames"
                    rel="nofollow noindex noreferrer"
                  >
                    Singapore Base Frame Hackathon 2024
                  </a>
                </TableCell>
                <TableCell>Most Creative Hack</TableCell>
                <TableCell>Content Monetisation on Farcaster</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a
                    href="https://devpost.com/software/knock-it-down"
                    rel="nofollow noindex noreferrer"
                  >
                    NUS Hacknroll 2023
                  </a>
                </TableCell>
                <TableCell>Best Freshman Hacks</TableCell>
                <TableCell>Push Up Counter</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
