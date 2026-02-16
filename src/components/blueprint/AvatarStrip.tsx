import raynerImg from "@/assets/clients/rayner-teo.jpeg";
import houstonImg from "@/assets/clients/houston-golden.jpeg";
import trevinImg from "@/assets/clients/trevin-peterson.jpeg";
import andrewImg from "@/assets/clients/andrew-rickli.jpeg";
import marisaImg from "@/assets/clients/marisa-peer.jpeg";

const avatars = [raynerImg, houstonImg, trevinImg, andrewImg, marisaImg];

interface AvatarStripProps {
  size?: "sm" | "md";
}

const AvatarStrip = ({ size = "sm" }: AvatarStripProps) => {
  const sizeClass = size === "md" ? "w-8 h-8" : "w-7 h-7";
  return (
    <div className="flex -space-x-2">
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Creator"
          className={`${sizeClass} rounded-full object-cover border-2 border-background`}
        />
      ))}
    </div>
  );
};

export default AvatarStrip;
