import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg mt-2">Insights, stories, and ideas from my journey.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Post Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Date: 2023-10-01</p>
              <p className="mt-2">This is a short excerpt from the blog post...</p>
              <Button variant="link" onClick={() => navigate("/blog/1")}>Read more</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Date: 2023-09-25</p>
              <p className="mt-2">This is a short excerpt from the blog post...</p>
              <Button variant="link" onClick={() => navigate("/blog/2")}>Read more</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Date: 2023-09-18</p>
              <p className="mt-2">This is a short excerpt from the blog post...</p>
              <Button variant="link" onClick={() => navigate("/blog/3")}>Read more</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="text-center">
        <p>Follow me on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;