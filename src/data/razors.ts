import type { Concept } from '../types/concept';

export const RAZORS: Concept[] = [
  {
    id: 'occams-razor',
    slug: 'occams-razor',
    name: "Occam's Razor",
    aliases: ['Law of Parsimony', 'Ockham’s Razor', 'Simplest Explanation'],
    kind: 'razor',
    domains: ['decision-making', 'systems', 'statistics'],
    tier: 'essential',
    oneLiner:
      'Among competing hypotheses that explain the evidence equally well, prefer the one that requires the fewest extra assumptions.',
    explanation:
      'Occam’s Razor does *not* say “the simplest story is always true.” It says don’t multiply unproven entities unnecessarily: every extra independent assumption you add to a theory lowers its prior probability, so start by testing the leaner explanation first.',
    logicalForm: 'If Hypothesis H1 and H2 fit all evidence E, and H1 requires fewer unproven assumptions → Test and favor H1 first.',
    origin: 'Attributed to Franciscan friar and logician William of Ockham (c. 1287–1347): “Entities should not be multiplied beyond necessity.”',
    examples: [
      {
        context: 'Software Debugging',
        scenario:
          'A web app stops returning data after a deploy. Before blaming a rare Linux kernel bug or cosmic rays, check whether the environment variable or API endpoint changed in the latest commit.',
        breakdown:
          'A misconfigured deploy needs one mundane assumption; a kernel bug needs several extraordinary ones.',
      },
      {
        context: 'Everyday Observation',
        scenario:
          'You find your living-room lamp knocked over and your cat hiding under the couch. Assuming the cat bumped it beats hypothesizing an invisible burglar who stole nothing.',
        breakdown:
          'The cat hypothesis explains every fact using entities already known to be in the room.',
      },
    ],
    antidote:
      'Use Occam’s Razor to set your *starting* investigation order—never as a license to ignore evidence that genuinely demands a more complex explanation (see Hickam’s Dictum).',
    relations: [
      {
        targetId: 'hickams-dictum',
        type: 'counterpart_to',
        note: 'Hickam’s Dictum reminds us that complex systems can genuinely suffer multiple simultaneous causes.',
      },
      {
        targetId: 'bayesian-updating',
        type: 'related_to',
        note: 'Mathematically, Bayesian model selection naturally penalizes extra ungrounded parameters.',
      },
      {
        targetId: 'galls-law',
        type: 'related_to',
      },
      {
        targetId: 'affirming-the-consequent',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'hanlons-razor',
    slug: 'hanlons-razor',
    name: "Hanlon's Razor",
    aliases: ['Never Attribute to Malice', 'Stupidity Over Malice', 'Oversight Before Conspiracy'],
    kind: 'razor',
    domains: ['everyday', 'organizations', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Never attribute to malice that which is adequately explained by oversight, incompetence, fatigue, or misaligned incentives.',
    explanation:
      'When someone drops the ball or ships a frustrating change, our brains instinctively imagine deliberate hostility or sabotage. In practice, rushed deadlines, miscommunication, or simple human error explain the vast majority of workplace and everyday friction.',
    logicalForm: 'Harmful outcome O occurs → Check error, miscommunication, or neglect before inferring malicious intent.',
    origin: 'Submitted by Robert J. Hanlon to Murphy’s Law Book Two (1980); similar sentiments appeared earlier in Goethe (1774) and Robert Heinlein (1941).',
    examples: [
      {
        context: 'Workplace Collaboration',
        scenario:
          'A colleague leaves you off an important meeting invite. Instead of assuming political sabotage, you ask casually—and learn they used an outdated calendar group.',
        breakdown:
          'Assuming oversight preserves trust and solves the issue in ten seconds.',
      },
      {
        context: 'Customer Friction',
        scenario:
          'A confusing utility bill is usually the result of decades-old legacy billing software rather than a secret plot to trick customers.',
        breakdown:
          'Institutional clutter accounts for far more pain than coordinated villainy.',
      },
    ],
    antidote:
      'Start with charitable curiosity, while keeping healthy boundaries: if the same “oversight” repeats systematically and always benefits one party, update your priors.',
    relations: [
      {
        targetId: 'fundamental-attribution-error',
        type: 'counterpart_to',
      },
      {
        targetId: 'occams-razor',
        type: 'related_to',
        note: 'Hanlon’s Razor is a social application of Occam’s Razor—conspiracies require far more coordination than mistakes.',
      },
      {
        targetId: 'grices-razor',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'hitchens-razor',
    slug: 'hitchens-razor',
    name: "Hitchens's Razor",
    aliases: ['Assert Without Evidence', 'Burden of Proof Razor'],
    kind: 'razor',
    domains: ['debate', 'decision-making', 'everyday'],
    tier: 'essential',
    oneLiner:
      'What can be asserted without evidence can also be dismissed without evidence.',
    explanation:
      'A crisp epistemological shield against empty claims. You are not obligated to spend hours disproving an unsubstantiated rumor, hot take, or speculative pitch—the claimant must first bring something verifiable to the table.',
    logicalForm: 'Claim C presented with zero evidence → No refutation required to withhold belief.',
    origin: 'Journalist and author Christopher Hitchens (2003); echoes the Latin proverb Quod gratis asseritur, gratis negatur.',
    examples: [
      {
        context: 'Strategy Meetings',
        scenario:
          'Someone insists without data that “younger users hate dark mode.” Rather than commissioning a study to disprove it, the team asks what research supports the claim before acting.',
        breakdown:
          'Places the investigative effort back where the assertion originated.',
      },
      {
        context: 'Online Rumors',
        scenario:
          'An anonymous social post claims a popular open-source library contains spyware with zero code links or proof.',
        breakdown:
          'Without reproducible evidence, the claim merits skepticism rather than panic.',
      },
    ],
    antidote:
      'Use Hitchens’s Razor constructively—not to shut down early brainstorming or hypotheses clearly labeled as “just a hunch,” but to guard decisions against confident, evidence-free assertions.',
    relations: [
      {
        targetId: 'burden-of-proof',
        type: 'counterpart_to',
      },
      {
        targetId: 'sagan-standard',
        type: 'related_to',
      },
      {
        targetId: 'brandolinis-law',
        type: 'counterpart_to',
      },
      {
        targetId: 'appeal-to-ignorance',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'sagan-standard',
    slug: 'sagan-standard',
    name: 'The Sagan Standard',
    aliases: ['ECREE', 'Extraordinary Claims Require Extraordinary Evidence'],
    kind: 'razor',
    domains: ['debate', 'statistics', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Extraordinary claims require extraordinary evidence.',
    explanation:
      'The strength of evidence you demand should scale with how radically a claim contradicts established knowledge. Saying “it rained in Chicago today” needs a casual glance at a weather report; claiming a perpetual-motion machine or a 10x overnight productivity miracle demands airtight, independently replicated proof.',
    logicalForm: 'Low prior probability P(H) → Demands proportionally high likelihood ratio from evidence E.',
    origin: 'Popularized by astronomer Carl Sagan on Cosmos (1980); earlier roots in Pierre-Simon Laplace (1814) and Marcello Truzzi (1978).',
    examples: [
      {
        context: 'Tech & Science Breakthroughs',
        scenario:
          'A startup claims a room-temperature superconductor or a lossless compression algorithm that beats Shannon’s entropy limit.',
        breakdown:
          'Because the claim overturns decades of verified physics/information theory, slide decks aren’t enough—independent lab replication is essential.',
      },
      {
        context: 'Health & Finance',
        scenario:
          'An investment fund promises guaranteed 40% annual returns with zero volatility.',
        breakdown:
          'Extraordinary return-to-risk claims demand forensic auditing—not glossy testimonials.',
      },
    ],
    antidote:
      'Pair the Sagan Standard with Bayesian Updating: calibrate your skepticism proportionally to the prior, and stay genuinely willing to update if extraordinary evidence actually arrives.',
    relations: [
      {
        targetId: 'hitchens-razor',
        type: 'related_to',
      },
      {
        targetId: 'bayesian-updating',
        type: 'related_to',
        note: 'The Sagan Standard is intuitive Bayes’ theorem in a single sentence.',
      },
      {
        targetId: 'burden-of-proof',
        type: 'counterpart_to',
      },
      {
        targetId: 'appeal-to-ignorance',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'hickams-dictum',
    slug: 'hickams-dictum',
    name: "Hickam's Dictum",
    aliases: ['Multiple Causes Principle', 'Anti-Occam in Complex Systems'],
    kind: 'razor',
    domains: ['systems', 'decision-making', 'statistics'],
    tier: 'deep-cut',
    oneLiner:
      'A patient—or complex system—can have as many diseases or bugs at the same time as it darn well pleases.',
    explanation:
      'A vital counterweight to over-applying Occam’s Razor. In complex, aging systems (human bodies, distributed software, economies), strange symptoms often stem from two or three independent faults coinciding rather than one clever unified cause.',
    origin: 'Physician John Bamber Hickam at Duke University Medical Center (1950s).',
    examples: [
      {
        context: 'Incident Triage',
        scenario:
          'During a checkout slowdown, engineers waste hours searching for one bug that explains both slow SQL queries and intermittent 403 errors—when in fact a missing index AND an expired CDN token happened on the same afternoon.',
        breakdown:
          'Forcing unrelated symptoms under a single root cause blinded the team to two ordinary concurrent faults.',
      },
      {
        context: 'Medicine',
        scenario:
          'An older patient presents with fatigue and joint pain; assuming a single rare autoimmune disorder may miss that they simply have both iron deficiency and osteoarthritis.',
        breakdown:
          'Two common conditions together are often more probable than one rare unifying syndrome.',
      },
    ],
    antidote:
      'Test a single unifying hypothesis first (Occam), but when evidence stops fitting cleanly, split the symptoms and investigate independent concurrent causes.',
    relations: [
      {
        targetId: 'occams-razor',
        type: 'counterpart_to',
      },
      {
        targetId: 'map-is-not-the-territory',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'poppers-falsifiability',
    slug: 'poppers-falsifiability',
    name: "Popper's Falsifiability Principle",
    aliases: ['Falsifiability', 'Demarcation Criterion', 'Popper’s Razor'],
    kind: 'razor',
    domains: ['debate', 'statistics', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'For a theory or claim to be scientific and genuinely informative, there must be a conceivable observation or test that could prove it wrong.',
    explanation:
      'A theory that explains *every* possible outcome (“if it rains my charm worked; if it doesn’t, the spirits tested our faith”) actually predicts nothing at all. Strong claims stick their neck out by forbidding specific observable outcomes.',
    logicalForm: 'If no possible observation O could ever disconfirm Claim C → C is unfalsifiable (not empirically testable).',
    origin: 'Philosopher of science Karl Popper, The Logic of Scientific Discovery (1934 / 1959).',
    examples: [
      {
        context: 'Product Experiments',
        scenario:
          'A team launches a redesign without defining failure metrics: if signups rise, “users love it”; if signups drop, “we’re attracting higher-quality users!”',
        breakdown:
          'When every outcome counts as victory, the experiment cannot teach you anything.',
      },
      {
        context: 'Forecasting & Punditry',
        scenario:
          '“The market will experience volatility soon.” vs. “The S&P 500 will close below 4,500 before December 31.”',
        breakdown:
          'Only the second prediction risks being proven wrong—and therefore carries real informational value.',
      },
    ],
    antidote:
      'Before running any test or adopting a strategy, write down the exact observation that would force you to conclude your hypothesis was wrong.',
    relations: [
      {
        targetId: 'no-true-scotsman',
        type: 'counterpart_to',
      },
      {
        targetId: 'moving-the-goalposts',
        type: 'counterpart_to',
      },
      {
        targetId: 'circular-reasoning',
        type: 'counterpart_to',
      },
      {
        targetId: 'alders-razor',
        type: 'related_to',
      },
      {
        targetId: 'confirmation-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'texas-sharpshooter',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'grices-razor',
    slug: 'grices-razor',
    name: "Grice's Razor",
    aliases: ['Principle of Conversational Implicature', 'Intended Meaning Over Literal Pedantry'],
    kind: 'razor',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'deep-cut',
    oneLiner:
      'Address what a speaker clearly intended to mean in context rather than nitpicking the strict literal wording of what they said.',
    explanation:
      'Human speech relies heavily on shared context and shorthand. Treating everyday statements like hostile legal contracts wastes time and derails productive conversation. Grice’s Razor trims away pedantic “gotchas” in favor of pragmatic meaning.',
    origin: 'Philosopher of language Paul Grice (1975), derived from his Cooperative Principle and Conversational Maxims.',
    examples: [
      {
        context: 'Team Communication',
        scenario:
          'A teammate says, “Nobody uses the legacy export page anymore.” Instead of replying “Actually, 3 people clicked it last month, so ‘nobody’ is false!”, you engage with their real point: usage is negligible.',
        breakdown:
          'Hyperbolic shorthand (“nobody”) pragmatically means “virtually nobody worth maintaining it for.”',
      },
      {
        context: 'Code Reviews & Docs',
        scenario:
          'A designer asks “Can you make this button pop more?” A helpful engineer clarifies visual hierarchy and contrast rather than mocking the vague verb “pop.”',
        breakdown:
          'Interpreting intent bridges cross-functional vocabulary gaps.',
      },
    ],
    antidote:
      'When someone phrases something loosely, paraphrase their apparent intent warmly (“It sounds like you mean X—is that right?”) before critiquing.',
    relations: [
      {
        targetId: 'steel-manning',
        type: 'related_to',
        note: 'Both insist on charitable, high-signal engagement with what the other person is trying to communicate.',
      },
      {
        targetId: 'hanlons-razor',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'alders-razor',
    slug: 'alders-razor',
    name: "Alder's Razor",
    aliases: ["Newton's Flaming Laser Sword", 'Experimental Settling'],
    kind: 'razor',
    domains: ['debate', 'decision-making', 'systems'],
    tier: 'deep-cut',
    oneLiner:
      'What cannot be settled by experiment, observation, or clear logic is not worth endless heated debate.',
    explanation:
      'Mathematician Mike Alder humorously dubbed his rule “Newton’s Flaming Laser Sword” because it cuts even sharper than Occam’s Razor: if two competing claims make zero difference to any observable test or practical decision, stop burning hours arguing over them.',
    origin: 'Mathematician Mike Alder in Philosophy Now (2004).',
    examples: [
      {
        context: 'Product Debates',
        scenario:
          'Two designers spend three meetings debating whether users prefer Onboarding Flow A or Flow B in theory—when running a 4-day usability test with 10 users settles it immediately.',
        breakdown:
          'Turning an armchair debate into a quick experiment saves hours of speculation.',
      },
      {
        context: 'Abstract Philosophy & Strategy',
        scenario:
          'Debating whether an abstract categorization belongs in Bucket X or Bucket Y when both buckets trigger the exact same downstream action.',
        breakdown:
          'A distinction without an operational difference rarely deserves prolonged conflict.',
      },
    ],
    antidote:
      'Ask in stalled debates: “What concrete test, prototype, or observable outcome would settle this? If none exists, why are we still arguing?”',
    relations: [
      {
        targetId: 'poppers-falsifiability',
        type: 'related_to',
      },
      {
        targetId: 'occams-razor',
        type: 'related_to',
      },
      {
        targetId: 'sayres-law',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'humes-razor',
    slug: 'humes-razor',
    name: "Hume's Razor",
    aliases: ['Hume’s Maxim on Miracles', 'Proportional Testimony Razor'],
    kind: 'razor',
    domains: ['debate', 'decision-making', 'statistics'],
    tier: 'intermediate',
    oneLiner:
      'No testimony is sufficient to establish an extraordinary or miraculous event unless the falsehood of that testimony would be even more miraculous than the event itself.',
    explanation:
      'David Hume framed skepticism as a comparative probability test: weigh the odds that an extraordinary event truly broke established laws of reality against the much more mundane odds that a witness misperceived, exaggerated, or lied.',
    logicalForm: 'Accept extraordinary testimony T only if P(T is mistaken/deceptive) < P(Extraordinary event occurred).',
    origin: 'Scottish philosopher David Hume, An Enquiry Concerning Human Understanding, Section X (“Of Miracles”, 1748).',
    examples: [
      {
        context: 'Viral Claims & Screenshots',
        scenario:
          'A blurry screenshot claims a bank is secretly deleting customer balances. Is it more likely that a regulated banking ledger vanished randomly, or that someone edited a webpage in DevTools for clicks?',
        breakdown:
          'Forging a screenshot takes ten seconds—vastly more probable than the extraordinary claim.',
      },
      {
        context: 'Performance Benchmarks',
        scenario:
          'An unverified blog claims a 100x speedup over mature C compilers on a single afternoon’s code; ask first whether the benchmark accidentally skipped the workload (dead-code elimination).',
        breakdown:
          'A measurement bug is far more likely than overturning decades of compiler optimization.',
      },
    ],
    antidote:
      'Always compare two probabilities side-by-side: “How likely is this remarkable claim?” vs. “How likely is error, bias, or fabrication in the report?”',
    sources: [
      {
        site: 'Stanford Encyclopedia of Philosophy (SEP)',
        title: "Miracles & Hume's Maxim Entry",
        url: 'https://plato.stanford.edu/entries/miracles/',
      },
      {
        site: 'Wikipedia Philosophical Razors Database',
        title: 'Philosophical razor — Hume’s razor',
        url: 'https://en.wikipedia.org/wiki/Philosophical_razor',
      },
    ],
    relations: [
      {
        targetId: 'sagan-standard',
        type: 'related_to',
        note: 'The Sagan Standard is the crisp modern descendant of Hume’s Razor.',
      },
      {
        targetId: 'bayesian-updating',
        type: 'related_to',
      },
      {
        targetId: 'hitchens-razor',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'duck-test',
    slug: 'duck-test',
    name: 'The Duck Test',
    aliases: ['Abductive Pragmatism', 'Looks Like a Duck'],
    kind: 'razor',
    domains: ['everyday', 'decision-making', 'systems'],
    tier: 'essential',
    oneLiner:
      'If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck—judge things by observable behavior, not labels.',
    explanation:
      'A razor of abductive reasoning: when an entity displays every operational hallmark of category X, treat it as X regardless of clever rebranding or technical hair-splitting. (In software, this directly inspired “duck typing.”)',
    logicalForm: 'Entity E exhibits all observable behaviors of X → Infer operationally that E is X until proven otherwise.',
    origin: 'Attributed to poet James Whitcomb Riley (late 19th century) and diplomat Richard Patterson Jr. (1950).',
    examples: [
      {
        context: 'Product & Pricing',
        scenario:
          'A service calls its mandatory monthly fee a “membership convenience contribution”—yet it bills automatically every 30 days and locks features if unpaid. It’s a subscription.',
        breakdown:
          'Observable behavior cuts cleanly through euphemistic rebranding.',
      },
      {
        context: 'Software Architecture',
        scenario:
          'A “distributed microservices” system where all 12 services share one database and must be deployed simultaneously behaves like a distributed monolith.',
        breakdown:
          'Operational coupling—not the architecture diagram label—defines what the system really is.',
      },
    ],
    antidote:
      'Remember the Duck Test is probabilistic, not infallible: check for mimics or edge cases when high stakes require formal verification.',
    sources: [
      {
        site: 'Wikipedia Philosophical Razors Database',
        title: 'Duck test (Abductive reasoning)',
        url: 'https://en.wikipedia.org/wiki/Duck_test',
      },
    ],
    relations: [
      {
        targetId: 'occams-razor',
        type: 'related_to',
      },
      {
        targetId: 'map-is-not-the-territory',
        type: 'related_to',
      },
      {
        targetId: 'equivocation',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'suttons-law',
    slug: 'suttons-law',
    name: "Sutton's Law",
    aliases: ['Go Where the Money Is', 'High-Probability First Razor'],
    kind: 'razor',
    domains: ['systems', 'decision-making', 'statistics'],
    tier: 'intermediate',
    oneLiner:
      'When diagnosing a problem, test the most obvious, highest-probability cause first instead of chasing exotic rarities.',
    explanation:
      'Named after bank robber Willie Sutton—who allegedly quipped he robbed banks “because that’s where the money is.” In medicine and engineering triage, ordering your tests by base-rate probability plus low testing cost saves massive time and money.',
    origin: 'Medical teaching maxim (1960s), inspired by bank robber Willie Sutton.',
    examples: [
      {
        context: 'Debugging & Ops',
        scenario:
          'Before running a packet sniffer on router firmware, check whether the server is plugged in, DNS resolved, and the recent deploy succeeded.',
        breakdown:
          'Testing high-probability mundane causes first resolves 90% of incidents in minutes.',
      },
      {
        context: 'Business Growth',
        scenario:
          'Rather than optimizing a footer link seen by 0.2% of visitors, inspect the main pricing and checkout funnel where 85% of drop-offs happen.',
        breakdown:
          'Focus diagnostic energy where the largest impact actually lives.',
      },
    ],
    antidote:
      'Start where the probability mass is largest—but once common causes are ruled out cleanly, widen your search so you don’t miss genuine rare faults.',
    sources: [
      {
        site: 'Wikipedia Diagnostic Heuristics Database',
        title: "Sutton's law",
        url: 'https://en.wikipedia.org/wiki/Sutton%27s_law',
      },
    ],
    relations: [
      {
        targetId: 'occams-razor',
        type: 'related_to',
      },
      {
        targetId: 'pareto-principle',
        type: 'related_to',
      },
      {
        targetId: 'base-rate-fallacy',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'einsteins-razor',
    slug: 'einsteins-razor',
    name: "Einstein's Razor",
    aliases: ['As Simple As Possible, But No Simpler', 'Anti-Oversimplification Razor'],
    kind: 'razor',
    domains: ['systems', 'decision-making', 'debate'],
    tier: 'essential',
    oneLiner:
      'Make every explanation, model, or design as simple as possible—but no simpler.',
    explanation:
      'A crucial companion to Occam’s Razor. Stripping away bloat improves clarity, yet shaving past the essential complexity of reality breaks the model. True elegance preserves every necessary nuance without a gram of extra clutter.',
    origin: 'Paraphrase of Albert Einstein’s 1933 Oxford lecture (“The supreme goal of all theory is to make the irreducible basic elements as simple and as few as possible without having to surrender the adequate representation of a single datum of experience”), distilled by Roger Sessions (1950).',
    examples: [
      {
        context: 'API & Product Design',
        scenario:
          'Hiding an essential timezone parameter to make a scheduling API look “cleaner” causes silent daylight-saving bugs across continents.',
        breakdown:
          'Shaving away irreducible domain complexity pushes hidden pain onto every user.',
      },
      {
        context: 'Data Summaries',
        scenario:
          'Reporting only an arithmetic mean salary hides extreme skew when median plus percentiles are needed to describe reality accurately.',
        breakdown:
          'Over-compression destroys the signal the summary was meant to convey.',
      },
    ],
    antidote:
      'Remove every piece you can—and test whether removing the next piece breaks fidelity to the territory.',
    sources: [
      {
        site: 'Quote Investigator / Wikiquote Database',
        title: 'Everything Should Be Made as Simple as Possible, But Not Simpler',
        url: 'https://quoteinvestigator.com/2011/05/13/einstein-simple/',
      },
      {
        site: 'Wikipedia Philosophical Razors Database',
        title: 'Philosophical razor — Einstein’s razor',
        url: 'https://en.wikipedia.org/wiki/Philosophical_razor',
      },
    ],
    relations: [
      {
        targetId: 'occams-razor',
        type: 'counterpart_to',
        note: 'Occam trims needless complexity; Einstein guards against trimming essential reality.',
      },
      {
        targetId: 'map-is-not-the-territory',
        type: 'related_to',
      },
      {
        targetId: 'hickams-dictum',
        type: 'related_to',
      },
    ],
  },
];
