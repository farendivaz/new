import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {

  return (
    <div class="space-y-8 overflow-hidden md:py-16 lg:py-12 px-14 md:px-28 lg:px-28">
      <div
        data-aos="fade-up"
        data-aos-delay={250}
        className="inline-flex flex-col items-start justify-center gap-4"
      >
        <div className="text-3xl font-normal md:text-4xl lg:text-4xl text-neutral-900">
          Pertanyaan yang Sering Diajukan
        </div>
        <div className="text-xl font-semibold md:text-3xl lg:text-3xl text-primary-100">
          Ketahui informasi terkait FitAja! melalui pertanyaan dan jawaban yang
          sering diajukan oleh pengguna.
        </div>
      </div>
      <div className="space-y-5">
        <FaqCard question="Lorem ipsum dolor sit amet consectetur adipisicing elit?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores nemo quasi, esse, eaque inventore, vel amet fugiat recusandae architecto illo similique. Voluptatem officia dolorum suscipit debitis enim fugit sint!"/>
        <FaqCard question="Lorem ipsum dolor sit amet consectetur adipisicing elit?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores nemo quasi, esse, eaque inventore, vel amet fugiat recusandae architecto illo similique. Voluptatem officia dolorum suscipit debitis enim fugit sint!"/>
        <FaqCard question="Lorem ipsum dolor sit amet consectetur adipisicing elit?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores nemo quasi, esse, eaque inventore, vel amet fugiat recusandae architecto illo similique. Voluptatem officia dolorum suscipit debitis enim fugit sint!"/>
      </div>
    </div>
  );
};

export default Faq;
