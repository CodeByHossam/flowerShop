import React from "react";

const ContactCTA = () => {
  return (
    <section id="contact" className="w-full max-w-maxAppWidth scroll-m-15 md:scroll-m-20 bg-rose-50 py-10 text-black sm:py-16">
      <div className=" mx-auto px-4 sm:px-10">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="font-parisienne text-3xl sm:text-4xl">
            Let's Talk Flowers
          </h2>
          <p className="font-inter mx-auto mt-4 max-w-xl text-base sm:text-lg">
            Custom orders, event arrangements, or just saying hello — drop us a
            line!
          </p>
        </div>

        {/* Content: Contact Info + Map */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2  ">
          {/* Contact Info */}
          <div className="font-inter space-y-6 text-base">
            <div>
              <h4 className="font-semibold text-black ">📍 Address</h4>
              <p className="text-black/80">
                123 Bloom Street, Flower City, FL 45678
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black">📞 Phone</h4>
              <p className="text-black/80">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold text-black">📧 Email</h4>
              <p className="text-black/80">contact@flowershop.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-black">⏰ Working Hours</h4>
              <p className="text-black/80">Mon–Sat: 9:00am – 7:00pm</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[300px] overflow-hidden rounded-lg shadow-md sm:h-[400px]">
            <iframe
              title="Flower Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.877190634259!2d-73.99165532419572!3d40.721625271393826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25984ddc1f305%3A0x60f5638596843409!2sThe%20Flower%20Shop!5e0!3m2!1sen!2sus!4v1685096311084!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
