interface WordPullUpProps {
  className?: string;
  words: string;
}

export default function WordPullUp({ className, words }: WordPullUpProps) {
  return (
    <div className={className}>
      {words}
    </div>
  );
} 