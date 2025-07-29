import Image from "next/image";
import silverIcon from "@/@/assets/platinum.png"; // update with actual path
import goldIcon from "@/@/assets/golden.png";
import platinumIcon from "@/@/assets/platinum.png";

const plans = [
  {
    title: "Silver",
    description:
      "Basic membership with access to standard events and newsletters.",
    image: silverIcon,
    gradient: "bg-gradient-to-br from-[#C0C0C0] to-[#dcdcdc]",
    border: "border border-[#bfbfbf]",
    shadow: "shadow-[0_4px_20px_rgba(192,192,192,0.4)]",
    textColor: "text-gray-800",
  },
  {
    title: "Gold",
    description:
      "Exclusive access to premium events, VIP content, and networking.",
    image: goldIcon,
    gradient: "bg-gradient-to-br from-[#FFD700] to-[#FFA500]",
    border: "border border-[#e6be8a]",
    shadow: "shadow-[0_4px_25px_rgba(255,215,0,0.6)]",
    textColor: "text-yellow-900",
  },
  {
    title: "Platinum",
    description:
      "All-inclusive access with priority support, premium badges, and elite rewards.",
    image: platinumIcon,
    gradient: "bg-gradient-to-br from-[#e5e4e2] to-[#bcc6cc]",
    border: "border border-[#a9a9a9]",
    shadow: "shadow-[0_4px_30px_rgba(220,220,220,0.6)]",
    textColor: "text-gray-700",
  },
];

const MembershipPlans = () => {
  return (
    <section className="py-20 bg-[#F7F8FC] px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#BE3632] uppercase">
          Buy Corporate Membership at
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose the plan that suits you best and unlock access to exclusive benefits.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 ${plan.gradient} ${plan.border} ${plan.shadow} transition hover:scale-105`}
          >
            <div className="flex justify-center mb-4">
              <Image
                src={plan.image}
                alt={`${plan.title} Icon`}
                className="w-26 h-16 object-contain"
              />
            </div>
            <h3 className={`text-2xl font-semibold text-center ${plan.textColor}`}>
              {plan.title}
            </h3>
            <p className="mt-4 text-center text-sm text-gray-700">
              {plan.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipPlans;
