import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Function to calculate reading time
const calculateReadingTime = (content: string) => {
  if (!content) return "1 Min Read";
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} Min Read`;
};

const BlogPosts = ({ posts }: { posts: any[] }) => {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
          <a
            href={`/blog/${featuredPost.data.slug || featuredPost.id}/`}
            className="group block overflow-hidden rounded-2xl"
          >
            <img
              src={featuredPost.data.image}
              alt={featuredPost.data.title}
              className="aspect-video w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <div className="flex flex-col justify-center space-y-4">
            <Badge variant="secondary" className="w-fit">
              Latest Article
            </Badge>
            <a href={`/blog/${featuredPost.data.slug || featuredPost.id}/`}>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 hover:text-primary transition-colors">
                {featuredPost.data.title}
              </h1>
            </a>
            <p className="text-muted-foreground text-lg line-clamp-3 mb-6">
              {featuredPost.data.description}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-input">
                  <AvatarImage src={featuredPost.data.authorImage} alt={featuredPost.data.authorName} />
                  <AvatarFallback>{featuredPost.data.authorName?.charAt(0) || "A"}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{featuredPost.data.authorName}</span>
                  <span className="text-xs text-muted-foreground">
                    {calculateReadingTime(featuredPost.body)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Separator className="my-12" />

      {/* Regular Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post) => (
          <a
            key={post.id}
            className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card text-card-foreground transition-all hover:shadow-md"
            href={`/blog/${post.data.slug || post.id}/`}
          >
            <div className="overflow-hidden">
              <img
                src={post.data.image}
                alt={post.data.title}
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="mb-3 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                {post.data.title}
              </h2>
              <p className="mb-6 line-clamp-2 text-sm text-muted-foreground flex-1">
                {post.data.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6 border border-input">
                    <AvatarImage src={post.data.authorImage} alt={post.data.authorName} />
                    <AvatarFallback>{post.data.authorName?.charAt(0) || "A"}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium text-muted-foreground">
                    {post.data.authorName}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs font-normal">
                  {calculateReadingTime(post.body)}
                </Badge>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { BlogPosts };
