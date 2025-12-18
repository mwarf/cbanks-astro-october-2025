import type { CollectionEntry } from "astro:content";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Helper for reading time (duplicated, could be shared util)
const calculateReadingTime = (content: string) => {
  if (!content) return "1 Min Read";
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} Min Read`;
};

const BlogPost = ({
  post,
  relatedPosts = [],
  children,
}: {
  post: CollectionEntry<"blog">;
  relatedPosts?: CollectionEntry<"blog">[];
  children: React.ReactNode;
}) => {
  const { title, authorName, image, pubDate, description, authorImage } =
    post.data;
  return (
    <section>
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="font-display max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
          <h3 className="text-muted-foreground max-w-4xl">{description}</h3>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={authorImage} />
              <AvatarFallback>{authorName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>
              <a href="#" className="font-semibold">
                {authorName}
              </a>
              <span className="ml-1">on {format(pubDate, "MMMM d, yyyy")}</span>
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              {calculateReadingTime(post.body || "")}
            </span>
          </div>
          <img
            src={image}
            alt="placeholder"
            className="mt-0 mb-8 aspect-video w-full rounded-lg border object-cover"
          />
        </div>
      </div>
      <div className="container">
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          {children}
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="container mt-24">
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-8 text-2xl font-bold">Read Next</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.data.slug || relatedPost.id}/`}
                  className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-md"
                >
                  <div className="overflow-hidden aspect-video">
                     <img
                      src={relatedPost.data.image}
                      alt={relatedPost.data.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h4 className="mb-2 text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.data.title}
                    </h4>
                    <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                        <span className="text-xs text-muted-foreground">
                            {format(relatedPost.data.pubDate, "MMM d, yyyy")}
                        </span>
                         <Badge variant="secondary" className="text-[10px] h-fit px-1.5 py-0.5 font-normal">
                          {calculateReadingTime(relatedPost.body || "")}
                        </Badge>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { BlogPost };
