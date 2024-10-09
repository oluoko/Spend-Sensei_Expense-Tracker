interface WelcomeProps {
  name: string;
}

const Welcome = ({ name }: WelcomeProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
      <h1 className="py-6 text-3xl md:text-5xl font-extrabold">
    
        <span className="text-4xl md:text-6xl font-extrabold font-sans">
          {name ? name : "Deshi"}, 
        </span>{" "}
 welcome to Spend Sensei!
      </h1>
      <p className="text-2xl md:text-4xl">
        Take charge of your finances like a master.
      </p>
      <p className="text-lg md:text-2xl text-gray-600">
        Let’s make every move count and unlock your financial potential.
      </p>
    </div>
  );
};

export default Welcome;
