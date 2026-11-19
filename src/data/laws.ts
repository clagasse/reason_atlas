import type { Concept } from '../types/concept';

export const LAWS: Concept[] = [
  {
    id: 'law-of-triviality',
    slug: 'law-of-triviality',
    name: 'Law of Triviality',
    aliases: ['Bikeshedding', "Parkinson's Law of Triviality", 'Bike-Shed Effect'],
    kind: 'law',
    domains: ['organizations', 'systems', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Groups give disproportionate time and passion to trivial, easy-to-understand issues while rubber-stamping complex, high-stakes decisions.',
    explanation:
      'C. Northcote Parkinson imagined a committee approving a $10 million nuclear power plant in three minutes—because few members understood reactor design—only to spend 45 minutes fiercely debating the roof material and paint color of the staff bicycle shed. Everyone feels qualified to opine on a bike shed, so participation floods toward trivialities.',
    origin: 'C. Northcote Parkinson, Parkinson’s Law (1957); popularized in software culture as “bikeshedding” by Poul-Henning Kamp on the FreeBSD mailing list (1999).',
    examples: [
      {
        context: 'Engineering Pull Requests',
        scenario:
          'A 1,200-line change to distributed billing logic gets two quick “LGTM” approvals, while a PR renaming a CSS variable sparks a 47-comment thread on naming conventions.',
        breakdown:
          'Everyone can immediately form an opinion on naming; auditing distributed state takes heavy cognitive effort.',
      },
      {
        context: 'Executive Meetings',
        scenario:
          'A leadership team spends five minutes approving a $4M cloud infrastructure renewal and forty minutes arguing over the catering menu for the company offsite.',
        breakdown:
          'Accessibility of the topic—not its financial impact—dictates where meeting oxygen goes.',
      },
    ],
    antidote:
      'Timebox low-stakes decisions, delegate trivial choices to a single owner, and explicitly allocate pre-reading + structured review time to complex high-stakes decisions.',
    relations: [
      {
        targetId: 'parkinsons-law',
        type: 'related_to',
        note: 'Both were coined by C. Northcote Parkinson to expose organizational friction.',
      },
      {
        targetId: 'sayres-law',
        type: 'related_to',
        note: 'Sayre’s Law explains why low-stakes debates get surprisingly fierce.',
      },
      {
        targetId: 'pareto-principle',
        type: 'counterpart_to',
        note: 'Focuses energy back on the vital 20% that drives 80% of outcomes.',
      },
      {
        targetId: 'red-herring',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'peter-principle',
    slug: 'peter-principle',
    name: 'The Peter Principle',
    aliases: ['Rising to Level of Incompetence', 'Promotion Trap'],
    kind: 'law',
    domains: ['organizations', 'systems'],
    tier: 'essential',
    oneLiner:
      'In a hierarchy, people tend to get promoted based on success in their current role until they reach a role where they are no longer effective—and then stop being promoted.',
    explanation:
      'Skills that make someone an extraordinary individual contributor (like closing deals, coding, or surgery) are often completely different from the skills needed to manage people or run an organization. Because promotions reward yesterday’s job rather than readiness for tomorrow’s, hierarchies gradually fill upper tiers with stalled performers.',
    origin: 'Formulated by Laurence J. Peter and Raymond Hull in The Peter Principle (1969).',
    examples: [
      {
        context: 'Tech Management',
        scenario:
          'A company’s best systems programmer is promoted to Engineering Director—a job centered on budgets, hiring, and conflict resolution—where she struggles and becomes miserable.',
        breakdown:
          'The organization simultaneously loses its top architect and gains an overwhelmed director.',
      },
      {
        context: 'Sales Teams',
        scenario:
          'The top account executive is promoted to VP of Sales, yet coaching 15 reps requires patience and forecasting discipline very different from solo dealmaking.',
        breakdown:
          'Individual quota attainment did not predict organizational leadership ability.',
      },
    ],
    antidote:
      'Build dual career ladders (rewarding senior individual contributors on par with managers), trial people in interim leadership scope, and promote based on demonstrated capabilities for the *next* role.',
    relations: [
      {
        targetId: 'dunning-kruger-effect',
        type: 'related_to',
      },
      {
        targetId: 'goodharts-law',
        type: 'related_to',
        note: 'Using current-role metrics as the sole target for next-role promotions misaligns incentives.',
      },
      {
        targetId: 'circle-of-competence',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'parkinsons-law',
    slug: 'parkinsons-law',
    name: "Parkinson's Law",
    aliases: ['Work Expands to Fill Time', 'Scope Expansion'],
    kind: 'law',
    domains: ['organizations', 'decision-making', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Work expands so as to fill the time (or budget) available for its completion.',
    explanation:
      'Given an open-ended two-week window to draft a memo, people will procrastinate, polish margins, schedule extra reviews, and still finish on day fourteen. Without crisp constraints, tasks absorb whatever slack surrounds them.',
    origin: 'C. Northcote Parkinson, opening sentence of his satirical 1955 Economist essay studying British Admiralty bureaucracy.',
    examples: [
      {
        context: 'Meetings & Calendars',
        scenario:
          'A quick sync scheduled for 60 minutes naturally meanders through pleasantries and tangents until minute 59, whereas a 25-minute slot reaches the exact same decision on time.',
        breakdown:
          'The allocated slot sets the unconscious pace of the conversation.',
      },
      {
        context: 'Product Sprints',
        scenario:
          'A feature that could be prototyped in three days stretches across an entire three-week sprint once extra settings, animations, and edge-case tweaks creep in.',
        breakdown:
          'Generous timelines invite gold-plating rather than earlier delivery.',
      },
    ],
    antidote:
      'Set crisp, realistic timeboxes and fixed-time, variable-scope cycles (like 6-week appetites) paired with clear “good enough” definitions.',
    relations: [
      {
        targetId: 'law-of-triviality',
        type: 'related_to',
      },
      {
        targetId: 'hofstadters-law',
        type: 'counterpart_to',
        note: 'Parkinson warns against bloated buffers; Hofstadter warns against naive underestimation—balance both.',
      },
      {
        targetId: 'pareto-principle',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'goodharts-law',
    slug: 'goodharts-law',
    name: "Goodhart's Law",
    aliases: ['Metric Gaming', 'Target Corruption'],
    kind: 'law',
    domains: ['organizations', 'systems', 'statistics'],
    tier: 'essential',
    oneLiner:
      'When a measure becomes a target, it ceases to be a good measure.',
    explanation:
      'Metrics are useful proxies for complex goals—until people’s pay, status, or survival gets tied directly to moving the number. Once targeted, actors find shortcuts that inflate the proxy while hollowing out or harming the true underlying goal.',
    logicalForm: 'Metric M correlates with Goal G → Reward M directly → Actors optimize M independently of G → M decouples from G.',
    origin: 'Economist Charles Goodhart (1975) regarding monetary policy; concisely phrased by anthropologist Marilyn Strathern (1997).',
    examples: [
      {
        context: 'Software Engineering',
        scenario:
          'Management evaluates engineers by “lines of code written” or “number of bugs closed.” Developers write verbose boilerplate—or introduce easy-to-fix bugs to boost closure counts.',
        breakdown:
          'Optimizing the proxy actively degrades code quality and maintainability.',
      },
      {
        context: 'Customer Support',
        scenario:
          'A call center ties bonuses strictly to “average call handle time under 3 minutes.” Agents rush customers off the phone without solving issues, causing repeat calls to skyrocket.',
        breakdown:
          'Handle time improves on the dashboard while customer satisfaction collapses.',
      },
    ],
    antidote:
      'Pair every speed or volume metric with a counter-metric (quality, retention, reopen rate), rotate audits, and treat dashboards as diagnostic indicators rather than mechanical quotas.',
    relations: [
      {
        targetId: 'campbells-law',
        type: 'often_confused_with',
        note: 'Campbell’s Law emphasizes the corruption of the underlying social process itself when high-stakes metrics are enforced.',
      },
      {
        targetId: 'cobra-effect',
        type: 'related_to',
        note: 'The Cobra Effect is a dramatic perverse-incentive consequence of Goodhart’s Law.',
      },
      {
        targetId: 'map-is-not-the-territory',
        type: 'related_to',
        note: 'A KPI is a map of value; optimizing the map can wreck the territory.',
      },
      {
        targetId: 'correlation-not-causation',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'cobra-effect',
    slug: 'cobra-effect',
    name: 'The Cobra Effect',
    aliases: ['Perverse Incentive', 'Unintended Incentive Backfire'],
    kind: 'law',
    domains: ['organizations', 'systems', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'When a poorly designed incentive unintentionally rewards people for making the very problem you wanted to solve even worse.',
    explanation:
      'Named after an anecdote from colonial Delhi where a bounty on dead cobras supposedly prompted locals to breed cobras for income—and when the bounty was canceled, breeders released the snakes, leaving more cobras than before. Whenever an incentive rewards treating symptoms rather than preventing root causes, rational actors will manufacture symptoms.',
    origin: 'Coined by German economist Horst Siebert (2001).',
    examples: [
      {
        context: 'Bug Bounties & QA',
        scenario:
          'A company pays testers $50 per bug filed and developers $50 per bug fixed; soon minor typos are split into ten separate tickets and sloppy code is silently tolerated.',
        breakdown:
          'Rewarding defect volume incentivizes creating and fragmenting defects.',
      },
      {
        context: 'Environmental Policy',
        scenario:
          'Subsidies paying factories per ton of greenhouse gas destroyed led some plants to ramp up production of cheap refrigerant byproducts solely to destroy them for credits.',
        breakdown:
          'The subsidy made manufacturing the pollutant more profitable than making the primary product.',
      },
    ],
    antidote:
      'Before rolling out any bonus, quota, or bounty, play adversarial Second-Order Thinking: “If I were purely greedy and literal, how would I exploit this rule?”',
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
        targetId: 'second-order-thinking',
        type: 'counterpart_to',
      },
      {
        targetId: 'red-teaming',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'campbells-law',
    slug: 'campbells-law',
    name: "Campbell's Law",
    aliases: ['Indicator Corruption', 'Teaching to the Test'],
    kind: 'law',
    domains: ['organizations', 'statistics', 'systems'],
    tier: 'intermediate',
    oneLiner:
      'The more any quantitative social indicator is used for high-stakes decision-making, the more likely it is to corrupt the social processes it was meant to monitor.',
    explanation:
      'Closely related to Goodhart’s Law, Donald Campbell focused specifically on social institutions—schools, hospitals, policing—where tying funding or careers to a single score doesn’t just make the metric noisy; it warps the daily mission of teachers, doctors, or officers.',
    origin: 'Psychologist and research methodologist Donald T. Campbell (1976).',
    examples: [
      {
        context: 'Education',
        scenario:
          'When school funding depends solely on standardized math and reading test scores, schools cut art, science labs, and writing—and spend months drilling test-taking tricks.',
        breakdown:
          'Test scores rise while broad education narrows and deteriorates.',
      },
      {
        context: 'Hospital Rankings',
        scenario:
          'Ranking surgeons strictly by 30-day survival rates pushes some clinics to turn away high-risk patients who desperately need care.',
        breakdown:
          'The ranking metric distorts clinical ethics through patient cherry-picking.',
      },
    ],
    antidote:
      'Combine quantitative indicators with qualitative human judgment, risk-adjusted baselines, and transparent oversight.',
    relations: [
      {
        targetId: 'goodharts-law',
        type: 'often_confused_with',
      },
      {
        targetId: 'cobra-effect',
        type: 'related_to',
      },
      {
        targetId: 'map-is-not-the-territory',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'conways-law',
    slug: 'conways-law',
    name: "Conway's Law",
    aliases: ['Org-Chart Architecture Mirroring', 'Inverse Conway Maneuver'],
    kind: 'law',
    domains: ['organizations', 'systems'],
    tier: 'essential',
    oneLiner:
      'Organizations inevitably design systems whose technical architecture mirrors the communication structure of the organization itself.',
    explanation:
      'If four separate teams build a compiler, you get a four-pass compiler. Interfaces between software modules require constant coordination, so clean boundaries naturally form along team lines—and messy organizational silos show up directly inside the user experience.',
    origin: 'Computer programmer Melvin E. Conway (1967), “How Do Committees Invent?”',
    examples: [
      {
        context: 'Enterprise Software UX',
        scenario:
          'A bank’s mobile app forces customers to log in separately for checking, credit cards, and mortgages because those three divisions never share engineering roadmaps.',
        breakdown:
          'Users literally have to navigate the company’s internal org chart.',
      },
      {
        context: 'Frontend vs. Backend Silos',
        scenario:
          'Splitting teams strictly by technical layer (UI, API, DBA) causes every minor feature to queue through three handoffs and brittle generic APIs.',
        breakdown:
          'Communication friction shapes the architecture into rigid horizontal layers.',
      },
    ],
    antidote:
      'Apply the “Inverse Conway Maneuver”: intentionally structure small, cross-functional teams around the product boundaries and system architecture you *want* to emerge.',
    relations: [
      {
        targetId: 'brooks-law',
        type: 'related_to',
      },
      {
        targetId: 'galls-law',
        type: 'related_to',
      },
      {
        targetId: 'second-order-thinking',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'brooks-law',
    slug: 'brooks-law',
    name: "Brooks's Law",
    aliases: ['Mythical Man-Month', 'Adding People to a Late Project'],
    kind: 'law',
    domains: ['organizations', 'systems', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Adding manpower to a late software project makes it later.',
    explanation:
      'Complex creative work is not infinitely divisible like harvesting crops. New team members take time to ramp up—pulling experienced contributors away to mentor them—while communication channels explode quadratically as team size grows (n(n−1)/2).',
    origin: 'Fred Brooks, The Mythical Man-Month (1975), drawing from his experience managing IBM’s OS/360.',
    examples: [
      {
        context: 'Deadline Crunch',
        scenario:
          'Three weeks before launch, a delayed checkout rewrite gets four newly hired contractors added to the squad. Senior engineers spend two weeks answering onboarding questions and fixing merge conflicts, pushing launch back another month.',
        breakdown:
          'Ramp-up and coordination overhead exceed any short-term output from newcomers.',
      },
      {
        context: 'Cross-Team Escalations',
        scenario:
          'A troubled initiative swells from 5 owners to 22 stakeholders in daily syncs, slowing decisions to a crawl.',
        breakdown:
          'More voices multiply alignment overhead faster than execution capacity.',
      },
    ],
    antidote:
      'When a project is late, cut scope ruthlessly, remove blockers, or adjust the date—only add people early in a project and into cleanly decoupled modules.',
    relations: [
      {
        targetId: 'planning-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'hofstadters-law',
        type: 'related_to',
      },
      {
        targetId: 'conways-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'hofstadters-law',
    slug: 'hofstadters-law',
    name: "Hofstadter's Law",
    aliases: ['Recursive Schedule Slip', 'Always Takes Longer'],
    kind: 'law',
    domains: ['systems', 'decision-making', 'everyday'],
    tier: 'essential',
    oneLiner:
      'It always takes longer than you expect, even when you take into account Hofstadter’s Law.',
    explanation:
      'A playfully self-referential law capturing how stubbornly difficult it is to estimate complex, novel tasks. Even after consciously padding your schedule, unknown unknowns, integration snags, and shifting requirements still outrun human intuition.',
    origin: 'Cognitive scientist Douglas Hofstadter, Gödel, Escher, Bach: An Eternal Golden Braid (1979).',
    examples: [
      {
        context: 'Data Migrations',
        scenario:
          'An engineer doubles her estimate for migrating legacy customer records from 2 days to 4 days “just to be safe”—then discovers undocumented character encodings and corrupted foreign keys that take 9 days.',
        breakdown:
          'Simple multipliers rarely cover genuinely unknown failure modes discovered only during execution.',
      },
      {
        context: 'Writing & Creative Projects',
        scenario:
          'An author adds a two-month buffer to a book schedule, yet editing, fact-checking, and revisions still push completion past the padded deadline.',
        breakdown:
          'Complex creative work hides invisible sub-tasks until you are deep inside them.',
      },
    ],
    antidote:
      'Break work into tiny verifiable milestones, spike the riskiest unknown first, and anchor estimates to historical completion times rather than gut feel.',
    relations: [
      {
        targetId: 'planning-fallacy',
        type: 'psychological_root',
        note: 'The Planning Fallacy explains why our estimates systematically undershoot.',
      },
      {
        targetId: 'parkinsons-law',
        type: 'counterpart_to',
      },
      {
        targetId: 'brooks-law',
        type: 'related_to',
      },
      {
        targetId: 'margin-of-safety',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'murphys-law',
    slug: 'murphys-law',
    name: "Murphy's Law",
    aliases: ['Anything That Can Go Wrong Will Go Wrong', 'Defensive Engineering Principle'],
    kind: 'law',
    domains: ['systems', 'everyday', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Anything that can go wrong, will go wrong—so design systems where failure modes are impossible, obvious, or harmless.',
    explanation:
      'Often repeated as a gloomy joke about bad luck, Murphy’s Law actually originated as a serious aerospace safety philosophy: if a wiring harness can be plugged in backward, eventually a tired technician *will* plug it in backward. Reliable engineering eliminates the possibility rather than blaming human error.',
    origin: 'Aerospace engineer Edward A. Murphy Jr. (1949) during USAF rocket-sled deceleration tests at Edwards Air Force Base.',
    examples: [
      {
        context: 'Hardware & Interfaces',
        scenario:
          'USB-C was designed to be reversible—and medical oxygen vs. nitrous oxide hoses use incompatible connectors—so plugging them in wrong is physically impossible.',
        breakdown:
          'Poka-yoke (mistake-proofing) neutralizes Murphy’s Law by design.',
      },
      {
        context: 'Production Deployments',
        scenario:
          'A database script has a `--dry-run` flag off by default and accepts both staging and production URLs with similar names—so an exhausted engineer inevitably wipes production.',
        breakdown:
          'Relying on “be careful” fails at scale; safe defaults and confirmation guards succeed.',
      },
    ],
    antidote:
      'Practice defensive design: build Margin of Safety, safe defaults, automated rollbacks, and Pre-Mortems before shipping.',
    relations: [
      {
        targetId: 'margin-of-safety',
        type: 'counterpart_to',
      },
      {
        targetId: 'pre-mortem',
        type: 'counterpart_to',
      },
      {
        targetId: 'inversion',
        type: 'related_to',
      },
      {
        targetId: 'automation-bias',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'sturgeons-law',
    slug: 'sturgeons-law',
    name: "Sturgeon's Law",
    aliases: ["Sturgeon's Revelation", '90% of Everything Is Crud'],
    kind: 'law',
    domains: ['everyday', 'decision-making', 'debate'],
    tier: 'intermediate',
    oneLiner:
      'Ninety percent of everything is crud—so judge any genre, medium, or field by its top 10%, not its average.',
    explanation:
      'When critics dismissed science fiction because 90% of sci-fi stories were junk, author Theodore Sturgeon replied that 90% of *everything*—literary novels, films, startups, research papers—is mediocre. Comparing the average of a new medium against the curated classics of an old medium is an unfair double standard.',
    origin: 'Science fiction writer Theodore Sturgeon (1957–1958).',
    examples: [
      {
        context: 'Music & Nostalgia',
        scenario:
          'Someone claims “modern music is terrible compared to the 1970s,” forgetting the hundreds of forgettable 1970s disco novelties that history filtered out.',
        breakdown:
          'Comparing today’s unfiltered stream against the 1970s’ surviving top 5% blends Sturgeon’s Law with Survivorship Bias.',
      },
      {
        context: 'Emerging Technology',
        scenario:
          'Dismissing all open-source software, podcasts, or AI tools because most early examples are noisy ignores the genuinely transformative top decile.',
        breakdown:
          'High noise-to-signal ratio is normal in any accessible medium; curation matters more than dismissal.',
      },
    ],
    antidote:
      'Build strong filters and compare apples to apples—the best of category A against the best of category B.',
    relations: [
      {
        targetId: 'survivorship-bias',
        type: 'related_to',
      },
      {
        targetId: 'pareto-principle',
        type: 'related_to',
        note: 'Both highlight steep power-law distributions where a small fraction accounts for most value.',
      },
      {
        targetId: 'steel-manning',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'brandolinis-law',
    slug: 'brandolinis-law',
    name: "Brandolini's Law",
    aliases: ['Bullshit Asymmetry Principle', 'Asymmetry of Refutation'],
    kind: 'law',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'The amount of energy needed to refute nonsense is an order of magnitude larger than the energy needed to produce it.',
    explanation:
      'Inventing a catchy false claim takes ten seconds and zero research. Fact-checking it, gathering primary sources, explaining nuance, and persuading an audience can take hours—creating a structural advantage for reckless rhetoric, spam, and sloppy specs.',
    origin: 'Italian programmer Alberto Brandolini (January 2013), inspired by reading Daniel Kahneman’s Thinking, Fast and Slow.',
    examples: [
      {
        context: 'Online Misinformation',
        scenario:
          'A viral 15-second video claims a common vaccine or food additive causes severe illness. Scientists spend days writing a careful, cited rebuttal that gets 2% of the views.',
        breakdown:
          'Effortless fabrication overwhelms careful verification in attention markets.',
      },
      {
        context: 'Workplace Meetings',
        scenario:
          'An executive drops a casual unverified claim (“Competitor X already built this in a week!”), forcing an analyst to spend two days gathering evidence proving it isn’t true.',
        breakdown:
          'Unvetted assertions impose a massive hidden verification tax on teams.',
      },
    ],
    antidote:
      'Enforce Hitchens’s Razor early—require claimants to bring sources before spending team hours debunking rumors, and invest in reputable pre-filtering.',
    relations: [
      {
        targetId: 'hitchens-razor',
        type: 'counterpart_to',
        note: 'Hitchens’s Razor protects your time from Brandolini’s asymmetry.',
      },
      {
        targetId: 'burden-of-proof',
        type: 'related_to',
      },
      {
        targetId: 'cunninghams-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'sayres-law',
    slug: 'sayres-law',
    name: "Sayre's Law",
    aliases: ['Law of Academic Politics', 'Low-Stakes Intensity'],
    kind: 'law',
    domains: ['organizations', 'debate', 'everyday'],
    tier: 'deep-cut',
    oneLiner:
      'In any dispute, the intensity of feeling is inversely proportional to the value of the issues at stake.',
    explanation:
      'Originally quipped about academic politics, Sayre’s Law reflects a subtle truth: when the stakes are truly tiny (office thermostat, tabs vs. spaces, committee titles), there is little objective cost to fighting—so ego, identity, and status take center stage.',
    origin: 'Columbia University political scientist Wallace Stanley Sayre (circa 1960s).',
    examples: [
      {
        context: 'Developer Tooling Wars',
        scenario:
          'Two senior engineers maintain calm professionalism during a major database outage, yet turn a code-formatting rule (semicolons vs. no semicolons) into a bitter week-long feud.',
        breakdown:
          'Because either option works fine technically, the fight becomes purely about personal taste and status.',
      },
      {
        context: 'Neighborhood & HOA Boards',
        scenario:
          'A community meeting turns explosive over approved mailbox colors while major reserve-fund maintenance passes without comment.',
        breakdown:
          'Low real stakes invite high emotional investment.',
      },
    ],
    antidote:
      'Recognize when a fierce argument has tiny objective upside—flip a coin, pick an automated formatter, or defer to a single tie-breaker and move on.',
    relations: [
      {
        targetId: 'law-of-triviality',
        type: 'related_to',
      },
      {
        targetId: 'pareto-principle',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'chestertons-fence',
    slug: 'chestertons-fence',
    name: "Chesterton's Fence",
    aliases: ['Principle of Second-Order Reform', 'Understand Before Removing'],
    kind: 'law',
    domains: ['systems', 'organizations', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Never tear down a rule, tradition, or piece of legacy code until you fully understand why it was put there in the first place.',
    explanation:
      'G. K. Chesterton imagined a reformer stumbling across a fence across a road and declaring, “I don’t see the use of this; let’s clear it away.” A wiser observer replies: “If you don’t see the use of it, I certainly won’t let you clear it away. Go think until you do—then you may decide whether to remove it.” Old constraints often guard against non-obvious hazards.',
    origin: 'Essayist G. K. Chesterton, The Thing: Why I Am a Catholic (1929).',
    examples: [
      {
        context: 'Legacy Codebases',
        scenario:
          'A new developer deletes a seemingly redundant 500ms retry loop in a payment service to “clean up tech debt,” unaware it was added two years ago to survive a partner bank’s nightly failover.',
        breakdown:
          'Removing code without investigating its git history reintroduces a solved production bug.',
      },
      {
        context: 'Organizational Processes',
        scenario:
          'A new COO abolishes a finance sign-off step as “bureaucracy,” only to discover months later that it was the company’s sole check against duplicate vendor invoices.',
        breakdown:
          'The process may have been clunky, but the underlying risk it mitigated didn’t vanish.',
      },
    ],
    antidote:
      'Before deleting or rewriting anything longstanding, investigate its origin story (git blame, old post-mortems, veterans). Once you know *why* it existed, verify whether those conditions still hold—and if not, remove it cleanly.',
    relations: [
      {
        targetId: 'status-quo-bias',
        type: 'counterpart_to',
        note: 'Chesterton’s Fence is not blind conservatism—it demands understanding before change, not never changing.',
      },
      {
        targetId: 'second-order-thinking',
        type: 'related_to',
      },
      {
        targetId: 'first-principles',
        type: 'related_to',
      },
      {
        targetId: 'slippery-slope',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'streisand-effect',
    slug: 'streisand-effect',
    name: 'The Streisand Effect',
    aliases: ['Censorship Backfire', 'Suppression Amplification'],
    kind: 'law',
    domains: ['everyday', 'organizations', 'systems'],
    tier: 'intermediate',
    oneLiner:
      'Attempting to hide, censor, or aggressively suppress a piece of information often backfires and draws vastly more public attention to it.',
    explanation:
      'In networked media, heavy-handed takedown threats turn an obscure, forgettable detail into an irresistible David-vs.-Goliath story. The suppression effort itself becomes the headline.',
    origin: 'Coined by tech writer Mike Masnick (2005) after Barbra Streisand sued to remove an aerial photo of her Malibu home from a coastal-erosion archive—turning 6 downloads into over 420,000 views.',
    examples: [
      {
        context: 'PR & Legal Threats',
        scenario:
          'A software company sends an aggressive cease-and-desist letter to a tiny blog reviewing a minor bug; the blogger posts the legal threat online, hitting the front page of Hacker News.',
        breakdown:
          'Trying to silence a 200-reader post broadcast the bug to 200,000 engineers.',
      },
      {
        context: 'Internal Comms',
        scenario:
          'Management bans discussion of a leaked memo in company Slack, immediately causing every employee who hadn’t heard of it to hunt down a copy.',
        breakdown:
          'Prohibition signals high salience and fuels curiosity.',
      },
    ],
    antidote:
      'Before threatening suppression, run Second-Order Thinking: compare the modest cost of ignoring or transparently addressing the issue against the explosive visibility of a public fight.',
    relations: [
      {
        targetId: 'cobra-effect',
        type: 'related_to',
        note: 'Both are classic backfire effects where the intervention worsens the problem.',
      },
      {
        targetId: 'second-order-thinking',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'galls-law',
    slug: 'galls-law',
    name: "Gall's Law",
    aliases: ['Complex Systems Evolve From Simple Ones', 'Systemantics'],
    kind: 'law',
    domains: ['systems', 'organizations', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'A complex system that works is invariably found to have evolved from a simple system that worked.',
    explanation:
      'John Gall observed the stark corollary: a complex system designed from scratch never works and cannot be patched up to make it work—you have to start over with a working simple system. Real-world edge cases are too numerous to anticipate in a grand blueprint.',
    origin: 'Pediatrician and systems theorist John Gall, Systemantics (1975).',
    examples: [
      {
        context: 'Software Architecture',
        scenario:
          'A team spends 18 months designing a grand “version 2” multi-region microservices platform from scratch that collapses under real traffic, while a competitor iterates a clean single-server app into a resilient platform step by step.',
        breakdown:
          'Iterative evolution tests assumptions against reality at every step; big-bang rewrites accumulate unvalidated complexity.',
      },
      {
        context: 'Product Launches',
        scenario:
          'The most enduring platforms (Stripe, Git, Wikipedia) began as laser-focused minimal tools solving one concrete workflow reliably before layering on complexity.',
        breakdown:
          'Working simplicity creates a reliable foundation for incremental growth.',
      },
    ],
    antidote:
      'Ship the smallest end-to-end working vertical slice first, validate it under real usage, and evolve complexity only as real bottlenecks demand it.',
    relations: [
      {
        targetId: 'occams-razor',
        type: 'related_to',
      },
      {
        targetId: 'conways-law',
        type: 'related_to',
      },
      {
        targetId: 'first-principles',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'lindys-law',
    slug: 'lindys-law',
    name: "Lindy's Law",
    aliases: ['Lindy Effect', 'Time-Tested Durability'],
    kind: 'law',
    domains: ['decision-making', 'systems', 'everyday'],
    tier: 'intermediate',
    oneLiner:
      'For non-perishable things like ideas, books, and technologies, future life expectancy tends to be proportional to how long they have already survived.',
    explanation:
      'Unlike biological organisms that age toward death, ideas and tools get stress-tested by time. A book read for 400 years (like Montaigne’s Essays) or a technology thriving for 40 years (like SQL or Unix pipes) is far more likely to still matter 40 years from now than last month’s viral framework.',
    origin: 'Named after Lindy’s delicatessen in New York (Albert Goldman, 1964); formalized by Benoit Mandelbrot and popularized by Nassim Nicholas Taleb.',
    examples: [
      {
        context: 'Technology Choices',
        scenario:
          'Choosing PostgreSQL and plain HTTP/JSON for a 10-year core product rather than a six-month-old hype database.',
        breakdown:
          'Decades of survival signal deep alignment with real problems and battle-tested tooling.',
      },
      {
        context: 'Reading & Learning',
        scenario:
          'Prioritizing foundational books and timeless mental models over trending hot takes that will be forgotten next quarter.',
        breakdown:
          'Time acts as an uncompromising quality filter.',
      },
    ],
    antidote:
      'Use Lindy as a strong default for foundational infrastructure and timeless wisdom—while staying alert to genuine paradigm shifts where new tools supersede old assumptions.',
    relations: [
      {
        targetId: 'survivorship-bias',
        type: 'often_confused_with',
      },
      {
        targetId: 'bandwagon',
        type: 'often_confused_with',
      },
      {
        targetId: 'recency-bias',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'cunninghams-law',
    slug: 'cunninghams-law',
    name: "Cunningham's Law",
    aliases: ['Wrong Answer Gets Faster Correction', 'Internet Correction Reflex'],
    kind: 'law',
    domains: ['everyday', 'organizations', 'systems'],
    tier: 'deep-cut',
    oneLiner:
      'The best way to get the right answer on the internet is not to ask a question—it’s to post the wrong answer.',
    explanation:
      'People often scroll past open-ended requests for help because answering from scratch feels like work. Spotting a confident mistake, however, triggers an irresistible urge to correct the record with authoritative detail.',
    origin: 'Attributed to Ward Cunningham (inventor of the wiki) by Steven McGeady in the early 1980s.',
    examples: [
      {
        context: 'Technical Forums',
        scenario:
          'Asking “How do I configure nginx reverse proxies?” gets silence; posting “Nginx can’t handle WebSockets natively” elicits three detailed working configs within ten minutes.',
        breakdown:
          'Correcting an error feels faster and more rewarding than writing a blank-page tutorial.',
      },
      {
        context: 'Team Specs & Drafts',
        scenario:
          'Circulating a rough strawman proposal (“Draft v0.1 — please tear apart”) gets far sharper stakeholder feedback than asking a room “What should we build?”',
        breakdown:
          'People edit and critique concrete artifacts vastly better than they brainstorm from a blank page.',
      },
    ],
    antidote:
      'Channel the constructive side at work: bring a concrete rough draft or prototype to meetings so colleagues have something tangible to improve—without trolling.',
    relations: [
      {
        targetId: 'brandolinis-law',
        type: 'related_to',
      },
      {
        targetId: 'red-teaming',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'simpsons-paradox',
    slug: 'simpsons-paradox',
    name: "Simpson's Paradox",
    aliases: ['Yule–Simpson Effect', 'Aggregation Reversal'],
    kind: 'law',
    domains: ['statistics', 'decision-making', 'systems'],
    tier: 'intermediate',
    oneLiner:
      'A trend that appears consistently inside every separate subgroup can vanish—or completely reverse direction—when the groups are combined into one aggregate average.',
    explanation:
      'When subgroup sizes are heavily skewed by a hidden confounding factor (like case severity or traffic mix), pooled averages become misleading. A treatment can outperform a rival on both mild cases *and* severe cases individually, yet look worse overall simply because it was disproportionately given to severe patients.',
    origin: 'Described by Edward H. Simpson (1951); earlier observed by Karl Pearson (1899) and Udny Yule (1903); famously illustrated in UC Berkeley admissions (1973).',
    examples: [
      {
        context: 'A/B Testing & Product Analytics',
        scenario:
          'New checkout Flow B converts better than Flow A on mobile AND converts better on desktop—yet looks worse overall because an accidental routing bug sent 80% of Flow B’s traffic from lower-converting mobile users.',
        breakdown:
          'Device mix confounds the combined average; stratifying by device reveals the true winner.',
      },
      {
        context: 'Healthcare Comparisons',
        scenario:
          'A premier trauma hospital shows a higher overall mortality rate than a tiny neighborhood clinic—not because care is worse, but because it receives the most critical emergencies.',
        breakdown:
          'Case severity must be stratified before comparing aggregate outcomes.',
      },
    ],
    antidote:
      'Never trust a single pooled average when group weights differ—disaggregate by plausible confounders and draw the causal structure.',
    sources: [
      {
        site: 'Stanford Encyclopedia of Philosophy (SEP)',
        title: "Simpson's Paradox Entry",
        url: 'https://plato.stanford.edu/entries/paradox-simpson/',
      },
      {
        site: 'Wikipedia Statistical Paradoxes Database',
        title: "Simpson's paradox",
        url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      },
    ],
    relations: [
      {
        targetId: 'correlation-not-causation',
        type: 'related_to',
      },
      {
        targetId: 'division-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'berksons-paradox',
        type: 'often_confused_with',
        note: 'Simpson’s Paradox reverses trends via aggregation; Berkson’s Paradox creates fake negative correlations inside filtered samples.',
      },
    ],
  },
  {
    id: 'berksons-paradox',
    slug: 'berksons-paradox',
    name: "Berkson's Paradox",
    aliases: ['Collider Bias', 'Berkson’s Fallacy', 'Selection Distortion'],
    kind: 'law',
    domains: ['statistics', 'decision-making', 'everyday'],
    tier: 'deep-cut',
    oneLiner:
      'When you only observe items that passed a combined filter (like elite colleges, hospitals, or top restaurants), two completely independent positive traits appear negatively correlated.',
    explanation:
      'Suppose restaurants stay open if they have *either* great food OR a great location (or both). Because terrible-food + terrible-location places go bankrupt and vanish from your sample, the remaining spots with amazing locations disproportionately have mediocre food—making it look like great locations “cause” bad food.',
    origin: 'Biostatistician Joseph Berkson (1946) at the Mayo Clinic.',
    examples: [
      {
        context: 'Hiring & Universities',
        scenario:
          'At a selective university that admits students for either top test scores or standout athletics, students with high grades appear less athletic than average—even if the two traits are unrelated in the general population.',
        breakdown:
          'Conditioning on admission (a collider variable) creates an artificial negative trade-off.',
      },
      {
        context: 'Venture Capital & Startups',
        scenario:
          'Among funded startups, founders with slicker pitch decks sometimes show weaker technical depth—because weak decks only got funded if their tech was extraordinary.',
        breakdown:
          'Observing only the filtered survivors distorts correlations inside the pool.',
      },
    ],
    antidote:
      'Ask what selection gate filtered the population you are looking at before inferring trade-offs between traits.',
    sources: [
      {
        site: 'Wikipedia Statistical Paradoxes Database',
        title: "Berkson's paradox (Collider Bias)",
        url: 'https://en.wikipedia.org/wiki/Berkson%27s_paradox',
      },
    ],
    relations: [
      {
        targetId: 'survivorship-bias',
        type: 'related_to',
        note: 'Both arise from observing only the subset that survived a selection filter.',
      },
      {
        targetId: 'simpsons-paradox',
        type: 'often_confused_with',
      },
      {
        targetId: 'correlation-not-causation',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'postels-law',
    slug: 'postels-law',
    name: "Postel's Law",
    aliases: ['Robustness Principle', 'Liberal in What You Accept'],
    kind: 'law',
    domains: ['systems', 'organizations', 'everyday'],
    tier: 'intermediate',
    oneLiner:
      'Be conservative in what you send, and be liberal in what you accept from others.',
    explanation:
      'Originally written for internet protocol interoperability (TCP), Postel’s Law makes distributed systems—and human teams—resilient to minor quirks. Emit spotless, spec-compliant outputs while gracefully tolerating minor formatting imperfections in inputs.',
    origin: 'Internet pioneer Jon Postel, RFC 761 (TCP specification, 1980).',
    examples: [
      {
        context: 'UX & Forms',
        scenario:
          'Accepting phone numbers or credit cards whether users type spaces, dashes, or parentheses—while storing and emitting them in one strict canonical format.',
        breakdown:
          'Reduces user frustration while keeping downstream data clean.',
      },
      {
        context: 'Team Communication',
        scenario:
          'Writing crisp, unambiguous specs yourself while interpreting a teammate’s hasty Slack message charitably.',
        breakdown:
          'Mirrors Grice’s Razor in daily collaboration.',
      },
    ],
    antidote:
      'Beware the security edge case (RFC 9413): in parsers and security protocols, accepting malformed inputs silently can cause spec drift and vulnerabilities—be strict at security boundaries.',
    sources: [
      {
        site: 'Hacker Laws Repository (dwmkerr/hacker-laws)',
        title: "Postel's Law (The Robustness Principle)",
        url: 'https://github.com/dwmkerr/hacker-laws#postels-law',
      },
      {
        site: 'Wikipedia Eponymous Laws Database',
        title: 'Robustness principle',
        url: 'https://en.wikipedia.org/wiki/Robustness_principle',
      },
    ],
    relations: [
      {
        targetId: 'grices-razor',
        type: 'related_to',
      },
      {
        targetId: 'murphys-law',
        type: 'related_to',
      },
      {
        targetId: 'galls-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'amaras-law',
    slug: 'amaras-law',
    name: "Amara's Law",
    aliases: ['Technology Hype Trajectory', 'Overestimate Short-Term, Underestimate Long-Term'],
    kind: 'law',
    domains: ['systems', 'decision-making', 'organizations'],
    tier: 'essential',
    oneLiner:
      'We tend to overestimate the effect of a technology in the short run and underestimate its effect in the long run.',
    explanation:
      'New breakthroughs spark immediate hype expecting overnight transformation within 18 months—leading to disillusionment when adoption hits friction. Meanwhile, quiet compounding infrastructure changes reshape entire industries over 10 to 20 years far beyond early forecasts.',
    origin: 'Futurist and Institute for the Future president Roy Amara (1970s).',
    examples: [
      {
        context: 'The Web & Mobile',
        scenario:
          'The 2000 dot-com bust looked like “the internet was overhyped”—yet fifteen years later smartphones and cloud software reorganized global commerce, media, and work.',
        breakdown:
          'Two-year expectations overshot; fifteen-year reality blew past the skeptics.',
      },
      {
        context: 'Enterprise AI & Automation',
        scenario:
          'Teams expect a new model to replace legacy workflows in one sprint, get frustrated by edge cases, yet miss how deeply redesigned processes will transform the company over five years.',
        breakdown:
          'Organizational adaptation lags raw technical capability.',
      },
    ],
    antidote:
      'Avoid chasing 6-month hype cycles while still investing patiently in durable compounding capabilities over a 5–10 year horizon.',
    sources: [
      {
        site: 'Hacker Laws Repository (dwmkerr/hacker-laws)',
        title: "Amara's Law",
        url: 'https://github.com/dwmkerr/hacker-laws#amaras-law',
      },
      {
        site: 'Wikipedia Eponymous Laws Database',
        title: 'Roy Amara — Amara’s Law',
        url: 'https://en.wikipedia.org/wiki/Roy_Amara',
      },
    ],
    relations: [
      {
        targetId: 'recency-bias',
        type: 'related_to',
      },
      {
        targetId: 'lindys-law',
        type: 'related_to',
      },
      {
        targetId: 'optimism-bias',
        type: 'psychological_root',
      },
    ],
  },
  {
    id: 'linuss-law',
    slug: 'linuss-law',
    name: "Linus's Law",
    aliases: ['Given Enough Eyeballs, All Bugs Are Shallow'],
    kind: 'law',
    domains: ['systems', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'Given enough eyeballs, all bugs are shallow—meaning wide, diverse review makes subtle flaws obvious to someone.',
    explanation:
      'What looks like an impossible mystery to the original author often takes five seconds for a fresh pair of eyes with a different mental model to spot. Open review harnesses cognitive diversity rather than raw hours.',
    origin: 'Formulated by Eric S. Raymond in The Cathedral and the Bazaar (1999) in honor of Linux creator Linus Torvalds.',
    examples: [
      {
        context: 'Open-Source Software',
        scenario:
          'A subtle concurrency race condition that eluded the core maintainer for weeks is spotted within an hour by a contributor who specializes in memory models.',
        breakdown:
          'Different specialists see different classes of bugs effortlessly.',
      },
      {
        context: 'RFC & Design Reviews',
        scenario:
          'Sharing a one-page architecture RFC across teams catches a billing edge case before a single line of code is written.',
        breakdown:
          'Broader diverse review surfaces blind spots cheaply.',
      },
    ],
    antidote:
      'Remember the Bystander Effect caveat: “many eyeballs” only works when reviewers are actually engaged and incentivized to look—not assuming someone else audited it (as seen in Heartbleed).',
    sources: [
      {
        site: 'Hacker Laws Repository (dwmkerr/hacker-laws)',
        title: "Linus's Law",
        url: 'https://github.com/dwmkerr/hacker-laws#linuss-law',
      },
      {
        site: 'Wikipedia Eponymous Laws Database',
        title: "Linus's law",
        url: 'https://en.wikipedia.org/wiki/Linus%27s_law',
      },
    ],
    relations: [
      {
        targetId: 'bystander-effect',
        type: 'counterpart_to',
        note: 'Passive crowds suffer diffusion of responsibility; Linus’s Law requires active, diverse reviewers.',
      },
      {
        targetId: 'red-teaming',
        type: 'related_to',
      },
      {
        targetId: 'cunninghams-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'prices-law',
    slug: 'prices-law',
    name: "Price's Law",
    aliases: ['Square-Root Productivity Law', 'Price’s Square Root Law'],
    kind: 'law',
    domains: ['organizations', 'statistics', 'systems'],
    tier: 'deep-cut',
    oneLiner:
      'In many creative, academic, and organizational domains, half of all output is produced by the square root of the total number of contributors.',
    explanation:
      'In a 10-person team, ~3 people produce half the output; in a 100-person org, ~10 people do; in a 10,000-person org, ~100 do. As headcount grows, coordination overhead swells while high-leverage output concentrates heavily in a small core.',
    origin: 'Historian of science Derek J. de Solla Price, Little Science, Big Science (1963).',
    examples: [
      {
        context: 'Open-Source Repositories',
        scenario:
          'Out of 400 contributors listed on a popular framework, roughly 20 core maintainers author over half of all merged commits and bug fixes.',
        breakdown:
          'Creative output follows a steep power law rather than an even bell curve.',
      },
      {
        context: 'Scaling Companies',
        scenario:
          'Doubling headcount from 50 to 100 rarely doubles shipping velocity because communication overhead grows faster than the high-impact core.',
        breakdown:
          'Reinforces Brooks’s Law and small-team autonomy.',
      },
    ],
    antidote:
      'Protect your high-leverage core from administrative drag, keep teams small and autonomous, and invest in raising leverage across the long tail rather than blindly adding headcount.',
    sources: [
      {
        site: 'Wikipedia Eponymous Laws Database',
        title: 'Derek J. de Solla Price — Price’s Square Root Law',
        url: 'https://en.wikipedia.org/wiki/Derek_J._de_Solla_Price',
      },
    ],
    relations: [
      {
        targetId: 'pareto-principle',
        type: 'related_to',
        note: 'Price’s Law is an even steeper scaling-dependent cousin of the 80/20 Pareto distribution.',
      },
      {
        targetId: 'brooks-law',
        type: 'related_to',
      },
      {
        targetId: 'sturgeons-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'zawinskis-law',
    slug: 'zawinskis-law',
    name: "Zawinski's Law",
    aliases: ['Law of Software Envelopment', 'Feature Creep Law'],
    kind: 'law',
    domains: ['systems', 'organizations'],
    tier: 'deep-cut',
    oneLiner:
      'Every program attempts to expand until it can read mail—and those that cannot expand are replaced by ones that can.',
    explanation:
      'A witty diagnosis of inexorable software feature creep: tools that begin focused and sharp steadily absorb chat, notifications, plugins, and workflows until they bloat into miniature operating systems.',
    origin: 'Netscape and Mozilla engineer Jamie Zawinski (1996).',
    examples: [
      {
        context: 'Modern Productivity Apps',
        scenario:
          'A clean note-taking app gradually adds calendars, project Kanban boards, AI chat, email sync, and team messaging until launching a quick note takes four seconds.',
        breakdown:
          'Market pressure to capture adjacent workflows drives perpetual scope expansion.',
      },
      {
        context: 'Developer Tools',
        scenario:
          'Text editors like Emacs and VS Code evolving into full application platforms complete with browsers, terminals, and messaging extensions.',
        breakdown:
          'Extensible tools naturally pull adjacent daily tasks inside one roof.',
      },
    ],
    antidote:
      'Guard core simplicity fiercely: keep non-core features modular or opt-in plugins so everyday workflows stay fast and clear.',
    sources: [
      {
        site: 'The Jargon File / Eric S. Raymond',
        title: "Zawinski's Law of Software Envelopment",
        url: 'http://www.catb.org/jargon/html/Z/Zawinskis-Law.html',
      },
      {
        site: 'Wikipedia Eponymous Laws Database',
        title: 'Jamie Zawinski — Principles',
        url: 'https://en.wikipedia.org/wiki/Jamie_Zawinski#Principles',
      },
    ],
    relations: [
      {
        targetId: 'galls-law',
        type: 'related_to',
      },
      {
        targetId: 'parkinsons-law',
        type: 'related_to',
      },
      {
        targetId: 'occams-razor',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'metcalfes-law',
    slug: 'metcalfes-law',
    name: "Metcalfe's Law",
    aliases: ['Network Effect Scaling', 'n-Squared Network Value'],
    kind: 'law',
    domains: ['systems', 'organizations', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'The potential value of a communications network grows disproportionately—roughly with the square of the number of connected users (n²)—as each new node connects to all existing ones.',
    explanation:
      'One fax machine is useless; two let you message one friend; ten million let you reach the whole business world. Network effects create powerful winner-take-most dynamics—though in reality not every possible connection has equal value (and spam/congestion eventually imposes limits).',
    logicalForm: 'Possible pairwise links among n users = n(n − 1) / 2 ∝ n²',
    origin: 'Formulated around Ethernet by Robert Metcalfe (1980s) and named by George Gilder (1993).',
    examples: [
      {
        context: 'Messaging & Marketplaces',
        scenario:
          'A new messaging app with superior encryption struggles to displace incumbents because its value to you depends on whether your friends and family are already on it.',
        breakdown:
          'Network density often outweighs incremental feature advantages.',
      },
      {
        context: 'Team Coordination Cost (The Flip Side)',
        scenario:
          'Inside a company, the same n(n − 1)/2 formula explains why communication channels explode quadratically as team headcount doubles.',
        breakdown:
          'Networks amplify both value (external users) and coordination friction (internal committees).',
      },
    ],
    antidote:
      'When launching a networked product, dominate a tight single-player utility or dense niche cluster first rather than spreading thinly across everyone.',
    sources: [
      {
        site: 'Hacker Laws Repository (dwmkerr/hacker-laws)',
        title: "Metcalfe's Law",
        url: 'https://github.com/dwmkerr/hacker-laws#metcalfes-law',
      },
      {
        site: 'Wikipedia Eponymous Laws Database',
        title: "Metcalfe's law",
        url: 'https://en.wikipedia.org/wiki/Metcalfe%27s_law',
      },
    ],
    relations: [
      {
        targetId: 'brooks-law',
        type: 'related_to',
        note: 'Both hinge on n(n−1)/2 pairwise connections—an asset for platforms, a drag for software teams.',
      },
      {
        targetId: 'bandwagon',
        type: 'related_to',
      },
      {
        targetId: 'conways-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'jevons-paradox',
    slug: 'jevons-paradox',
    name: 'Jevons Paradox',
    aliases: ['Rebound Effect', 'Induced Demand Cousin'],
    kind: 'law',
    domains: ['systems', 'organizations', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'When technological progress makes a resource dramatically cheaper or more efficient to use, total consumption of that resource often *increases* rather than decreases.',
    explanation:
      'English economist William Stanley Jevons observed that James Watt’s vastly more fuel-efficient steam engine did not reduce Britain’s coal consumption—it made steam power economical for hundreds of new industries, causing coal demand to soar. Lower unit cost unlocks massive new demand.',
    origin: 'William Stanley Jevons, The Coal Question (1865).',
    examples: [
      {
        context: 'Cloud Computing & AI Inference',
        scenario:
          'Cutting compute or token costs by 10x rarely slashes an organization’s total bill by 90%—instead, teams embed compute into dozens of workflows that were previously too expensive.',
        breakdown:
          'Elastic demand expands to absorb efficiency gains.',
      },
      {
        context: 'Urban Highways',
        scenario:
          'Widening a congested freeway lowers commute time briefly, encouraging more drivers and distant suburbs until traffic congestion returns to its previous peak (induced demand).',
        breakdown:
          'Cheaper access generates new usage that fills the added capacity.',
      },
    ],
    antidote:
      'When forecasting capacity or environmental impact after an efficiency breakthrough, model elastic demand growth—not static usage.',
    sources: [
      {
        site: 'Wikipedia Economics & Systems Database',
        title: 'Jevons paradox',
        url: 'https://en.wikipedia.org/wiki/Jevons_paradox',
      },
    ],
    relations: [
      {
        targetId: 'second-order-thinking',
        type: 'counterpart_to',
        note: 'First-order intuition expects lower total usage; second-order thinking anticipates induced demand.',
      },
      {
        targetId: 'cobra-effect',
        type: 'related_to',
      },
      {
        targetId: 'parkinsons-law',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'diderot-effect',
    slug: 'diderot-effect',
    name: 'The Diderot Effect',
    aliases: ['Upgrade Spiral', 'Consumption Cascade'],
    kind: 'law',
    domains: ['everyday', 'decision-making', 'systems'],
    tier: 'deep-cut',
    oneLiner:
      'Acquiring one shiny new possession or upgrade creates dissatisfaction with everything around it, triggering a spiral of unplanned follow-on purchases or rewrites.',
    explanation:
      'French philosopher Denis Diderot was gifted a gorgeous scarlet dressing gown. Suddenly his old desk, rug, and chair looked shabby beside it—so he replaced them all until he ended up deep in debt, mourning that he was once master of his old robe and had become slave to his new one.',
    origin: 'Denis Diderot, “Regrets on Parting with My Old Dressing Gown” (1769); named by anthropologist Grant McCracken (1988).',
    examples: [
      {
        context: 'Software Refactoring',
        scenario:
          'Upgrading one UI component library makes the old build pipeline feel clunky, which prompts a bundler swap, which triggers a CSS rewrite—turning a 1-day task into a 3-week overhaul.',
        breakdown:
          'One shiny upgrade creates aesthetic pressure to rewrite adjacent working pieces.',
      },
      {
        context: 'Personal Spending',
        scenario:
          'Buying a new sofa makes the coffee table, rug, and curtains feel dated, tripling the original budget.',
        breakdown:
          'Desire for visual coherence cascades into unplanned spending.',
      },
    ],
    antidote:
      'Price the full ecosystem cost before buying or upgrading the first piece, and deliberately tolerate harmless “mismatches” in low-stakes areas.',
    sources: [
      {
        site: 'Wikipedia Behavioral & Consumer Database',
        title: 'Diderot effect',
        url: 'https://en.wikipedia.org/wiki/Diderot_effect',
      },
    ],
    relations: [
      {
        targetId: 'second-order-thinking',
        type: 'counterpart_to',
      },
      {
        targetId: 'opportunity-cost',
        type: 'counterpart_to',
      },
      {
        targetId: 'zawinskis-law',
        type: 'related_to',
      },
    ],
  },
];
