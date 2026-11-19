import type { Concept } from '../types/concept';

export const FALLACIES: Concept[] = [
  {
    id: 'straw-man',
    slug: 'straw-man',
    name: 'Straw Man',
    aliases: ['Strawman', 'Straw Person', 'Caricature Argument'],
    kind: 'fallacy',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Misrepresenting or exaggerating someone’s position so it becomes far easier to attack than what they actually said.',
    explanation:
      'Instead of engaging with an opponent’s real claim, you swap in a distorted, extreme, or flimsy version of it, knock that caricature down, and declare victory. It often happens unintentionally during heated debates when people react to what they fear the other person implies rather than what was literally argued.',
    logicalForm: 'Person A argues X → Person B restates X as weaker/extreme Y → Person B refutes Y → Therefore X is false.',
    origin: 'Classical rhetoric; popularized in modern logic textbooks in the 20th century (figurative “man of straw” from the 17th century).',
    examples: [
      {
        context: 'Workplace Policy',
        scenario:
          'Alex suggests shortening weekly status meetings from 60 minutes to 30 minutes. Jordan replies, “So you think communication doesn’t matter and we should just work in silos?”',
        breakdown:
          'Alex asked for tighter meetings, not zero communication. Jordan replaced a modest efficiency proposal with an extreme anti-collaboration stance that is trivial to criticize.',
      },
      {
        context: 'Public Policy',
        scenario:
          'A city planner proposes adding protected bike lanes on two downtown avenues. A critic responds, “The city wants to ban cars entirely and force seniors to cycle in the snow.”',
        breakdown:
          'Adding two bike lanes is reframed as a total ban on cars, shifting the debate away from the actual traffic trade-offs.',
      },
    ],
    antidote:
      'Ask the other person to restate your position until you agree it is fair, or calmly clarify: “That’s not what I’m arguing—here is the specific claim I’m making.” On your own side, practice Steel Manning.',
    validCounterpart:
      'Drawing out genuine, unavoidable logical consequences of a claim (reductio ad absurdum) is valid—provided those consequences truly follow from the opponent’s premises.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Strawman — Misrepresenting Someone’s Argument to Make It Easier to Attack',
        url: 'https://yourlogicalfallacyis.com/strawman',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Straw Man',
        url: 'https://iep.utm.edu/fallacy/#StrawMan',
      },
      {
        site: 'The Fallacy Files',
        title: 'Straw Man Fallacy Taxonomy & Examples',
        url: 'https://www.fallacyfiles.org/strawman.html',
      },
    ],
    relations: [
      {
        targetId: 'steel-manning',
        type: 'counterpart_to',
        note: 'Steel Manning is the deliberate discipline of constructing the strongest version of an argument.',
      },
      {
        targetId: 'motte-and-bailey',
        type: 'often_confused_with',
        note: 'In Motte-and-Bailey, the speaker retreats from their own bold claim; in Straw Man, the critic distorts it.',
      },
      {
        targetId: 'red-herring',
        type: 'related_to',
      },
      {
        targetId: 'confirmation-bias',
        type: 'psychological_root',
        note: 'We unconsciously read opponents in the least charitable light that confirms our priors.',
      },
    ],
  },
  {
    id: 'ad-hominem',
    slug: 'ad-hominem',
    name: 'Ad Hominem',
    aliases: ['Personal Attack', 'Argumentum ad Hominem', 'Poisoning the Well'],
    kind: 'fallacy',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Dismissing an argument by attacking the character, motives, or background of the person making it rather than the claim itself.',
    explanation:
      'A claim’s truth or logical soundness is independent of who speaks it. Even a hypocritical, abrasive, or self-interested speaker can state an accurate fact or valid deduction. Attacking the messenger derails evaluation of the evidence.',
    logicalForm: 'Person A claims X → Person A has negative trait T → Therefore X is false.',
    origin: 'Latin for “to the person”; discussed by Aristotle and formalized by John Locke in 1690.',
    examples: [
      {
        context: 'Engineering Review',
        scenario:
          '“Why should we listen to Sam’s warning about database scaling? He’s only been out of college for a year.”',
        breakdown:
          'Sam’s tenure does not tell us whether the query bottleneck exists. The technical evidence should be examined on its own merits.',
      },
      {
        context: 'Health Debate',
        scenario:
          '“You eat fast food every week, so your argument that high sugar intake harms public health is worthless.”',
        breakdown:
          'Personal inconsistency (a form of tu quoque ad hominem) does not refute nutritional data.',
      },
    ],
    antidote:
      'Separate the speaker from the proposition: “Even if I had a personal stake here, does the data itself hold up?” Redirect attention back to verifiable premises.',
    validCounterpart:
      'Questioning a witness’s credibility, financial conflict of interest, or track record is legitimate when evaluating unverified testimony or expert judgment—just not as proof that an independently verifiable argument is false.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Ad Hominem — Attacking Opponent’s Character or Personal Traits',
        url: 'https://yourlogicalfallacyis.com/ad-hominem',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Ad Hominem',
        url: 'https://iep.utm.edu/fallacy/#AdHominem',
      },
      {
        site: 'The Fallacy Files',
        title: 'Argumentum ad Hominem Entry',
        url: 'https://www.fallacyfiles.org/adhomine.html',
      },
    ],
    relations: [
      {
        targetId: 'tu-quoque',
        type: 'related_to',
        note: 'Tu Quoque is a specific subtype targeting perceived hypocrisy.',
      },
      {
        targetId: 'genetic-fallacy',
        type: 'often_confused_with',
        note: 'Ad Hominem targets a person; Genetic Fallacy dismisses an idea based on its historical or institutional origin.',
      },
      {
        targetId: 'halo-effect',
        type: 'psychological_root',
        note: 'Negative impressions of a person bleed into how we judge their ideas (the horn effect).',
      },
      {
        targetId: 'fundamental-attribution-error',
        type: 'psychological_root',
      },
      {
        targetId: 'appeal-to-authority',
        type: 'counterpart_to',
        note: 'The mirror error: accepting a claim purely because of who said it.',
      },
    ],
  },
  {
    id: 'appeal-to-authority',
    slug: 'appeal-to-authority',
    name: 'Appeal to Authority',
    aliases: ['Argumentum ad Verecundiam', 'False Authority', 'Appeal to Credentials'],
    kind: 'fallacy',
    domains: ['debate', 'decision-making', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Treating a claim as true simply because an impressive figure or credentialed authority said it—especially outside their domain or where experts disagree.',
    explanation:
      'Using an authority’s endorsement as a substitute for evidence fails when the authority lacks expertise in the specific field, holds a bias, or represents a minority view presented as consensus. Prestige is not proof.',
    logicalForm: 'Authority figure A asserts X → Therefore X must be true.',
    origin: 'Coined as argumentum ad verecundiam (“appeal to modesty/reverence”) by John Locke in An Essay Concerning Human Understanding (1690).',
    examples: [
      {
        context: 'Tech & Investing',
        scenario:
          '“A Nobel Prize-winning physicist said this new cryptocurrency will replace central banks, so it’s clearly a safe investment.”',
        breakdown:
          'Eminence in physics does not grant forecasting mastery in macroeconomics or financial regulation.',
      },
      {
        context: 'Corporate Strategy',
        scenario:
          '“Our CEO built two successful companies and says customers want this redesign—there’s no need to run user testing.”',
        breakdown:
          'Past executive success is valuable intuition, not infallible evidence that supersedes direct customer data.',
      },
    ],
    antidote:
      'Ask three questions: Is this person an authority in this exact domain? What is the broader consensus among qualified peers? What underlying evidence supports their view?',
    validCounterpart:
      'Citing established scientific consensus or a domain expert’s evidence-backed analysis is rational heuristics—we cannot re-derive every field from scratch.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Appeal to Authority — Claiming Something Is True Because an Authority Said So',
        url: 'https://yourlogicalfallacyis.com/appeal-to-authority',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Appeal to Authority',
        url: 'https://iep.utm.edu/fallacy/#AppealtoAuthority',
      },
      {
        site: 'The Fallacy Files',
        title: 'Appeal to Misleading Authority (Argumentum ad Verecundiam)',
        url: 'https://www.fallacyfiles.org/authorit.html',
      },
    ],
    relations: [
      {
        targetId: 'authority-bias',
        type: 'psychological_root',
        note: 'Humans defer reflexively to status, titles, and confidence.',
      },
      {
        targetId: 'halo-effect',
        type: 'psychological_root',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
        note: 'First-principles reasoning tests claims from ground truths rather than prestige.',
      },
      {
        targetId: 'ad-hominem',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'false-dilemma',
    slug: 'false-dilemma',
    name: 'False Dilemma',
    aliases: ['False Dichotomy', 'Black-and-White Thinking', 'Either-Or Fallacy', 'Bifurcation'],
    kind: 'fallacy',
    domains: ['debate', 'decision-making', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Presenting a complex situation as having only two extreme options when viable middle grounds or third paths exist.',
    explanation:
      'By artificially narrowing the menu to “Option A or disaster B,” the speaker pressures listeners into accepting their preferred choice without examining trade-offs, phased approaches, or creative hybrids.',
    logicalForm: 'Either A or B (ignoring C, D, …) → Not B → Therefore A.',
    origin: 'Classical logic (bifurcation fallacy); widely studied in informal logic and decision theory.',
    examples: [
      {
        context: 'Product Management',
        scenario:
          '“Either we ship the feature Friday with zero automated tests, or we delay the launch by six months.”',
        breakdown:
          'Ignores middle paths like shipping a scoped beta to 5% of users, writing smoke tests for critical paths, or delaying by one week.',
      },
      {
        context: 'Personal Finance',
        scenario:
          '“Either you grind 70 hours a week in your twenties, or you accept being broke forever.”',
        breakdown:
          'Collapses a wide spectrum of career, skill-building, and savings strategies into two dramatic extremes.',
      },
    ],
    antidote:
      'Always ask: “What is Option C? What happens if we combine parts of both, or test a smaller version first?”',
    validCounterpart:
      'Genuine binary constraints do exist (e.g., a mathematically exhaustive law of excluded middle, or a strict legal/system binary where a server either accepts or rejects a packet).',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Black-or-White — Where Two Alternative States Are Presented as the Only Possibilities',
        url: 'https://yourlogicalfallacyis.com/black-or-white',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — False Dilemma',
        url: 'https://iep.utm.edu/fallacy/#FalseDilemma',
      },
      {
        site: 'The Fallacy Files',
        title: 'Black-or-White Fallacy (False Dichotomy)',
        url: 'https://www.fallacyfiles.org/eitheror.html',
      },
    ],
    relations: [
      {
        targetId: 'framing-effect',
        type: 'psychological_root',
        note: 'How choices are framed strongly restricts which options our minds even consider.',
      },
      {
        targetId: 'nirvana-fallacy',
        type: 'related_to',
        note: 'Both flatten a spectrum of workable options into an unrealistic all-or-nothing choice.',
      },
      {
        targetId: 'middle-ground-fallacy',
        type: 'counterpart_to',
        note: 'The mirror error: assuming the midpoint between two extremes must automatically be right.',
      },
      {
        targetId: 'slippery-slope',
        type: 'related_to',
      },
      {
        targetId: 'second-order-thinking',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'slippery-slope',
    slug: 'slippery-slope',
    name: 'Slippery Slope',
    aliases: ['Domino Fallacy', 'Thin Edge of the Wedge', 'Camel’s Nose'],
    kind: 'fallacy',
    domains: ['debate', 'decision-making', 'systems'],
    tier: 'essential',
    oneLiner:
      'Claiming a relatively small initial step will inevitably trigger a chain of catastrophic consequences without justifying each link.',
    explanation:
      'The fallacy isn’t in worrying about downstream effects—it’s in treating a speculative chain of “if A, then B, then C, then disaster Z” as guaranteed when each step actually has low or unproven probability.',
    logicalForm: 'If A happens → then B → then C → … → catastrophic Z. Therefore we must never allow A.',
    origin: 'Informal logic; documented in rhetorical debates since the 19th century.',
    examples: [
      {
        context: 'Remote Work Policy',
        scenario:
          '“If we let employees work from home on Fridays, next they’ll stop answering Slack, then deadlines will collapse, and within a year the company will go bankrupt.”',
        breakdown:
          'Skips over dozens of intermediate checkpoints (clear expectations, output tracking, policy adjustments) that prevent step 1 from cascading into bankruptcy.',
      },
      {
        context: 'Software Architecture',
        scenario:
          '“If we allow one small utility library into this repo, soon we’ll have 400 dependencies and nobody will understand our build.”',
        breakdown:
          'A single vetted dependency does not automatically abolish code review or dependency governance.',
      },
    ],
    antidote:
      'Inspect every link individually: “What is the concrete mechanism taking us from step 1 to step 2? Where can we place guardrails or circuit breakers?”',
    validCounterpart:
      'Empirically grounded precedent or incentive-cascade arguments (such as Chesterton’s Fence or Goodhart’s Law) are valid when the causal mechanism between steps is demonstrated.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Slippery Slope — Asserting That If We Allow A to Happen, Then Z Will Eventually Happen Too',
        url: 'https://yourlogicalfallacyis.com/slippery-slope',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Slippery Slope',
        url: 'https://iep.utm.edu/fallacy/#SlipperySlope',
      },
      {
        site: 'The Fallacy Files',
        title: 'Slippery Slope Entry',
        url: 'https://www.fallacyfiles.org/slipslop.html',
      },
    ],
    relations: [
      {
        targetId: 'second-order-thinking',
        type: 'often_confused_with',
        note: 'Second-order thinking evaluates plausible knock-on effects probabilistically rather than asserting inevitable doom.',
      },
      {
        targetId: 'chestertons-fence',
        type: 'related_to',
      },
      {
        targetId: 'availability-heuristic',
        type: 'psychological_root',
        note: 'Vivid worst-case imagery feels more probable than it really is.',
      },
    ],
  },
  {
    id: 'post-hoc',
    slug: 'post-hoc',
    name: 'Post Hoc Ergo Propter Hoc',
    aliases: ['Post Hoc', 'After This, Therefore Because of This', 'False Cause'],
    kind: 'fallacy',
    domains: ['statistics', 'everyday', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Assuming that because event B happened after event A, event A must have caused event B.',
    explanation:
      'Temporal sequence is necessary for causation, but nowhere near sufficient. Human brains are pattern-seeking engines that instinctively glue consecutive events into neat cause-and-effect stories, ignoring coincidence, regression to the mean, or hidden variables.',
    logicalForm: 'Event A occurred before Event B → Therefore A caused B.',
    origin: 'Classical Latin phrase; discussed by Aristotle in Rhetoric as a classic false-cause error.',
    examples: [
      {
        context: 'Everyday Health',
        scenario:
          '“I drank a bitter herbal tonic on day four of my cold, and by day six I felt great—the tonic cured me!”',
        breakdown:
          'Most viral colds naturally peak around day three or four and improve shortly afterward regardless of remedies.',
      },
      {
        context: 'Marketing Analytics',
        scenario:
          '“We changed the homepage button from blue to green in November and December sales jumped 30%—green converts better!”',
        breakdown:
          'Holiday seasonality is a massive confounding factor that happened right after the design tweak.',
      },
    ],
    antidote:
      'Ask for a counterfactual or control group: “What would have happened if A had never occurred? Could seasonality, coincidence, or regression to the mean explain B?”',
    sources: [
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Post Hoc',
        url: 'https://iep.utm.edu/fallacy/#PostHoc',
      },
      {
        site: 'The Fallacy Files',
        title: 'Post Hoc Ergo Propter Hoc',
        url: 'https://www.fallacyfiles.org/posthocf.html',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Post hoc ergo propter hoc',
        url: 'https://en.wikipedia.org/wiki/Post_hoc_ergo_propter_hoc',
      },
    ],
    relations: [
      {
        targetId: 'correlation-not-causation',
        type: 'often_confused_with',
        note: 'Post Hoc specifically relies on time order (A then B), whereas Correlation ≠ Causation covers any co-occurrence.',
      },
      {
        targetId: 'regression-to-the-mean',
        type: 'counterpart_to',
        note: 'Extreme highs and lows naturally revert toward average without any intervening remedy causing it.',
      },
      {
        targetId: 'texas-sharpshooter',
        type: 'related_to',
      },
      {
        targetId: 'confirmation-bias',
        type: 'psychological_root',
      },
      {
        targetId: 'hindsight-bias',
        type: 'psychological_root',
      },
    ],
  },
  {
    id: 'correlation-not-causation',
    slug: 'correlation-not-causation',
    name: 'Correlation Does Not Imply Causation',
    aliases: ['Cum Hoc Ergo Propter Hoc', 'Spurious Correlation', 'Confounding Variable Fallacy'],
    kind: 'fallacy',
    domains: ['statistics', 'decision-making', 'systems'],
    tier: 'essential',
    oneLiner:
      'Concluding that variable A causes variable B merely because the two move together in data.',
    explanation:
      'Two metrics can correlate tightly for at least four reasons: A causes B, B causes A (reverse causation), a hidden third factor C causes both (confounding), or pure statistical chance across large datasets.',
    logicalForm: 'A and B are correlated → Therefore A causes B.',
    origin: 'Latin cum hoc ergo propter hoc (“with this, therefore because of this”); popularized in modern statistics by Karl Pearson and Ronald Fisher.',
    examples: [
      {
        context: 'Classic Statistics',
        scenario:
          'Cities with more ice cream sales also see higher drowning rates, so someone proposes restricting ice cream parlors near beaches.',
        breakdown:
          'Summer heat is the confounding variable driving both ice cream purchases and swimming activity.',
      },
      {
        context: 'SaaS Product Metrics',
        scenario:
          '“Users who invite 5 teammates retain at 92%, so let’s force every new signup to enter 5 email addresses during onboarding.”',
        breakdown:
          'High intent and team adoption cause both teammate invites and high retention. Forcing reluctant users to spam coworkers won’t manufacture product value.',
      },
    ],
    antidote:
      'Sketch a causal diagram: test for confounders, check reverse causality, and where ethical/feasible, run a randomized controlled experiment.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'False Cause — Presuming a Real or Perceived Relationship Between Things Means That One Is the Cause of the Other',
        url: 'https://yourlogicalfallacyis.com/false-cause',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — False Cause (Cum Hoc)',
        url: 'https://iep.utm.edu/fallacy/#FalseCause',
      },
      {
        site: 'The Fallacy Files',
        title: 'Cum Hoc, Ergo Propter Hoc',
        url: 'https://www.fallacyfiles.org/cumhocfa.html',
      },
    ],
    relations: [
      {
        targetId: 'post-hoc',
        type: 'often_confused_with',
      },
      {
        targetId: 'simpsons-paradox',
        type: 'related_to',
        note: 'Hidden confounding variables can even invert an observed correlation across subgroups.',
      },
      {
        targetId: 'berksons-paradox',
        type: 'related_to',
      },
      {
        targetId: 'survivorship-bias',
        type: 'related_to',
      },
      {
        targetId: 'goodharts-law',
        type: 'related_to',
        note: 'Optimizing a correlated proxy metric breaks the correlation once targeted.',
      },
      {
        targetId: 'texas-sharpshooter',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'circular-reasoning',
    slug: 'circular-reasoning',
    name: 'Circular Reasoning',
    aliases: ['Begging the Question', 'Petitio Principii', 'Circular Logic'],
    kind: 'fallacy',
    domains: ['debate', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Using the conclusion you are trying to prove—often disguised in different words—as one of the premises.',
    explanation:
      'Circular reasoning feels persuasive because the premise and conclusion harmonize smoothly, yet the argument never brings in independent evidence from outside the loop. Note that “begging the question” originally means assuming the conclusion, not “raising the question.”',
    logicalForm: 'A is true because B is true; and B is true because A is true.',
    origin: 'Aristotle, Prior Analytics (Latin: petitio principii, “assuming the initial point”).',
    examples: [
      {
        context: 'Hiring & Reputation',
        scenario:
          '“We know this candidate is a top-tier leader because she only gets invited to exclusive executive roundtables—and those roundtables only invite top-tier leaders.”',
        breakdown:
          'Exclusivity and leadership quality are used to prove each other without citing concrete achievements.',
      },
      {
        context: 'Workplace Rules',
        scenario:
          '“You have to fill out Form 14B because company policy requires it, and it’s company policy because it’s mandatory.”',
        breakdown:
          'Restates the obligation in slightly different wording without offering any substantive justification.',
      },
    ],
    antidote:
      'Ask: “What independent evidence would convince someone who does not already accept your conclusion?”',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Begging the Question — A Circular Argument in Which the Conclusion Is Included in the Premise',
        url: 'https://yourlogicalfallacyis.com/begging-the-question',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Begging the Question (Circular Reasoning)',
        url: 'https://iep.utm.edu/fallacy/#BeggingtheQuestion',
      },
      {
        site: 'The Fallacy Files',
        title: 'Begging the Question (Petitio Principii)',
        url: 'https://www.fallacyfiles.org/begquest.html',
      },
    ],
    relations: [
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
        note: 'First principles breaks circular loops by grounding claims in independently verified facts.',
      },
      {
        targetId: 'poppers-falsifiability',
        type: 'counterpart_to',
      },
      {
        targetId: 'confirmation-bias',
        type: 'psychological_root',
      },
    ],
  },
  {
    id: 'tu-quoque',
    slug: 'tu-quoque',
    name: 'Tu Quoque',
    aliases: ['Whataboutism', 'Appeal to Hypocrisy', 'You Too'],
    kind: 'fallacy',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Deflecting criticism by accusing the critic of doing the same thing—or something worse—instead of addressing the issue.',
    explanation:
      'Pointing out a critic’s inconsistency may expose hypocrisy, but it does nothing to make the original action right or the original argument false. Two wrongs do not cancel each other out.',
    logicalForm: 'Person A criticizes action X → Person B replies “You also do X (or Y)!” → Therefore X is acceptable.',
    origin: 'Latin for “you too”; modern “whataboutism” gained currency during Cold War diplomacy in the 1970s.',
    examples: [
      {
        context: 'Team Retrospectives',
        scenario:
          'When QA flags that the checkout service shipped without error logging, the backend lead responds, “Well, the mobile team skipped code review twice last month!”',
        breakdown:
          'Another team’s lapse does not fix the missing error logs in checkout.',
      },
      {
        context: 'Everyday Advice',
        scenario:
          'A doctor who smokes advises a patient to quit smoking. The patient dismisses the advice: “Why should I quit when you smoke half a pack a day?”',
        breakdown:
          'The doctor’s habit makes them inconsistent, not medically wrong about smoking risks.',
      },
    ],
    antidote:
      'Acknowledge the separate issue if real, then return to the original topic: “That’s worth addressing separately—right now, let’s resolve whether this specific claim holds.”',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Tu Quoque — Avoiding Having to Engage With Criticism by Turning It Back on the Accuser',
        url: 'https://yourlogicalfallacyis.com/tu-quoque',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Tu Quoque',
        url: 'https://iep.utm.edu/fallacy/#TuQuoque',
      },
      {
        site: 'The Fallacy Files',
        title: 'Tu Quoque ("You Too") Entry',
        url: 'https://www.fallacyfiles.org/tuquoque.html',
      },
    ],
    relations: [
      {
        targetId: 'ad-hominem',
        type: 'related_to',
      },
      {
        targetId: 'red-herring',
        type: 'related_to',
        note: 'Whataboutism functions as a distraction maneuver.',
      },
      {
        targetId: 'steel-manning',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'bandwagon',
    slug: 'bandwagon',
    name: 'Bandwagon Fallacy',
    aliases: ['Appeal to Popularity', 'Argumentum ad Populum', 'Herd Mentality'],
    kind: 'fallacy',
    domains: ['debate', 'decision-making', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Assuming an idea, product, or belief must be right or superior simply because many people endorse or adopt it.',
    explanation:
      'Popularity measures adoption, marketing reach, or social contagion—not truth or fit for your context. History is full of widely shared beliefs and industry fads that turned out to be wrong.',
    logicalForm: 'Most people believe or do X → Therefore X is true or best.',
    origin: 'From 19th-century political parade wagons (“jumping on the bandwagon”); Latin: argumentum ad populum.',
    examples: [
      {
        context: 'Software Engineering',
        scenario:
          '“Every big tech company is rewriting their backend into 50 microservices, so our 6-person startup needs to split our monolith immediately.”',
        breakdown:
          'An architecture designed for thousand-engineer organizations can cripple a tiny team; popularity does not equal suitability.',
      },
      {
        context: 'Consumer Trends',
        scenario:
          '“Two million people bought this detox supplement, so it obviously works.”',
        breakdown:
          'High sales reflect persuasive marketing and social proof rather than clinical efficacy.',
      },
    ],
    antidote:
      'Ask why something is popular and whether those conditions match your situation. Evaluate independent evidence rather than headcount.',
    validCounterpart:
      'Wisdom of crowds and Lindy’s Law can provide useful priors for coordination standards, markets, or time-tested tools—just not infallible proof.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Bandwagon — Appealing to Popularity or the Fact That Many People Do Something as Validation',
        url: 'https://yourlogicalfallacyis.com/bandwagon',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Appeal to Popularity (Ad Populum)',
        url: 'https://iep.utm.edu/fallacy/#AppealtoPopularity',
      },
      {
        site: 'The Fallacy Files',
        title: 'Bandwagon Fallacy / Appeal to Popularity',
        url: 'https://www.fallacyfiles.org/bandwagn.html',
      },
    ],
    relations: [
      {
        targetId: 'groupthink',
        type: 'psychological_root',
      },
      {
        targetId: 'appeal-to-tradition',
        type: 'related_to',
        note: 'Bandwagon appeals to how many people do it now; Appeal to Tradition appeals to how long it has been done.',
      },
      {
        targetId: 'lindys-law',
        type: 'often_confused_with',
        note: 'Lindy’s Law values survival over time, not sudden spikes in popularity.',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'red-herring',
    slug: 'red-herring',
    name: 'Red Herring',
    aliases: ['Smokescreen', 'Diversion', 'Ignoratio Elenchi'],
    kind: 'fallacy',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'essential',
    oneLiner:
      'Introducing an emotionally compelling or superficially relevant side topic to divert attention from the original issue.',
    explanation:
      'Rather than refuting the question on the table, the speaker steers the conversation down a side alley where they feel stronger or where the audience gets distracted.',
    logicalForm: 'Topic A is under discussion → Speaker introduces unrelated Topic B → Topic A is quietly abandoned.',
    origin: 'Popularized by journalist William Cobbett in 1807 via an anecdote about dragging a strong-smelling cured herring across a trail to throw hunting hounds off the scent.',
    examples: [
      {
        context: 'Corporate Accountability',
        scenario:
          'Asked why customer support wait times doubled this quarter, a VP replies, “Let’s not forget that our team just won an industry design award and launched in three new countries!”',
        breakdown:
          'Design awards and expansion are positive news, but they completely dodge the question about customer support wait times.',
      },
      {
        context: 'Budget Review',
        scenario:
          'When questioned on an overdue software vendor contract costing $200k extra, a manager pivots: “Before we nitpick software, why aren’t we talking about how much the office spends on snacks?”',
        breakdown:
          'The snack budget is a minor distraction pulled in to shift scrutiny away from a much larger overrun.',
      },
    ],
    antidote:
      'Politely park the tangent and restate the original question: “That’s an interesting point we can revisit—first, let’s finish answering the question about wait times.”',
    sources: [
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Red Herring',
        url: 'https://iep.utm.edu/fallacy/#RedHerring',
      },
      {
        site: 'The Fallacy Files',
        title: 'Red Herring Fallacy Entry',
        url: 'https://www.fallacyfiles.org/redherri.html',
      },
      {
        site: 'Logically Fallacious',
        title: 'Red Herring — Attempting to Redirect the Argument to Another Issue',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Red-Herring',
      },
    ],
    relations: [
      {
        targetId: 'tu-quoque',
        type: 'related_to',
      },
      {
        targetId: 'straw-man',
        type: 'related_to',
      },
      {
        targetId: 'law-of-triviality',
        type: 'related_to',
        note: 'Teams readily chase trivial red herrings because they are easier to opine on than core problems.',
      },
    ],
  },
  {
    id: 'no-true-scotsman',
    slug: 'no-true-scotsman',
    name: 'No True Scotsman',
    aliases: ['Appeal to Purity', 'Ad Hoc Rescue'],
    kind: 'fallacy',
    domains: ['debate', 'everyday'],
    tier: 'intermediate',
    oneLiner:
      'Protecting a sweeping generalization from counterexamples by retroactively redefining the group to exclude anyone who breaks the rule.',
    explanation:
      'When presented with evidence that contradicts “All X are Y,” the speaker silently narrows the definition of X to “No *true* X would ever fail to be Y,” turning an empirical claim into an unfalsifiable tautology.',
    logicalForm: 'Claim: All A are B → Counterexample: This A is not B → Retort: Then it’s not a TRUE A.',
    origin: 'Coined by philosopher Antony Flew in Thinking About Thinking (1975).',
    examples: [
      {
        context: 'Software Methodology',
        scenario:
          '“Agile teams never miss deadlines.” “Our team used Scrum for a year and still missed three launches.” “Well, then you weren’t doing *true* Agile.”',
        breakdown:
          'Instead of examining why Scrum struggled in that context, the defender immunizes the methodology against all negative evidence.',
      },
      {
        context: 'Music Fandom',
        scenario:
          '“No real jazz fan listens to pop music.” “Miles Davis covered Cyndi Lauper’s ‘Time After Time.’” “Okay, well, no *purist* jazz fan would.”',
        breakdown:
          'The definition shifts on the fly purely to preserve a shaky claim.',
      },
    ],
    antidote:
      'Pin down objective, observable criteria upfront before evaluating counterexamples: “What specific, measurable standard defines a member of this group?”',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'No True Scotsman — Making What Could Be Called an Appeal to Purity to Dismiss Criticisms',
        url: 'https://yourlogicalfallacyis.com/no-true-scotsman',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — No True Scotsman',
        url: 'https://iep.utm.edu/fallacy/#NoTrueScotsman',
      },
      {
        site: 'The Fallacy Files',
        title: 'No True Scotsman Entry',
        url: 'https://www.fallacyfiles.org/scotsman.html',
      },
    ],
    relations: [
      {
        targetId: 'moving-the-goalposts',
        type: 'often_confused_with',
        note: 'No True Scotsman redefines a category; Moving the Goalposts raises the evidentiary standard.',
      },
      {
        targetId: 'poppers-falsifiability',
        type: 'counterpart_to',
        note: 'Falsifiability demands stating upfront what evidence would prove a claim wrong.',
      },
      {
        targetId: 'confirmation-bias',
        type: 'psychological_root',
      },
    ],
  },
  {
    id: 'moving-the-goalposts',
    slug: 'moving-the-goalposts',
    name: 'Moving the Goalposts',
    aliases: ['Raising the Bar', 'Shifting Standards'],
    kind: 'fallacy',
    domains: ['debate', 'organizations', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Demanding higher or different proof every time your previous standard of evidence is satisfied.',
    explanation:
      'In fair inquiry, both sides agree on what evidence would settle a question. Moving the goalposts turns a debate or performance review into an unwinnable chase by continually inventing new requirements after earlier ones are met.',
    logicalForm: 'Demand evidence E1 → E1 is provided → Dismiss E1 and demand E2 → Repeat.',
    origin: 'Metaphor from field sports (football/soccer), adopted into informal logic in the late 20th century.',
    examples: [
      {
        context: 'Performance & Promotions',
        scenario:
          'A manager tells an engineer, “Lead one cross-team launch and you’ll earn Senior.” After she delivers two, the manager says, “Actually, we also need you to publish an external blog post and mentor three interns.”',
        breakdown:
          'The criteria shifted after the original benchmark was met, making fairness impossible to verify.',
      },
      {
        context: 'Product Skepticism',
        scenario:
          '“Show me one customer willing to pay for this.” When five pay: “Okay, show me a Fortune 500 enterprise contract.”',
        breakdown:
          'Healthy skepticism updates on new evidence; moving goalposts simply refuses to update.',
      },
    ],
    antidote:
      'Pre-register success criteria in writing: “Before we gather more data, what exact evidence would change your mind or earn a yes?”',
    sources: [
      {
        site: 'Logically Fallacious',
        title: 'Moving the Goalposts — Demanding Greater Evidence After Original Request Is Met',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Moving-the-Goalposts',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Moving the goalposts (Informal Fallacy)',
        url: 'https://en.wikipedia.org/wiki/Moving_the_goalposts',
      },
    ],
    relations: [
      {
        targetId: 'no-true-scotsman',
        type: 'often_confused_with',
      },
      {
        targetId: 'bayesian-updating',
        type: 'counterpart_to',
        note: 'Bayesian thinkers proportionally shift confidence as each piece of evidence arrives.',
      },
      {
        targetId: 'poppers-falsifiability',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'hasty-generalization',
    slug: 'hasty-generalization',
    name: 'Hasty Generalization',
    aliases: ['Jumping to Conclusions', 'Small Sample Fallacy', 'Secundum Quid'],
    kind: 'fallacy',
    domains: ['statistics', 'everyday', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Drawing a broad, sweeping rule about an entire group from a tiny, biased, or unrepresentative sample.',
    explanation:
      'Our intuition treats small samples as miniature mirrors of the whole population (Tversky & Kahneman called this the “Law of Small Numbers”). In reality, tiny samples have enormous variance and frequently produce misleading extremes.',
    logicalForm: 'Observed cases X1 and X2 have trait T → Therefore all (or most) X have trait T.',
    origin: 'Classical inductive logic; empirical bias documented by Amos Tversky and Daniel Kahneman (1971).',
    examples: [
      {
        context: 'User Research',
        scenario:
          '“We interviewed two enterprise buyers and both asked for a PDF export button, so all enterprise customers prioritize PDF reporting.”',
        breakdown:
          'Two interviews can surface a hypothesis, not establish a universal market requirement.',
      },
      {
        context: 'Travel & Everyday Life',
        scenario:
          '“It rained both days I visited Seattle, so the sun must never come out there.”',
        breakdown:
          'Two days of weather cannot summarize an annual climate pattern.',
      },
    ],
    antidote:
      'Check sample size, selection method, and variance: “How many cases did we look at, and how were they chosen?” Treat small samples as hypotheses to test, not verdicts.',
    sources: [
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Hasty Generalization',
        url: 'https://iep.utm.edu/fallacy/#HastyGeneralization',
      },
      {
        site: 'The Fallacy Files',
        title: 'Hasty Generalization Entry',
        url: 'https://www.fallacyfiles.org/hastygen.html',
      },
      {
        site: 'Logically Fallacious',
        title: 'Hasty Generalization — Drawing a Conclusion Based on a Small Sample Size',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Hasty-Generalization',
      },
    ],
    relations: [
      {
        targetId: 'anecdotal-fallacy',
        type: 'often_confused_with',
        note: 'Anecdotal fallacy uses a personal story to override statistics; hasty generalization over-extrapolates from few observations.',
      },
      {
        targetId: 'availability-heuristic',
        type: 'psychological_root',
      },
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'anecdotal-fallacy',
    slug: 'anecdotal-fallacy',
    name: 'Anecdotal Fallacy',
    aliases: ['Personal Experience Fallacy', 'My Grandfather Smoked'],
    kind: 'fallacy',
    domains: ['statistics', 'everyday', 'debate'],
    tier: 'essential',
    oneLiner:
      'Using a vivid personal story or isolated case to dismiss broad, well-established statistical evidence.',
    explanation:
      'Stories stick in memory far better than spreadsheets. While an anecdote can disprove an absolute “never” claim or highlight an edge case worth investigating, it cannot overturn population-level probabilities.',
    logicalForm: 'Statistical trend shows X → “Well, my uncle experienced not-X” → Therefore X is false.',
    origin: 'Informal logic; closely linked to Kahneman & Tversky’s research on narrative vividness.',
    examples: [
      {
        context: 'Safety Data',
        scenario:
          '“Seatbelts aren’t safer—my cousin survived a crash because he wasn’t wearing one and was thrown clear.”',
        breakdown:
          'Rare exceptions exist inside every statistical distribution; overall crash data overwhelmingly shows seatbelts save lives.',
      },
      {
        context: 'Product Decisions',
        scenario:
          '“Our A/B test across 40,000 visitors says the shorter checkout increased conversion by 9%, but my spouse found the old page clearer, so let’s keep the old one.”',
        breakdown:
          'A sample of one overrides a controlled experiment of 40,000 users.',
      },
    ],
    antidote:
      'Validate the human story while keeping scale in view: “That really happened—and how typical is it across 1,000 similar cases?”',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Anecdotal — Using Personal Experience or an Isolated Example Instead of a Sound Argument',
        url: 'https://yourlogicalfallacyis.com/anecdotal',
      },
      {
        site: 'The Fallacy Files',
        title: 'Anecdotal Evidence Fallacy',
        url: 'https://www.fallacyfiles.org/anecdote.html',
      },
    ],
    relations: [
      {
        targetId: 'hasty-generalization',
        type: 'often_confused_with',
      },
      {
        targetId: 'availability-heuristic',
        type: 'psychological_root',
        note: 'Vivid stories are effortlessly recalled and disproportionately weighted.',
      },
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'survivorship-bias',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'appeal-to-ignorance',
    slug: 'appeal-to-ignorance',
    name: 'Appeal to Ignorance',
    aliases: ['Argumentum ad Ignorantiam', 'Absence of Evidence'],
    kind: 'fallacy',
    domains: ['debate', 'statistics', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'Arguing that a proposition must be true because nobody has disproven it—or must be false because nobody has proven it yet.',
    explanation:
      'Lack of proof in one direction does not magically create proof in the other. Often the honest conclusion is simply “we don’t know yet.”',
    logicalForm: 'There is no proof that X is false → Therefore X is true (or vice versa).',
    origin: 'Named argumentum ad ignorantiam by John Locke (1690).',
    examples: [
      {
        context: 'Security Auditing',
        scenario:
          '“No security researcher has reported a vulnerability in our custom encryption algorithm, so it must be unbreakable.”',
        breakdown:
          'Absence of reported bugs may simply mean nobody has audited the algorithm yet.',
      },
      {
        context: 'Product Strategy',
        scenario:
          '“Nobody has proven that our new AI assistant won’t double retention, so we should bet the entire roadmap on it.”',
        breakdown:
          'The inability to disprove a speculative upside is not positive evidence that the upside will materialize.',
      },
    ],
    antidote:
      'Distinguish “we haven’t looked closely” from “we looked carefully with sensitive tools and found nothing.” Keep “undetermined” as a valid verdict.',
    validCounterpart:
      'Absence of evidence *does* become Bayesian evidence of absence when you would strongly expect to observe a signal if the claim were true (e.g., searching a small locked room thoroughly for an elephant).',
    sources: [
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Appeal to Ignorance (Ad Ignorantiam)',
        url: 'https://iep.utm.edu/fallacy/#AppealtoIgnorance',
      },
      {
        site: 'The Fallacy Files',
        title: 'Appeal to Ignorance Entry',
        url: 'https://www.fallacyfiles.org/ignorant.html',
      },
      {
        site: 'Logically Fallacious',
        title: 'Argument from Ignorance',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Argument-from-Ignorance',
      },
    ],
    relations: [
      {
        targetId: 'burden-of-proof',
        type: 'related_to',
      },
      {
        targetId: 'hitchens-razor',
        type: 'counterpart_to',
      },
      {
        targetId: 'sagan-standard',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'burden-of-proof',
    slug: 'burden-of-proof',
    name: 'Shifting the Burden of Proof',
    aliases: ['Onus Probandi', 'Prove Me Wrong'],
    kind: 'fallacy',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'Making an unsubstantiated claim and demanding that skeptics disprove it instead of providing evidence yourself.',
    explanation:
      'In rational discourse, law, and science, the person making a positive or extraordinary claim bears the responsibility to substantiate it. Demanding that others prove a negative flips inquiry upside down.',
    logicalForm: 'Speaker asserts X without evidence → “Until you prove X is false, X stands.”',
    origin: 'Roman jurisprudence: Semper necessitas probandi incumbit ei qui agit (“the necessity of proof always lies with the person who lays charges”).',
    examples: [
      {
        context: 'Software Performance',
        scenario:
          '“I’m convinced that rewriting this service in Rust will cut our cloud bill by 80%. Prove to me it won’t!”',
        breakdown:
          'The proposer of a costly rewrite should produce benchmarks and profiling data—not ask colleagues to prove a hypothetical negative.',
      },
      {
        context: 'Public Debate',
        scenario:
          '“This secret proprietary algorithm beats the stock market every year—if you doubt me, prove it doesn’t.”',
        breakdown:
          'Without audited returns, skeptics have nothing to refute; the claimant owes the evidence.',
      },
    ],
    antidote:
      'Invoke Hitchens’s Razor gently: “You’re making the positive claim—what evidence or benchmark led you to that conclusion?”',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Burden of Proof — Saying That the Burden of Proof Lies Not With the Person Making the Claim, but With Someone Else to Disprove',
        url: 'https://yourlogicalfallacyis.com/burden-of-proof',
      },
      {
        site: 'Logically Fallacious',
        title: 'Shifting of the Burden of Proof',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Shifting-of-the-Burden-of-Proof',
      },
    ],
    relations: [
      {
        targetId: 'hitchens-razor',
        type: 'counterpart_to',
        note: 'Hitchens’s Razor directly enforces the burden of proof.',
      },
      {
        targetId: 'sagan-standard',
        type: 'counterpart_to',
      },
      {
        targetId: 'appeal-to-ignorance',
        type: 'related_to',
      },
      {
        targetId: 'brandolinis-law',
        type: 'related_to',
        note: 'Shifting the burden of proof exploits the asymmetry that making claims is cheap while refuting them is expensive.',
      },
    ],
  },
  {
    id: 'motte-and-bailey',
    slug: 'motte-and-bailey',
    name: 'Motte-and-Bailey Fallacy',
    aliases: ['Strategic Retreat', 'Equivocation Retreat'],
    kind: 'fallacy',
    domains: ['debate', 'organizations'],
    tier: 'deep-cut',
    oneLiner:
      'Advancing a bold, controversial claim (the bailey), then retreating to a bland, unassailable truism (the motte) when challenged—only to resume the bold claim once scrutiny passes.',
    explanation:
      'Named after medieval castles with a fertile courtyard (bailey) and a fortified stone tower (motte), this rhetorical maneuver conflates two distinct positions. Critics end up looking unreasonable for attacking the harmless motte, while the controversial bailey escapes scrutiny.',
    logicalForm: 'Assert bold claim B → Critic challenges B → Retreat: “All I meant was obvious truth M!” → Once critic concedes M, treat B as vindicated.',
    origin: 'Coined by philosopher Nicholas Shackel in 2005; popularized in online rationalist essays by Scott Alexander in 2014.',
    examples: [
      {
        context: 'Tech Hype',
        scenario:
          'A founder tweets, “Traditional university degrees are completely obsolete.” When educators push back with outcome data, he replies, “All I’m saying is that lifelong learning matters!” The next week, his pitch deck again declares degrees obsolete.',
        breakdown:
          '“Lifelong learning matters” is the defensible motte; “degrees are obsolete” is the lucrative, controversial bailey.',
      },
      {
        context: 'Management Culture',
        scenario:
          'A leader preaches “radical candor means tearing apart weak ideas in public.” When HR raises psychological safety concerns, they retreat: “I only mean we should give honest feedback!”',
        breakdown:
          'Equating public humiliation with honest feedback shields a harsh practice behind an uncontroversial virtue.',
      },
    ],
    antidote:
      'Name both positions cleanly: “I completely agree with the modest version (M). Are we agreeing to drop the stronger claim (B), or should we evaluate B directly?”',
    sources: [
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Motte-and-bailey fallacy',
        url: 'https://en.wikipedia.org/wiki/Motte-and-bailey_fallacy',
      },
      {
        site: 'LessWrong Rationality Wiki',
        title: 'Motte and Bailey Doctrine Entry',
        url: 'https://www.lesswrong.com/tag/motte-and-bailey',
      },
    ],
    relations: [
      {
        targetId: 'straw-man',
        type: 'often_confused_with',
      },
      {
        targetId: 'equivocation',
        type: 'related_to',
        note: 'Motte-and-Bailey often relies on sliding between two meanings of the same loaded term.',
      },
      {
        targetId: 'moving-the-goalposts',
        type: 'related_to',
      },
      {
        targetId: 'steel-manning',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'affirming-the-consequent',
    slug: 'affirming-the-consequent',
    name: 'Affirming the Consequent',
    aliases: ['Converse Error', 'Fallacy of the Converse'],
    kind: 'fallacy',
    domains: ['debate', 'statistics', 'systems'],
    tier: 'intermediate',
    oneLiner:
      'Assuming that because “If A, then B” is true and B happened, A must therefore be true—ignoring other causes of B.',
    explanation:
      'This is a formal deductive fallacy. Even when A guarantees B, B can often happen for completely independent reasons (C, D, or E). Treating a consistent symptom as conclusive proof of a single cause leads to misdiagnosis.',
    logicalForm: 'If A → B. B is observed. Therefore A (Invalid).',
    origin: 'Formal propositional logic; analyzed by Aristotle in Sophistical Refutations.',
    examples: [
      {
        context: 'Debugging Software',
        scenario:
          '“If the database is down, the checkout page throws a 500 error. The checkout page is throwing a 500 error, so the database must be down.”',
        breakdown:
          'A bad deploy, an expired API key, or a full disk can also trigger a 500 error. You need direct checks to isolate the cause.',
      },
      {
        context: 'Medical / Everyday Logic',
        scenario:
          '“If it rained last night, the sidewalk is wet. The sidewalk is wet, so it rained last night.”',
        breakdown:
          'Sprinklers or a street sweeper could equally explain the wet sidewalk.',
      },
    ],
    antidote:
      'List rival hypotheses that produce the same observable symptom B, then look for a test that discriminates between them.',
    validCounterpart:
      'In Bayesian reasoning, observing B *does* modestly raise the probability of A—it just doesn’t prove A with certainty unless A is the only possible cause.',
    sources: [
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Affirming the Consequent',
        url: 'https://iep.utm.edu/fallacy/#AffirmingtheConsequent',
      },
      {
        site: 'The Fallacy Files',
        title: 'Affirming the Consequent Formal Fallacy',
        url: 'https://www.fallacyfiles.org/afthecon.html',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Affirming the consequent',
        url: 'https://en.wikipedia.org/wiki/Affirming_the_consequent',
      },
    ],
    relations: [
      {
        targetId: 'bayesian-updating',
        type: 'counterpart_to',
        note: 'Bayesian inference quantifies how much observing B actually updates P(A) given alternative causes.',
      },
      {
        targetId: 'occams-razor',
        type: 'related_to',
      },
      {
        targetId: 'confirmation-bias',
        type: 'psychological_root',
      },
    ],
  },
  {
    id: 'sunk-cost-fallacy',
    slug: 'sunk-cost-fallacy',
    name: 'Sunk Cost Fallacy',
    aliases: ['Concorde Fallacy', 'Escalation of Commitment', 'Throwing Good Money After Bad'],
    kind: 'fallacy',
    domains: ['decision-making', 'organizations', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Continuing to invest time, money, or effort into a losing endeavor purely because of what you have already spent and cannot recover.',
    explanation:
      'Past resources are gone no matter what you choose today. Rational decisions depend only on future marginal costs versus future marginal benefits—yet humans hate locking in a visible loss, so we double down to “justify” past spending.',
    logicalForm: 'We already spent X on project P → Stopping means X was wasted → Therefore we must spend more on P.',
    origin: 'Microeconomics and behavioral decision theory; famously illustrated by Hal Arkes & Catherine Blumer (1985) and the Concorde supersonic jet program.',
    examples: [
      {
        context: 'Software Projects',
        scenario:
          '“We’ve already sunk 18 months and $2M into this internal CRM. Even though an off-the-shelf tool costs $50k/year and works today, we can’t scrap all that work.”',
        breakdown:
          'The $2M is unrecoverable either way. Continuing only adds ongoing engineering costs to avoid admitting an earlier mistake.',
      },
      {
        context: 'Everyday Life',
        scenario:
          'Staying through the second half of a miserable movie—or forcing yourself to finish a terrible book—simply because you already paid for it.',
        breakdown:
          'Spending two more unhappy hours does not refund the ticket price; it adds lost time on top of lost money.',
      },
    ],
    antidote:
      'Ask the clean-slate question: “If I hadn’t invested anything yet and were starting fresh today, would I choose to spend my next dollar or hour on this?”',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'The Sunk Cost Fallacy — Cognitive Bias & Fallacy Index',
        url: 'https://thedecisionlab.com/biases/the-sunk-cost-fallacy',
      },
      {
        site: 'Logically Fallacious',
        title: 'Sunk Cost Fallacy Entry',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Sunk-Cost-Fallacy',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Sunk cost (Fallacy effect)',
        url: 'https://en.wikipedia.org/wiki/Sunk_cost#Fallacy_effect',
      },
    ],
    relations: [
      {
        targetId: 'loss-aversion',
        type: 'psychological_root',
        note: 'Quitting turns a paper loss into a psychologically painful realized loss.',
      },
      {
        targetId: 'endowment-effect',
        type: 'psychological_root',
      },
      {
        targetId: 'ikea-effect',
        type: 'psychological_root',
        note: 'Having built something ourselves inflates how much we value keeping it alive.',
      },
      {
        targetId: 'status-quo-bias',
        type: 'psychological_root',
      },
      {
        targetId: 'opportunity-cost',
        type: 'counterpart_to',
        note: 'Focuses attention on what future value you give up by staying stuck.',
      },
      {
        targetId: 'pre-mortem',
        type: 'counterpart_to',
        note: 'Setting pre-committed kill criteria prevents escalation of commitment.',
      },
    ],
  },
  {
    id: 'base-rate-fallacy',
    slug: 'base-rate-fallacy',
    name: 'Base Rate Fallacy',
    aliases: ['Base Rate Neglect', 'Prosecutor’s Fallacy'],
    kind: 'fallacy',
    domains: ['statistics', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'Ignoring the underlying prior probability (base rate) of an event and focusing solely on specific, eye-catching evidence.',
    explanation:
      'Even a 99%-accurate diagnostic test produces mostly false positives when screening for a 1-in-10,000 condition. Human intuition naturally latches onto vivid case details while neglecting how common or rare the category is to begin with.',
    logicalForm: 'Given test/clue E with high accuracy, conclude P(Condition | E) is high while ignoring tiny prior P(Condition).',
    origin: 'Formalized via Bayes’ theorem; empirically demonstrated by Daniel Kahneman and Amos Tversky (1973).',
    examples: [
      {
        context: 'Medical Screening',
        scenario:
          'A disease affects 1 in 1,000 people. A test detects it 99% of the time and has a 5% false-positive rate. A patient tests positive and assumes they have a 95–99% chance of having the disease.',
        breakdown:
          'Out of 1,000 people, ~1 truly has the disease and tests positive, while ~50 healthy people falsely test positive—so a positive result actually means only about a 2% chance without a follow-up test.',
      },
      {
        context: 'Startup Pitching',
        scenario:
          'An investor hears a brilliant founder story and ignores that 90% of hardware startups in that category fail before shipping.',
        breakdown:
          'The vivid “inside view” narrative crowds out the statistical “outside view” reference class.',
      },
    ],
    antidote:
      'Start with the outside view: “Out of 1,000 similar cases, how often does this happen?” Convert percentages into natural frequencies (e.g., “1 out of 51”) to make the math intuitive.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Base Rate Fallacy — Why We Ignore Prior Probabilities',
        url: 'https://thedecisionlab.com/biases/base-rate-fallacy',
      },
      {
        site: 'Logically Fallacious',
        title: 'Base Rate Fallacy Entry',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Base-Rate-Fallacy',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Base rate fallacy',
        url: 'https://en.wikipedia.org/wiki/Base_rate_fallacy',
      },
    ],
    relations: [
      {
        targetId: 'bayesian-updating',
        type: 'counterpart_to',
        note: 'Bayesian updating explicitly anchors every judgment to its prior base rate.',
      },
      {
        targetId: 'availability-heuristic',
        type: 'psychological_root',
      },
      {
        targetId: 'conjunction-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'anecdotal-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'planning-fallacy',
        type: 'related_to',
        note: 'Ignoring historical project base rates fuels overoptimistic schedules.',
      },
    ],
  },
  {
    id: 'texas-sharpshooter',
    slug: 'texas-sharpshooter',
    name: 'Texas Sharpshooter Fallacy',
    aliases: ['Cherry-Picking Clusters', 'Data Dredging', 'P-Hacking'],
    kind: 'fallacy',
    domains: ['statistics', 'decision-making', 'systems'],
    tier: 'intermediate',
    oneLiner:
      'Cherry-picking a random cluster of data points after the fact and claiming it proves a meaningful pattern—like shooting a barn wall and painting the bullseye around the holes.',
    explanation:
      'In large datasets, random noise inevitably creates tight clusters and eerie streaks. When you search for anomalies first and invent a hypothesis to fit them afterward, you mistake noise for signal.',
    logicalForm: 'Observe random cluster C in noisy data → Draw hypothesis H specifically around C → Claim C validates H.',
    origin: 'Named after a classic joke about a Texan marksman; formalized in statistics and epidemiology literature in the late 20th century.',
    examples: [
      {
        context: 'A/B Testing & Analytics',
        scenario:
          'An experiment shows no overall lift, so an analyst slices 30 demographic segments until finding that “iOS users in Ohio on Tuesdays” converted 18% higher, then declares a breakthrough.',
        breakdown:
          'Testing dozens of slices virtually guarantees at least one spurious “statistically significant” spike by pure chance.',
      },
      {
        context: 'Stock Picking',
        scenario:
          'A newsletter highlights 4 stocks that tripled out of 80 mentions over five years while quietly omitting the 76 average or losing picks.',
        breakdown:
          'Drawing the target around the winners hides the true hit rate.',
      },
    ],
    antidote:
      'State your hypothesis before looking at the data, apply multiple-testing corrections, and validate discovered patterns on a fresh out-of-sample dataset.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'The Texas Sharpshooter — Cherry-Picking Data Clusters to Suit an Argument',
        url: 'https://yourlogicalfallacyis.com/the-texas-sharpshooter',
      },
      {
        site: 'The Fallacy Files',
        title: 'Texas Sharpshooter Fallacy Entry',
        url: 'https://www.fallacyfiles.org/texsharp.html',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Texas sharpshooter fallacy',
        url: 'https://en.wikipedia.org/wiki/Texas_sharpshooter_fallacy',
      },
    ],
    relations: [
      {
        targetId: 'survivorship-bias',
        type: 'related_to',
      },
      {
        targetId: 'correlation-not-causation',
        type: 'related_to',
      },
      {
        targetId: 'confirmation-bias',
        type: 'psychological_root',
      },
      {
        targetId: 'poppers-falsifiability',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'gamblers-fallacy',
    slug: 'gamblers-fallacy',
    name: "Gambler's Fallacy",
    aliases: ['Monte Carlo Fallacy', 'Due-for-a-Win Fallacy', 'Hot-Hand Inverse'],
    kind: 'fallacy',
    domains: ['statistics', 'decision-making', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Believing that independent random events “owe” a correction after a streak—such as expecting tails because a fair coin landed heads five times in a row.',
    explanation:
      'Dice, coins, and roulette wheels have no memory. Each independent trial keeps the exact same probability regardless of prior streaks. Our intuition confuses the long-run Law of Large Numbers (which dilutes streaks over thousands of flips) with a mythical short-term “self-correcting force.”',
    logicalForm: 'Independent event E occurred repeatedly → Therefore ¬E is now more probable on the next trial (Invalid).',
    origin: 'Famously illustrated at the Monte Carlo Casino in August 1913, when black fell 26 consecutive times on a roulette wheel and gamblers lost millions betting red was “due.”',
    examples: [
      {
        context: 'Hiring Interviews',
        scenario:
          'After rejecting four weak candidates in a row, an interviewer becomes overly generous to the fifth mediocre candidate because “surely someone strong is due.”',
        breakdown:
          'Each candidate’s ability is independent of the previous interviews (assuming random scheduling).',
      },
      {
        context: 'Investing & Games',
        scenario:
          'Buying a lottery number specifically because it hasn’t been drawn in three months, assuming it has “built up pressure” to appear.',
        breakdown:
          'A fair drawing machine assigns identical odds to every ball every single week.',
      },
    ],
    antidote:
      'Ask first whether the trials are truly independent (like coin flips) or drawn without replacement (like cards from a deck). For independent events, reset your probability to the baseline every time.',
    validCounterpart:
      'In processes *without* replacement (drawing cards from a finite deck) or physical systems with wear/fatigue, past outcomes genuinely do change future odds.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: "The Gambler's Fallacy — Believing That 'Runs' Occur to Statistically Independent Phenomena",
        url: 'https://yourlogicalfallacyis.com/the-gamblers-fallacy',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Gambler’s Fallacy',
        url: 'https://iep.utm.edu/fallacy/#GamblersFallacy',
      },
      {
        site: 'The Fallacy Files',
        title: "Gambler's Fallacy Entry",
        url: 'https://www.fallacyfiles.org/gamblers.html',
      },
    ],
    relations: [
      {
        targetId: 'regression-to-the-mean',
        type: 'often_confused_with',
        note: 'Regression to the mean expects future averages to be closer to normal—not an active reversal compensating for past extremes.',
      },
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'expected-value',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'conjunction-fallacy',
    slug: 'conjunction-fallacy',
    name: 'Conjunction Fallacy',
    aliases: ['Linda Problem', 'Specific Story Fallacy'],
    kind: 'fallacy',
    domains: ['statistics', 'decision-making', 'everyday'],
    tier: 'intermediate',
    oneLiner:
      'Judging a specific combination of two conditions (A and B) to be more probable than one of those conditions alone (A), simply because the combined story sounds vivid and plausible.',
    explanation:
      'By basic probability theory, P(A and B) can never exceed P(A). Yet when given a detailed character sketch (“Linda majored in philosophy and cares about social justice”), most people rank “Linda is a bank teller AND active in the feminist movement” as more likely than “Linda is a bank teller”—mistaking narrative resemblance for mathematical likelihood.',
    logicalForm: 'Claim P(A ∧ B) > P(A) because (A ∧ B) fits a compelling stereotype or story (Mathematically impossible).',
    origin: 'Demonstrated by Amos Tversky and Daniel Kahneman (1983) in the classic “Linda the bank teller” experiment.',
    examples: [
      {
        context: 'Scenario Planning',
        scenario:
          'Executives rate “A competitor launches a lower-priced product AND poaches our enterprise accounts in Q3” as more probable than “We lose enterprise accounts in Q3.”',
        breakdown:
          'Adding extra dramatic details makes a scenario easier to picture while strictly shrinking its actual probability.',
      },
      {
        context: 'Forecasting News',
        scenario:
          'Rating “An earthquake hits California causing a major flood that closes Highway 1” as more likely than “A flood closes Highway 1.”',
        breakdown:
          'The broader event already encompasses both earthquake-caused floods and ordinary storm floods.',
      },
    ],
    antidote:
      'Draw a quick Venn diagram: whenever one claim is a narrower subset of another, its probability *must* be smaller or equal—no matter how cinematic the narrative sounds.',
    sources: [
      {
        site: 'The Decision Lab',
        title: 'Conjunction Fallacy — The Linda Problem & Probability Judgment',
        url: 'https://thedecisionlab.com/biases/conjunction-fallacy',
      },
      {
        site: 'The Fallacy Files',
        title: 'The Conjunction Fallacy Entry',
        url: 'https://www.fallacyfiles.org/conjunct.html',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Conjunction fallacy',
        url: 'https://en.wikipedia.org/wiki/Conjunction_fallacy',
      },
    ],
    relations: [
      {
        targetId: 'base-rate-fallacy',
        type: 'related_to',
      },
      {
        targetId: 'availability-heuristic',
        type: 'psychological_root',
      },
      {
        targetId: 'bayesian-updating',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'nirvana-fallacy',
    slug: 'nirvana-fallacy',
    name: 'Nirvana Fallacy',
    aliases: ['Perfect Solution Fallacy', 'Letting the Perfect Be the Enemy of the Good'],
    kind: 'fallacy',
    domains: ['decision-making', 'organizations', 'debate'],
    tier: 'essential',
    oneLiner:
      'Rejecting a practical, imperfect improvement because it falls short of an imaginary, flawless ideal.',
    explanation:
      'Every real-world policy, safety tool, or software design has trade-offs and edge cases. Comparing a workable real option against an unachievable utopia—rather than against the messy status quo—locks you into inaction.',
    logicalForm: 'Solution S does not solve 100% of problem P → Therefore S is worthless and should be rejected.',
    origin: 'Coined by economist Harold Demsetz in “Information and Efficiency: Another Viewpoint” (1969).',
    examples: [
      {
        context: 'Cybersecurity',
        scenario:
          '“Multi-factor authentication can still be bypassed by sophisticated phishing attacks, so there’s no point rolling it out to employees.”',
        breakdown:
          'MFA blocks over 99% of automated credential-stuffing attacks; demanding 100% invulnerability leaves the company wide open.',
      },
      {
        context: 'Engineering Quality',
        scenario:
          '“Automated linting and unit tests can’t catch every possible bug, so we shouldn’t waste time setting up CI.”',
        breakdown:
          'A partial safety net that catches 70% of regressions cheaply is vastly superior to no safety net.',
      },
    ],
    antidote:
      'Always compare realistic options against the *actual baseline* (“Better than today?”), not against an imaginary zero-flaw utopia.',
    sources: [
      {
        site: 'Logically Fallacious',
        title: 'Nirvana Fallacy (Perfect Solution Fallacy)',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Nirvana-Fallacy',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Nirvana fallacy',
        url: 'https://en.wikipedia.org/wiki/Nirvana_fallacy',
      },
    ],
    relations: [
      {
        targetId: 'false-dilemma',
        type: 'related_to',
      },
      {
        targetId: 'status-quo-bias',
        type: 'psychological_root',
      },
      {
        targetId: 'pareto-principle',
        type: 'counterpart_to',
        note: 'Pareto embraces capturing 80% of the impact quickly instead of waiting forever for 100%.',
      },
      {
        targetId: 'expected-value',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'appeal-to-nature',
    slug: 'appeal-to-nature',
    name: 'Appeal to Nature',
    aliases: ['Naturalistic Fallacy (Colloquial)', 'Natural = Good'],
    kind: 'fallacy',
    domains: ['everyday', 'debate', 'decision-making'],
    tier: 'essential',
    oneLiner:
      'Assuming something is automatically good, safe, or superior because it is “natural”—or harmful and inferior because it is “artificial” or “synthetic.”',
    explanation:
      'Nature produces both nourishing berries and deadly arsenic, poison ivy, and smallpox; human engineering produces both pollution and clean drinking water, eyeglasses, and antibiotics. “Natural” describes origin, not safety or value.',
    logicalForm: 'X is natural → Therefore X is good/safe. Y is synthetic → Therefore Y is bad/unsafe.',
    origin: 'Philosophical ethics (related to David Hume’s Is–Ought distinction, 1739, and G. E. Moore’s Principia Ethica, 1903).',
    examples: [
      {
        context: 'Consumer Health',
        scenario:
          '“Skip that lab-tested medication and take this raw herbal extract—it’s 100% all-natural, so it can’t have side effects!”',
        breakdown:
          'Botanical compounds can have potent side effects and inconsistent dosages; safety depends on clinical evidence, not origin.',
      },
      {
        context: 'Workplace Norms',
        scenario:
          '“Humans naturally evolved in small face-to-face tribes, so asynchronous written documentation can never work.”',
        breakdown:
          'Humans also didn’t evolve with written language, refrigeration, or aviation, yet all three vastly expand human capability.',
      },
    ],
    antidote:
      'Replace “Is it natural?” with “What are the measured outcomes, risks, and trade-offs?”',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: "Appeal to Nature — Making the Argument That Because Something Is 'Natural' It Is Therefore Valid or Ideal",
        url: 'https://yourlogicalfallacyis.com/appeal-to-nature',
      },
      {
        site: 'The Fallacy Files',
        title: 'Appeal to Nature Entry',
        url: 'https://www.fallacyfiles.org/adnature.html',
      },
      {
        site: 'Logically Fallacious',
        title: 'Appeal to Nature',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Appeal-to-Nature',
      },
    ],
    relations: [
      {
        targetId: 'appeal-to-tradition',
        type: 'related_to',
      },
      {
        targetId: 'genetic-fallacy',
        type: 'related_to',
        note: 'Both judge a thing’s merit purely from its origin rather than its present properties.',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'appeal-to-tradition',
    slug: 'appeal-to-tradition',
    name: 'Appeal to Tradition',
    aliases: ['Argumentum ad Antiquitatem', 'We Have Always Done It This Way'],
    kind: 'fallacy',
    domains: ['organizations', 'debate', 'everyday'],
    tier: 'essential',
    oneLiner:
      'Claiming a practice or belief must be right or optimal simply because it has been done that way for a long time.',
    explanation:
      'Longevity is a clue worth investigating—not an automatic veto against improvement. Circumstances, technology, and constraints evolve; practices that made total sense decades ago can become costly relics.',
    logicalForm: 'Practice P has been followed for a long time → Therefore P is correct and must remain unchanged.',
    origin: 'Classical Latin informal logic (argumentum ad antiquitatem).',
    examples: [
      {
        context: 'Corporate Operations',
        scenario:
          '“We’ve always required three levels of VP approval for purchases over $500 since 2004, so we can’t simplify it now.”',
        breakdown:
          'What protected cash flow for a tiny 2004 startup now wastes thousands of hours of executive time at a 500-person company.',
      },
      {
        context: 'Software Releases',
        scenario:
          '“We only deploy to production twice a year because that’s how our release calendar has always worked.”',
        breakdown:
          'Legacy manual-deployment cadence persists long after automated testing made smaller, safer releases possible.',
      },
    ],
    antidote:
      'Combine Chesterton’s Fence with First Principles: investigate *why* the tradition started, check if those reasons still apply today, and adapt if they don’t.',
    validCounterpart:
      'Lindy’s Law and Chesterton’s Fence remind us that surviving traditions often encode subtle, hard-won lessons—so understand them before discarding them.',
    sources: [
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Appeal to Tradition',
        url: 'https://iep.utm.edu/fallacy/#AppealtoTradition',
      },
      {
        site: 'Logically Fallacious',
        title: 'Appeal to Tradition (Argumentum ad Antiquitatem)',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Appeal-to-Tradition',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Appeal to tradition',
        url: 'https://en.wikipedia.org/wiki/Appeal_to_tradition',
      },
    ],
    relations: [
      {
        targetId: 'status-quo-bias',
        type: 'psychological_root',
      },
      {
        targetId: 'chestertons-fence',
        type: 'often_confused_with',
        note: 'Chesterton’s Fence asks you to understand a rule before changing it; Appeal to Tradition refuses to change it at all.',
      },
      {
        targetId: 'lindys-law',
        type: 'often_confused_with',
      },
      {
        targetId: 'bandwagon',
        type: 'related_to',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'equivocation',
    slug: 'equivocation',
    name: 'Equivocation Fallacy',
    aliases: ['Semantic Shift', 'Double Meaning Fallacy', 'Bait-and-Switch Definition'],
    kind: 'fallacy',
    domains: ['debate', 'everyday', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'Silently switching the meaning of a key word or phrase midway through an argument so an invalid conclusion looks airtight.',
    explanation:
      'Many everyday words (“theory,” “law,” “free,” “scalable,” “fair”) carry multiple distinct meanings. Equivocation uses Sense 1 in the premise, then slips to Sense 2 in the conclusion without acknowledging the switch.',
    logicalForm: 'Premise uses word W in Sense 1 → Conclusion relies on word W in Sense 2 → Invalid leap.',
    origin: 'Aristotle, Sophistical Refutations (fallacies dependent on language: homonymia).',
    examples: [
      {
        context: 'Science vs. Everyday Speech',
        scenario:
          '“Evolution is just a ‘theory’—and a theory is just a wild guess—so it hasn’t been proven.”',
        breakdown:
          'Slides from the scientific meaning of “theory” (a rigorously tested explanatory framework) to the casual meaning (“a hunch”).',
      },
      {
        context: 'Tech Sales & Product',
        scenario:
          '“Our app is completely ‘open’ (meaning anyone can sign up), and open platforms prevent vendor lock-in—so you’ll never be locked in with us!”',
        breakdown:
          'Equivocates between “open registration” and “open-source / open data standards.”',
      },
    ],
    antidote:
      'Taboo the ambiguous word: replace it with its exact operational definition in every sentence and check whether the logic still holds.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Ambiguity / Equivocation — Using Double Meanings or Ambiguities of Language to Mislead',
        url: 'https://yourlogicalfallacyis.com/ambiguity',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Equivocation',
        url: 'https://iep.utm.edu/fallacy/#Equivocation',
      },
      {
        site: 'The Fallacy Files',
        title: 'Equivocation Entry',
        url: 'https://www.fallacyfiles.org/equivoqu.html',
      },
    ],
    relations: [
      {
        targetId: 'motte-and-bailey',
        type: 'related_to',
      },
      {
        targetId: 'grices-razor',
        type: 'related_to',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'composition-fallacy',
    slug: 'composition-fallacy',
    name: 'Fallacy of Composition',
    aliases: ['Part-to-Whole Fallacy', 'Micro-to-Macro Leap'],
    kind: 'fallacy',
    domains: ['systems', 'statistics', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'Assuming that what is true of each individual part must automatically be true of the whole system.',
    explanation:
      'Complex systems exhibit emergent behavior and constraints that parts do not have in isolation. Standing up at a stadium gives *you* a better view—yet if everyone stands up, nobody sees better. Sodium and chlorine are individually toxic, yet together form ordinary table salt.',
    logicalForm: 'Every part P of whole W has property X → Therefore whole W has property X (Invalid).',
    origin: 'Aristotle, Sophistical Refutations; widely applied in macroeconomics (Paradox of Thrift) and systems engineering.',
    examples: [
      {
        context: 'Sports & Teams',
        scenario:
          '“We hired the five highest-scoring soloists in the league, so we’ll automatically have the best team.”',
        breakdown:
          'Team performance depends on chemistry, passing, and role complementarity—not merely summing individual stats.',
      },
      {
        context: 'Distributed Systems',
        scenario:
          '“Each microservice has 99.5% uptime on its own, so a request chaining 20 of them together will also have 99.5% uptime.”',
        breakdown:
          'Chained serial dependencies multiply failure risk: 0.995^20 drops overall uptime to ~90.5%.',
      },
    ],
    antidote:
      'Always test system-level interactions: “What happens when *everyone* does this at once, or when these components combine?”',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Composition/Division — Assuming That What Is True of One Part Is True for the Whole',
        url: 'https://yourlogicalfallacyis.com/composition-division',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Fallacy of Composition',
        url: 'https://iep.utm.edu/fallacy/#Composition',
      },
      {
        site: 'The Fallacy Files',
        title: 'Fallacy of Composition',
        url: 'https://www.fallacyfiles.org/composit.html',
      },
    ],
    relations: [
      {
        targetId: 'division-fallacy',
        type: 'counterpart_to',
        note: 'The exact inverse error: assuming a property of the whole must hold for every individual part.',
      },
      {
        targetId: 'tragedy-of-the-commons',
        type: 'related_to',
        note: 'Individually rational choices compose into collective ruin.',
      },
      {
        targetId: 'second-order-thinking',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'division-fallacy',
    slug: 'division-fallacy',
    name: 'Fallacy of Division',
    aliases: ['Whole-to-Part Fallacy', 'Ecological Fallacy Cousin'],
    kind: 'fallacy',
    domains: ['statistics', 'systems', 'organizations'],
    tier: 'intermediate',
    oneLiner:
      'Assuming that a property of a whole group, organization, or system must automatically apply to each individual member or component.',
    explanation:
      'The mirror image of Composition. Just because a company is extraordinarily profitable, a country has high average income, or a university is prestigious does not mean every division, citizen, or graduate shares that average trait.',
    logicalForm: 'Whole W has property X → Therefore part P of W must also have property X (Invalid).',
    origin: 'Aristotle, Sophistical Refutations (paired directly with the Fallacy of Composition).',
    examples: [
      {
        context: 'Hiring & Pedigree',
        scenario:
          '“Tech Giant X builds world-class infrastructure, so any engineer who worked there must be a world-class infrastructure architect.”',
        breakdown:
          'A giant company houses thousands of roles with widely varying scope and skill levels.',
      },
      {
        context: 'Analytics & Averages',
        scenario:
          '“Our enterprise segment grew 40% this year, so every regional sales team must be thriving.”',
        breakdown:
          'One booming region can mask flat or shrinking performance across three other regions.',
      },
    ],
    antidote:
      'Inspect the distribution and individual unit evidence rather than projecting group averages onto specific members.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Composition/Division — Assuming What Is True of the Whole Must Be True of Its Parts',
        url: 'https://yourlogicalfallacyis.com/composition-division',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Fallacy of Division',
        url: 'https://iep.utm.edu/fallacy/#Division',
      },
      {
        site: 'The Fallacy Files',
        title: 'Fallacy of Division Entry',
        url: 'https://www.fallacyfiles.org/division.html',
      },
    ],
    relations: [
      {
        targetId: 'composition-fallacy',
        type: 'counterpart_to',
      },
      {
        targetId: 'halo-effect',
        type: 'psychological_root',
      },
      {
        targetId: 'simpsons-paradox',
        type: 'related_to',
      },
    ],
  },
  {
    id: 'genetic-fallacy',
    slug: 'genetic-fallacy',
    name: 'Genetic Fallacy',
    aliases: ['Fallacy of Origins', 'Guilt by Origin'],
    kind: 'fallacy',
    domains: ['debate', 'decision-making', 'everyday'],
    tier: 'intermediate',
    oneLiner:
      'Judging an idea, product, or claim as good or bad solely because of where it originated rather than evaluating its current merits.',
    explanation:
      'Where an idea came from can be interesting historical context, yet a good idea can emerge from a flawed source (or an accidental origin) and a broken idea can carry a noble pedigree. Truth and usefulness must be tested in the present.',
    logicalForm: 'Idea X originated from disreputable/prestigious source S → Therefore X is false/true today.',
    origin: 'Coined by Morris Raphael Cohen and Ernest Nagel in An Introduction to Logic and Scientific Method (1934).',
    examples: [
      {
        context: 'Workplace Innovation',
        scenario:
          '“That workflow suggestion came from an intern in a different department—it can’t possibly improve our core engineering pipeline.”',
        breakdown:
          'Dismisses a testable improvement purely based on its source.',
      },
      {
        context: 'Technology & History',
        scenario:
          '“The internet grew out of Cold War military funding, so modern open-web tools are inherently oppressive.”',
        breakdown:
          'Conflates historical inception with how a technology actually functions today.',
      },
    ],
    antidote:
      'Evaluate claims on current evidence and falsifiable predictions—independent of their historical or institutional birthplace.',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Genetic — Judging Something Good or Bad on the Basis of Where It Comes From',
        url: 'https://yourlogicalfallacyis.com/genetic',
      },
      {
        site: 'Internet Encyclopedia of Philosophy (IEP)',
        title: 'Fallacies Database — Genetic Fallacy',
        url: 'https://iep.utm.edu/fallacy/#GeneticFallacy',
      },
      {
        site: 'The Fallacy Files',
        title: 'Genetic Fallacy Entry',
        url: 'https://www.fallacyfiles.org/genefall.html',
      },
    ],
    relations: [
      {
        targetId: 'ad-hominem',
        type: 'often_confused_with',
      },
      {
        targetId: 'appeal-to-nature',
        type: 'related_to',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
  {
    id: 'middle-ground-fallacy',
    slug: 'middle-ground-fallacy',
    name: 'Argument to Moderation',
    aliases: ['Middle Ground Fallacy', 'Golden Mean Fallacy', 'False Compromise'],
    kind: 'fallacy',
    domains: ['debate', 'organizations', 'decision-making'],
    tier: 'intermediate',
    oneLiner:
      'Assuming that the truth or best solution must always lie halfway between two opposing positions.',
    explanation:
      'Compromise is wonderful for splitting a pie or navigating differing tastes—but terrible for factual truth or asymmetric stakes. If one person says 2 + 2 = 4 and another insists 2 + 2 = 6, the answer is not 5. Worse, bad-faith negotiators exploit this fallacy by staking extreme anchors to drag the “midpoint” in their favor.',
    logicalForm: 'Side A claims X; Side B claims Y → Therefore the compromise halfway between X and Y must be correct.',
    origin: 'Informal logic (argumentum ad temperantiam); contrasts with Aristotle’s ethical Golden Mean misapplied to factual claims.',
    examples: [
      {
        context: 'Engineering Trade-offs',
        scenario:
          'Security says customer passwords must be hashed with bcrypt; a rushed PM wants plaintext to save time. A manager “compromises” by using fast unsalted MD5—delivering neither speed benefits nor real security.',
        breakdown:
          'Splitting the difference produces an option that fails the core requirement completely.',
      },
      {
        context: 'Negotiation & Anchoring',
        scenario:
          'A contractor quotes $100k for a $30k project so that “meeting in the middle” at $65k looks fair and reasonable.',
        breakdown:
          'An extreme anchor weaponizes the middle-ground instinct.',
      },
    ],
    antidote:
      'Ask whether the question is about *preferences* (where compromise works) or *facts / system constraints* (where evidence must decide, even if one side is 100% right).',
    sources: [
      {
        site: 'Your Logical Fallacy Is',
        title: 'Middle Ground — Claiming That a Compromise, or Middle Point, Between Two Extremes Must Be the Truth',
        url: 'https://yourlogicalfallacyis.com/middle-ground',
      },
      {
        site: 'Logically Fallacious',
        title: 'Argument to Moderation (Golden Mean Fallacy)',
        url: 'https://www.logicallyfallacious.com/logicalfallacies/Argument-to-Moderation',
      },
      {
        site: 'Wikipedia Fallacies Database',
        title: 'Argument to moderation',
        url: 'https://en.wikipedia.org/wiki/Argument_to_moderation',
      },
    ],
    relations: [
      {
        targetId: 'false-dilemma',
        type: 'counterpart_to',
      },
      {
        targetId: 'anchoring-bias',
        type: 'psychological_root',
        note: 'Extreme opening positions shift where the “reasonable middle” appears to sit.',
      },
      {
        targetId: 'first-principles',
        type: 'counterpart_to',
      },
    ],
  },
];
