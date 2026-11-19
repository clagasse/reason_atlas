import type { Concept } from '../types/concept';

export const MENTAL_MODELS: Concept[] = [
  {
    id: 'steel-manning',
    slug: 'steel-manning',
    name: 'Steel Manning',
    aliases: ['Steelman', 'Principle of Charity', 'Strongest-Case Argument'],
    kind: 'mental-model',
    domains: ['debate', 'decision-making', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Reconstructing your opponent’s argument in its clearest, strongest, most persuasive form before evaluating or critiquing it.',
    explanation:
      'The direct opposite of a Straw Man. Knocking down a weak caricature proves nothing and teaches you nothing. When you can articulate the other side’s case so well that *they* say “yes, that’s even better than I put it,” you either uncover a blind spot of your own or earn a truly decisive counterargument.',
    origin: 'Modern rationalist and philosophical discourse (2010s), rooted in Donald Davidson’s Principle of Charity and Daniel Dennett’s Rapoport’s Rules.',
    examples: [
      {
        context: 'Architecture Debates',
        scenario:
          'Before arguing for a relational database, an engineer first outlines the strongest case for the team’s proposed document store—flexible schemas, horizontal sharding, and fast initial iteration—and confirms the proposer agrees.',
        breakdown:
          'Lowers defensiveness and ensures the final decision addresses real strengths rather than imaginary flaws.',
      },
      {
        context: 'Policy Analysis',
        scenario:
          'Writing a memo that opens with “Why smart, well-intentioned people oppose this change” before making the recommendation.',
        breakdown:
          'Forces intellectual honesty and preemptively surfaces real objections.',
      },
    ],
    antidote:
      'Use Steel Manning routinely—just avoid “over-steeling” by inventing a sophisticated position the speaker doesn’t actually hold and then failing to check whether they agree with it.',
    relations: [
      {
        targetId: 'straw-man',
        type: 'counterpart_to',
      },
      {
        targetId: 'grices-razor',
        type: 'related_to',
      },
      {
        targetId: 'motte-and-bailey',
        type: 'counterpart_to',
      },
      {
        targetId: 'red-teaming',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'first-principles',
    slug: 'first-principles',
    name: 'First Principles Thinking',
    aliases: ['Reasoning From Fundamentals', 'Deconstruction Thinking'],
    kind: 'mental-model',
    domains: ['decision-making', 'systems', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Boiling a problem down to its most fundamental, verified truths and reasoning upward from there—rather than copying conventions by analogy.',
    explanation:
      'Most day-to-day reasoning works by analogy (“we do it this way because competitors do” or “that’s what batteries have always cost”). Analogy is fast for routine tasks, but first principles reveals breakthroughs when legacy constraints no longer apply.',
    origin: 'Aristotle (Metaphysics: “the first basis from which a thing is known”); used extensively in physics, engineering, and design.',
    examples: [
      {
        context: 'Cost Engineering',
        scenario:
          'Instead of accepting that custom hardware enclosures cost $500 because suppliers quote $500, break down raw aluminum weight, machining time, and tolerances to see whether the true physical floor is $60.',
        breakdown:
          'Separates immutable physical costs from inherited supply-chain markups.',
      },
      {
        context: 'Workflow Redesign',
        scenario:
          'Rather than digitizing a clunky 6-signature paper form step for step, ask “What single risk are we actually trying to prevent?” and replace the whole chain with an automated audit trail.',
        breakdown:
          'Rebuilding from the core goal avoids immortalizing obsolete paper-era workarounds.',
      },
    ],
    antidote:
      'Save first-principles reconstruction for high-leverage or stuck problems—re-deriving everything from scratch for minor choices wastes energy and risks violating Chesterton’s Fence.',
    relations: [
      {
        targetId: 'appeal-to-authority',
        type: 'counterpart_to',
      },
      {
        targetId: 'status-quo-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'circular-reasoning',
        type: 'counterpart_to',
      },
      {
        targetId: 'chestertons-fence',
        type: 'related_to',
      },
      {
        targetId: 'bandwagon',
        type: 'counterpart_to',
      },
      {
        targetId: 'illusion-of-explanatory-depth',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'second-order-thinking',
    slug: 'second-order-thinking',
    name: 'Second-Order Thinking',
    aliases: ['And Then What?', 'Consequence Cascade', 'Downstream Thinking'],
    kind: 'mental-model',
    domains: ['decision-making', 'systems', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Looking beyond the immediate, obvious result of a decision to ask “And then what happens next?” across time and incentives.',
    explanation:
      'First-order thinking is fast and seductive: “Cut prices → sell more today.” Second-order thinking traces the ripples: “Cut prices → competitors match → margins collapse → support quality drops → brand erodes.” Many policies look brilliant at order 1 and disastrous at order 2.',
    origin: 'Popularized by investor Howard Marks (The Most Important Thing, 2011) and systems thinkers like Donella Meadows.',
    examples: [
      {
        context: 'Incentive Design',
        scenario:
          'First-order: “Let’s give bonuses for shipping features fast.” Second-order: “Engineers skip tests to hit bonuses, outages spike next quarter, and velocity slows below where we started.”',
        breakdown:
          'Anticipating behavioral adaptation prevents self-inflicted Goodhart traps.',
      },
      {
        context: 'Personal Habits',
        scenario:
          'Saying yes to every meeting feels polite today (first-order), yet leaves zero deep-work time and causes missed commitments next month (second-order).',
        breakdown:
          'Short-term comfort often trades directly against medium-term reliability.',
      },
    ],
    antidote:
      'Map outcomes across three horizons (10 days, 10 months, 10 years)—while avoiding paralysis by distinguishing plausible causal ripples from paranoid Slippery Slopes.',
    relations: [
      {
        targetId: 'cobra-effect',
        type: 'counterpart_to',
      },
      {
        targetId: 'streisand-effect',
        type: 'counterpart_to',
      },
      {
        targetId: 'chestertons-fence',
        type: 'related_to',
      },
      {
        targetId: 'slippery-slope',
        type: 'often_confused_with',
      },
      {
        targetId: 'inversion',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'inversion',
    slug: 'inversion',
    name: 'Inversion',
    aliases: ['Invert, Always Invert', 'Via Negativa', 'Backwards Problem Solving'],
    kind: 'mental-model',
    domains: ['decision-making', 'systems', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Instead of only asking how to succeed, flip the problem upside down and ask what would guarantee failure—then systematically avoid those traps.',
    explanation:
      'Mathematician Carl Jacobi famously advised “Invert, always invert.” Avoiding stupidity is often dramatically easier and more reliable than pursuing brilliance. Listing every way a project, product, or relationship could fail instantly exposes blind spots that optimistic brainstorming misses.',
    origin: 'Mathematician Carl Gustav Jacob Jacobi (19th century); popularized in investing and decision-making by Charlie Munger.',
    examples: [
      {
        context: 'Product Onboarding',
        scenario:
          'Instead of asking “How do we delight new users?”, ask “How could we guarantee a new user quits in frustration within 90 seconds?”—then eliminate every item on that list.',
        breakdown:
          'Friction points (slow loads, forced signups, cryptic errors) stand out vividly when framed negatively.',
      },
      {
        context: 'Team Culture',
        scenario:
          'Ask “How would we guarantee our best engineers quit within a year?” (unclear priorities, no autonomy, endless meetings, unfair pay)—and make preventing those non-negotiable.',
        breakdown:
          'Clear anti-goals give teams sharper guardrails than vague motivational slogans.',
      },
    ],
    antidote:
      'Combine inversion with positive vision: inversion builds a rock-solid floor against disaster, while forward thinking reaches for upside.',
    relations: [
      {
        targetId: 'pre-mortem',
        type: 'related_to',
        note: 'A Pre-Mortem is team-level inversion applied directly to a project timeline.',
      },
      {
        targetId: 'murphys-law',
        type: 'related_to',
      },
      {
        targetId: 'framing-effect',
        type: 'counterpart_to',
      },
      {
        targetId: 'second-order-thinking',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'map-is-not-the-territory',
    slug: 'map-is-not-the-territory',
    name: 'The Map Is Not the Territory',
    aliases: ['Model vs. Reality', 'Abstraction Leak'],
    kind: 'mental-model',
    domains: ['systems', 'decision-making', 'statistics'],
    tier: 'essential',
    oneLiner:
      'Every model, metric, spreadsheet, or diagram is a simplified reduction of reality—useful precisely because it omits details, and dangerous whenever we forget what it left out.',
    explanation:
      'A 1:1 map would be as huge and unusable as the country itself. All useful maps compress reality. Trouble begins when decision-makers stare exclusively at dashboards, financial models, or org charts and stop checking the messy ground truth they represent.',
    origin: 'Coined by Polish-American scholar Alfred Korzybski (1931), “A map is not the territory it represents.”',
    examples: [
      {
        context: 'Business Dashboards',
        scenario:
          'A SaaS executive sees green NPS and engagement charts while missing that frustrated power users have stopped submitting feedback altogether and are quietly migrating to a rival.',
        breakdown:
          'The metric map stayed clean even as customer reality shifted beneath it.',
      },
      {
        context: 'Software Specifications',
        scenario:
          'An architecture diagram shows a crisp arrow from Service A to Service B, hiding network timeouts, retries, clock skew, and partial failures in production.',
        breakdown:
          'Boxes-and-arrows omit the physical hazards of distributed networks.',
      },
    ],
    antidote:
      'Regularly step off the map onto the territory: talk directly to users, read raw support tickets, inspect production logs, and ask “What is this model leaving out?”',
    relations: [
      {
        targetId: 'goodharts-law',
        type: 'related_to',
      },
      {
        targetId: 'campbells-law',
        type: 'related_to',
      },
      {
        targetId: 'automation-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'hickams-dictum',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'circle-of-competence',
    slug: 'circle-of-competence',
    name: 'Circle of Competence',
    aliases: ['Epistemic Humility', 'Know Your Boundaries'],
    kind: 'mental-model',
    domains: ['decision-making', 'organizations', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Knowing the exact perimeter of what you genuinely understand deeply—and staying disciplined when stepping outside it.',
    explanation:
      'As Warren Buffett puts it, the size of your circle is far less important than knowing where its edges are. Inside your circle, you spot subtle nuances and rare opportunities; outside it, you are vulnerable to smooth pitches, blind spots, and unpriced risks.',
    origin: 'Coined and popularized by Warren Buffett and Charlie Munger (1996 Berkshire Hathaway shareholder letter).',
    examples: [
      {
        context: 'Investing & Advising',
        scenario:
          'A software executive passes on investing in a biotech clinical-trial startup she doesn’t understand, focusing instead on enterprise developer tools where she can spot real moats.',
        breakdown:
          'Saying “too hard” outside your edge prevents catastrophic mistakes.',
      },
      {
        context: 'Technical Leadership',
        scenario:
          'A frontend architect brings in a cryptography specialist rather than designing a custom token-signing protocol solo.',
        breakdown:
          'Recognizing boundary edges speeds up learning and prevents hidden flaws.',
      },
    ],
    antidote:
      'Expand your circle deliberately through study and low-stakes experiments, while relying on vetted specialists and checklists whenever high stakes lie outside your current perimeter.',
    relations: [
      {
        targetId: 'dunning-kruger-effect',
        type: 'counterpart_to',
      },
      {
        targetId: 'illusion-of-explanatory-depth',
        type: 'counterpart_to',
      },
      {
        targetId: 'peter-principle',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'pre-mortem',
    slug: 'pre-mortem',
    name: 'Pre-Mortem Analysis',
    aliases: ['Prospective Hindsight', 'Failure Rehearsal'],
    kind: 'mental-model',
    domains: ['organizations', 'decision-making', 'systems'],
    tier: 'essential',
    oneLiner:
      'Before launching a project, gather the team and imagine it is one year later and the project failed catastrophically—then work backward to explain why.',
    explanation:
      'Unlike asking “What could go wrong?” (which often gets polite shrugs to avoid sounding negative), assuming failure *already happened* makes surfacing hidden risks socially safe and surprisingly concrete. Research shows prospective hindsight boosts error identification by roughly 30%.',
    origin: 'Developed by cognitive psychologist Gary Klein (Harvard Business Review, 2007).',
    examples: [
      {
        context: 'Major Product Launch',
        scenario:
          'Two months before a cloud migration, a team writes silent 5-minute failure stories. Three engineers independently flag that the rollback plan has never been tested under load—saving them from an outage.',
        breakdown:
          'Gave quiet doubts explicit permission to surface before go-live.',
      },
      {
        context: 'Personal Decisions',
        scenario:
          'Before signing a co-founder agreement, both founders imagine their partnership broke up in year two and list the three most likely causes—then write clear governance rules for each.',
        breakdown:
          'Addresses awkward edge cases while goodwill is still high.',
      },
    ],
    antidote:
      'Keep pre-mortems focused on the top 3–5 highest-impact, actionable risks so the exercise builds resilience rather than anxiety.',
    relations: [
      {
        targetId: 'hindsight-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'groupthink',
        type: 'counterpart_to',
      },
      {
        targetId: 'planning-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'inversion',
        type: 'related_to',
      },
      {
        targetId: 'sunk-cost-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'murphys-law',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'bayesian-updating',
    slug: 'bayesian-updating',
    name: 'Bayesian Updating',
    aliases: ['Bayesian Thinking', 'Probabilistic Updating', 'Prior + Evidence'],
    kind: 'mental-model',
    domains: ['statistics', 'decision-making', 'systems'],
    tier: 'intermediate',
    oneLiner:
      'Treating beliefs as calibrated probabilities rather than binary certainties, and updating them incrementally whenever new evidence arrives.',
    explanation:
      'Instead of flipping from “100% sure” to “totally wrong” (or stubbornly refusing to budge), Bayesian thinking starts with a reasonable prior (base rate) and asks: “How much more likely would I be to see this new clue if my hypothesis were true versus false?” Stronger discriminating evidence moves the needle more.',
    logicalForm: 'Posterior Odds = Prior Odds × ( P(Evidence | H) / P(Evidence | ¬H) )',
    origin: 'Reverend Thomas Bayes (1763) and Pierre-Simon Laplace; popularized in modern forecasting by Philip Tetlock and Nate Silver.',
    examples: [
      {
        context: 'Hiring & Interviews',
        scenario:
          'A candidate has a strong portfolio (prior: 60% fit). They ace a practical debugging test (updates to 82%), then struggle slightly with a trivia question (nudges down only slightly to 78% because trivia has weak predictive signal).',
        breakdown:
          'Weights each piece of evidence by its true diagnostic power rather than overreacting to noise.',
      },
      {
        context: 'Forecasting Launches',
        scenario:
          'A PM tracks “65% chance we hit October 1” rather than “green/red,” adjusting weekly as integration milestones pass or slip.',
        breakdown:
          'Probabilities allow honest early course correction instead of sudden last-minute surprises.',
      },
    ],
    antidote:
      'Avoid false precision—writing “73.4%” when you really mean “roughly two-thirds” creates an illusion of rigor. Calibrate rough bands and track your predictions over time.',
    relations: [
      {
        targetId: 'base-rate-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'confirmation-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'moving-the-goalposts',
        type: 'counterpart_to',
      },
      {
        targetId: 'affirming-the-consequent',
        type: 'counterpart_to',
      },
      {
        targetId: 'sagan-standard',
        type: 'related_to',
      },
      {
        targetId: 'occams-razor',
        type: 'related_to',
      },
      {
        targetId: 'hindsight-bias',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'fermi-estimation',
    slug: 'fermi-estimation',
    name: 'Fermi Estimation',
    aliases: ['Back-of-the-Envelope Calculation', 'Order-of-Magnitude Estimation'],
    kind: 'mental-model',
    domains: ['statistics', 'decision-making', 'systems'],
    tier: 'intermediate',
    oneLiner:
      'Estimating an unknown quantity within an order of magnitude by breaking it into smaller, roughly knowable factors whose errors partially cancel out.',
    explanation:
      'Physicist Enrico Fermi famously estimated the yield of the Trinity test by dropping bits of paper as the shockwave passed—and asked students how many piano tuners lived in Chicago. Decomposing a mystery into five reasonable sub-guesses beats wild hand-waving and quickly reveals whether an idea is viable or off by 100x.',
    origin: 'Nobel Prize-winning physicist Enrico Fermi (mid-20th century).',
    examples: [
      {
        context: 'System Capacity Planning',
        scenario:
          'Before buying a huge database cluster, calculate: 50,000 daily users × 20 requests/day = 1M requests/day ≈ 12 requests/second average (maybe ~60/sec peak)—easily handled by a single well-indexed Postgres box.',
        breakdown:
          'A 60-second calculation prevents months of premature over-engineering.',
      },
      {
        context: 'Market Sizing',
        scenario:
          'Estimating local coffee-shop daily revenue from foot traffic, conversion rate, average ticket size, and open hours to sanity-check a pitch deck.',
        breakdown:
          'Grounds lofty projections in physical reality.',
      },
    ],
    antidote:
      'Use ranges (low/high bounds) on every factor so you see how sensitive the final number is to your biggest uncertainties.',
    relations: [
      {
        targetId: 'anchoring-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'availability-heuristic',
        type: 'counterpart_to',
      },
      {
        targetId: 'first-principles',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'pareto-principle',
    slug: 'pareto-principle',
    name: 'Pareto Principle',
    aliases: ['80/20 Rule', 'Law of the Vital Few'],
    kind: 'mental-model',
    domains: ['decision-making', 'organizations', 'systems'],
    tier: 'essential',
    oneLiner:
      'In many complex systems, a small minority of inputs (roughly 20%) drives the vast majority of outputs, value, or defects (roughly 80%).',
    explanation:
      'Real-world distributions are rarely flat—they follow steep power laws. Treating every task, bug, or feature as equally urgent spreads effort thin across the trivial many while starving the vital few levers that actually move the needle.',
    origin: 'Observed by Italian economist Vilfredo Pareto (1896) on land ownership; generalized to quality management by Joseph Juran (1941).',
    examples: [
      {
        context: 'Performance & Bug Triage',
        scenario:
          'Profiling reveals that 3 slow SQL queries account for 84% of total API latency across 200 endpoints.',
        breakdown:
          'Fixing those 3 queries beats micro-optimizing the other 197.',
      },
      {
        context: 'Learning a Skill',
        scenario:
          'Mastering the 500 most common words and 10 core grammar patterns unlocks the bulk of everyday conversation in a new language.',
        breakdown:
          'High-frequency fundamentals deliver rapid compounding returns.',
      },
    ],
    antidote:
      'Remember that the 80/20 ratio is a heuristic, not a fixed constant—and in safety-critical domains (aviation, security, medicine), the “remaining 20%” edge cases can still be fatal.',
    relations: [
      {
        targetId: 'law-of-triviality',
        type: 'counterpart_to',
      },
      {
        targetId: 'sayres-law',
        type: 'counterpart_to',
      },
      {
        targetId: 'parkinsons-law',
        type: 'related_to',
      },
      {
        targetId: 'sturgeons-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'regret-minimization',
    slug: 'regret-minimization',
    name: 'Regret Minimization Framework',
    aliases: ['Age-80 Test', 'Long-Horizon Framing'],
    kind: 'mental-model',
    domains: ['decision-making', 'everyday'],
    tier: 'intermediate',
    oneLiner:
      'Project yourself forward to age 80 looking back on your life and choose the path that minimizes deep, lasting regret.',
    explanation:
      'Short-term anxieties—awkward conversations, modest financial dips, social embarrassment—loom huge up close and shrink to specks across decades. Meanwhile, not taking a meaningful leap often lingers for life. Zooming out strips away short-term noise.',
    origin: 'Articulated by Jeff Bezos (1994) when deciding whether to leave a lucrative Wall Street job to start Amazon.',
    examples: [
      {
        context: 'Career Pivots',
        scenario:
          'Deciding whether to try launching a dream project or stay in a comfortable role you’ve outgrown: “At 80, will I regret trying and failing, or never trying at all?”',
        breakdown:
          'Clarifies asymmetric emotional stakes across a lifetime.',
      },
      {
        context: 'Relationships & Time',
        scenario:
          'Skipping a minor status meeting to attend a loved one’s milestone event.',
        breakdown:
          'Immediately separates urgent trivia from irreversible life moments.',
      },
    ],
    antidote:
      'Pair long-horizon courage with Margin of Safety so you don’t take irreversible, ruinous risks in the name of boldness.',
    relations: [
      {
        targetId: 'spotlight-effect',
        type: 'counterpart_to',
      },
      {
        targetId: 'opportunity-cost',
        type: 'related_to',
      },
      {
        targetId: 'margin-of-safety',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'opportunity-cost',
    slug: 'opportunity-cost',
    name: 'Opportunity Cost',
    aliases: ['Hidden Cost of Alternatives', 'Next-Best Foregone Option'],
    kind: 'mental-model',
    domains: ['decision-making', 'organizations', 'everyday'],
    tier: 'essential',
    oneLiner:
      'The true cost of any choice isn’t just what you spend—it is the value of the best alternative you had to give up by choosing it.',
    explanation:
      'Every “yes” to a meeting, feature, vendor, or investment is silently a “no” to something else competing for the same finite time, attention, or capital. Because foregone options never appear on a receipt, people routinely undercount them.',
    origin: 'Classical economics; formally coined by Friedrich von Wieser (1914), anticipated by Frédéric Bastiat’s “That Which Is Seen, and That Which Is Not Seen” (1850).',
    examples: [
      {
        context: 'Engineering Roadmaps',
        scenario:
          'Building a custom in-house analytics engine looks “free” compared to a $30k/year tool—until you count the two senior engineers diverted for six months from core revenue features.',
        breakdown:
          'The invisible cost of delayed core product work dwarfs the software license.',
      },
      {
        context: 'Everyday Time',
        scenario:
          'Spending four hours hunting for a $15 coupon code when that afternoon could have gone toward rest, family, or high-value work.',
        breakdown:
          'Saving cash at a steep hidden cost in time and energy.',
      },
    ],
    antidote:
      'Never evaluate an option in isolation (“Is this good?”). Always ask: “Compared to what—and what must we stop doing to say yes to this?”',
    relations: [
      {
        targetId: 'sunk-cost-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'loss-aversion',
        type: 'counterpart_to',
      },
      {
        targetId: 'regret-minimization',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'margin-of-safety',
    slug: 'margin-of-safety',
    name: 'Margin of Safety',
    aliases: ['Safety Buffer', 'Engineering Redundancy', 'Headroom'],
    kind: 'mental-model',
    domains: ['systems', 'decision-making', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Building explicit extra buffer into structures, schedules, finances, and plans so inevitable errors or shocks don’t cause collapse.',
    explanation:
      'You don’t build a bridge rated for 10,000 pounds and drive a 9,990-pound truck across it—you build it to hold 30,000 pounds. Margin of safety acknowledges that our models are imperfect and real-world variance is higher than spreadsheets predict.',
    origin: 'Structural engineering; adapted to value investing by Benjamin Graham and David Dodd in Security Analysis (1934).',
    examples: [
      {
        context: 'Infrastructure & Reliability',
        scenario:
          'Provisioning server clusters to run at ~50% peak utilization so losing an entire availability zone doesn’t trigger cascading overload.',
        breakdown:
          'Slack capacity absorbs real-world failures gracefully instead of optimizing away resilience.',
      },
      {
        context: 'Personal Finance',
        scenario:
          'Keeping a 6-month liquid emergency fund before making concentrated career or investment bets.',
        breakdown:
          'Buffer turns temporary setbacks into manageable bumps rather than forced liquidation.',
      },
    ],
    antidote:
      'Balance resilience against pure bloat: place generous buffers on irreversible, high-consequence bottlenecks while keeping reversible experiments lean.',
    relations: [
      {
        targetId: 'murphys-law',
        type: 'counterpart_to',
      },
      {
        targetId: 'planning-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'hofstadters-law',
        type: 'counterpart_to',
      },
      {
        targetId: 'regret-minimization',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'red-teaming',
    slug: 'red-teaming',
    name: 'Red Teaming',
    aliases: ['Adversarial Review', 'Tenth Man Rule', 'Devil’s Advocate'],
    kind: 'mental-model',
    domains: ['organizations', 'systems', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'Deliberately assigning an independent person or group to challenge assumptions, probe weaknesses, and attack a plan before reality does.',
    explanation:
      'Teams naturally fall in love with their own proposals. Red Teaming institutionalizes constructive opposition—making it someone’s explicit job to find holes in a security system, strategy, or incentive policy without being branded cynical.',
    origin: 'Military wargaming and intelligence analysis (1960s–2000s); widely adopted in cybersecurity, AI safety, and corporate strategy.',
    examples: [
      {
        context: 'Incentive & Policy Design',
        scenario:
          'Before launching a referral bonus program, a two-person red team tries to game it with fake accounts and finds three exploits in one afternoon.',
        breakdown:
          'Catches Cobra Effects in a sandbox instead of production.',
      },
      {
        context: 'Executive Strategy',
        scenario:
          'Before a major acquisition, a separate analyst team is tasked solely with writing the strongest possible memo arguing *against* the deal.',
        breakdown:
          'Breaks Groupthink and Authority Bias by legitimizing dissent.',
      },
    ],
    antidote:
      'Rotate who plays the Red Team and set a respectful tone so critiques focus rigorously on the plan’s assumptions—never on personal attacks.',
    relations: [
      {
        targetId: 'confirmation-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'groupthink',
        type: 'counterpart_to',
      },
      {
        targetId: 'authority-bias',
        type: 'counterpart_to',
      },
      {
        targetId: 'cobra-effect',
        type: 'counterpart_to',
      },
      {
        targetId: 'steel-manning',
        type: 'related_to',
      },
      {
        targetId: 'cunninghams-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'ooda-loop',
    slug: 'ooda-loop',
    name: 'OODA Loop',
    aliases: ['Observe–Orient–Decide–Act', 'Decision Tempo Framework'],
    kind: 'mental-model',
    domains: ['decision-making', 'organizations', 'systems'],
    tier: 'essential',
    oneLiner:
      'A continuous four-stage cycle—Observe, Orient, Decide, Act—where tight, accurate feedback loops outmaneuver slower, rigid plans in fast-changing environments.',
    explanation:
      'Developed by Air Force strategist John Boyd, the heart of the loop isn’t merely speed—it’s **Orientation**: continuously updating your mental models against fresh reality so every decision matches the world as it is now, not how it looked last quarter.',
    logicalForm: 'Observe (raw signals) → Orient (update mental model) → Decide (hypothesis) → Act (test in reality) → Loop.',
    origin: 'USAF Colonel and military strategist John Boyd (1970s–1990s).',
    examples: [
      {
        context: 'Startup Product Iteration',
        scenario:
          'A small team ships weekly prototypes, watches real user recordings, updates its assumptions, and iterates five times while a slow competitor is still polishing a 9-month spec.',
        breakdown:
          'Faster validated learning loops beat big upfront predictions.',
      },
      {
        context: 'Incident Response',
        scenario:
          'During an outage, responders alternate rapidly between reading live metrics (Observe), forming a hypothesis (Orient), choosing a mitigation (Decide), and verifying its effect (Act).',
        breakdown:
          'Prevents freezing in analysis paralysis or blindly flailing without checking feedback.',
      },
    ],
    antidote:
      'Don’t confuse OODA with reckless haste—skipping Orientation turns fast action into fast thrashing.',
    sources: [
      {
        site: 'Untools Thinking Tools Database',
        title: 'OODA Loop — Decision-Making Framework',
        url: 'https://untools.co/',
      },
      {
        site: 'Wikipedia Mental Models Database',
        title: 'OODA loop',
        url: 'https://en.wikipedia.org/wiki/OODA_loop',
      },
    ],
    relations: [
      {
        targetId: 'bayesian-updating',
        type: 'related_to',
      },
      {
        targetId: 'cynefin-framework',
        type: 'related_to',
      },
      {
        targetId: 'galls-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'cynefin-framework',
    slug: 'cynefin-framework',
    name: 'Cynefin Framework',
    aliases: ['Sense-Making Domains', 'Clear / Complicated / Complex / Chaotic'],
    kind: 'mental-model',
    domains: ['systems', 'organizations', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'A sense-making framework that sorts problems into four domains—Clear, Complicated, Complex, and Chaotic—so you apply the right management style to each.',
    explanation:
      'Many leadership disasters come from using the wrong playbook for the domain: applying rigid checklists (“best practice”) to a genuinely Complex problem where cause-and-effect only makes sense in retrospect, or running slow expert studies during a Chaotic outage when immediate stabilization is required.',
    origin: 'Created by Dave Snowden at IBM Global Services (1999; Harvard Business Review, 2007).',
    examples: [
      {
        context: 'Clear vs. Complex',
        scenario:
          'Processing payroll is Clear (use a checklist). Finding product-market fit in a new market is Complex (run safe-to-fail experiments and amplify what emerges).',
        breakdown:
          'Matching method to uncertainty prevents both needless bureaucracy and reckless guesswork.',
      },
      {
        context: 'Chaotic Outages',
        scenario:
          'During an active security breach, act first to stop the bleeding (revoke compromised keys), then stabilize into Complicated analysis for the post-mortem.',
        breakdown:
          'Chaotic situations require decisive containment before root-cause analysis.',
      },
    ],
    antidote:
      'Re-check which domain you are in periodically—problems drift across boundaries as technology matures or crises erupt.',
    sources: [
      {
        site: 'Untools Thinking Tools Database',
        title: 'Cynefin Framework — Sense-Making Model',
        url: 'https://untools.co/cynefin-framework/',
      },
      {
        site: 'Wikipedia Mental Models Database',
        title: 'Cynefin framework',
        url: 'https://en.wikipedia.org/wiki/Cynefin_framework',
      },
    ],
    relations: [
      {
        targetId: 'ooda-loop',
        type: 'related_to',
      },
      {
        targetId: 'map-is-not-the-territory',
        type: 'related_to',
      },
      {
        targetId: 'galls-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'nash-equilibrium',
    slug: 'nash-equilibrium',
    name: 'Nash Equilibrium',
    aliases: ['Game-Theoretic Stable State', 'Mutual Best Response'],
    kind: 'mental-model',
    domains: ['systems', 'decision-making', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'A state in a strategic interaction where no player can improve their own outcome by unilaterally changing strategy—even if everyone would be better off cooperating.',
    explanation:
      'Crucial for understanding stubborn status quos: two rivals locked in an exhausting price war or noisy ad arms race may both hate it, yet neither can safely back down alone without losing market share. Changing a Nash equilibrium requires changing the rules or incentives of the game, not merely pleading for goodwill.',
    origin: 'Mathematician John Forbes Nash Jr. (1950 doctoral dissertation; Nobel Prize in Economics, 1994).',
    examples: [
      {
        context: 'Competitive Markets',
        scenario:
          'Two competing coffee shops stay open until 11 PM losing money on late shifts because whichever shop closes early hands regulars to its rival.',
        breakdown:
          'Individually rational defense locks both sides into a suboptimal outcome.',
      },
      {
        context: 'Workplace Slack Culture',
        scenario:
          'Everyone hates answering messages at 9 PM, yet individuals reply fast to look responsive—locking the whole team into an always-on equilibrium until leadership changes norms.',
        breakdown:
          'Escaping a bad equilibrium requires collective coordination or explicit rules.',
      },
    ],
    antidote:
      'Whenever smart people stay trapped in a mutually frustrating pattern, map the payoff matrix and redesign the rules, transparency, or commitment mechanism.',
    sources: [
      {
        site: 'Stanford Encyclopedia of Philosophy (SEP)',
        title: 'Game Theory & Nash Equilibrium Entry',
        url: 'https://plato.stanford.edu/entries/game-theory/',
      },
      {
        site: 'Wikipedia Game Theory Database',
        title: 'Nash equilibrium',
        url: 'https://en.wikipedia.org/wiki/Nash_equilibrium',
      },
    ],
    relations: [
      {
        targetId: 'tragedy-of-the-commons',
        type: 'related_to',
      },
      {
        targetId: 'second-order-thinking',
        type: 'related_to',
      },
      {
        targetId: 'cobra-effect',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'tragedy-of-the-commons',
    slug: 'tragedy-of-the-commons',
    name: 'Tragedy of the Commons',
    aliases: ['Shared Resource Depletion', 'Free-Rider Trap'],
    kind: 'mental-model',
    domains: ['systems', 'organizations', 'everyday'],
    tier: 'essential',
    oneLiner:
      'When multiple individuals share unrestricted access to a limited resource and act in short-term self-interest, they collectively deplete or degrade the resource for everyone.',
    explanation:
      'Each actor captures 100% of the benefit of taking one more unit (adding another cow to the pasture, sending another marketing blast to all users, adding one more brittle test to CI) while spreading the cost across the whole group. Over time, the shared commons collapses.',
    origin: 'William Forster Lloyd (1833); popularized by Garrett Hardin (Science, 1968); governance solutions pioneered by Nobel laureate Elinor Ostrom (1990).',
    examples: [
      {
        context: 'Product Notifications',
        scenario:
          'Six product teams independently send promotional push notifications to hit their individual engagement KPIs—until annoyed users disable notifications for the entire app.',
        breakdown:
          'User attention is a shared commons depleted by uncoordinated local optimization.',
      },
      {
        context: 'Shared Codebases & CI',
        scenario:
          'Teams skip fixing flaky tests in the shared monorepo to merge faster; within months, CI takes 45 minutes and fails randomly for every developer.',
        breakdown:
          'Deferred maintenance externalizes costs onto everyone else.',
      },
    ],
    antidote:
      'Follow Elinor Ostrom’s principles: establish clear shared ownership, visible usage quotas/budgets, peer accountability, and explicit governance for shared resources.',
    sources: [
      {
        site: 'Farnam Street Mental Models Database',
        title: 'Tragedy of the Commons — Systems Thinking Directory',
        url: 'https://fs.blog/mental-models/',
      },
      {
        site: 'Wikipedia Systems & Economics Database',
        title: 'Tragedy of the commons',
        url: 'https://en.wikipedia.org/wiki/Tragedy_of_the_commons',
      },
    ],
    relations: [
      {
        targetId: 'nash-equilibrium',
        type: 'related_to',
      },
      {
        targetId: 'composition-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'bystander-effect',
        type: 'related_to',
      },
      {
        targetId: 'goodharts-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'regression-to-the-mean',
    slug: 'regression-to-the-mean',
    name: 'Regression to the Mean',
    aliases: ['Reversion to Average', 'Sophomore Slump Effect'],
    kind: 'mental-model',
    domains: ['statistics', 'decision-making', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Whenever an outcome combines skill and random luck, an unusually extreme measurement is statistically likely to be followed by one closer to the long-term average.',
    explanation:
      'Daniel Kahneman taught flight instructors why praising a great landing seemed to make pilots perform worse next time, while yelling after a terrible landing seemed to help: extreme landings naturally regress toward each pilot’s true average regardless of praise or yelling!',
    origin: 'Discovered by Francis Galton (1886) while studying hereditary heights; applied to everyday judgment by Kahneman & Tversky.',
    examples: [
      {
        context: 'Sports & Management',
        scenario:
          'A sales rep has a record-breaking quarter driven partly by lucky deal timing; next quarter returns to solid average—and management mistakenly concludes their new coaching “ruined” them.',
        breakdown:
          'Random variance naturally pulls extreme spikes back toward baseline.',
      },
      {
        context: 'A/B Testing Peeking',
        scenario:
          'Stopping an experiment early on day 2 when a variant spikes +40% almost always results in seeing the lift evaporate once rolled out to 100% of users.',
        breakdown:
          'Extreme early noise regresses as sample size grows.',
      },
    ],
    antidote:
      'Expect extreme peaks and troughs to moderate over time; separate true trend shifts from noisy outliers using larger samples and baselines.',
    sources: [
      {
        site: 'Farnam Street Mental Models Database',
        title: 'Regression to the Mean — Numeracy & Statistics Models',
        url: 'https://fs.blog/regression-to-the-mean/',
      },
      {
        site: 'Wikipedia Statistics Database',
        title: 'Regression toward the mean',
        url: 'https://en.wikipedia.org/wiki/Regression_toward_the_mean',
      },
    ],
    relations: [
      {
        targetId: 'post-hoc',
        type: 'counterpart_to',
        note: 'Forgetting regression to the mean tricks us into crediting whatever intervention happened right after a peak or trough.',
      },
      {
        targetId: 'gamblers-fallacy',
        type: 'often_confused_with',
      },
      {
        targetId: 'bayesian-updating',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'expected-value',
    slug: 'expected-value',
    name: 'Expected Value Thinking',
    aliases: ['EV Calculation', 'Probability-Weighted Outcomes', 'Asymmetric Bets'],
    kind: 'mental-model',
    domains: ['decision-making', 'statistics', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Evaluating uncertain choices by multiplying each possible outcome’s value by its probability and summing them—separating good bets from lucky outcomes.',
    explanation:
      'A decision with a 70% chance of winning $100 and a 30% chance of losing $100 has a positive expected value (+$40), even though it can still lose on any single roll. Expected value stops you from judging decisions purely by hindsight—while reminding you to watch for ruinous tail risks where you can’t afford to play again.',
    logicalForm: 'EV = Σ ( Probability_i × Outcome_i )',
    origin: 'Blaise Pascal and Pierre de Fermat (1654 correspondence laying the foundations of probability theory).',
    examples: [
      {
        context: 'Product Bets',
        scenario:
          'A low-cost two-week experiment with a 25% chance of adding $400k ARR (+$100k EV) beats a safe two-week tweak guaranteed to add $5k—provided failure is cheap and reversible.',
        breakdown:
          'Asymmetric upside can make low-probability bets mathematically compelling.',
      },
      {
        context: 'Risk of Ruin Caveat',
        scenario:
          'Refusing a bet with +$1M expected value if its 10% downside bankrupts the company or risks human safety.',
        breakdown:
          'Always pair Expected Value with Margin of Safety so you never face irreversible ruin.',
      },
    ],
    antidote:
      'Check ergodicity and survival first: maximize Expected Value across repeatable, survivable bets—and cap downside strictly on non-repeatable existential risks.',
    sources: [
      {
        site: 'Farnam Street Mental Models Database',
        title: 'Expected Value — Decision-Making & Probability Models',
        url: 'https://fs.blog/mental-models/',
      },
      {
        site: 'Wikipedia Probability Database',
        title: 'Expected value',
        url: 'https://en.wikipedia.org/wiki/Expected_value',
      },
    ],
    relations: [
      {
        targetId: 'bayesian-updating',
        type: 'related_to',
      },
      {
        targetId: 'margin-of-safety',
        type: 'related_to',
        note: 'Margin of safety protects against ruin on positive-EV bets with nasty tails.',
      },
      {
        targetId: 'gamblers-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'nirvana-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'hyperbolic-discounting',
        type: 'counterpart_to',
      },
    ],
  },
];
