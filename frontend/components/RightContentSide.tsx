import Button from "./ui/Button";

interface RightContentSideProps {
  title: string;
  subtitle: string;
}

export default function RightContentSide({
  title,
  subtitle,
}: RightContentSideProps) {
  return (
    <div className="w-80 sticky top-0 h-[250px] p-4 bg-gradient-to-r from-primary to-primary/90 rounded-md text-white flex flex-col justify-between">
      <h3 className="text-2xl font-light w-[80%]">{title}</h3>
      <Button className="bg-white/30 text-white w-fit">{subtitle}</Button>
    </div>
  );
}
