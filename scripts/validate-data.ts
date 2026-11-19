import {
  ALL_CONCEPTS,
  CONCEPT_BY_ID,
  DIAGNOSTIC_CATEGORIES,
  DIAGNOSTIC_SITUATIONS,
  buildConceptGraph,
  getCountsByKind,
} from '../src/data/index.ts';

function validate(): void {
  const errors: string[] = [];
  const warnings: string[] = [];
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();

  for (const concept of ALL_CONCEPTS) {
    if (!concept.id.trim()) {
      errors.push(`Concept "${concept.name}" has an empty id.`);
    }
    if (seenIds.has(concept.id)) {
      errors.push(`Duplicate concept id: "${concept.id}".`);
    }
    seenIds.add(concept.id);

    if (seenSlugs.has(concept.slug)) {
      errors.push(`Duplicate concept slug: "${concept.slug}".`);
    }
    seenSlugs.add(concept.slug);

    if (concept.id !== concept.slug) {
      errors.push(`Concept "${concept.id}" has mismatched slug "${concept.slug}".`);
    }

    if (!concept.name.trim()) {
      errors.push(`Concept "${concept.id}" is missing a name.`);
    }
    if (!concept.oneLiner.trim()) {
      errors.push(`Concept "${concept.id}" is missing a oneLiner.`);
    }
    if (!concept.explanation.trim()) {
      errors.push(`Concept "${concept.id}" is missing an explanation.`);
    }
    if (!concept.origin.trim()) {
      errors.push(`Concept "${concept.id}" is missing an origin.`);
    }
    if (!concept.antidote.trim()) {
      errors.push(`Concept "${concept.id}" is missing an antidote.`);
    }
    if (concept.domains.length === 0) {
      errors.push(`Concept "${concept.id}" must belong to at least one domain.`);
    }
    if (concept.examples.length < 2) {
      errors.push(
        `Concept "${concept.id}" has only ${concept.examples.length} example(s); expected at least 2.`
      );
    }
    for (const [idx, ex] of concept.examples.entries()) {
      if (!ex.context.trim() || !ex.scenario.trim() || !ex.breakdown.trim()) {
        errors.push(`Concept "${concept.id}" example #${idx + 1} has empty fields.`);
      }
    }

    const seenTargets = new Set<string>();
    for (const rel of concept.relations) {
      if (rel.targetId === concept.id) {
        errors.push(`Concept "${concept.id}" has a self-referencing relation.`);
      }
      if (!CONCEPT_BY_ID.has(rel.targetId)) {
        errors.push(
          `Concept "${concept.id}" references missing targetId "${rel.targetId}".`
        );
      }
      if (seenTargets.has(rel.targetId)) {
        warnings.push(
          `Concept "${concept.id}" has duplicate relation target "${rel.targetId}".`
        );
      }
      seenTargets.add(rel.targetId);
    }

    if (concept.relations.length === 0) {
      warnings.push(`Concept "${concept.id}" has no outgoing relations.`);
    }

    if (concept.kind === 'fallacy') {
      if (!concept.sources || concept.sources.length === 0) {
        errors.push(`Logical fallacy "${concept.id}" must include at least one source.`);
      }
    }

    if (concept.sources) {
      for (const [sIdx, src] of concept.sources.entries()) {
        if (!src.site.trim()) {
          errors.push(`Concept "${concept.id}" source #${sIdx + 1} has an empty site.`);
        }
        if (!src.title.trim()) {
          errors.push(`Concept "${concept.id}" source #${sIdx + 1} has an empty title.`);
        }
        if (!/^https?:\/\//.test(src.url)) {
          errors.push(
            `Concept "${concept.id}" source #${sIdx + 1} has invalid URL "${src.url}".`
          );
        }
      }
    }
  }

  // Validate diagnostic situations
  const categoryIds = new Set(DIAGNOSTIC_CATEGORIES.map((c) => c.id));
  const seenSitIds = new Set<string>();
  for (const sit of DIAGNOSTIC_SITUATIONS) {
    if (seenSitIds.has(sit.id)) {
      errors.push(`Duplicate situation id: "${sit.id}".`);
    }
    seenSitIds.add(sit.id);

    if (!categoryIds.has(sit.category)) {
      errors.push(`Situation "${sit.id}" references unknown category "${sit.category}".`);
    }
    if (sit.conceptIds.length === 0) {
      errors.push(`Situation "${sit.id}" has no linked concepts.`);
    }
    for (const cid of sit.conceptIds) {
      if (!CONCEPT_BY_ID.has(cid)) {
        errors.push(`Situation "${sit.id}" references unknown conceptId "${cid}".`);
      }
    }
  }

  const graph = buildConceptGraph();
  const isolated = graph.nodes.filter((n) => n.degree === 0);
  if (isolated.length > 0) {
    warnings.push(
      `Isolated graph nodes with 0 connections: ${isolated.map((n) => n.id).join(', ')}`
    );
  }

  const counts = getCountsByKind();
  console.log('=== Reason Atlas Data Integrity Report ===');
  console.log(`Total concepts: ${ALL_CONCEPTS.length}`);
  console.log(
    `  Fallacies: ${counts.fallacy} | Biases: ${counts.bias} | Laws: ${counts.law} | Razors: ${counts.razor} | Mental Models: ${counts['mental-model']}`
  );
  console.log(`Graph edges (deduplicated): ${graph.edges.length}`);
  console.log(
    `Diagnostic situations: ${DIAGNOSTIC_SITUATIONS.length} across ${DIAGNOSTIC_CATEGORIES.length} categories`
  );

  if (warnings.length > 0) {
    console.warn(`\nWarnings (${warnings.length}):`);
    for (const w of warnings) console.warn(`  ⚠ ${w}`);
  }

  if (errors.length > 0) {
    console.error(`\nErrors (${errors.length}):`);
    for (const e of errors) console.error(`  ✖ ${e}`);
    process.exit(1);
  }

  console.log('\n✔ All data integrity checks passed.');
}

validate();
