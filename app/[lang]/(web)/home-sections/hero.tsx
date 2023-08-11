const HeroSection = () => {
  return (
    <div className='flex flex-wrap gap-[10px] h-[calc(100vh-48px)]'>
      <div className='h-[calc(50vh-10px)] bg-purple-400 aspect-auto rounded-full'>
        <p>1</p>
      </div>
      <div className='h-[calc(50vh-10px)] bg-yellow-300 aspect-auto rounded-full'>
        <p>2</p>
      </div>
      <div className='h-[calc(50vh-10px)] bg-green-500 aspect-auto rounded-full'>
        <p>3</p>
      </div>
      <div className='h-[calc(50vh-10px)] bg-red-500 aspect-auto rounded-full'>
        <p>4</p>
      </div>
      <div className='h-[calc(50vh-10px)] bg-green-500 aspect-auto rounded-full'>
        <p>5</p>
      </div>
      <div className='h-[calc(50vh-10px)] bg-green-500 aspect-auto rounded-full'>
        <p>6</p>
      </div>
    </div>
  );
};
export default HeroSection;
