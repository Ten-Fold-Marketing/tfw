import benjaminGergely from "@/assets/team/benjamin-gergely.webp";
import kristoferIonescu from "@/assets/team/kristofer-ionescu.webp";
import kwakuNornoo from "@/assets/team/kwaku-nornoo.webp";
import marielPantig from "@/assets/team/mariel-pantig.webp";
import santhoshKumar from "@/assets/team/santhosh-kumar.webp";
import stanWay from "@/assets/team/stan-way.webp";
import stephenPilaza from "@/assets/team/stephen-pilaza.webp";
import marcCleroux from "@/assets/team/marc-cleroux.webp";
import { motion } from "framer-motion";

const team = [
  { name: "Marc Cleroux", role: "CEO", image: marcCleroux },
  { name: "Benjamin Gergely", role: "Head Of Strategy", image: benjaminGergely },
  { name: "Kwaku Nornoo", role: "Paid Customer Acquisition Specialist", image: kwakuNornoo },
  { name: "Santhosh Kumar", role: "CTO", image: santhoshKumar },
  { name: "Stan Way", role: "Client Success Manager", image: stanWay },
  { name: "Mariel Pantig", role: "Executive", image: marielPantig },
  { name: "Kristofer Ionescu", role: "Cinematic Content Creator", image: kristoferIonescu },
  { name: "Stephen Pilaza", role: "Sales Development Representative", image: stephenPilaza }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-card relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <span className="section-label">Our Team</span>
          <span className="section-label">05</span>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Meet The <span className="italic">Team</span>
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-border group-hover:border-foreground/30 transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display text-lg text-foreground mb-1">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;