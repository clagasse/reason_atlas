import type { Concept } from '../types/concept';

export const BIASES: Concept[] = [
  {
    id: 'confirmation-bias',
    slug: 'confirmation-bias',
    name: 'Confirmation Bias',
    aliases: ['Myside Bias', 'Selective Exposure', 'Motivated Reasoning'],
    kind: 'bias',
    domains: ['decision-making', 'debate', 'everyday'],
    tier: 'essential',
    oneLiner:
      'The tendency to search for, interpret, favor, and recall information in a way that confirms what you already believe.',
    explanation:
      'Rather than acting like an impartial scientist testing a hypothesis, the human mind acts like a defense attorney building a case for its existing verdict. We scrutinize evidence we dislike with ruthless rigor while waving friendly evidence right through.',
    origin: 'Experimental demonstration by Peter Wason (1960, Wason 2-4-6 task); noted earlier by Francis Bacon in Novum Organum (1620).',
    examples: [
      {
        context: 'Hiring Interviews',
        scenario:
          'An interviewer likes a candidate’s résumé within 30 seconds, spends the interview asking softball questions, and interprets vague answers as “big-picture thinking.”',
        breakdown:
          'The initial impression drives biased question selection and charitable interpretation.',
      },
      {
        context: 'Product Strategy',
        scenario:
          'A founder convinced that users want a social feed remembers three enthusiastic emails praising it while dismissing twenty support tickets asking for faster search.',
        breakdown:
          'Evidence that aligns with the founder’s pet hypothesis gets amplified while disconfirming feedback fades into background noise.',
      },
    ],
    antidote:
      'Actively search for disconfirming evidence: ask “What observation would prove me wrong?” Use structured scorecards, blind reviews, and Red Teaming.',
    relations: [
      {
        targetId: 'red-teaming',
        type: 'counterpart_to',
        note: 'Assigning someone to argue the strongest counter-case directly disrupts confirmation bias.',
      },
      {
        targetId: 'bayesian-updating',
        type: 'counterpart_to',
      },
      {
        targetId: 'poppers-falsifiability',
        type: 'counterpart_to',
      },
      {
        targetId: 'straw-man',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'survivorship-bias',
    slug: 'survivorship-bias',
    name: 'Survivorship Bias',
    aliases: ['Survival Bias', 'Missing Bullet Holes'],
    kind: 'bias',
    domains: ['statistics', 'decision-making', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Focusing exclusively on the people, companies, or things that survived a selection process while overlooking the silent majority that failed.',
    explanation:
      'Winners write books, get profiled in magazines, and stay visible in datasets; failures vanish quietly. Analyzing only survivors exaggerates the odds of success and mistakes lucky traits for causal formulas.',
    origin: 'Iconically illustrated by statistician Abraham Wald during WWII (1943), who realized returning bombers needed armor where bullet holes were *absent*—because planes hit there never made it home.',
    examples: [
      {
        context: 'Entrepreneurship',
        scenario:
          '“Bill Gates and Mark Zuckerberg dropped out of college and became billionaires, so dropping out must be a great path to startup success.”',
        breakdown:
          'Ignores thousands of dropouts whose ventures failed and never made headlines.',
      },
      {
        context: 'Architecture & Craft',
        scenario:
          '“They really built things to last 100 years ago—look how sturdy all these historic buildings are!”',
        breakdown:
          'The shoddy buildings from 100 years ago already collapsed or were demolished; we only see the exceptionally well-built survivors.',
      },
    ],
    antidote:
      'Always ask: “Where is the graveyard? Who tried this exact same strategy and disappeared from the dataset?”',
    relations: [
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'texas-sharpshooter',
        type: 'related_to',
      },
      {
        targetId: 'correlation-not-causation',
        type: 'related_to',
      },
      {
        targetId: 'lindys-law',
        type: 'often_confused_with',
        note: 'Lindy’s Law consciously uses survival as an indicator of durability, whereas survivorship bias forgets the unseen failures when estimating odds.',
      },
    ],
  },
  {
    id: 'availability-heuristic',
    slug: 'availability-heuristic',
    name: 'Availability Heuristic',
    aliases: ['Availability Bias', 'Vividness Bias', 'Salience Bias'],
    kind: 'bias',
    domains: ['decision-making', 'statistics', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Judging how likely or frequent something is based on how easily dramatic examples come to mind.',
    explanation:
      'Memory retrieval ease acts as a rough mental shortcut for frequency. Because sensational news, recent outages, and personal traumas come to mind effortlessly, we systematically overestimate rare dramatic risks and underestimate quiet, mundane ones.',
    origin: 'Identified by Amos Tversky and Daniel Kahneman (1973).',
    examples: [
      {
        context: 'Risk Perception',
        scenario:
          'After watching news coverage of a shark attack or plane crash, someone cancels a beach flight and decides to drive 900 miles instead.',
        breakdown:
          'Driving carries dramatically higher per-mile fatality risk than commercial flying, but plane crashes receive vivid wall-to-wall media coverage.',
      },
      {
        context: 'Engineering Priorities',
        scenario:
          'Right after one high-profile caching outage, an engineering org spends two months over-engineering Redis failover while ignoring a slow billing bug quietly losing 4% of revenue every day.',
        breakdown:
          'The dramatic outage dominates collective memory far more than the quiet chronic leak.',
      },
    ],
    antidote:
      'Replace “how easily can I picture this?” with actual base-rate numbers and historical logs.',
    relations: [
      {
        targetId: 'recency-bias',
        type: 'related_to',
      },
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'anecdotal-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'fermi-estimation',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'anchoring-bias',
    slug: 'anchoring-bias',
    name: 'Anchoring Bias',
    aliases: ['Anchoring and Adjustment', 'Focalism', 'First-Number Bias'],
    kind: 'bias',
    domains: ['decision-making', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Relying too heavily on the first number or piece of information offered (the “anchor”) when making subsequent estimates or negotiations.',
    explanation:
      'Even completely arbitrary initial numbers pull our estimates toward them because people adjust insufficiently away from the starting point. List prices, initial salary offers, and casual timeline guesses silently set the gravitational center of a conversation.',
    origin: 'Demonstrated by Amos Tversky and Daniel Kahneman (1974) using a rigged wheel of fortune before estimating UN country percentages.',
    examples: [
      {
        context: 'Retail Pricing',
        scenario:
          'A jacket tagged “$400 — Now $199!” feels like a steal, whereas the same jacket simply priced at $199 feels expensive.',
        breakdown:
          'The crossed-out $400 anchor shifts your reference point before you evaluate the jacket’s actual worth.',
      },
      {
        context: 'Project Estimation',
        scenario:
          'A VP casually asks, “Could we build this integration in two weeks?” Suddenly the engineering team debates between two and three weeks—even though an unanchored breakdown would have estimated two months.',
        breakdown:
          'The casual “two weeks” anchor compresses the entire planning conversation.',
      },
    ],
    antidote:
      'Generate your own independent estimate from scratch (or Fermi estimation) before hearing someone else’s number, and deliberately re-anchor around real comparables.',
    relations: [
      {
        targetId: 'framing-effect',
        type: 'related_to',
      },
      {
        targetId: 'planning-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'fermi-estimation',
        type: 'counterpart_to',
        note: 'Building estimates from independent sub-components breaks arbitrary anchors.',
      },
    ],
  },
  {
    id: 'dunning-kruger-effect',
    slug: 'dunning-kruger-effect',
    name: 'Dunning–Kruger Effect',
    aliases: ['Illusory Superiority', 'Mount Stupid', 'Overconfidence of Incompetence'],
    kind: 'bias',
    domains: ['decision-making', 'organizations', 'everyday'],
    tier: 'essential',
    oneLiner:
      'People with low competence in a domain often overestimate their ability because they lack the very skill needed to recognize their own errors.',
    explanation:
      'Evaluating performance requires many of the same metacognitive skills as performing well. Beginners don’t yet see the hidden complexity of a craft, leading to inflated confidence—while genuine experts sometimes underestimate how unusual their mastery is because it feels obvious to them.',
    origin: 'Published by social psychologists David Dunning and Justin Kruger (1999).',
    examples: [
      {
        context: 'Software & Security',
        scenario:
          'After completing a weekend tutorial, a developer declares authentication “pretty easy” and writes a custom password-hashing scheme from scratch, unaware of timing attacks, salting, and key stretching.',
        breakdown:
          'Unfamiliarity with the failure modes makes a subtle domain look deceptively simple.',
      },
      {
        context: 'Cross-Functional Feedback',
        scenario:
          'Someone with zero background in typography insists a logo redesign “should only take twenty minutes in PowerPoint.”',
        breakdown:
          'They cannot see the craft decisions (kerning, legibility at scale, optical balance) that professionals navigate.',
      },
    ],
    antidote:
      'Seek calibrated feedback, test your predictions against reality, and respect your Circle of Competence before making high-stakes calls.',
    relations: [
      {
        targetId: 'illusion-of-explanatory-depth',
        type: 'related_to',
      },
      {
        targetId: 'circle-of-competence',
        type: 'counterpart_to',
      },
      {
        targetId: 'peter-principle',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'fundamental-attribution-error',
    slug: 'fundamental-attribution-error',
    name: 'Fundamental Attribution Error',
    aliases: ['Correspondence Bias', 'Attribution Bias'],
    kind: 'bias',
    domains: ['everyday', 'organizations', 'debate'],
    tier: 'essential',
    oneLiner:
      'Over-explaining other people’s mistakes by blaming their character or competence while excusing our own mistakes by pointing to situational pressures.',
    explanation:
      'When someone else cuts us off in traffic or misses a deadline, we see their behavior directly and assume “they’re selfish” or “they’re lazy.” When we do the exact same thing, we feel our stress, sick kid, or broken alarm and know it was just circumstances.',
    origin: 'Coined by psychologist Lee Ross (1977), building on Edward Jones and Victor Harris (1967).',
    examples: [
      {
        context: 'Workplace Collaboration',
        scenario:
          'When another team ships a bug, we say “they’re sloppy and don’t care about quality.” When our team ships a bug, we say “marketing rushed the launch and the staging server was flaky.”',
        breakdown:
          'Dispositional blame for others; situational generosity for ourselves.',
      },
      {
        context: 'Daily Commute',
        scenario:
          'A driver weaves through traffic and you mutter “what a reckless jerk”—without knowing they are rushing a family member to the ER.',
        breakdown:
          'We fill in missing context with a character indictment.',
      },
    ],
    antidote:
      'Apply Hanlon’s Razor and ask: “What systemic pressure, unclear incentive, or invisible stressor could make a reasonable person act this way?”',
    relations: [
      {
        targetId: 'hanlons-razor',
        type: 'counterpart_to',
        note: 'Hanlon’s Razor nudges us away from assuming malice when oversight or context fits better.',
      },
      {
        targetId: 'ad-hominem',
        type: 'related_to',
      },
      {
        targetId: 'spotlight-effect',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'hindsight-bias',
    slug: 'hindsight-bias',
    name: 'Hindsight Bias',
    aliases: ['Knew-It-All-Along Effect', 'Creeping Determinism', 'Monday Morning Quarterbacking'],
    kind: 'bias',
    domains: ['decision-making', 'organizations', 'statistics'],
    tier: 'essential',
    oneLiner:
      'Believing, after an event has occurred, that you would have predicted—or actually did predict—the outcome all along.',
    explanation:
      'Once we know how a story ended, our memory quietly rewrites the past so the warning signs look glaringly obvious and the alternative paths vanish. This poisons post-mortems by making teams judge past decisions by their lucky or unlucky outcomes rather than the information available at the time.',
    origin: 'Named and demonstrated experimentally by Baruch Fischhoff (1975).',
    examples: [
      {
        context: 'Tech Industry History',
        scenario:
          'Years after a smartphone platform dominates, pundits claim “it was obviously going to crush every incumbent”—forgetting the widespread skepticism at launch.',
        breakdown:
          'Knowing the winner makes a genuinely uncertain race look predetermined.',
      },
      {
        context: 'Incident Reviews',
        scenario:
          'After an outage, executives ask “How could the on-call engineer not see that subtle log line at 3 AM?”',
        breakdown:
          'Looking backward from the root cause makes one needle in a haystack of 10,000 log lines look like a neon sign.',
      },
    ],
    antidote:
      'Keep a decision journal recording your reasoning, probabilities, and uncertainties *before* outcomes are known; run Pre-Mortems ahead of big launches.',
    relations: [
      {
        targetId: 'pre-mortem',
        type: 'counterpart_to',
        note: 'Pre-Mortems harness prospective hindsight constructively before disaster strikes.',
      },
      {
        targetId: 'post-hoc',
        type: 'related_to',
      },
      {
        targetId: 'bayesian-updating',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'planning-fallacy',
    slug: 'planning-fallacy',
    name: 'Planning Fallacy',
    aliases: ['Optimism Bias in Scheduling', 'Best-Case Planning'],
    kind: 'bias',
    domains: ['organizations', 'decision-making', 'systems'],
    tier: 'essential',
    oneLiner:
      'Systematically underestimating the time, cost, and risk of future projects—even when you know past similar projects ran late and over budget.',
    explanation:
      'When planning, people adopt the “inside view”: they mentally walk through the happy path where every step goes smoothly and forget sick days, scope creep, vendor delays, and integration surprises.',
    origin: 'Proposed by Daniel Kahneman and Amos Tversky (1979); expanded by Bent Flyvbjerg in megaproject research.',
    examples: [
      {
        context: 'Software Roadmaps',
        scenario:
          'A team estimates a payment migration will take 3 weeks because the code changes look straightforward—ignoring QA regressions, compliance review, and legacy edge cases that stretch it to 11 weeks.',
        breakdown:
          'The schedule priced in only ideal-world coding hours, not real-world friction.',
      },
      {
        context: 'Home Renovations',
        scenario:
          'Homeowners budget $25,000 and 6 weeks for a kitchen remodel despite every neighbor’s remodel taking twice as long and costing 40% more.',
        breakdown:
          'They treat their own project as uniquely smooth instead of consulting the reference class.',
      },
    ],
    antidote:
      'Use Reference Class Forecasting: look up how long the last five similar projects *actually* took from kickoff to completion, and add explicit Margin of Safety.',
    relations: [
      {
        targetId: 'hofstadters-law',
        type: 'related_to',
        note: 'Hofstadter’s Law captures the recursive humor of the planning fallacy.',
      },
      {
        targetId: 'brooks-law',
        type: 'related_to',
      },
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'margin-of-safety',
        type: 'counterpart_to',
      },
      {
        targetId: 'pre-mortem',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'authority-bias',
    slug: 'authority-bias',
    name: 'Authority Bias',
    aliases: ['Deference to Authority', 'HIPPO Effect'],
    kind: 'bias',
    domains: ['organizations', 'decision-making', 'everyday'],
    tier: 'essential',
    oneLiner:
      'The tendency to attribute greater accuracy and weight to the opinion of an authority figure regardless of the content’s merit.',
    explanation:
      'Titles, uniforms, seniority, and executive polish trigger automatic deference. In workplaces, this shows up as the “HIPPO effect” (Highest Paid Person’s Opinion), where rooms subtly conform to the most senior voice before independent thinking occurs.',
    origin: 'Rooted in Stanley Milgram’s obedience experiments (1961–1963) and organizational psychology.',
    examples: [
      {
        context: 'Design Critiques',
        scenario:
          'In a meeting of eight product designers, nobody critiques a confusing workflow once the VP opens with, “I really love this layout.”',
        breakdown:
          'Seniority chills honest evaluation and anchors the group prematurely.',
      },
      {
        context: 'Aviation Safety',
        scenario:
          'Historically, junior co-pilots hesitated to challenge senior captains’ errors until airlines introduced Crew Resource Management protocols.',
        breakdown:
          'Steep hierarchy can silence critical safety observations.',
      },
    ],
    antidote:
      'Have leaders speak last, collect anonymous written feedback before group discussion, and explicitly reward respectful dissent.',
    relations: [
      {
        targetId: 'appeal-to-authority',
        type: 'related_to',
        note: 'Authority Bias is the psychological fuel behind the Appeal to Authority fallacy.',
      },
      {
        targetId: 'groupthink',
        type: 'related_to',
      },
      {
        targetId: 'red-teaming',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'framing-effect',
    slug: 'framing-effect',
    name: 'Framing Effect',
    aliases: ['Prospect Framing', 'Gain/Loss Framing'],
    kind: 'bias',
    domains: ['decision-making', 'debate', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Making drastically different choices depending on whether the exact same facts are presented as a gain or a loss.',
    explanation:
      'Human judgment is not purely objective—it reacts strongly to wording and reference points. “90% survival rate” and “10% mortality rate” convey mathematically identical facts, yet patients and doctors alike respond far more favorably to the survival frame.',
    origin: 'Demonstrated by Amos Tversky and Daniel Kahneman (1981) in the famous “Asian disease” framing study.',
    examples: [
      {
        context: 'Consumer Marketing',
        scenario:
          'Shoppers happily buy yogurt labeled “95% fat-free” while avoiding an identical tub labeled “Contains 5% fat.”',
        breakdown:
          'Positive gain framing emphasizes purity; negative framing highlights an unwanted ingredient.',
      },
      {
        context: 'Pricing & Fees',
        scenario:
          'Customers resent a “3% credit card surcharge” far more than they mind a “3% cash discount,” even though both prices are identical.',
        breakdown:
          'Framing the higher number as a penalty triggers loss aversion; framing the lower number as a bonus feels pleasant.',
      },
    ],
    antidote:
      'Deliberately reframe every big decision in the opposite terms (success vs. failure, cost per day vs. cost per year, saved vs. lost) before deciding.',
    relations: [
      {
        targetId: 'loss-aversion',
        type: 'related_to',
      },
      {
        targetId: 'anchoring-bias',
        type: 'related_to',
      },
      {
        targetId: 'false-dilemma',
        type: 'related_to',
      },
      {
        targetId: 'inversion',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'loss-aversion',
    slug: 'loss-aversion',
    name: 'Loss Aversion',
    aliases: ['Asymmetric Risk Preference', 'Endowment Effect Cousin'],
    kind: 'bias',
    domains: ['decision-making', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'The psychological reality that losing something hurts roughly twice as much as gaining the equivalent thing feels good.',
    explanation:
      'Central to Prospect Theory, loss aversion explains why people cling to bad investments, resist beneficial reorganizations, and pay extra to avoid tiny downside risks while passing up larger expected gains.',
    origin: 'Daniel Kahneman and Amos Tversky, Prospect Theory (1979).',
    examples: [
      {
        context: 'Investing',
        scenario:
          'An investor refuses to sell a declining stock at a $2,000 loss, hoping it will “just get back to even,” while quickly selling winning stocks to lock in modest gains.',
        breakdown:
          'The pain of realizing a loss overrides rational reallocation of capital.',
      },
      {
        context: 'Product Changes',
        scenario:
          'Removing a rarely used legacy feature triggers far louder outrage from 1% of users than adding a valuable new feature generates praise from 20%.',
        breakdown:
          'Users experience feature removal as a personal loss rather than a net simplification.',
      },
    ],
    antidote:
      'Zoom out to portfolio-level thinking (evaluate decisions as a series of bets rather than one-offs) and weigh Opportunity Cost alongside downside risk.',
    relations: [
      {
        targetId: 'sunk-cost-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'status-quo-bias',
        type: 'related_to',
      },
      {
        targetId: 'framing-effect',
        type: 'related_to',
      },
      {
        targetId: 'opportunity-cost',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'status-quo-bias',
    slug: 'status-quo-bias',
    name: 'Status Quo Bias',
    aliases: ['Default Effect', 'Institutional Inertia'],
    kind: 'bias',
    domains: ['decision-making', 'organizations', 'everyday'],
    tier: 'essential',
    oneLiner:
      'An emotional preference for keeping things exactly as they are, treating any deviation from the current baseline as a risky loss.',
    explanation:
      'Defaults carry immense quiet power. Because changing course requires cognitive effort and exposes you to blame if things go wrong (errors of commission feel worse than errors of omission), people and companies stick with outdated defaults long past their expiration date.',
    origin: 'Coined and empirically shown by William Samuelson and Richard Zeckhauser (1988).',
    examples: [
      {
        context: 'Everyday Subscriptions & Benefits',
        scenario:
          'Employees rarely change their default retirement allocation or cancel unused software plans, even when switching takes five minutes and saves thousands.',
        breakdown:
          'Inertia and friction keep the default option locked in indefinitely.',
      },
      {
        context: 'Legacy Processes',
        scenario:
          'A team continues producing a 12-page weekly status report that nobody reads simply because “we’ve always sent it on Fridays.”',
        breakdown:
          'Continuing an old habit requires zero justification, whereas stopping it feels like taking a risk.',
      },
    ],
    antidote:
      'Run the reversal test: “If we weren’t already doing this today, would we choose to start?” Balance this with Chesterton’s Fence so you understand why the default existed before dismantling it.',
    relations: [
      {
        targetId: 'loss-aversion',
        type: 'psychological_root',
      },
      {
        targetId: 'sunk-cost-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'chestertons-fence',
        type: 'counterpart_to',
        note: 'Chesterton’s Fence reminds us not to swing to the opposite extreme of reckless change.',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'groupthink',
    slug: 'groupthink',
    name: 'Groupthink',
    aliases: ['Consensus Trap', 'Conformity Cascade'],
    kind: 'bias',
    domains: ['organizations', 'decision-making', 'debate'],
    tier: 'essential',
    oneLiner:
      'A team dysfunction where the desire for harmony and conformity suppresses dissent, critical scrutiny, and alternative viewpoints.',
    explanation:
      'In cohesive or high-pressure groups, voicing skepticism feels socially costly. Members self-censor their doubts, mistake silence for unanimous agreement, and collectively march into avoidable disasters.',
    origin: 'Coined by William H. Whyte Jr. (1952) and systematically researched by psychologist Irving Janis (1972).',
    examples: [
      {
        context: 'Product Launches',
        scenario:
          'Every engineer privately doubts the AI feature is reliable enough for launch, yet during the go/no-go meeting everyone nods along because the executive sponsor looks excited.',
        breakdown:
          'Social pressure turns private doubts into public unanimity.',
      },
      {
        context: 'Boardroom Strategy',
        scenario:
          'An acquisition committee dismisses outside warnings about cultural mismatch as “outsiders not getting our vision.”',
        breakdown:
          'In-group solidarity reframes valid critique as disloyalty.',
      },
    ],
    antidote:
      'Institutionalize dissent: appoint a rotating devil’s advocate, run anonymous pre-meeting polls, or launch a Pre-Mortem / Red Team exercise.',
    relations: [
      {
        targetId: 'authority-bias',
        type: 'related_to',
      },
      {
        targetId: 'bandwagon',
        type: 'related_to',
      },
      {
        targetId: 'red-teaming',
        type: 'counterpart_to',
      },
      {
        targetId: 'pre-mortem',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'halo-effect',
    slug: 'halo-effect',
    name: 'Halo Effect',
    aliases: ['Horn Effect (Inverse)', 'Prestige Spillover'],
    kind: 'bias',
    domains: ['organizations', 'decision-making', 'everyday'],
    tier: 'intermediate',
    oneLiner:
      'Letting a strong positive impression in one trait (charisma, pedigree, sleek design) unconsciously inflate your judgment of unrelated traits.',
    explanation:
      'Our brains strive for coherent impressions. If a company has a soaring stock price, analysts suddenly praise its “visionary culture” and “brilliant leadership”—and if the stock drops a year later, those exact same habits are rebranded as “arrogance” and “bloat.”',
    origin: 'Coined by psychologist Edward Thorndike (1920) while studying military officer ratings.',
    examples: [
      {
        context: 'Hiring & Leadership',
        scenario:
          'A polished, articulate speaker from a famous university is assumed to also be deeply collaborative and technically rigorous—without testing those skills.',
        breakdown:
          'Verbal polish and pedigree spill over into unverified competencies.',
      },
      {
        context: 'Product Evaluation',
        scenario:
          'A beautifully designed analytics app wins a procurement shootout even though its underlying data export accuracy lags behind a plain-looking competitor.',
        breakdown:
          'Visual aesthetics create an automatic halo of trustworthiness.',
      },
    ],
    antidote:
      'Evaluate distinct criteria independently and blindly where possible (e.g., score work samples before reading résumés or seeing brand names).',
    relations: [
      {
        targetId: 'appeal-to-authority',
        type: 'related_to',
      },
      {
        targetId: 'ad-hominem',
        type: 'related_to',
        note: 'The negative twin (horn effect) makes dislike of a person taint their ideas.',
      },
      {
        targetId: 'confirmation-bias',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'recency-bias',
    slug: 'recency-bias',
    name: 'Recency Bias',
    aliases: ['Recency Effect', 'Short-Memory Bias'],
    kind: 'bias',
    domains: ['decision-making', 'organizations', 'statistics'],
    tier: 'intermediate',
    oneLiner:
      'Overweighting the latest events, feedback, or data points while discounting longer historical patterns.',
    explanation:
      'Recent experiences sit fresh in working memory, making them feel like the “new normal.” In investing, performance reviews, and product roadmaps, recency bias causes whiplash overreactions to short-term noise.',
    origin: 'Memory serial-position research by Hermann Ebbinghaus (1885) and behavioral finance studies.',
    examples: [
      {
        context: 'Annual Performance Reviews',
        scenario:
          'A manager gives a glowing rating to an employee who pulled off a big save in November, forgetting ten months of missed handoffs—while undervaluing a colleague whose biggest impact happened in February.',
        breakdown:
          'What happened last month eclipses the full twelve-month record.',
      },
      {
        context: 'Investing',
        scenario:
          'After three booming years in tech equities, retail investors pile in assuming high returns will continue indefinitely, then panic-sell after two bad quarters.',
        breakdown:
          'Recent momentum is extrapolated linearly into the future.',
      },
    ],
    antidote:
      'Keep chronological logs across the full review window and zoom charts out over multi-year baselines before acting.',
    relations: [
      {
        targetId: 'availability-heuristic',
        type: 'related_to',
      },
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'lindys-law',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'automation-bias',
    slug: 'automation-bias',
    name: 'Automation Bias',
    aliases: ['Algorithmic Deference', 'AI Over-Reliance'],
    kind: 'bias',
    domains: ['systems', 'decision-making', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'Over-trusting suggestions from automated systems, dashboards, or AI models—even when they contradict common sense or direct evidence.',
    explanation:
      'When software outputs an answer fluently and confidently, humans tend to relax their vigilance (omission errors: failing to spot a flaw the system missed) or override their own accurate observations (commission errors: blindly obeying a buggy recommendation).',
    origin: 'Coined by Linda Skitka, Kathleen Mosier, and Mark Burdick (1999) in aviation and human-factors research.',
    examples: [
      {
        context: 'Navigation & Everyday Life',
        scenario:
          'A driver follows GPS turn-by-turn directions straight onto a flooded dirt road despite visible warning signs.',
        breakdown:
          'Trust in the automated voice overrides direct sensory observation.',
      },
      {
        context: 'AI Coding & Research',
        scenario:
          'A lawyer or engineer pastes an AI-generated citation or security config directly into production without checking whether the cited case or flag actually exists.',
        breakdown:
          'Fluent output lulls human reviewers out of basic verification.',
      },
    ],
    antidote:
      'Treat automated outputs as fast first drafts, not infallible authorities. Build spot-check habits and verify high-stakes claims against primary sources.',
    relations: [
      {
        targetId: 'authority-bias',
        type: 'related_to',
        note: 'Software interfaces inherit an aura of objective authority.',
      },
      {
        targetId: 'map-is-not-the-territory',
        type: 'counterpart_to',
        note: 'Dashboards and models are maps of reality, never reality itself.',
      },
      {
        targetId: 'murphys-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'illusion-of-explanatory-depth',
    slug: 'illusion-of-explanatory-depth',
    name: 'Illusion of Explanatory Depth',
    aliases: ['IOED', 'Illusion of Understanding'],
    kind: 'bias',
    domains: ['decision-making', 'systems', 'everyday'],
    tier: 'deep-cut',
    oneLiner:
      'Feeling confident you understand how a complex object, policy, or system works—until asked to explain its mechanics step by step.',
    explanation:
      'We confuse *familiarity* with *mechanistic understanding*. You see bicycles, zippers, and tax brackets every day, so your brain assumes you grasp them; ask yourself to sketch the exact chain and frame of a bicycle and the gaps appear immediately.',
    origin: 'Demonstrated by Leonid Rozenblit and Frank Keil at Yale University (2002).',
    examples: [
      {
        context: 'System Architecture',
        scenario:
          'Everyone in a kickoff nods that “OAuth handles login seamlessly”—until someone asks for a whiteboard sequence diagram and three conflicting mental models emerge.',
        breakdown:
          'Recognizing the buzzword masked genuine gaps in how tokens, redirects, and refresh flows work.',
      },
      {
        context: 'Policy Debates',
        scenario:
          'People hold passionate opinions about monetary policy or healthcare reimbursement, yet their certainty softens markedly after trying to write a plain-English causal walkthrough.',
        breakdown:
          'Forcing mechanistic explanation exposes where rhetoric outpaced understanding.',
      },
    ],
    antidote:
      'Use the Feynman Technique: write a step-by-step explanation or diagram from memory without jargon. Wherever you hand-wave, you’ve found the real learning edge.',
    relations: [
      {
        targetId: 'dunning-kruger-effect',
        type: 'related_to',
      },
      {
        targetId: 'circle-of-competence',
        type: 'counterpart_to',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'spotlight-effect',
    slug: 'spotlight-effect',
    name: 'Spotlight Effect',
    aliases: ['Egocentric Salience', 'Imaginary Audience'],
    kind: 'bias',
    domains: ['everyday', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'Overestimating how intensely other people notice, scrutinize, and remember our appearance, mistakes, or awkward moments.',
    explanation:
      'Because we live at the center of our own conscious experience, our tiny blunders feel huge to us. Meanwhile, everyone else is busy living inside *their* own spotlight, noticing far less about us than we fear.',
    origin: 'Coined by Thomas Gilovich, Victoria Medvec, and Kenneth Savitsky (2000) via the famous Barry Manilow t-shirt experiment.',
    examples: [
      {
        context: 'Public Speaking',
        scenario:
          'You stumble over one slide transition during a presentation and dwell on it for three days, convinced everyone noticed—when audience members only remember your main takeaway.',
        breakdown:
          'Internal embarrassment magnifies a fleeting two-second pause.',
      },
      {
        context: 'Publishing & Sharing Work',
        scenario:
          'Someone never publishes a helpful blog post or asks a clarifying question in a meeting out of fear that colleagues will judge them forever.',
        breakdown:
          'Exaggerated fear of scrutiny blocks low-risk learning and contribution.',
      },
    ],
    antidote:
      'Remind yourself how little you remember about other people’s minor missteps from last week—they apply that same low-resolution attention to yours.',
    relations: [
      {
        targetId: 'fundamental-attribution-error',
        type: 'related_to',
      },
      {
        targetId: 'regret-minimization',
        type: 'counterpart_to',
        note: 'Zooming out to age 80 shrinks temporary social self-consciousness.',
      },
    ],
  },
  {
    id: 'curse-of-knowledge',
    slug: 'curse-of-knowledge',
    name: 'Curse of Knowledge',
    aliases: ['Expert Blind Spot', 'Tappers and Listeners'],
    kind: 'bias',
    domains: ['organizations', 'everyday', 'systems'],
    tier: 'essential',
    oneLiner:
      'Once you know something deeply, it becomes nearly impossible to imagine what it feels like *not* to know it—causing jargon-heavy docs and confusing designs.',
    explanation:
      'In Elizabeth Newton’s famous 1990 experiment, people who tapped the rhythm of “Happy Birthday” on a table predicted listeners would recognize the song 50% of the time—because tappers heard the melody vividly in their heads. Actual recognition was 2.5%. Experts routinely skip crucial steps that feel “obvious” to them.',
    origin: 'Coined by economists Colin Camerer, George Loewenstein, and Martin Weber (1989); demonstrated memorably by Elizabeth Newton (1990).',
    examples: [
      {
        context: 'Product Onboarding & Docs',
        scenario:
          'Engineers build a settings screen full of internal database terms (“Shards,” “Webhooks,” “Idempotency Keys”) and feel surprised when new customers bounce within 60 seconds.',
        breakdown:
          'Deep familiarity with the implementation blinds builders to a first-time user’s mental model.',
      },
      {
        context: 'Executive Presentations',
        scenario:
          'A team skips straight to slide 14 of a technical deep-dive without stating the problem or context, leaving stakeholders puzzled.',
        breakdown:
          'Living inside a project for six months creates invisible shared assumptions that outsiders don’t share.',
      },
    ],
    antidote:
      'Watch five genuine newcomers try your product or read your memo in silence without hinting—and replace insider acronyms with concrete examples.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Curse of Knowledge — Cognitive Bias Index',
        url: 'https://thedecisionlab.com/biases/curse-of-knowledge',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Curse of knowledge',
        url: 'https://en.wikipedia.org/wiki/Curse_of_knowledge',
      },
    ],
    relations: [
      {
        targetId: 'dunning-kruger-effect',
        type: 'related_to',
        note: 'Both reflect miscalibrated metacognition: beginners miss hidden complexity; experts forget what learning felt like.',
      },
      {
        targetId: 'illusion-of-explanatory-depth',
        type: 'counterpart_to',
      },
      {
        targetId: 'spotlight-effect',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'ikea-effect',
    slug: 'ikea-effect',
    name: 'The IKEA Effect',
    aliases: ['Labor-Induced Valuation', 'Not-Invented-Here Cousin'],
    kind: 'bias',
    domains: ['decision-making', 'organizations', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Placing disproportionately high value on things we partially built, customized, or assembled ourselves—even when an outside option is objectively better.',
    explanation:
      'Effort creates attachment. People will bid far more for a lopsided origami crane they folded themselves than for an expert’s crane—and engineering teams routinely cling to clunky in-house tools simply because they poured sweat into building them.',
    origin: 'Named and demonstrated by Michael Norton, Daniel Mochon, and Dan Ariely (Harvard Business School, 2011).',
    examples: [
      {
        context: 'Software Build-vs-Buy',
        scenario:
          'A team refuses to replace its fragile internal deployment script with a reliable standard tool because “our script is tailored to us and we spent months building it.”',
        breakdown:
          'Sweat equity inflates perceived quality and hides ongoing maintenance costs.',
      },
      {
        context: 'Product Strategy',
        scenario:
          'A PM falls in love with a feature spec she drafted over three weekends and dismisses user feedback showing customers prefer a simpler rival workflow.',
        breakdown:
          'Personal authorship blurs objective evaluation.',
      },
    ],
    antidote:
      'Invite outside reviewers who didn’t build the artifact to evaluate it blindly, and apply the clean-slate Sunk Cost test.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'The IKEA Effect — Cognitive Bias Database',
        url: 'https://thedecisionlab.com/biases/the-ikea-effect',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'IKEA effect',
        url: 'https://en.wikipedia.org/wiki/IKEA_effect',
      },
    ],
    relations: [
      {
        targetId: 'endowment-effect',
        type: 'related_to',
      },
      {
        targetId: 'sunk-cost-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'red-teaming',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'zeigarnik-effect',
    slug: 'zeigarnik-effect',
    name: 'Zeigarnik Effect',
    aliases: ['Open-Loop Tension', 'Unfinished Task Effect'],
    kind: 'bias',
    domains: ['everyday', 'organizations', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'The brain remembers and obsesses over interrupted, unfinished tasks far more vividly than completed ones.',
    explanation:
      'Psychologist Bluma Zeigarnik noticed restaurant waiters could recall complex unpaid orders effortlessly—and immediately forgot them once the bill was settled. Open mental loops consume background working memory until completed or captured in a trusted external plan.',
    origin: 'Bluma Zeigarnik (1927), working under Kurt Lewin at the University of Berlin.',
    examples: [
      {
        context: 'Deep Work & Burnout',
        scenario:
          'Leaving 14 half-started Slack replies and drafts open at 5 PM keeps your mind churning about work all evening, even though writing a 2-minute next-step checklist silences the anxiety.',
        breakdown:
          'Unclosed loops keep cognitive tension active; Masicampo & Baumeister (2011) showed merely writing a concrete plan satisfies the loop.',
      },
      {
        context: 'Media & Product Hooks',
        scenario:
          'TV cliffhangers and “Profile 80% complete” progress bars leverage the Zeigarnik Effect to pull attention back.',
        breakdown:
          'Visible incompleteness creates a subtle urge to close the gap.',
      },
    ],
    antidote:
      'End each workday with a written shutdown checklist capturing exact next steps for open tasks—and limit work-in-progress rather than juggling ten half-finished threads.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Zeigarnik Effect — Memory & Cognitive Bias Database',
        url: 'https://thedecisionlab.com/reference-guide/psychology/the-zeigarnik-effect',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Zeigarnik effect',
        url: 'https://en.wikipedia.org/wiki/Zeigarnik_effect',
      },
    ],
    relations: [
      {
        targetId: 'parkinsons-law',
        type: 'related_to',
      },
      {
        targetId: 'pareto-principle',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'baader-meinhof',
    slug: 'baader-meinhof',
    name: 'Frequency Illusion',
    aliases: ['Baader–Meinhof Phenomenon', 'Recency Illusion'],
    kind: 'bias',
    domains: ['everyday', 'statistics', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Noticing a newly learned word, car model, or concept everywhere—and mistaking your heightened attention for a sudden real-world surge.',
    explanation:
      'Powered by selective attention plus confirmation bias: once a concept enters your awareness, your brain flags every occurrence it previously filtered out as background noise, creating the eerie illusion that it suddenly became ubiquitous overnight.',
    origin: 'Coined as “frequency illusion” by Stanford linguist Arnold Zwicky (2005); nicknamed Baader–Meinhof after a 1994 St. Paul Pioneer Press reader letter.',
    examples: [
      {
        context: 'Consumer Life',
        scenario:
          'The day after researching a specific green hatchback, you suddenly spot six of them on your morning commute and assume the automaker just ran a massive local sale.',
        breakdown:
          'The cars were always on the road; your brain just stopped ignoring them.',
      },
      {
        context: 'Tech & Market Trends',
        scenario:
          'After reading one article about a niche programming language, you spot three mentions that week and conclude “the whole industry is migrating to it.”',
        breakdown:
          'Salience distorts perceived adoption velocity.',
      },
    ],
    antidote:
      'Check objective longitudinal time-series data (search volume, download trends, market share) before concluding something is genuinely accelerating.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Baader–Meinhof Phenomenon (Frequency Illusion)',
        url: 'https://thedecisionlab.com/biases/baader-meinhof-phenomenon',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Frequency illusion',
        url: 'https://en.wikipedia.org/wiki/Frequency_illusion',
      },
    ],
    relations: [
      {
        targetId: 'confirmation-bias',
        type: 'psychological_root',
      },
      {
        targetId: 'availability-heuristic',
        type: 'related_to',
      },
      {
        targetId: 'recency-bias',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'peak-end-rule',
    slug: 'peak-end-rule',
    name: 'Peak–End Rule',
    aliases: ['Duration Neglect', 'Experiencing vs. Remembering Self'],
    kind: 'bias',
    domains: ['everyday', 'decision-making', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'People judge an entire past experience largely by how it felt at its most intense peak and at its very end—almost ignoring its total duration.',
    explanation:
      'Daniel Kahneman distinguished the “experiencing self” (living moment by moment) from the “remembering self” (which tells the story afterward). Because memory compresses events into snapshots, a smooth 90-minute meal ruined by a 10-minute billing argument at the end is remembered negatively.',
    origin: 'Demonstrated by Daniel Kahneman, Barbara Fredrickson, Charles Schreiber, and Donald Redelmeier (1993).',
    examples: [
      {
        context: 'Customer Experience',
        scenario:
          'A software trial works smoothly for 13 days, but a confusing, hostile cancellation flow on day 14 leaves the user telling friends to avoid the brand.',
        breakdown:
          'The painful ending dominates the entire remembered impression.',
      },
      {
        context: 'Hiring & Offboarding',
        scenario:
          'How a company treats departing employees during their final week shapes Glassdoor reviews and alumni referrals for years.',
        breakdown:
          'Endings carry disproportionate narrative weight.',
      },
    ],
    antidote:
      'When evaluating choices for yourself, track moment-by-moment logs instead of relying on nostalgic highlights; when designing experiences, invest heavily in delight peaks and graceful endings.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Peak–End Rule — Cognitive Bias Index',
        url: 'https://thedecisionlab.com/biases/peak-end-rule',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Peak–end rule',
        url: 'https://en.wikipedia.org/wiki/Peak%E2%80%93end_rule',
      },
    ],
    relations: [
      {
        targetId: 'recency-bias',
        type: 'related_to',
      },
      {
        targetId: 'availability-heuristic',
        type: 'related_to',
      },
      {
        targetId: 'framing-effect',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'endowment-effect',
    slug: 'endowment-effect',
    name: 'Endowment Effect',
    aliases: ['Ownership Bias', 'Divestiture Aversion'],
    kind: 'bias',
    domains: ['decision-making', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Demanding far more to give up something you already own than you would ever pay to acquire the exact same thing if you didn’t own it.',
    explanation:
      'In Richard Thaler’s classic mug experiment, students randomly handed a $5 university mug refused to sell it for less than ~$7, while peers without mugs wouldn’t pay more than ~$3 to buy one. Mere ownership rewires our reference point through loss aversion.',
    origin: 'Coined by economist Richard Thaler (1980); empirically tested with Daniel Kahneman and Jack Knetsch (1990).',
    examples: [
      {
        context: 'Personal Finance',
        scenario:
          'Holding onto inherited shares of a sluggish company you would never buy today with fresh cash.',
        breakdown:
          'Owning the shares makes selling feel like a loss even when cash is objectively more flexible.',
      },
      {
        context: 'Product Sunsetting',
        scenario:
          'Product teams cling to low-usage legacy features they own, overestimating how much customers would miss them.',
        breakdown:
          'Ownership bias inflates the perceived value of existing assets.',
      },
    ],
    antidote:
      'Run the cash-equivalent test: “If I lost this item today and received its market value in cash, would I immediately go buy this exact same thing back?”',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Endowment Effect — Cognitive Bias Database',
        url: 'https://thedecisionlab.com/biases/endowment-effect',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Endowment effect',
        url: 'https://en.wikipedia.org/wiki/Endowment_effect',
      },
    ],
    relations: [
      {
        targetId: 'loss-aversion',
        type: 'psychological_root',
      },
      {
        targetId: 'status-quo-bias',
        type: 'related_to',
      },
      {
        targetId: 'ikea-effect',
        type: 'related_to',
      },
      {
        targetId: 'opportunity-cost',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'hyperbolic-discounting',
    slug: 'hyperbolic-discounting',
    name: 'Hyperbolic Discounting',
    aliases: ['Present Bias', 'Instant Gratification Bias', 'Time Inconsistency'],
    kind: 'bias',
    domains: ['decision-making', 'everyday', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'Disproportionately preferring a smaller immediate reward over a larger future reward—even when you’d patiently choose the larger one if both were shifted into the future.',
    explanation:
      'Most people choose $110 in 31 days over $100 in 30 days, yet flip and grab $100 *today* over $110 tomorrow. Our discount rate spikes dramatically whenever “right now” enters the equation, fueling procrastination, tech debt, and under-saving.',
    origin: 'Behavioral economics & psychology; formalized by Richard Herrnstein (1961), George Ainslie (1975), and David Laibson (1997).',
    examples: [
      {
        context: 'Software Tech Debt',
        scenario:
          'Skipping a 30-minute cleanup today to close a ticket fast, creating 6 hours of debugging pain for the team next month.',
        breakdown:
          'Immediate relief is valued far higher than avoiding much larger future friction.',
      },
      {
        context: 'Personal Habits',
        scenario:
          'Setting an alarm for a 6 AM run at 10 PM (when future-you sounds heroic), then hitting snooze at 6 AM when immediate comfort wins.',
        breakdown:
          'Preferences reverse as soon as the reward becomes immediate.',
      },
    ],
    antidote:
      'Use commitment devices and friction design: automate savings, pre-schedule deep work, and make the long-term healthy choice the default before the moment of temptation arrives.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Hyperbolic Discounting (Present Bias)',
        url: 'https://thedecisionlab.com/biases/hyperbolic-discounting',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Hyperbolic discounting',
        url: 'https://en.wikipedia.org/wiki/Hyperbolic_discounting',
      },
    ],
    relations: [
      {
        targetId: 'second-order-thinking',
        type: 'counterpart_to',
      },
      {
        targetId: 'regret-minimization',
        type: 'counterpart_to',
      },
      {
        targetId: 'expected-value',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'optimism-bias',
    slug: 'optimism-bias',
    name: 'Optimism Bias',
    aliases: ['Unrealistic Optimism', 'Comparative Optimism', 'Rose-Colored Glasses'],
    kind: 'bias',
    domains: ['decision-making', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Systematically overestimating the likelihood of positive outcomes and underestimating your personal vulnerability to negative events.',
    explanation:
      'Across studies, a clear majority of people rate themselves as above-average drivers, less likely than peers to get divorced or suffer illness, and more likely to beat market odds. Optimism powers courage and entrepreneurship—yet left unchecked, it leaves teams uninsured against predictable shocks.',
    origin: 'Empirically documented by Neil Weinstein (1980) and neuroscientist Tali Sharot (2011).',
    examples: [
      {
        context: 'Disaster Recovery',
        scenario:
          'A startup delays setting up automated database backups because “our cloud provider is rock-solid and nothing bad has happened yet.”',
        breakdown:
          'Low perceived personal vulnerability prevents cheap, vital insurance.',
      },
      {
        context: 'Financial Projections',
        scenario:
          'A business plan models only best-case adoption growth and zero customer churn.',
        breakdown:
          'Unchecked optimism omits downside scenarios that require cash reserves.',
      },
    ],
    antidote:
      'Keep optimism for ambition, and pair it with Inversion, Pre-Mortems, and Margin of Safety when structuring risk.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Optimism Bias — Behavioral Science Reference',
        url: 'https://thedecisionlab.com/biases/optimism-bias',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Optimism bias',
        url: 'https://en.wikipedia.org/wiki/Optimism_bias',
      },
    ],
    relations: [
      {
        targetId: 'planning-fallacy',
        type: 'related_to',
        note: 'The Planning Fallacy is optimism bias applied specifically to schedules and budgets.',
      },
      {
        targetId: 'pre-mortem',
        type: 'counterpart_to',
      },
      {
        targetId: 'margin-of-safety',
        type: 'counterpart_to',
      },
      {
        targetId: 'inversion',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'just-world-hypothesis',
    slug: 'just-world-hypothesis',
    name: 'Just-World Hypothesis',
    aliases: ['Just-World Fallacy', 'Victim Blaming Bias', 'Outcome = Virtue'],
    kind: 'bias',
    domains: ['everyday', 'decision-making', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'The comforting assumption that the world is fundamentally fair—so people generally get what they deserve and bad outcomes must imply hidden fault.',
    explanation:
      'Admitting that random bad luck can strike diligent, smart people feels scary. To preserve a sense of control, our minds quietly invent moral or competence flaws after the fact (“if their startup failed, they must have been lazy”), blinding us to structural risk and luck.',
    origin: 'Coined and experimentally studied by social psychologist Melvin J. Lerner (1965, 1980).',
    examples: [
      {
        context: 'Career & Investing',
        scenario:
          'Assuming every wildly wealthy founder is a genius and every laid-off engineer lacked talent, ignoring market timing and industry cycles.',
        breakdown:
          'Confuses noisy outcomes with pure individual merit.',
      },
      {
        context: 'Incident Culture',
        scenario:
          'Blaming the on-call engineer who triggered a brittle deploy script rather than fixing the missing guardrails that made the accident inevitable.',
        breakdown:
          'Blaming individuals preserves the illusion that the system itself is safe.',
      },
    ],
    antidote:
      'Separate decision quality from outcome luck (“resulting”) and inspect systemic factors alongside individual choices.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Just-World Hypothesis — Cognitive Bias Database',
        url: 'https://thedecisionlab.com/biases/just-world-hypothesis',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Just-world hypothesis',
        url: 'https://en.wikipedia.org/wiki/Just-world_hypothesis',
      },
    ],
    relations: [
      {
        targetId: 'fundamental-attribution-error',
        type: 'related_to',
      },
      {
        targetId: 'hindsight-bias',
        type: 'related_to',
      },
      {
        targetId: 'survivorship-bias',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'bystander-effect',
    slug: 'bystander-effect',
    name: 'Bystander Effect',
    aliases: ['Diffusion of Responsibility', 'Somebody Else’s Problem'],
    kind: 'bias',
    domains: ['organizations', 'everyday', 'systems'],
    tier: 'essential',
    oneLiner:
      'The more people present to witness a problem or emergency, the less likely any single individual is to step up and take action.',
    explanation:
      'Two forces drive it: diffusion of responsibility (“someone else will handle it”) and pluralistic ignorance (“nobody else looks alarmed, so maybe it’s fine”). In workplaces, emailing a 30-person distribution list gets slower responses than asking one named owner.',
    origin: 'Researched and demonstrated by John Darley and Bibb Latané (1968).',
    examples: [
      {
        context: 'Incident Response',
        scenario:
          'An alert fires into a shared #engineering channel with 120 members and sits unacknowledged for 25 minutes because everyone assumes the on-call person is already looking at it.',
        breakdown:
          'Shared visibility without a single clear owner diffuses accountability.',
      },
      {
        context: 'Meetings & Action Items',
        scenario:
          'A meeting concludes with “We really should update the onboarding docs soon”—and three months later nobody has touched them.',
        breakdown:
          'Unassigned “we” tasks belong to nobody.',
      },
    ],
    antidote:
      'Eliminate ambiguity by assigning one directly responsible individual (DRI) by name: “Maya, can you own calling 911 / acknowledging the alert?”',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Bystander Effect — Social Psychology & Bias Database',
        url: 'https://thedecisionlab.com/reference-guide/psychology/bystander-effect',
      },
      {
        site: 'Wikipedia Cognitive Biases Database',
        title: 'Bystander effect',
        url: 'https://en.wikipedia.org/wiki/Bystander_effect',
      },
    ],
    relations: [
      {
        targetId: 'groupthink',
        type: 'related_to',
      },
      {
        targetId: 'tragedy-of-the-commons',
        type: 'related_to',
      },
      {
        targetId: 'brooks-law',
        type: 'related_to',
      },
    ],
  },
];
