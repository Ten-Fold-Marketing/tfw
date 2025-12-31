import benjaminGergely from "@/assets/team/benjamin-gergely.webp";
import kristoferIonescu from "@/assets/team/kristofer-ionescu.webp";
import kwakuNornoo from "@/assets/team/kwaku-nornoo.webp";
import marielPantig from "@/assets/team/mariel-pantig.webp";
import santhoshKumar from "@/assets/team/santhosh-kumar.webp";
import stanWay from "@/assets/team/stan-way.webp";
import stephenPilaza from "@/assets/team/stephen-pilaza.webp";
import marcCleroux from "@/assets/team/marc-cleroux.webp";

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
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Meet The <span className="text-gradient">Team</span>
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
