import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      <Card />

      {/* Buttons with required rounded classes */}
      <div className="flex flex-wrap gap-4">
        <Button title="Small - sm" styles="text-sm px-2 py-1 rounded-sm" />
        <Button title="Medium - lg" styles="text-base px-4 py-2 rounded-lg" />
        <Button title="Large - full" styles="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
