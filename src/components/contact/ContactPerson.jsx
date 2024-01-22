import React from 'react'

const ContactPerson = () => {
  return (
    <div>
        <section className="flex flex-col items-center justify-center gap-10 md:flex-row lg:flex-row md:gap-20 lg:gap-20 pt-12 pb-16">
            <a href="mailto:cs@fitaja.id"
                className="w-full md:w-[300px] lg:w-[300px] px-6 py-8 bg-neutral-500 rounded-2xl shadow-[0px_8px_24px_4px_rgba(10,66,151,0.24)] flex-col justify-center items-center gap-3 inline-flex hover:ring-2 hover:ring-primary-200 group"
                data-aos="fade-right" data-aos-delay="250">
                <div className="h-[133px] py-2 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <img className="w-20 h-20" src="https://demo.fitaja.id/assets/images/email_icon.png" alt="Email Logo" />
                </div>
                <div className="self-stretch h-[31px] flex-col justify-center items-center gap-1 flex">
                    <div className="self-stretch text-center text-neutral-100 text-2xl font-bold leading-[31.20px]">Email</div>
                </div>
                <div className="self-stretch h-[0.50px] bg-neutral-400 rounded-sm"></div>
                <div
                    className="flex items-center self-stretch justify-center text-xl font-normal leading-relaxed text-center transition-all duration-300 grow shrink basis-0 text-neutral-100 font-roboto group-hover:text-primary-200 group-hover:underline">
                    cs@fitaja.id</div>
            </a>
            <a href="https://wa.me/6289525306216" target="_blank"
                className="w-full md:w-[300px] lg:w-[300px] px-6 py-8 bg-neutral-500 rounded-2xl shadow-[0px_8px_24px_4px_rgba(10,66,151,0.24)] flex-col justify-center items-center gap-3 inline-flex hover:ring-2 hover:ring-primary-200 group"
                data-aos="fade-left" data-aos-delay="250">
                <div className="h-[133px] py-2 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <img className="w-20 h-20" src="https://demo.fitaja.id/assets/images/whatsapp.png" alt="Whatsapp Logo" />
                </div>
                <div className="self-stretch h-[31px] flex-col justify-center items-center gap-1 flex">
                    <div className="self-stretch text-center text-neutral-100 text-2xl font-bold leading-[31.20px]">WhatsApp
                        Official</div>
                </div>
                <div className="self-stretch h-[0.50px] bg-neutral-400 rounded-sm"></div>
                <div
                    className="flex items-center self-stretch justify-center text-xl font-normal leading-relaxed text-center transition-all duration-300 grow shrink basis-0 text-neutral-100 font-roboto group-hover:text-primary-200 group-hover:underline">
                    089525306216</div>
            </a>
        </section>
    </div>
  )
}

export default ContactPerson