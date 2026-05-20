"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ErrorState } from "@/components/ui/ErrorState";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/types/project";

const allCategory = "All";

type FeaturedProjectsClientProps = {
  initialProjects: Project[];
  initialError: string | null;
};

export function FeaturedProjectsClient({
  initialProjects,
  initialError,
}: FeaturedProjectsClientProps) {
  const [activeCategory, setActiveCategory] = useState(allCategory);
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const projectCategories = initialProjects
      .map((project) => project.category)
      .filter((category): category is string => Boolean(category));

    return [allCategory, ...Array.from(new Set(projectCategories))];
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return initialProjects.filter((project) => {
      const matchesCategory =
        activeCategory === allCategory || project.category === activeCategory;
      const haystack = [
        project.title,
        project.description,
        project.category,
        ...(project.tech_stack ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesSearch = query.length === 0 || haystack.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, initialProjects, search]);

  return (
    <section id="projects" className="py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex min-w-0 flex-col gap-6 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Product-focused builds with real backend thinking."
            description="Projects are loaded from Supabase and can be filtered by category or searched by stack."
          />
        </div>

        {initialError ? <ErrorState message={initialError} /> : null}

        {!initialError ? (
          <div className="space-y-6">
            <ProjectFilters
              categories={categories}
              activeCategory={activeCategory}
              search={search}
              onCategoryChange={setActiveCategory}
              onSearchChange={setSearch}
            />
            <ProjectGrid projects={filteredProjects} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
