import CTAContent from "./CTAContent";
import SVGPattern from "./SVGPattern";

export default function CTA() {
  return (
    <>
      {/* <!-- ====== CTA Section Start --> */}
      <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
        <CTAContent />
        <div>
          <SVGPattern position="left-top" />
          <SVGPattern position="right-bottom" />
        </div>
      </section>
      {/* <!-- ====== CTA Section End --> */}
    </>
  );
}
