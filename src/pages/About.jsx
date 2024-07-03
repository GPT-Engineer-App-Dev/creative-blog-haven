import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { newImage } from "@/components/ui/new-image";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <newImage src="/images/author.jpg" alt="Author" className="w-32 h-32 rounded-full mb-4" />
            <p className="text-center">Hello! I'm the author of this blog. I write about various topics that interest me, including technology, travel, and personal development. Thank you for visiting my blog!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;