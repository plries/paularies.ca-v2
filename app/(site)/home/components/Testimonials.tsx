"use client";
import { Heading, TestimonialCard } from "@/app/components";
import { TESTIMONIALS_CONST } from "../const";
import { useTestimonialCard } from "@/app/hooks/useTestimonialCard";

export const Testimonials = () => {
  const hook = useTestimonialCard();
  
  return (
    <section className="contents">
      <Heading level="h2">{TESTIMONIALS_CONST.HEADING}</Heading>
      <div className="col-span-full grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        <div className="flex flex-col gap-4">
          {TESTIMONIALS_CONST.TESTIMONIALS.slice(
            0,
            TESTIMONIALS_CONST.TESTIMONIALS.length / 2,
          ).map((testimonial) => (
            <TestimonialCard
              key={testimonial.NAME}
              testimonial={testimonial}
              CLOSE={TESTIMONIALS_CONST.CLOSE}
              EXPAND={TESTIMONIALS_CONST.EXPAND}
              isOpen={hook.openCardName === testimonial.NAME}
              toggleCard={hook.handleToggle}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {TESTIMONIALS_CONST.TESTIMONIALS.slice(
            TESTIMONIALS_CONST.TESTIMONIALS.length / 2,
            TESTIMONIALS_CONST.TESTIMONIALS.length,
          ).map((testimonial) => (
            <TestimonialCard
              key={testimonial.NAME}
              testimonial={testimonial}
              CLOSE={TESTIMONIALS_CONST.CLOSE}
              EXPAND={TESTIMONIALS_CONST.EXPAND}
              isOpen={hook.openCardName === testimonial.NAME}
              toggleCard={hook.handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
