import { GlobalBlogCMS } from "adversity-global-blog-cms-react";
import "adversity-global-blog-cms-react/styles.css";
import { siteContent } from "../content/siteContent";

export function Blog() {
  return (
    <section className="min-h-[60vh] bg-[#FFFDF8]" aria-label="Blog">
      <GlobalBlogCMS
        apiUrl={import.meta.env.VITE_CMS_API_BASE_URL}
        apiKey={import.meta.env.VITE_CMS_API_KEY}
        title={siteContent.blog.title}
        description={siteContent.blog.description}
      />
    </section>
  );
}
