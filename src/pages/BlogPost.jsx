import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Blog Post Title {id}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Date: 2023-10-01</p>
          <div className="mt-4">
            <p>This is the content of the blog post...</p>
          </div>
        </CardContent>
      </Card>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-md">
            <p className="font-semibold">User 1</p>
            <p className="text-sm text-muted-foreground">This is a comment...</p>
          </div>
          <div className="p-4 border rounded-md">
            <p className="font-semibold">User 2</p>
            <p className="text-sm text-muted-foreground">This is another comment...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;