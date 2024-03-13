import Image from "next/image";
import Paragraph from "@/components/ui/paragraph";

export default function Home() {
  return (
    <main className="centeredContent">
      <Paragraph size="sm">This is a test</Paragraph>
      <div>
        <h1>Reference</h1>
        <p>Andrew Hull Charlie Dixon</p>
      </div>
    </main>
  );
}
