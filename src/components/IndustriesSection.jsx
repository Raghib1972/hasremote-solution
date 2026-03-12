// const industries = [
//   { icon: '🛒', label: 'Retail, Ecommerce' },
//   { icon: '🎓', label: 'Education & e-learning' },
//   { icon: '🏥', label: 'Healthcare & Fitness' },
//   { icon: '🚚', label: 'Logistics & Distribution' },
//   { icon: '📱', label: 'Social Networking' },
//   { icon: '🏠', label: 'Real Estate' },
//   { icon: '✈️', label: 'Travel & Hospitality' },
//   { icon: '🍕', label: 'Food & Restaurant' },
//   { icon: '💡', label: 'On-Demand Solutions' },
//   { icon: '🎮', label: 'Gaming' },
// ]

// export default function IndustriesSection() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Industries</p>
//           <h2 className="section-title">Industries We Serve</h2>
//           <p className="section-subtitle">
//             Don't just take our word for it — see the real results for yourself
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {industries.map((industry, i) => (
//             <div
//               key={industry.label}
//               className="scroll-reveal bg-gray-50 hover:bg-primary rounded-xl p-5 text-center group cursor-pointer transition-all duration-300 border border-gray-100 hover:border-accent hover:shadow-lg"
//               style={{ transitionDelay: `${i * 50}ms` }}
//             >
//               <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                 {industry.icon}
//               </div>
//               <p className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">
//                 {industry.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }









import ecommerce from "../assets/images/industries/ecommerce.png";
import education from "../assets/images/industries/education.png";
import food from "../assets/images/industries/food.png";
import gaming from "../assets/images/industries/gaming.png";
import healthcare from "../assets/images/industries/healthcare.png";
import logistics from "../assets/images/industries/logistics.png";
import realestate from "../assets/images/industries/realestate.png";
import retail from "../assets/images/industries/retail.png";
import social from "../assets/images/industries/social.png";
import travel from "../assets/images/industries/travel.png";

const industries = [
  { icon: retail, label: "Retail, Ecommerce" },
  { icon: education, label: "Education & e-learning" },
  { icon: healthcare, label: "Healthcare & Fitness" },
  { icon: logistics, label: "Logistics & Distribution" },
  { icon: social, label: "Social Networking" },
  { icon: realestate, label: "Real Estate" },
  { icon: travel, label: "Travel & Hospitality" },
  { icon: food, label: "Food & Restaurant" },
  { icon: ecommerce, label: "On-Demand Solutions" },
  { icon: gaming, label: "Gaming" },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Industries
          </p>

          <h2 className="section-title">
            Industries We Serve
          </h2>

          <p className="section-subtitle">
            Don't just take our word for it — see the real results for yourself
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {industries.map((industry, i) => (
            <div
              key={industry.label}
              className="scroll-reveal bg-gray-50 hover:bg-primary rounded-xl p-5 text-center group cursor-pointer transition-all duration-300 border border-gray-100 hover:border-accent hover:shadow-lg"
              style={{ transitionDelay: `${i * 50}ms` }}
            >

              <div className="flex justify-center mb-3">
                <img
                  src={industry.icon}
                  alt={industry.label}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <p className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">
                {industry.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}