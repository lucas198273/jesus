import { useEffect } from "react";

interface SEOTag {
  property?: string;
  name?: string;
  content: string;
}

export const useSEO = (title: string, description: string, tags: SEOTag[] = []) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    tags.forEach((tag) => {
      const meta = document.createElement("meta");
      if (tag.property) meta.setAttribute("property", tag.property);
      if (tag.name) meta.setAttribute("name", tag.name);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    return () => {
      tags.forEach((tag) => {
        const selector = tag.property
          ? `meta[property="${tag.property}"]`
          : `meta[name="${tag.name}"]`;
        const meta = document.querySelector(selector);
        if (meta) meta.remove();
      });
    };
  }, [title, description, tags]);
};