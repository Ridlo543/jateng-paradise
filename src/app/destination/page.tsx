import fs from 'fs';
import path from 'path';
import markdownToHtml from '@/lib/utlis/markdownToHtml';

export default function Destination({ content }: { content: string }) {
    return 
    (
    <>
    <h1>Cek MD to html</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
    );
}

export async function getStaticProps() {
  const markdownPath = path.join(process.cwd(), 'content/destination/borobudur.md');
  const markdownContent = fs.readFileSync(markdownPath, 'utf8');
  const content = await markdownToHtml(markdownContent);

  return {
    props: {
      content,
    },
  };
}
