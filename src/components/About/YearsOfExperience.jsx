import SVGComponent from "./SVGComponent";

export default function YearsOfExperience() {
  return (
    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
      <div>
        <span className="block text-5xl font-extrabold text-white">09</span>
        <span className="block text-base font-semibold text-white">
          We have
        </span>
        <span className="block text-base font-medium text-white text-opacity-70">
          Years of experience
        </span>
      </div>
      <div>
        <span className="absolute left-0 top-0 -z-10">
          <SVGComponent svgId={1} />
        </span>
        <span className="absolute right-0 top-0 -z-10">
          <SVGComponent svgId={2} />
        </span>
        <span className="absolute bottom-0 right-0 -z-10">
          <SVGComponent svgId={3} />
        </span>
      </div>
    </div>
  );
}
