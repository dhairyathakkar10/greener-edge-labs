export const Testimonials = () => {
  return (
    <section id="testimonials" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div class="relative max-w-3xl mx-auto">
          <div id="testimonial-slider" class="overflow-hidden">
            <div id="testimonial-container" class="flex transition-transform duration-500 ease-in-out">
              <div class="testimonial-item flex-shrink-0 w-full text-center px-8">
                <p class="text-xl italic text-[#36454F]/80">"Infinity transformed our office with zero environmental impact. The finish is stunning and the story behind it is even better."</p>
                <p class="mt-4 font-bold">- Sarah L., Architect</p>
              </div>
              <div class="testimonial-item flex-shrink-0 w-full text-center px-8">
                <p class="text-xl italic text-[#36454F]/80">"Choosing Infinity was a no-brainer. It cost less than traditional terrazzo and helped us achieve our LEED certification goals."</p>
                <p class="mt-4 font-bold">- Mark Chen, Developer</p>
              </div>
              <div class="testimonial-item flex-shrink-0 w-full text-center px-8">
                <p class="text-xl italic text-[#36454F]/80">"The custom color and aggregate options allowed us to create a truly unique and branded space for our retail flagship."</p>
                <p class="mt-4 font-bold">- Emily Rodriguez, Interior Designer</p>
              </div>
            </div>
          </div>
          <button id="prev-testimonial" class="absolute top-1/2 left-0 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-[#E2725B] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button id="next-testimonial" class="absolute top-1/2 right-0 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-[#E2725B] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
