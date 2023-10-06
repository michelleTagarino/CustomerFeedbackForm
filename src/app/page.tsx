import dynamic from "next/dynamic";

const FeedbackForm = dynamic(() => import('./form/feedback-form/FeedbackForm'), { ssr: false })

export default function Home() {
  return (
    <main>
      <FeedbackForm />
    </main>
  );
}
